setInterval(() => {
    const date1 = new Date();
    const seconds = date1.getSeconds() < 10 ? "0" + date1.getSeconds() : date1.getSeconds()
    console.log(`${date1.getHours()}:${date1.getMinutes()}:${seconds}`)
}, 1000);