import { readDataFile } from './fileHelper.js';

export function getRandomWish() {
    const data = readDataFile('wishes.json');

    const wishes = JSON.parse(data).wishes;
    const randomIndex = Math.floor(Math.random() * wishes.length);

    const randomWish = wishes[randomIndex];

    // Return the random wish
    return { wish: randomWish };
}
