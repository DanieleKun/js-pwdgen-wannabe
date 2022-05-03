const name = prompt('Qual è il tuo nome?');
console.log(name);

const surname = prompt('Qual è il tuo cognome?');
console.log(surname);

const age = prompt('Quanti anni hai?');
console.log(age);

document.getElementById("psw").innerHTML = 'La tua super password totalmente inaffidabile è: ' + name + surname + age + 21;