import { readDataFile } from './fileHelper.js';

export function getRandomWish() {
    const data = readDataFile('wishes.json');

    const wishes = JSON.parse(data).wishes;
    const randomIndex = Math.floor(Math.random() * wishes.length);

    const randomWish = wishes[randomIndex];

    // Return the random wish
    return { wish: randomWish };
}

export function getWishById(id) {
    const data = readDataFile('wishes.json');

    const wishes = JSON.parse(data).wishes;
    const wish = wishes.find(w => w.id === id);

    // Return the wish with the given ID
    return wish;
}