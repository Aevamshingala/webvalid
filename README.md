# webvalid


This repository contains a collection of useful JavaScript utility functions for everyday tasks such as validating emails, generating random IDs, checking file types, and more. These functions are designed to be lightweight and easy to integrate into your projects.

## Usage
```js
import valid from "webvalid";
 //import valid from "webvalid";
 //valid.<functionName>(<arguments>);
```
## Installation

To use the utility functions from the `webvalid` library, you first need to install the package using npm. Run the following command in your project directory:

```bash
npm install webvalid
```

## Functions Included

### 1. **validEmail(email)**
```js
import valid from "webvalid";
  valid.validEmail("aeas@gmail.com") // give true
```
### 2. **validFullName(full name)**
```js
import valid from "webvalid";
  valid.validFullName("John Doe");  // Returns true if the name is valid
```
### 3. **fileType(event)**
```js
import valid from "webvalid";
valid.fileType(event);  // Returns the file extension of the uploaded file (e.g., "jpg")
```
### 4. **isImage(event)**
```js
import valid from "webvalid";
valid.isImage(event);  // Returns true if the uploaded file is an image
```
### 5. **fileSize(event,size)**
```js
import valid from "webvalid";
valid.fileSize(event, "mb");  // Returns the size of the file in MB
```
### 6. **dataId(length)**
```js
import valid from "webvalid";
valid.dataId(10);  // Generates a random ID with 10 characters
```
### 7. **dummyEmail()**
```js
import valid from "webvalid";
valid.dummyEmail();  // Generates a random dummy email address
```
### 8. **randomColour()**
```js
import valid from "webvalid";
valid.randomColour();  // Generates a random hex color code (e.g., "#A3D9F1")
```
### 9. **isFile(event,type)**
```js
import valid from "webvalid";
valid.isFile(event, "png");  // Returns true if the uploaded file is a PNG
```
### 10. **otp(length)**
```js
import valid from "webvalid";
valid.otp(8);  // Generates an OTP with 8 digits
```