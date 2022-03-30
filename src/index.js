const messages = [
    "Hola",
    "Ana",
    "Adios",
    "Jessica",
    "Salvo",
    "Diego",
    "Jorge",
    "Azul"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };