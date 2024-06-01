import { readDataFile } from './fileHelper.js';

export function getRandomWish() {
    const data = readDataFile('wishes.json');

    const wishes = JSON.parse(data).wishes;
    const randomIndex = Math.floor(Math.random() * wishes.length);

    const randomWish = wishes[randomIndex];

    // Return the random wish
    return randomWish;
}

export function getWishById(id) {
    const data = readDataFile('wishes.json');

    const wishes = JSON.parse(data).wishes;
    const wish = wishes.find(w => w.id === id);

    // Return the wish with the given ID
    return wish;
}

export function generateWish(theme, recipient) {
    const data = readDataFile('wishes.json');

    const wishes = JSON.parse(data).wishes;
    let filteredWishes = wishes.filter(w => w.theme === theme);

    if (recipient) {
        const recipientWishes = filteredWishes.filter(w => w.recipient === recipient);

        if (recipientWishes.length > 0) {
            filteredWishes = recipientWishes;
        }
    
    }

    const randomIndex = Math.floor(Math.random() * filteredWishes.length);

    const randomWish = filteredWishes[randomIndex];

    // Return the random wish with the given theme
    return randomWish;
}