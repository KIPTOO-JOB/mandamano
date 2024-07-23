# Citizen App

This project is a simple web application that fetches and displays citizens' data from a backend server. Users can also add new citizens through a form and delete existing citizens.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Files](#files)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/KIPTOO-JOB/mandamano
   ```

2. Navigate to the project directory:

   ```sh
   cd maandamano
   ```

3. Ensure you have a backend server running on `http://localhost:3000` that handles the citizens' data.

## Usage

1. Open `index.html` in your web browser.
2. The app will fetch and display the list of citizens from the backend server.
3. Use the form to add new citizens.
4. Click the "Found" button to delete a citizen.

## Files

- `index.html`: The main HTML file that includes the structure of the web application.
- `styles.css`: The CSS file that contains the styling for the web application.
- `script.js`: The JavaScript file that contains the functionality for fetching, displaying, adding, and deleting citizens.

## API

The app interacts with a backend server through the following endpoints:

- `GET /citizens`: Fetches a list of all citizens.
- `POST /citizens`: Adds a new citizen.
- `DELETE /citizens/:id`: Deletes a citizen by ID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Features To be added

- [ ] Adding a form for rogue Police officers
- [ ] Adding a place to post Pictures of police oficers that are kidnapping pepole
- [ ] Adding a place to post Pictures of police oficers that are kidnapping pepole
