//const arr = [1, 2, 4, 6, 8, 10, 11, 13, 15, 18];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target == arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 4, 6, 8, 10, 11, 13, 15, 18], 8));
