interface Card {
    rank: string;
    suit: string;
    value: number;
    image: string
}

interface Deck extends Array<Card> {}

export const playerHand: Deck = [
    { rank: 'Ace', suit: 'Hearts', value: 11, image: './assets/ace_of_hearts.png'},
    { rank: 'Ace', suit: 'Diamonds', value: 11, image: './assets/ace_of_diamonds.png'},
    { rank: 'Ace', suit: 'Clubs', value: 11, image: './assets/ace_of_clubs.png' },
    { rank: 'Ace', suit: 'Spades', value: 11, image: './assets/ace_of_spades.png' },
    
    { rank: 'King', suit: 'Hearts', value: 10, image: './assets/king_of_hearts.png'},
    { rank: 'King', suit: 'Diamonds', value: 10, image: './assets/kings_of_diamonds.png'},
    { rank: 'King', suit: 'Clubs', value: 10, image: './assets/king_of_clubs.png'},
    { rank: 'King', suit: 'Spades', value: 10, image: './assets/king_of_spades.png'},
    
    { rank: 'Queen', suit: 'Hearts', value: 10, image: './assets/queen_of_hearts.png'},
    { rank: 'Queen', suit: 'Diamonds', value: 10, image: './assets/queen_of_diamonds.png'},
    { rank: 'Queen', suit: 'Clubs', value: 10, image: './assets/queen_of_clubs.png'},
    { rank: 'Queen', suit: 'Spades', value: 10, image: './assets/queen_of_spades.png'},
    
    { rank: 'Jack', suit: 'Hearts', value: 10, image: './assets/jack_of_hearts.png'},
    { rank: 'Jack', suit: 'Diamonds', value: 10, image: './assets/jack_of_diamonds.png'},
    { rank: 'Jack', suit: 'Clubs', value: 10, image: './assets/jack_of_clubs.png'},
    { rank: 'Jack', suit: 'Spades', value: 10, image: './assets/jack_of_spades.png'},
    
    { rank: '10', suit: 'Hearts', value: 10, image: './assets/10_of_hearts.png'},
    { rank: '10', suit: 'Diamonds', value: 10, image: './assets/10_of_diamonds.png'},
    { rank: '10', suit: 'Clubs', value: 10, image: './assets/10_of_clubs.png'},
    { rank: '10', suit: 'Spades', value: 10, image: './assets/10_of_spades.png'},
    
    { rank: '9', suit: 'Hearts', value: 9, image: './assets/9_of_hearts.png'},
    { rank: '9', suit: 'Diamonds', value: 9, image: './assets/9_of_diamonds.png'},
    { rank: '9', suit: 'Clubs', value: 9, image: './assets/9_of_clubs.png'},
    { rank: '9', suit: 'Spades', value: 9, image: './assets/9_of_spades.png'},
    
    { rank: '8', suit: 'Hearts', value: 8, image: './assets/8_of_hearts.png'},
    { rank: '8', suit: 'Diamonds', value: 8, image: './assets/8_of_diamonds.png'},
    { rank: '8', suit: 'Clubs', value: 8, image: './assets/8_of_clubs.png'},
    { rank: '8', suit: 'Spades', value: 8, image: './assets/8_of_spades.png'},
    
    { rank: '7', suit: 'Hearts', value: 7, image: './assets/7_of_hearts.png'},
    { rank: '7', suit: 'Diamonds', value: 7, image: './assets/7_of_diamonds.png'},
    { rank: '7', suit: 'Clubs', value: 7, image: './assets/7_of_clubs.png'},
    { rank: '7', suit: 'Spades', value: 7, image: './assets/7_of_spades.png'},
    
    { rank: '6', suit: 'Hearts', value: 6, image: './assets/6_of_hearts.png'},
    { rank: '6', suit: 'Diamonds', value: 6, image: './assets/6_of_diamonds.png'},
    { rank: '6', suit: 'Clubs', value: 6, image: './assets/6_of_clubs.png'},
    { rank: '6', suit: 'Spades', value: 6, image: './assets/6_of_spades.png'},
    
    { rank: '5', suit: 'Hearts', value: 5, image: './assets/5_of_hearts.png'},
    { rank: '5', suit: 'Diamonds', value: 5, image: './assets/5_of_diamonds.png'},
    { rank: '5', suit: 'Clubs', value: 5, image: './assets/5_of_clubs.png'},
    { rank: '5', suit: 'Spades', value: 5, image: './assets/5_of_spades.png'},
    
    { rank: '4', suit: 'Hearts', value: 4, image: './assets/4_of_hearts.png'},
    { rank: '4', suit: 'Diamonds', value: 4, image: './assets/4_of_diamonds.png'},
    { rank: '4', suit: 'Clubs', value: 4, image: './assets/4_of_clubs.png'},
    { rank: '4', suit: 'Spades', value: 4, image: './assets/4_of_spades.png'},
    
    { rank: '3', suit: 'Hearts', value: 3, image: './assets/3_of_hearts.png'},
    { rank: '3', suit: 'Diamonds', value: 3, image: './assets/3_of_diamonds.png'},
    { rank: '3', suit: 'Clubs', value: 3, image: './assets/3_of_clubs.png'},
    { rank: '3', suit: 'Spades', value: 3, image: './assets/3_of_spades.png'},
    
    { rank: '2', suit: 'Hearts', value: 2, image: './assets/2_of_hearts.png'},
    { rank: '2', suit: 'Diamonds', value: 2, image: './assets/2_of_diamonds.png'},
    { rank: '2', suit: 'Clubs', value: 2, image: './assets/2_of_clubs.png'},
    { rank: '2', suit: 'Spades', value: 2, image: './assets/2_of_spades.png'},
];

