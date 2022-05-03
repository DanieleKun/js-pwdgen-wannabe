const name = prompt('Qual è il tuo nome?');
console.log(name);

const surname = prompt('Qual è il tuo cognome?');
console.log(surname);

const color = prompt('Qual è il tuo colore preferito?');
console.log(color);

document.getElementById("psw").innerHTML = 'La tua super password totalmente inaffidabile è: ' + name + surname + color + 21;