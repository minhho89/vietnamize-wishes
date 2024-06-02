const fs = require('fs');
const path = require('path');

function readDataFile(filename) {
    const data = fs.readFileSync(path.join(__dirname, filename), 'utf-8');
    return data;
}

module.exports = { readDataFile };