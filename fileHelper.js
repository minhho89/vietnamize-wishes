import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

export function readDataFile(filename) {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const data = fs.readFileSync(path.join(__dirname, filename), 'utf-8');
    return data;
}