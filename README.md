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
To use the package, import it into your project and call the `getRandomWish` function to generate random wish. Here's an example:

```javascript
const { getRandomWish } = require('@vietnamize/wishes');

const randomWish = getRandomWish();
console.log(randomWish);
```

Call the `generateWish` function with the desired theme. Here's an example:
```javascript
const { generateWish } = require('@vietnamize/wishes');
const newYearWish = generateWish('newYear');
console.log(newYearWish);

// You can also specify the recipient of the wish
const birthdayWish = generateWish('birthday', 'friends');
```

## Themes
- `newYear`: New Year greetings
- `birthday`: Birthday greetings
- `wedding`: Wedding greetings
- `graduation`: Graduation greetings

## Recipient
- `friends`: Greetings for friends
- `higher_status`: Greetings for people of higher status (elder, boss, etc.)
- `subordinates`: Greetings for subordinates (children, employees, etc.)