export const dealerHand: Deck = [
    { rank: 'Ace', suit: 'Hearts', value: 11, image: './assets/ace_of_hearts.png'},
    { rank: 'Ace', suit: 'Diamonds', value: 11, image: './assets/ace_of_diamonds.png'},
    { rank: 'Ace', suit: 'Clubs', value: 11, image: './assets/ace_of_clubs.png' },
    { rank: 'Ace', suit: 'Spades', value: 11, image: './assets/ace_of_spades.png' },
    
    { rank: 'King', suit: 'Hearts', value: 10, image: './assets/king_of_hearts.png'},
    { rank: 'King', suit: 'Diamonds', value: 10, image: './assets/kings_of_diamonds.png'},
    { rank: 'King', suit: 'Clubs', value: 10, image: './assets/king_of_clubs.png'},
    { rank: 'King', suit: 'Spades', value: 10, image: './assets/king_of_spades.png'},
    
    { rank: 'Queen', suit: 'Hearts', value: 10, image: './assets/queen_of_hearts.png'},
    { rank: 'Queen', suit: 'Diamonds', value: 10, image: './assets/queen_of_diamonds.png'},
    { rank: 'Queen', suit: 'Clubs', value: 10, image: './assets/queen_of_clubs.png'},
    { rank: 'Queen', suit: 'Spades', value: 10, image: './assets/queen_of_spades.png'},
    
    { rank: 'Jack', suit: 'Hearts', value: 10, image: './assets/jack_of_hearts.png'},
    { rank: 'Jack', suit: 'Diamonds', value: 10, image: './assets/jack_of_diamonds.png'},
    { rank: 'Jack', suit: 'Clubs', value: 10, image: './assets/jack_of_clubs.png'},
    { rank: 'Jack', suit: 'Spades', value: 10, image: './assets/jack_of_spades.png'},
    
    { rank: '10', suit: 'Hearts', value: 10, image: './assets/10_of_hearts.png'},
    { rank: '10', suit: 'Diamonds', value: 10, image: './assets/10_of_diamonds.png'},
    { rank: '10', suit: 'Clubs', value: 10, image: './assets/10_of_clubs.png'},
    { rank: '10', suit: 'Spades', value: 10, image: './assets/10_of_spades.png'},
    
    { rank: '9', suit: 'Hearts', value: 9, image: './assets/9_of_hearts.png'},
    { rank: '9', suit: 'Diamonds', value: 9, image: './assets/9_of_diamonds.png'},
    { rank: '9', suit: 'Clubs', value: 9, image: './assets/9_of_clubs.png'},
    { rank: '9', suit: 'Spades', value: 9, image: './assets/9_of_spades.png'},
    
    { rank: '8', suit: 'Hearts', value: 8, image: './assets/8_of_hearts.png'},
    { rank: '8', suit: 'Diamonds', value: 8, image: './assets/8_of_diamonds.png'},
    { rank: '8', suit: 'Clubs', value: 8, image: './assets/8_of_clubs.png'},
    { rank: '8', suit: 'Spades', value: 8, image: './assets/8_of_spades.png'},
    
    { rank: '7', suit: 'Hearts', value: 7, image: './assets/7_of_hearts.png'},
    { rank: '7', suit: 'Diamonds', value: 7, image: './assets/7_of_diamonds.png'},
    { rank: '7', suit: 'Clubs', value: 7, image: './assets/7_of_clubs.png'},
    { rank: '7', suit: 'Spades', value: 7, image: './assets/7_of_spades.png'},
    
    { rank: '6', suit: 'Hearts', value: 6, image: './assets/6_of_hearts.png'},
    { rank: '6', suit: 'Diamonds', value: 6, image: './assets/6_of_diamonds.png'},
    { rank: '6', suit: 'Clubs', value: 6, image: './assets/6_of_clubs.png'},
    { rank: '6', suit: 'Spades', value: 6, image: './assets/6_of_spades.png'},
    
    { rank: '5', suit: 'Hearts', value: 5, image: './assets/5_of_hearts.png'},
    { rank: '5', suit: 'Diamonds', value: 5, image: './assets/5_of_diamonds.png'},
    { rank: '5', suit: 'Clubs', value: 5, image: './assets/5_of_clubs.png'},
    { rank: '5', suit: 'Spades', value: 5, image: './assets/5_of_spades.png'},
    
    { rank: '4', suit: 'Hearts', value: 4, image: './assets/4_of_hearts.png'},
    { rank: '4', suit: 'Diamonds', value: 4, image: './assets/4_of_diamonds.png'},
    { rank: '4', suit: 'Clubs', value: 4, image: './assets/4_of_clubs.png'},
    { rank: '4', suit: 'Spades', value: 4, image: './assets/4_of_spades.png'},
    
    { rank: '3', suit: 'Hearts', value: 3, image: './assets/3_of_hearts.png'},
    { rank: '3', suit: 'Diamonds', value: 3, image: './assets/3_of_diamonds.png'},
    { rank: '3', suit: 'Clubs', value: 3, image: './assets/3_of_clubs.png'},
    { rank: '3', suit: 'Spades', value: 3, image: './assets/3_of_spades.png'},
    
    { rank: '2', suit: 'Hearts', value: 2, image: './assets/2_of_hearts.png'},
    { rank: '2', suit: 'Diamonds', value: 2, image: './assets/2_of_diamonds.png'},
    { rank: '2', suit: 'Clubs', value: 2, image: './assets/2_of_clubs.png'},
    { rank: '2', suit: 'Spades', value: 2, image: './assets/2_of_spades.png'},
];