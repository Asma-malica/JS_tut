fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res) => console.log(res.json()))
.then((msg) => console.log(msg[1].setup,msg[1].punchline))