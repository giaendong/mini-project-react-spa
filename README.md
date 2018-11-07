# MINI PROJECT REACT SPA

Mini Project using React and Single SPA Microfrontends Example

## Getting Started

Clone the repository on your local machine. Use latest node and npm.

### Prerequisites

This project use firestore cloud function and already running. Please go to [Mini-Project-Firebase](https://github.com/giaendong/mini-project-firebase)


### Installing

Follow this step to running entire single page application on your machine.

Run Service A
from your root local folder
```
cd servicea
```
```
npm install
```
```
npm run build
```
```
npm run serve
```
now your serviceA app will served on http://localhost:3000

Run Service B
from your root local folder
```
cd serviceb
```
```
npm install
```
```
npm run build
```
```
npm run serve
```
now your serviceB app will served on http://localhost:3001

Run Service C
from your root local folder. This app use [Marvin](https://github.com/workco/marvin) react boilerplate from Workco
```
cd servicec
```
```
npm install
```
```
npm run client:build
```
```
npm run serve
```
now your serviceC app will served on http://localhost:3002

Run MASTER APP
from your root local folder
```
cd master
```
```
npm install
```
```
npm start
```
now your APP will run on http://localhost:8080
Open http://localhost:8080 on the browser to see the App

### Installing
- Styling

## Built With

* [Create-React-App](https://github.com/facebook/create-react-app) - The react framework used
* [Marvin](https://github.com/workco/marvin) - React boilerplate from Workco - serviceC
* [Single-SPA](https://github.com/CanopyTax/single-spa) - Used to build micro frontends

## Authors

* **Gia Endong** - *Initial work* - [GiaEndong](https://github.com/giaendong)

