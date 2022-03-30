const messages = [
    "Hola",
    "Ana",
    "Adios",
    "Jessica",
    "Salvo",
    "Diego"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };