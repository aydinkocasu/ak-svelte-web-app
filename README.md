# Svelte Authentication Demo

## Description

This project is a simple authentication demo built with Svelte. It demonstrates basic user authentication flows, including sign-up, login, and token validation. The app is designed to showcase Svelte's capabilities in managing state, handling forms, and implementing routing.

## Features

- **Sign-Up:** Users can sign up by providing a Telegram ID and password.
- **Login:** After signing up, users can log in using their credentials.
- **Token Validation:** After logging in, users can validate their authorization token.
- **State Management:** Utilizes Svelte stores to manage user state and authentication status.
- **Routing:** Implements hash-based routing to navigate between pages.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aydinkocasu/ak-svelte-web-app.git
   cd ak-svelte-web-app

2. **Install dependencies::**

   ```bash
    npm install

3. **Run the development server:**

   ```bash
   npm run dev

Open the app in your browser:

Visit http://localhost:5173 to see the app in action.

Usage
Sign Up: Navigate to the sign-up page, enter your Telegram ID and password, and receive an authorization token.
Log In: Use your Telegram ID and password to log in.
Validate Token: Enter your authorization token to validate it and complete the login process
Profile: Navigate to profile page

Project Structure
.
├── index.html
├── LICENSE
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
├── README.md
├── src/
│   ├── app.css
│   ├── App.svelte
│   ├── assets/          # Images and other assets
│   ├── components/      # Svelte components
│   ├── main.ts          # Entry point
│   ├── pages/           # Svelte pages for routing
│   ├── router.ts        # Routing setup
│   ├── stores/          # Svelte stores for state management
│   ├── utils/           # Utility functions
│   └── vite-env.d.ts
├── svelte.config.js      # Svelte configuration
├── tsconfig.json         # TypeScript configuration
├── tsconfig.node.json    # TypeScript configuration for Node.js
└── vite.config.ts        # Vite configuration
