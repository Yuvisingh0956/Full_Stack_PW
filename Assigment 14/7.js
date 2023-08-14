function generateOTP() {
    const min = 1000; 
    const max = 9999; 

    const otp = Math.floor(Math.random() * (max - min + 1)) + min;

    return otp;
}

// Example usage
console.log(`Here is your OTP : ${generateOTP()}`);