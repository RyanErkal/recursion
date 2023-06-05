/**
 * The main sorting Array
 * @param {array} arr Array in question
 * @returns Sorted array
 */
// This function sorts the given array in ascending order using the merge sort algorithm.
// It does this by recursively splitting the array into smaller pieces until it reaches the base case of an array of length 1.
// It then uses the merge function to merge the smaller arrays back together in sorted order.

const mergeSortRec = (arr) => {
	// base case: if the array has 0 or 1 elements, return it
	if (arr.length === 0) return "Please provide a non empty array!";
	if (arr.length === 1) return arr;

	// recursive case: split the array in half
	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid, arr.length);

	// return the sorted array by merging the two halves
	return merge(mergeSortRec(left), mergeSortRec(right));
};

//This function is used to merge the two arrays.
//This is used in the mergeSort function

const merge = (leftArr, rightArr) => {
	//To merge the both incoming arrays
	const result = [];

	let iL = 0;
	let iR = 0;

	//Loop through the arrays until the end of one is reached
	while (iL < leftArr.length && iR < rightArr.length) {
		//Compare the next element of each array
		if (leftArr[iL] < rightArr[iR]) {
			//Push the smaller element into the result array
			result.push(leftArr[iL]);
			//Increment the index for the left array
			iL++;
		} else {
			//Push the smaller element into the result array
			result.push(rightArr[iR]);
			//Increment the index for the right array
			iR++;
		}
	}

	//If the right array is empty, push the remaining elements of the left array into the result array
	while (iL < leftArr.length) {
		result.push(leftArr[iL]);
		iL++;
	}

	//If the left array is empty, push the remaining elements of the right array into the result array
	while (iR < rightArr.length) {
		result.push(rightArr[iR]);
		iR++;
	}

	return result;
};

console.log(mergeSortRec([])); // []
console.log(mergeSortRec([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]
console.log(mergeSortRec([30, 20, 10, 50, 22, 33, 55])); //[10, 20, 22, 30, 33, 50, 55]
