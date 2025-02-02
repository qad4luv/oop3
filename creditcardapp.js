function validateCreditCard(cardNumber) {
    // Remove any non-digit characters (like spaces or hyphens)
    cardNumber = cardNumber.replace(/\D/g, '');

    // Check if the card number is 13 to 19 digits long
    if (cardNumber.length < 13 || cardNumber.length > 19) {
        return false;
    }

    // Define regex patterns for various credit card types
    const visaPattern = /^4[0-9]{12,18}$/;            // Visa: starts with 4, followed by 12-18 digits
    const mastercardPattern = /^5[1-5][0-9]{14}$/;      // Mastercard: starts with 51-55, followed by 14 digits
    const amexPattern = /^3[47][0-9]{13}$/;             // American Express: starts with 34 or 37, followed by 13 digits
    const discoverPattern = /^6(?:011|5[0-9]{2})[0-9]{12}$/; // Discover: starts with 6011 or 65, followed by 12 digits

    // Check the credit card type with the respective regex patterns
    if (visaPattern.test(cardNumber)) {
        return 'Visa';
    } else if (mastercardPattern.test(cardNumber)) {
        return 'Mastercard';
    } else if (amexPattern.test(cardNumber)) {
        return 'American Express';
    } else if (discoverPattern.test(cardNumber)) {
        return 'Discover';
    } else {
        return false; // Invalid card number
    }
}

// Example usage
const cardNumber = "4111111111111111"; // Example Visa card number
const result = validateCreditCard(cardNumber);
if (result) {
    console.log(`Valid card type: ${result}`);
} else {
    console.log('Invalid card number');
}
