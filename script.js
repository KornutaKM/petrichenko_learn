const now = new Date()

// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getDay());


// console.log(now.getTime());


let start = new Date();

for (let i = 0; i < 10000000; i++) {
	let some = i ** 3
}

let end = new Date()

let result = end - start;

console.log(result);