# Dobble

This repo includes a simple implementation of the game "Dobble", a card game with symbols on each card. Players need to quickly find the one shared symbol.

## Rules of the game

- each card contains the same number of symbols
- each card contains exactly one symbol it shares with each other card
- each card is unique

## Generator

This will generate sets of cards. Usage:

`yarn generate --symbolsPerCard=<number> --out=<path>`

Example to generate 57 cards with 8 symbols each:

`yarn generate --symbolsPerCard=8 --out=game.json`

This will generate the following structure:

```json
{
  "cards": [
    [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    // ...
  ],
  "cardsTotal": 31,
  "symbolsPerCard": 6,
  "symbolsTotal": 31
}
```