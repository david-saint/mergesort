let array = [3, 4, 2, 5, 23, 1, 12, 6, 9, 13, 19, 8, 21, 18, 38, 28]

// for (let i = 0; i < (array.length - i); i++) {
// 	for(let j = 0; j < array.length; j++) {
// 		if (array[j] > array[j+1]) {
// 			let temp = array[j+1]
// 			array[j+1] = array[j]
// 			array[j] = temp
// 		}
// 		console.log(j)
// 	}
// 	console.log(i, array)
// }
// 
let count = 0
// let result = []
// function merge(left, right, result) {
// 	let i = 0
// 	result = []
// 	while (i < (left.length + right.length + i)) {
// 		if (left[0] < right[0]) {
// 			result.push(left[0])
// 			left = left.slice(1, left.length)
// 		}else {
// 			result.push(right[0])
// 			right = right.slice(1, right.length)
// 		}
// 		i = i + 1
// 		count = count + 1
// 	}
// 	console.log(count, result)
// }

// function mergeSort(arr) {
// 	let n =  arr.length
// 	let mid = n/2
// 	if (n >= 2){
// 		let left = array.slice(0, mid)
// 		let right = array.slice(mid, n)
// 		merge(mergeSort(left), mergeSort(right), result)
// 	}
// 	return arr
// }

// mergeSort(array)

// Split the array into halves and merge them recursively 
function mergeSort (arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
    count++
    console.log(count)
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}
console.log(mergeSort(array))