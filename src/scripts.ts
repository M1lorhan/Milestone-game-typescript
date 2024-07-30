//* add bet function to add funds to pot and and subtract funds from purse. - help from Chat GPT */

let initialPotBalance: number = 0
let initialPurseBalance: number = 500
let deck: Card[] = [];

interface Card {
    rank: string;
    suit: string;
    value: number;
    image: string;
}

type Deck = Card[];

function transferFunds() {
    // Get the transfer amount from the input field
    const purseBalanceElement = document.getElementById('purseBalance') as HTMLElement;
    const potBalanceElement = document.getElementById('potBalance') as HTMLElement;
    const amountToTransferElement = document.getElementById('amountToTransfer') as HTMLInputElement;

    const purseBalance = parseFloat(purseBalanceElement.textContent!);
    const potBalance = parseFloat(potBalanceElement.textContent!);
    const amountToTransfer = parseFloat(amountToTransferElement.value);
    
    // Check if the transfer amount is valid
    if (!isNaN(amountToTransfer) && amountToTransfer > 0) {
        // Check if the transfer amount is within the purse balance
        if (amountToTransfer <= purseBalance) {
            // Calculate new purse and pot balances after transfer
            const newPurseBalance = purseBalance - amountToTransfer;
            const newPotBalance = potBalance + amountToTransfer;

            // Update the purse and pot balance elements in the DOM
            purseBalanceElement.textContent = newPurseBalance.toFixed(2).toString();
            potBalanceElement.textContent = newPotBalance.toFixed(2).toString();

            disableDealButton(newPotBalance);
        } else {
            // Alert if transfer amount exceeds purse balance
            alert("Insufficient funds in your purse.");
        }
    } else {
        // Alert if transfer amount is invalid
        alert("Invalid amount to transfer.");
    }

    function disableDealButton(potBalance: number) {
        const dealButton = document.getElementById('createButton') as HTMLButtonElement | null;
        if (dealButton) {
            dealButton.disabled = potBalance === 0;
        }
    }
}

//* add deal function to deal cards to player & dealer cards array. */

let playerHand: Card[] = []; 
let dealerHand: Card[] = [];

function createDeck(): Deck {
    let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    let deck = [];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            let card = {
                rank: ranks[j],
                suit: suits[i],
                value: getValue(ranks[j]),
                image: getImageUrl(ranks[j], suits[i])
            };
            deck.push(card);
        }
    }
    return [];
}


function deal(): void {
    let deck: Card[] = createDeck();
    deck = shuffle(deck);

    const hands = dealInitialCards(deck);
    playerHand = hands.playerHand; 
    dealerHand = hands.dealerHand;
    renderHand('playerHand', hands.playerHand);
    renderHand('dealerHand', [hands.dealerHand[0], { rank: 'Hidden', suit: '', value: 0, image: './assets/PNG-cards-1.3/Card-Back-05.png' }]);
    createHitMeButton();
    createStayButton();
}

function shuffle(deck: Card[]): Card[] {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
}

// Function to deal initial cards to the player and dealer
function dealInitialCards(deck: Card[]): {playerHand: Card[], dealerHand: Card[]} {
    dealCard(deck, playerHand);
    dealCard(deck, dealerHand);
    dealCard(deck, playerHand);
    dealCard(deck, dealerHand);
    return { playerHand: playerHand, dealerHand: dealerHand };
}

// Function to deal cards to a player
function dealCard(deck: Card[], playerHand: Card[]):void {
    const card = deck.pop();
    if (card) {
        playerHand.push(card);
    }
}

function createHitMeButton() {
    var hitMeButton = document.createElement('button');
    hitMeButton.textContent = 'Hit Me';
    hitMeButton.onclick = hitMe;
    hitMeButton.classList.add('hit-me-button');
    hitMeButton.style.display = 'block';
    hitMeButton.style.margin = '5 auto';
    document.body.appendChild(hitMeButton);
}    

