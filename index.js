import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

export function getRandomWish() {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const data = fs.readFileSync(path.join(__dirname,'wishes.json'), 'utf-8');

    const wishes = JSON.parse(data).wishes;
    const randomIndex = Math.floor(Math.random() * wishes.length);

    const randomWish = wishes[randomIndex];

    // Return the random wish
    return { wish: randomWish };
}
