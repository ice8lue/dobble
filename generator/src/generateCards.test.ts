import {generateCards} from './generateCards';

describe.each([2, 3, 5, 7, 11, 13 /*, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 */])('generate %s + 1 cards', (N: number) => {
    let cards: number[][] = [];

    beforeEach(() => {
        cards = generateCards(N + 1);
    });

    afterEach(() => {
        cards = []
    });

    it('should generate the right amount of cards', () => {
        expect(cards).toBeInstanceOf(Array);
        expect(cards.length).toBe(N * N + N + 1);
    });
    
    it('should create unique cards only', () => {
        for (let i = 0; i < cards.length; i++) {
            for (let j = 0; j < cards.length; j++) {
                if (i !== j) {
                    expect(cards[i].sort()).not.toEqual(cards[j].sort())
                }
            }
        }
    })

    it('each card should share exactly one symbol with each other', () => {
        for (let i = 0; i < cards.length; i++) {
            for (let j = 0; j < cards.length; j++) {
                if (i !== j) {
                    const sharedSymbols = cards[i].filter(n => cards[j].includes(n));

                    if (sharedSymbols.length > 1) {
                        console.log(sharedSymbols, ' #### ', cards[i].join(' '), ' #### ', cards[j].join(' '))
                    }


                    expect(sharedSymbols.length).toBe(1);
                }
            }
        }
    })
})

describe('error handling', () => {
    it('may not be used with an unsupported amount of symbols per card', () => {
        expect(() => generateCards(1)).toThrow();
        expect(() => generateCards(7)).toThrow();
        expect(() => generateCards(22)).toThrow();
    });

    it('should generate 57 cards with a number of 8 symbols per card by default', () => {
        const cards = generateCards();
        expect(cards).toBeInstanceOf(Array);
        expect(cards.length).toBe(57);
    });
})