function createStayButton() {
    var stayButton = document.createElement('button');
    stayButton.textContent = 'Stay';
    stayButton.onclick = stay;
    stayButton.classList.add('stay-button');
    stayButton.style.display = 'block'; 
    stayButton.style.margin = '5 auto'; 
    document.body.appendChild(stayButton);
}

function hitMe(): void {
    dealCard(deck, playerHand);
    renderHand('playerHand', playerHand);
    playerHandValue = calculatePlayerHandValue(playerHand); 
}

function stay(): void {
    renderHand('dealerHand', dealerHand);
    while (calculateDealerHandValue(dealerHand) < 17) {
        dealCard(deck, dealerHand);
    }
    playerHandValue = calculatePlayerHandValue(playerHand);
    dealerHandValue = calculateDealerHandValue(dealerHand);
    determineWinner();
}

function renderHand(containerId: string, hand: Card[]): void {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = ''; 
        hand.forEach(function(card) {
            const cardImage = document.createElement('img');
            cardImage.src = card.image;
            container.appendChild(cardImage);
        });
    }
}

// Function to get the value of a card
function getValue(rank: string): number {
    if (rank === 'Ace') {
        return 11; 
    } else if (['Jack', 'Queen', 'King'].includes(rank)) {
        return 10;
    } else {
        return parseInt(rank);
    }
}

// Function to get the URL of the card image
function getImageUrl(rank: string, suit: string): string {
    return `./assets/PNG-cards-1.3/${rank.toLowerCase()}_of_${suit.toLowerCase()}.png`;
}

// function to calculate hand value.  help from ChatGPT

function calculatePlayerHandValue(playerHand: Card[]): number {
    let playerCards = 0;
    let aceCount = 0;

    for (let card of playerHand) {
        if (card.rank === "Ace") {
            aceCount++;
            playerCards += 11;
        } else if (["Jack", "Queen", "King"].includes(card.rank)) {
            playerCards += 10;
        } else {
            playerCards += parseInt(card.rank);
        }
    }

    while (playerCards > 21 && aceCount > 0) {
        playerCards -= 10;
        aceCount--;
    }

    return playerCards;
}

function calculateDealerHandValue(dealerHand: Card[]): number {
    let dealerCards = 0;
    let aceCount = 0;

    for (let card of dealerHand) {
        if (card.rank === "Ace") {
            aceCount++;
            dealerCards += 11;
        } else if (["Jack", "Queen", "King"].includes(card.rank)) {
            dealerCards += 10;
        } else {
            dealerCards += parseInt(card.rank);
        }
    }

    while (dealerCards > 21 && aceCount > 0) {
        dealerCards -= 10;
        aceCount--;
    }

    return dealerCards;
}

// Now you can use playerHand and dealerHand variables in your functions
let playerHandValue = calculatePlayerHandValue(playerHand);
let dealerHandValue = calculateDealerHandValue(dealerHand);

function determineWinner() {
    let message;
    let playerHasAce = false;
    let playerHasFaceCard = false;

    // Check if the player's hand contains an Ace and a face card
    for (let card of playerHand) {
        if (card.rank === 'Ace') {
            playerHasAce = true;
        } else if (['King', 'Queen', 'Jack'].includes(card.rank)) {
            playerHasFaceCard = true;
        }
    }

    // Calculate winnings based on the player's hand
    let winningsMultiplier: number = 1; // Default multiplier
    if (playerHasAce && playerHasFaceCard) {
        winningsMultiplier = 1.5; // 150% of the bet
    }

    switch (true) {
        case playerHandValue === 21 && dealerHandValue === 21:
            message = "Push";
            break;
        case playerHandValue === 21 && dealerHandValue < 21:
            message = "Congratulations, You Win!";
            updatePurse();
            offerDrink();
            clearPot();
            break;
        case playerHandValue < 21 && dealerHandValue === 21:
            message = "The house wins";
            clearPot();
            break;
        case playerHandValue === dealerHandValue:
            message = "Push";
            break;
        case playerHandValue > 21:
            message = "The house wins";
            clearPot();
            break;
        case dealerHandValue > 21 || playerHandValue > dealerHandValue:
            message = "Congratulations, You Win!";
            updatePurse();
            offerDrink();
            clearPot();
            break;
        default:
            message = "The house wins";
            clearPot();
            break;
    }
    alert(message);
    clearHands();
    removeButtons();
}

