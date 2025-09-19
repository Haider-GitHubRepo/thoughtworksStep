const limit = 20;

for (let number = 0; number <= limit; number++) {

    let suffix = number % 2 === 0 ? "is Even" : "is Odd";
    console.log(number, suffix)

}
