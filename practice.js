const arr = [1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4]

let set = new Set(arr)
set.add('343434')
// console.log(set);


// set.delete(value);
// set.has(value)
// set.clear()
// set.size()


// for (let value of set) console.log(value);

// set.forEach((value, valueAgaing, set) => {
// console.log(`1) ${value} 2) ${valueAgaing}`);
// })

// console.log(set.keys());
// console.log(set.values());
// console.log(set.entries());

function unique(arr) {
	return Array.from(new Set(arr))
}

console.log(unique(arr));
