import yargs from 'yargs';
import path from 'path';
import fs from 'fs';
import {isPrime, generateCards, totalAmountOfCards} from './generateCards';

const {symbolsPerCard, out} = yargs.option({
    symbolsPerCard: {alias: 'n', type: 'number', default: 8, description: 'The number of symbols per card.'},
    out: {alias: 'o', type: 'string', default: './output.json', description: 'A file path to store the generated card sets into.'}
}).argv;

console.log('Generating cards...');
const cards = generateCards(symbolsPerCard);
console.log(`Generated ${cards.length} cards`);

const outDir = path.resolve(out);
console.log(`Storing cards in ${outDir}`);
fs.writeFileSync(outDir, JSON.stringify({
    cards,
    cardsTotal: cards.length,
    symbolsPerCard,
    symbolsTotal: totalAmountOfCards(symbolsPerCard)
}, null, 2));