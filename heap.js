// n: size of array - i: index of root
const heapify = (arr, n, i) => {
  let largest = i;
  const left = i * 2 + 1;
  const right = i * 2 + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    // Swap i and largest
    const temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    heapify(arr, n, largest);
  }
};

const heapSort = (arr, n) => {
  // heapify
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    // swap arr[i] and arr[0]
    const temp = arr[i];
    arr[i] = arr[0];
    arr[0] = temp;
    heapify(arr, i, 0);
  }
};

// Test
const randArr = size => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  return arr;
};

const arr = randArr(200);

console.time('Heap Sort');
heapSort(arr, arr.length);
console.timeEnd('Heap Sort');
