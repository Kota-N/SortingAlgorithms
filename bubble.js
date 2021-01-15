const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
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
console.time('Bubble Sort');
bubbleSort(arr);
console.timeEnd('Bubble Sort');
console.log(arr);
