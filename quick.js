// -------------------------------------------------
const qSort = arr => {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return qSort(left).concat(pivot, qSort(right));
};
// -------------------------------------------------

// -------------------------------------------------
const quickSort = (arr, left, right) => {
  if (left < right) {
    const partitionIdx = partition(arr, left, right);
    quickSort(arr, left, partitionIdx - 1);
    quickSort(arr, partitionIdx + 1, right);
  }
};

// -----------
function partition(arr, left, right) {
  const pivot = arr[right];
  let pIdx = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, pIdx);
      pIdx++;
    }
  }
  swap(arr, right, pIdx);
  return pIdx;
}

// -----------
function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
// -------------------------------------------------

// Test
const randArr = size => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  return arr;
};

const arr = randArr(200);

// qSort (Reference: a book "Data Structures & Algorithms with JavaScript")
console.time('qSort');
const sortedArr = qSort(arr);
console.timeEnd('qSort');
// console.log(sortedArr);

// quickSort
console.time('quickSort');
quickSort(arr, 0, arr.length - 1);
console.timeEnd('quickSort');
