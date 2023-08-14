const guest = ['Anurag', 'Mithun','Alka', 'Prabir', 'Shivam', 'Farman'];

if (guest.length === 0) {
    return "No guests to display.";
}

const guestListSentence = guest.join(", ");

console.log( guestListSentence);