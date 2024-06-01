# vietnamize-wishes
 Node.js module that generates random Vietnamese greetings (lời chúc) based on different themes such as New Year, birthdays, and more. This package is designed to help developers integrate authentic Vietnamese greetings into their applications easily.

## Features
Generate random Vietnamese greetings for various occasions.
Themes include New Year, birthdays, and more.
Easy to integrate and use in any Node.js project.

## Installation
To install the package, run the following command in your project directory:

```bash
npm install @vietnamize/wishes
```

## Usage
To use the package, import it into your project and call the `randomWish` function with the desired theme. Here's an example:

```javascript
const { getRandomWish } = require('@vietnamize/wishes');

const randomWish = getRandomWish();
console.log(randomWish);
```
