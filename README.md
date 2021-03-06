# quartet

Coding exercise prepared for Quartet Health.

##Getting Started

Install [node](https://nodejs.org/) if you don't already have it

```
npm install
npm start
```

This application is hosted on port 8000

##The Project

We'd like to see your implementation of a react app that fulfills the users stories below. We're primarily interested in your code fluency and quality of your patterns, and much less so on your design skills, but demonstrating a sense of design is a plus. Feel free to use whatever libraries you want, and don't worry about user login/authentication or any backend store. Please push your code to a github repo or reply with a tarball; make sure to include a README with instructions on how to build / deploy locally and how you approached this exercise. Comments in your source code are also encouraged.

##Stories

1) As a patient I want to take the PHQ-9 depression screener through my phone (mobile-friendly site) and get the assessment score and what that means.

Implementation Notes - You can find the 9 questions and the scoring legend here: http://patient.info/doctor/patient-health-questionnaire-phq-9  *Note that the answer choices correspond to numeric values:
```
0: Not at all
1: Several days
2: More than half the days in the week
3: Nearly every day
```

2) As a patient, if I score moderate depression or higher, I want to be presented with three options for therapists that I can select from.

##Philosophy

This app is built using Gulp, Browserify, and React. Only require dependencies where necessary. Strive for clean, modular, and short code. Long files and functions should be abstracted into smaller components. There should be a single render invocation, and therefore a single point of entry. App.js servers as the main entry point to this application.
