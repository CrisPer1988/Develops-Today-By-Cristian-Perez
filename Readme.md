# Country Info App

This project is a Full-Stack application that provides detailed information about countries. The application consists of a Backend developed in Node.js and a Frontend in React (Next.js)

## Table of Contents

1. [Project Description](#project-description)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Environment variables](#environment-variables)

## Project Description

The application allows you to list available countries, show detailed information about a country, its bordering countries and a graph with historical population data. Data is obtained from external APIs:

- **Date Nager API** to get the list of countries and border countries.

- **Countries Now API** to get historical population data and the flag URL.

## Technologies Used

### Backend

- Node.js
- Express.js
- Axios
- Nodemon (para desarrollo)
- Cors
- Dotenv

### Frontend

- React.js
- Next.js
- Recharts
- Tailwind CSS

## Installation

Clone the repository and install the dependencies for the Backend and Frontend:

bash
git clone https://github.com/tu-usuario/country-info-app.git
cd country-info-app

# Install Backend dependencies

cd back
npm install

## Run Project

npm run start

# Install Frontend dependencies

cd ../front
npm install

## Run Project

npm run dev

## Environment variables

# Backend

URL_ALL_COUNTRIES=https://date.nager.at/api/v3/AvailableCountries
URL_ONE_COUNTRY=https://date.nager.at/api/v3/CountryInfo
URL_POPULATION=https://countriesnow.space/api/v0.1/countries/population
URL_FLAG=https://countriesnow.space/api/v0.1/countries/flag/images
PORT=3001

# Frontend

NEXT_PUBLIC_BACKEND_URL=http://localhost:3000/api/v1
