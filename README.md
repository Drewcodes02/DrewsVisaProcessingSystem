# Drews-VisaProcessingSystem

## Project Overview

This repository contains the proof of concept (PoC) for 'Drews-visaprocessingsystem', a visa processing platform developed for Advanced Foreign Services (AFS). The system allows users to handle different types of visa applications across various countries and includes features such as visa suggestions, eligibility checks, document uploads, and application tracking.

### Key User Roles

- Applicants: Create profiles, submit visa applications, and upload supporting documents.
- Branch Office Personnel: Access visa applications submitted online.
- Administrators: Update visa rules and manage the system configuration.
- Visa Issuing Authorities: Review and process visa applications.
- Accessibility Reviewers: Ensure the application conforms to accessibility standards (WCAG).

## Features

- Visa Type Suggestions based on user inputs
- Eligibility and Document Checklist
- Online Visa Application Submissions
- Real-Time Visa Rules Updates Indication
- Multi-Lingual Interface Indication
- Secure Document Upload and Storage

## Technologies Used

- Backend: Node.js, Express, MongoDB, Mongoose, Passport, JWT
- Frontend: React, Redux, Bootstrap, HTML, CSS3, axios
- Internationalization: i18next
- File Handling: multer, sharp
- Scheduling: cron
- Accessibility: WCAG 2.1
- Payment Integration: Stripe.js (future scope)

## Installation and Setup

1. Ensure you have Node.js and MongoDB installed on your system.
2. Clone the repository to your local machine.
3. Install the dependencies in both the root directory and the client directory using `npm install`.
4. Set up the environment variables by copying the `.env.example` file to a new `.env` file and filling in the necessary values.
5. To run the server, execute `npm start` in the root directory.
6. To run the client, navigate to the client directory and execute `npm start`.

## Documentation

Detailed documentation for all endpoints and components can be found in the `docs` directory. This includes API references, data models, and user guides.

## Contributing

If you wish to contribute to the project, please review the contributing guidelines and adhere to our code of conduct. We welcome contributions in the form of bug fixes, feature additions, and documentation improvements.

## License

This project is licensed under the terms of the ISC license.