function updatePurse() {
    const purseBalanceElement = document.getElementById('purseBalance') as HTMLElement;
    const potBalanceElement = document.getElementById('potBalance') as HTMLElement;

    const purseBalance = parseFloat(purseBalanceElement.textContent!)
    const potBalance = parseFloat(potBalanceElement.textContent!)
    
    // Calculate winnings as potBalance * 2
    const winnings = potBalance * 2;

    if (!isNaN(purseBalance) && !isNaN(winnings)) {
        var newPurseBalance = purseBalance + winnings;
        purseBalanceElement.textContent = newPurseBalance.toFixed(2).toString();
    } else {
        console.error("Purse balance or winnings is not a valid number.");
    }
}

function clearPot() {
    var newPotBalance = initialPotBalance;
    var potBalanceElement = document.getElementById('potBalance');
    
    if (potBalanceElement) {
        potBalanceElement.textContent = newPotBalance.toFixed(2);
    } else {
        console.error("Pot balance element not found.");
    }
}

function clearHands() {
    playerHand = [];
    dealerHand = [];
    
    const playerHandElement = document.getElementById('playerHand');
    const dealerHandElement = document.getElementById('dealerHand');

    if (playerHandElement !== null && dealerHandElement !== null) {
        playerHandElement.innerHTML = '';
        dealerHandElement.innerHTML = '';
    }
}

//* create function onWin to offer drink to player */
let drinkAccepted: boolean = false;

function offerDrink() {
    const response = prompt("The Casino would like to offer you a complementary drink? (yes/no)")?.toLowerCase();
    let imageSrc: string;

    if (response === "yes") {
        imageSrc = "./assets/mai-tai.jpg"
        drinkAccepted = true;
        document.body.classList.add('blur-effect');
    } else {
        imageSrc = "./assets/pexels-ron-lach-8879621.jpg"; 
        drinkAccepted = false;
        document.body.classList.remove('blur-effect')};

    const drinkImage = document.createElement('img');
    drinkImage.src = imageSrc;
    document.body.appendChild(drinkImage);
}   


//* create function onDrink to change luck & blur to screen */


//* create to check age & update player name. help from ChatGPT */

function updateName() {
    const newName = prompt("Please enter your name:");
        if (newName !== null && newName.trim() !== "") {
            const playerNameElement = document.getElementById("playerName");
    
            if (playerNameElement instanceof HTMLElement) {
                playerNameElement.textContent = `${newName}'s Cards`;
        
        } else {
            alert("No name entered.");
        }
    }
}

var isOver21 = confirm("Are you over the age of 21? Click 'OK' for 'Yes' and 'Cancel' for 'No'.");

if (isOver21) {
    alert("You have confirmed that you are over the age of 21. Welcome!");
} else {
    var redirectTo = "https://www.sesamestreet.org/";
    alert("You have indicated that you are not over the age of 21. You will be redirected.");
    window.location.href = redirectTo;
}

//* function to remove "hit me" & "button" on result */

function removeButtons() {
    var hitMeButton = document.querySelector('.hit-me-button');
    var stayButton = document.querySelector('.stay-button');
    
    if (hitMeButton && hitMeButton.parentNode) {
        hitMeButton.parentNode.removeChild(hitMeButton);
    }

    if (stayButton && stayButton.parentNode) {
        stayButton.parentNode.removeChild(stayButton);
    }
}