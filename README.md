# Appium-Codeceptjs-Mobile-Tests

This repository contains automated functional end-to-end (E2E) tests for the Farfetch app, an e-commerce platform with a primary focus on luxury fashion products.

 🌐 Access the app through this link 👉 [Farfetch App](https://play.google.com/store/apps/details?id=com.farfetch.farfetchshop&hl=en&gl=US)

<img width="724" height="313" alt="image" src="https://github.com/user-attachments/assets/bae99b82-8a86-47a5-93a5-d92ec13d6f52" style="border-radius: 8px;" />


## 🧭 Overview

In this project, I implement automated functional end-to-end (E2E) tests using Codeceptjs with JavaScript, following BDD practices with the Gherkin language using Cucumber tool, and applying the Page Object Model (POM) design pattern. The goal is to ensure the quality and reliability of the Farfetch Application.

&nbsp;

## 🛠️ Technologies and Tools Used

- JavaScript
- CodeceptJS
- Node.js
- npm
- Appium
- Android Studio
- Cucumber  
- Gherkin  
- BDD (Behavior-Driven Development)  
- Page Object Model (POM)

<div>
 <a href="https://nodejs.org/en/">
  <img align="center" alt="NodeJS" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />
 </a>
 <a href="https://www.npmjs.com/">
  <img align="center" alt="NPM" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
 </a>
 <a href="https://www.javascript.com/">
  <img align="center" alt="Javascript" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
 </a>
 <a href="https://codecept.io/">
  <img align="center" alt="CodeceptJS" height="50" width="60" src="https://www.svgrepo.com/show/330181/codeceptjs.svg" />
 </a>
 <a href="https://cucumber.io/" target="_blank">
  <img align="center" alt="Cucumber" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain-wordmark.svg" />
 </a>
  <a href="http://appium.io/docs/en/2.1/" target="_blank">
  <img align="center" alt="Joi" height="50" width="60" src="https://miro.medium.com/v2/resize:fit:800/1*XP-oUbM-zMZ-t5cwBbGhLg.png" />
 </a>
  <a href="https://developer.android.com/studio" target="_blank">
  <img align="center" alt="Joi" height="50" width="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/800px-Android_Studio_icon_%282023%29.svg.png" />
 </a>
</div>

&nbsp;

## ⚙️ Structure of the Project

This project was designed with a focus on **scalability** and **ease of maintenance** for both existing and future test scenarios.

The tests are written in **Gherkin language** using the **Cucumber** tool, which enables the creation of test scenarios following the **BDD (Behavior Driven Development)** approach. These files can be found in the `features` folder.

<img width="1339" height="573" alt="image" src="https://github.com/user-attachments/assets/dafe548f-4780-4fd7-8405-816e6247b933" />
&nbsp;

The step definitions are written in JavaScript with CodeceptJS, a powerful end-to-end testing framework that simplifies writing tests using a high-level, readable syntax, and are responsible for executing the steps described in each test scenario defined in the `features` folder. All step definition files are organized in the `step_definitions` folder.

<img width="1589" height="642" alt="image" src="https://github.com/user-attachments/assets/1dad440a-5388-4f5b-9bc8-aa1c7c7c3e76" />
&nbsp;

This project follows the **Page Object Model (POM)** pattern, a best practice that improves code organization and maintainability. Inside the `views` folder, you will find variables that containing selectors to identify HTML elements, and functions implemented in **Codeceptjs + JavaScript** to perform the actions needed for the functional tests.

<img width="1579" height="831" alt="image" src="https://github.com/user-attachments/assets/51250763-ee5a-42be-89e0-26c4f11d17b4" />
<img width="1647" height="838" alt="image" src="https://github.com/user-attachments/assets/54f450ec-c36a-4c60-92e0-47c04089716c" />

&nbsp;

## 🧪 Automated Test Scenarios in this project

In this project, I have automated three test scenarios taken from the list above:

- ### **1. Change to an available language**  
  Tests changing to an available language such as "Spanish", "Russian", "Chinese", among others, verifying that the application changed to the correct language.

  <img width="531" height="319" alt="image" src="https://github.com/user-attachments/assets/19666369-910e-4d1d-a522-bbad7644f06e" />

   #### Test Results:
  <img width="997" height="149" alt="image" src="https://github.com/user-attachments/assets/6c8eccd6-8095-4138-bf88-050579797441" />

  &nbsp;

- ### **2. Change to an available region**  
  Tests change to an available region, such as "Brazil", "Canada", "Japan", among others, verifying that the application changed to the correct region.

  <img width="562" height="337" alt="image" src="https://github.com/user-attachments/assets/9f2656eb-f7f7-4fc2-8669-6005c97dc3e0" />

  #### Test Results:
  <img width="644" height="167" alt="image" src="https://github.com/user-attachments/assets/d6495686-c3e0-4a03-868c-d64a6f1c846b" />

  &nbsp;

- ### **3. Search product by brand name**  
  Tests searching by various brands, including "Gucci" and "Nike", validating the correct display of products from those brands.

  <img width="511" height="225" alt="image" src="https://github.com/user-attachments/assets/21e4f993-0b4b-4417-aadd-7319314fd3b4" />

  #### Test Results:
  <img width="568" height="71" alt="image" src="https://github.com/user-attachments/assets/2626ddfc-8abc-437d-b3a0-ce3f4bb13223" />

  &nbsp;

  
  | 🧪✅ — `All tests passed successfully` 🧪✅ | ![Tests](https://img.shields.io/badge/tests-15%20passed-brightgreen?style=flat-square) |
  |-------------------------------------------|------------------------------------------------------------------------------------------|
   
   &nbsp;

## 🔬 Running Tests Locally

To run the tests locally, please follow the steps below:

### Prerequisites
1. Download the following tools (make sure you get an updated version):
 
 * [Node](https://nodejs.org/en/) 
 * [Git](https://git-scm.com/)
 * [Appium](https://github.com/appium/appium-desktop)
 * [Android Studio](https://developer.android.com/studio)
 <br/>

### Appium Server Settings

2. Open Appium and enter the following setting:
 - Remote Host : 127.0.0.1
 - Remote Port : 4723

![image](https://github.com/henriquekoaski/Farfecth-Mobile-Automated-Tests/assets/135274801/ba80b243-6e41-459b-b70e-5a4e37b27594)

<br/>

### Android Studio

3. Create a device and open it:

- Create a device following: Tools -> Device Manager -> Create Device
<img width="1739" height="753" alt="image" src="https://github.com/user-attachments/assets/b95d8312-3011-408f-af17-a26f3e43cee3" />
&nbsp;

- Open the emulator device
<img width="1743" height="763" alt="image" src="https://github.com/user-attachments/assets/ddd23dc8-9ed5-4f19-9575-e4e49a1a7607" />
&nbsp;

### Code Editor

Inside your code editor, open the terminal and run the following commands:

4. Clone this GitHub repository:

 ```
 git clone https://github.com/henriquekoaski/appium-codeceptjs-mobile-tests.git
 ```
<br/>

5. Navigate to the project directory:

 ```
cd appium-codeceptjs-mobile-tests
 ```
<br/>

6. Install the dependencies:

 ```
npm install
 ```

### APK File

7. Download the APK file through this [Link](https://www.apkmirror.com/apk/farfetch-uk-limited/farfetch-designer-shopping/farfetch-designer-shopping-5-32-0-release/)
* For the tests carried out in this repository, version 5.32.0 was used
<br/>

8. "In the 'codeceptj.conf.js' file, into the 'Appium > app' section, update the file path to specify the directory where your APK file is stored on your local machine."

<img width="1408" height="596" alt="image" src="https://github.com/user-attachments/assets/95a49e50-dccb-4cda-b091-9553318921ce" />
<br/>


## 🚀 Running

 To run automated tests on your computer, make sure all of the following tools are open:
- Appium Server GUI (Appium Desktop)
- Android Studio (Emulator)
<br/>

After configuring the settings, execute the tests using the following command: 

 ```
 npm test
 ```
&nbsp;

##  📝 Tests Results

<img width="1394" height="913" alt="image" src="https://github.com/user-attachments/assets/87645d02-d060-4e39-8383-c5f8f947e42a" />

