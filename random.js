function generateRandomEmail() {
    // Common domain
    const domain = 'gmail.com';

    // Function to generate a random string of given length
    function generateRandomString(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Generate a random username with 8 characters
    const username = generateRandomString(8);

    // Combine username and domain to form the email address
    const email = `${username}@${domain}`;

    return email;
}

// Generate and log a random email address
const randomEmail = generateRandomEmail();
console.log(randomEmail);
