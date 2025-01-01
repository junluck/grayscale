# Grayscale - E-commerce Clothing Store

Grayscale is a fully functional e-commerce web application for clothing, built using modern web technologies. The application features a React-based frontend, Redux for state management, and an Express.js backend that integrates with the Stripe API for secure payment processing.

## Features

* Browse Products: View a catalog of clothing items with detailed information.

* Cart Management: Add, remove, and update products in the shopping cart.

* Payment Integration: Seamless payment processing using the Stripe API.

* Responsive Design: Optimized for both desktop and mobile devices.

# Technologies Used

## Frontend

* React: For building the user interface.

* Redux: For managing global state.

* CSS: For styling the application.

## Backend

* Express.js: For handling server-side logic and API routes.

* Stripe API: For secure payment processing.

# Installation and Setup

## Prerequisites

Make sure you have the following installed:

* Node.js

* npm or Yarn

### Steps

Clone the repository:

git clone https://github.com/yourusername/grayscale.git
cd grayscale

Install dependencies for both frontend and backend:

# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install

Set up environment variables:
Create a .env file in the backend directory with the following variables:

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLIC_KEY=your_stripe_public_key

Start the development servers:

# Frontend
cd frontend
npm start

# Backend
cd ../backend
npm start

Open the application in your browser at http://localhost:3000.

Project Structure

Grayscale/
├── frontend/           # React frontend
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Application pages
│   │   ├── redux/      # Redux setup
│   │   ├── App.js     # Main app component
│   ├── public/     # Static files
│   └── package.json
├── backend/            # Express.js backend
│   ├── routes/    # API routes
│   ├── controllers/ # Business logic
│   ├── app.js     # Main server file
│   └── package.json
└── README.md          # Project documentation

API Endpoints

Products

GET /api/products - Retrieve all products

GET /api/products/:id - Retrieve a specific product by ID

Cart

POST /api/cart - Add an item to the cart

DELETE /api/cart/:id - Remove an item from the cart

Payment

POST /api/payment - Process a payment using Stripe

Future Enhancements

Add product reviews and ratings.

Implement advanced search and filtering functionality.

Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

For questions or support, please contact your-email@example.com.