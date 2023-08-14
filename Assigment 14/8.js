function calculateRemainingDays(eventDate) {
    const currentDate = new Date();
    const startDateTime = new Date(eventDate);
    
    // Calculate the time difference in milliseconds
    const timeDifference = startDateTime - currentDate;

    // Convert milliseconds to days
    const daysUntilEvent = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysUntilEvent;
}

const eventDate = '2023-08-31';
console.log(calculateRemainingDays(eventDate))