Currency Converter
This is a simple Currency Converter web application that allows users to convert one currency to another. The application fetches live currency rates using a free API and displays the conversion result. It also features flag icons that update dynamically based on the selected currencies.

Key Features:
Currency Conversion:

The user can select the source and target currencies from a dropdown list.
The conversion is done by fetching the real-time currency exchange rate using an API.
Dynamic Flag Change:

The flags of the selected currencies automatically update as soon as a user selects a currency from the dropdown.
The flags are displayed next to the respective dropdown lists to visually represent the selected countries.
Responsive Design:

The application is fully responsive, meaning it adjusts its layout according to the screen size (mobile, tablet, desktop).
The design ensures a good user experience across all device types.
Input Validation:

The user is prompted to enter a valid amount for conversion. If the input is empty or less than 1, an alert is shown, and the input is reset.
How It Works:
Currency Selection:

The user selects a source currency from the "From" dropdown and a target currency from the "To" dropdown.
As soon as a currency is selected, the corresponding flag is displayed next to the dropdown.
Amount Input:

The user enters the amount they wish to convert in the input box. If the input is invalid (empty or less than 1), the application alerts the user and resets the value to 1.
Conversion:

The user clicks the "Convert" button to calculate the converted amount based on the selected currencies and the entered amount.
The conversion rate is fetched from the API, and the result is displayed in the output section.
Real-time Data:

The exchange rates are fetched dynamically using a public currency API. The application uses the fetch API to get the real-time exchange rates and performs the conversion.
How to Run the Project Locally:
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/currency-converter.git
Navigate to the project directory:

bash
Copy
Edit
cd currency-converter
Open the index.html file in your browser to see the application in action.

Technologies Used:
HTML: For structuring the content.
CSS: For styling the layout and making it responsive.
JavaScript: For handling dynamic features such as currency selection, flag changes, and conversion logic.
API: A public API is used to fetch real-time currency exchange rates.
Screenshot:

Contributing:
Fork the repository.
Create your feature branch (git checkout -b feature-name).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-name).
Create a new Pull Request.
License:
This project is licensed under the MIT License - see the LICENSE file for details.
