const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) arr.unshift(arr.splice(i, 1)[0]);
    else {
      for (let j = 1; j < i; j++) {
        if (arr[i] < arr[j]) arr.splice(j, 0, arr.splice(i, 1)[0]);
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

const arr = randArr(200);
console.time('Insertion Sort');
insertionSort(arr);
console.timeEnd('Insertion Sort');
