const { log, time, timeEnd } = console;

const random = n => Math.floor(Math.random() * n);

// O(n ** 2)
function bubbleSort(arr) {
  let hasSwapped = true;

  while (hasSwapped) {
    hasSwapped = false;

    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i - 1] > arr[i]) {
        const tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;

        hasSwapped = true;
      }
    }
  }
}

function bubbleSortImp(arr) {
  let hasSwapped = true;
  for (let j = arr.length; j > 0 && hasSwapped; j -= 1) {
    hasSwapped = false;

    for (let i = 1; i < j; i += 1) {
      if (arr[i - 1] > arr[i]) {
        const tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;

        hasSwapped = true;
      }
    }
  }
}

const merge = (arrI, arrJ) => {
  let i = 0;
  let j = 0;
  let mergedArr = [];

  while (i < arrI.length && j < arrJ.length) {
    if (arrI[i] < arrJ[j]) {
      mergedArr.push(arrI[i]);
      i += 1;
    } else {
      mergedArr.push(arrJ[j]);
      j += 1;
    }
  }

  return mergedArr.concat(arrI.slice(i)).concat(arrJ.slice(j));
};

// O(n * log n)
const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  let middleIndex = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, middleIndex);
  let rightArr = arr.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const unsorted = [9, 20, 3, 5, 2, 6, 1, 8, 11, 19, 13];
log("unsorted array:", unsorted);

log("––– Bubble Sort –––");
const a = Array.from(unsorted);
bubbleSort(a);
log("sorted array:", a);

log("––– Bubble Sort Imp. –––");
const b = Array.from(unsorted);
bubbleSortImp(b);
log("sorted array:", b);

log("––– Merge Sort –––");
const c = Array.from(unsorted);
log("sorted array:", mergeSort(c));

const largeUnsorted = Array.from({ length: 10000 }).map(() => random(10000));

log("––– Benchmarks –––");
log("––– Completely Random Array –––");
const lA = Array.from(largeUnsorted);
time("Bubble Sort");
bubbleSort(lA);
timeEnd("Bubble Sort");

const lB = Array.from(largeUnsorted);
time("Bubble Sort Imp.");
bubbleSortImp(lB);
timeEnd("Bubble Sort Imp.");

const lC = Array.from(largeUnsorted);
time("Merge Sort");
mergeSort(lC);
timeEnd("Merge Sort");

log("––– Mostly Sorted Array –––");
const mostlySorted = Array.from({ length: 10000 }).map((v, i) => i + 1);
mostlySorted[random(9999)] = random(10000);
mostlySorted[random(9999)] = random(10000);
mostlySorted[random(9999)] = random(10000);

const mSA = Array.from(mostlySorted);
time("Bubble Sort");
bubbleSort(mSA);
timeEnd("Bubble Sort");

const mSB = Array.from(mostlySorted);
time("Bubble Sort Shrinking");
bubbleSortImp(mSB);
timeEnd("Bubble Sort Shrinking");
