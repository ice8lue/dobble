/**
 * A simple implementation of the Dobble game.
 *
 * Rules:
 * - each card contains the same number of symbols
 * - each card contains exactly one symbol it shares with each other card
 * - each card is unique
 */

export function generateCards (symbolsPerCard: number = 8): number[][] {
  const N = symbolsPerCard - 1
  const amountOfCards: number = totalAmountOfCards(symbolsPerCard)
  const symbols: number[] = [...Array(amountOfCards).keys()].map(n => n + 1) // Use numbers as symbols for simplicity

  const cards: number[][] = []

  /**
 * Generate first set of cards, each beginning with the first symbol,
 * followed by N symbols in their sequential order.
 */
  for (let i = 0; i < (N + 1); i++) {
    const card: number[] = []
    card.push(symbols[0])

    for (let j = 0; j < N; j++) {
      card.push(symbols[(j + 1) + (i * N)])
    }

    cards.push(card)
  }

  /**
   * Generate remaining cards, starting with the subsequent symbol,
   * followed by the vertically shifted sequential symbols.
   */
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const card: number[] = []
      card.push(symbols[i + 1])

      for (let k = 0; k < N; k++) {
        card.push(symbols[((N + 1) + (N * k) + ((i * k) + j) % N)])
      }

      cards.push(card)
    }
  }

  return cards
}

export function isPrime (n: number): boolean {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }

  return n > 1
}

export function totalAmountOfCards (symbolsPerCard: number = 8): number {
  const N = symbolsPerCard - 1

  if (!isPrime(N)) {
    throw new Error('Invalid number of symbols per Card. This may only be used with a prime number + 1.')
  }

  return N * N + N + 1 // N^2 + N + 1
}
