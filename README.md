

# apds7311-poe-part-3-FINAL-AaronPadiachy
apds7311-poe-part-3-AaronPadiachy created by GitHub Classroom

# Inter-departmental Bulletin Board Backend API

This repository contains the backend API for the National Government's inter-departmental bulletin board. The API is designed to enable confidential communication and collaboration among different government departments, securely managing posts and user accounts. Bcrypt is used to hash passwords.

## Features

- **MongoDB Database**: Data is stored securely in the cloud-based MongoDB database.
- **SSL Encryption**: All data and API interactions are protected using SSL for enhanced security.
- **Cross-Origin Resource Sharing (CORS)**: Enables seamless communication with different systems.
- **User Management**: Allows the registration of new users and secure login for existing users.
- **Password Security**: Passwords are securely stored and never compared in plain text.
- **Separate Routes**: Distinct routes are implemented for managing posts and users.
- **Token-Based Authentication**: Utilizes JSON Web Tokens (JWT) for authentication.
- **User-Friendly**: Includes user-friendly features and login information persistence.

## Software Requirements

- Node.js (v14 or higher): Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
- MongoDB: Install and set up a MongoDB database in your environment. You can find installation instructions on the [MongoDB website](https://www.mongodb.com/).
- npm (Node Package Manager): This is typically bundled with Node.js, but you can also use yarn as an alternative package manager. You can install it globally using `npm install -g npm` or `npm install -g yarn`.

## Hardware Requirements

- Your system should meet the minimum hardware requirements for running Node.js and MongoDB, including CPU, RAM, and storage capacity.

## Installation

1. Clone this repository to your local machine.
2. Install Node.js and MongoDB if not already installed.
3. Run `npm install` to install the project dependencies.
4. Configure MongoDB and SSL settings as needed in your environment.

## Usage

1. Start the API using `npm start`.
2. Access the API at `https://localhost:3000/api`.
3. Start front end using `ng serve --open`

##Video link
[Click here to watch the video demo of the project](https://drive.google.com/drive/folders/1UiglojFROkDv3qAXPgvm6Q5lwTKR1VfB?usp=sharing)


## API Endpoints

- **GET /api/posts**: Retrieve a list of posts.
- **POST /api/posts**: Create a new post.
- **DELETE /api/posts/:id**: Delete a post by ID.
- **POST /api/users/signup**: Register a new user.

# Frontend Information

The accompanying frontend for this project incorporates various essential features to ensure secure and user-friendly interactions. These include:

1. **Secure Backend Communication:** The frontend utilizes services to communicate securely with the backend API.
2. **Input Field Validation:** Robust input field validation is implemented to ensure data integrity and prevent malicious inputs.
3. **Password Obscuring and Sanitization:** The frontend ensures that password fields are obscured during input and sanitizes them before transmission to the backend.
4. **Custom Error Message Display:** Custom components are employed to display detailed error messages for a better user experience.
5. **Persistent Login Information:** Login information is securely persisted after successful authentication to provide a seamless and convenient user experience.

## Security Package Implementations

The following security packages are implemented to enhance the security of the project:

- **express-brute:** Implemented for rate limiting to prevent abuse and protect against certain types of attacks.
- **helmet:** Used to enhance security by setting various HTTP headers.
- **morgan:** Employed for request logging, allowing for better monitoring and debugging.

### To sign up a new user, make a POST request to the following endpoint:

**Endpoint**: `https://localhost:3000/api/users/signup`

**Request Example**:

```http
POST https://localhost:3000/api/users/signup HTTP/1.1
Content-Type: application/json

{
    "username": "goku",
    "password": "dbz",
    "name": "goku",
    "surname":"son",
    "email": "dbz@apds.com"
}


