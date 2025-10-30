class User {
    constructor(username, email, password) {  
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptedPassword() {
        return `Encrypted password is: ${this.password.toUpperCase()}`;  
        // just an example of "encrypting"
    }
}

const chai = new User("Shubham", "abcd@gmail.com", "abcd@123");

console.log(chai.encryptedPassword());
