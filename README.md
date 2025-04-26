# Project Setup and Running Instructions

This document outlines the steps to set up and run this project, which includes a backend and a frontend, both located in a GitHub repository.

## Prerequisites

Ensure you have the following installed:

* **Git:** To clone the repository (`https://git-scm.com/downloads`).
* **Node.js and npm** (or Yarn): For the JavaScript-based backend and frontend (`https://nodejs.org/`).

## Setup Instructions

1.  **Clone the Repository:**

    Open your terminal and navigate to your desired location:

    ```bash
    git clone https://github.com/Manthan03583/Feedback.git
    cd Feedback
    ```

2.  **Set Up and Run the Backend:**

    * Navigate to the backend directory:

        ```bash
        cd feedback_backend
        ```

    * Install dependencies:

        ```bash
        npm install or yarn install
        ```

    * Configure (if needed):

        * Create a `.env` file from `.env.example` (if present):

            ```bash
            cp .env.example .env or copy .env.example .env on Windows
            ```

        * Edit `.env` with `DB_URI = <mongoDB_url>`. 
            
            **Provied my mongoDB url with email** 

    * Start the server:

        ```bash
        npm run start or yarn start
        ```

        Check `feedback_backend/package.json` for the correct script. Note the server address (e.g., `http://localhost:5000`).

3.  **Set Up and Run the Frontend:**

    * Navigate to the frontend directory:

        ```bash
        cd feedback_frontend
        ```

    * Install dependencies:

        ```bash
        npm install or yarn install
        ```

    * Start the application:

        ```bash
        npm run start or yarn start, npm run dev, yarn run
        ```

        Check `feedback_frontend/package.json` for the correct script.

4.  **Access the Application:**

    Open your browser to the frontend's address (e.g., `http://localhost:3000`).

## Important Notes

* **Refer to Specific Documentation:** Check for any `README` files within `feedback_backend` and `feedback_frontend` for detailed instructions.
* **Resolve Dependency Conflicts:** If you encounter errors, delete `node_modules` and the lockfiles (`package-lock.json`, `yarn.lock`) in both directories, and reinstall.
* **Avoid Port Conflicts:** Ensure backend and frontend use different ports. Adjust configuration files if necessary.
