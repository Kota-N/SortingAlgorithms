const selectionSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) minIdx = j;
    }

    const temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
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

const arr = randArr(20);
console.time('Selection Sort');
selectionSort(arr);
console.timeEnd('Selection Sort');
console.log(arr);
