document.addEventListener("DOMContentLoaded", () => {
    const Base_URL = "https://latest.currency-api.pages.dev/v1/currencies";
    let dropdown = document.querySelectorAll("select");
    let btn = document.querySelector("button");
    let fromCurr = document.getElementById("fromCurr");
    let toCurr = document.getElementById("toCurr");

    for (let select of dropdown) {
        for (let code in countryList) {
            let newOpt = document.createElement("option");
            newOpt.innerText = code;
            newOpt.value = code;
            select.append(newOpt);
        }
        select.addEventListener("change", (event) => {
            currFlag(event.target);
        });
    }

    const currFlag = (element) => {  //event.target is acessed by element//
        let currCode = element.value;
        let countryCode = countryList[currCode];
        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
        let img;
        if (element.id === "fromCurr") {
            img = document.querySelector(".fromImg");
        } else if (element.id === "toCurr") {
            img = document.querySelector(".toImg");
        }
        if (img) {
            img.src = newSrc;
        }
    };
    btn.addEventListener("click", async (evt) => {
        evt.preventDefault();
        let amount = document.querySelector("input");
        let amtVal = amount.value.trim();

        if (amtVal === "") {
            alert("Amount should not be empty");
        } else if (amtVal < 1) {
            amount.value = "1";
            alert("Please enter a valid amount");
        }

        if (fromCurr.value && toCurr.value) {
            const fromCurrency = fromCurr.value.toLowerCase();
            const toCurrency = toCurr.value.toLowerCase();
            const response = await fetch(`${Base_URL}/${fromCurrency}.json`);
            const json = await response.json();
            const rate = json[fromCurrency][toCurrency];  //basically JSon is acting like an object where object is fromcurrenct and inside that there are many conversion currency object termed as tocurrency //

            if (rate) {
                const convertedAmt = (amtVal * rate).toFixed(2);
                document.querySelector(".output .outText").innerText = `The Amount After Conversion Is: ${convertedAmt} ${toCurrency.toUpperCase()}`;
            } else {
                alert("Conversion rate not found.");
            }
        } else {
            alert("Please select both currencies.");
        }
    });
});
