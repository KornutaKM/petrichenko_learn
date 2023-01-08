const soldier = {
	class: 'warrior',
	level: 10
}

let john  = {
	health: 150
}

Object.setPrototypeOf(john, soldier)

console.log(john.class);