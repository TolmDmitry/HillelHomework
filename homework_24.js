let game = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = Math.floor(Math.random() * (7 - 1) + 1);
        console.log('Start the game...')
        try {
            if (number === 6) {
                throw new Error();
            }
            resolve(number);
        } catch { console.log('Exit') }
    }, 2000)
});

game.then((num) => {
    if (num === 1) {
        console.log('Stay here');
    } else {
        console.log(`Go ${num} steps`);
    }
});