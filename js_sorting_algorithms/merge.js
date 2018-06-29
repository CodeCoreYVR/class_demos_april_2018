const { log } = console;

const a = [3, 6, 8, 10, 15, 19];
const b = [1, 2, 11, 17, 21, 27];

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

log("––– Merge Sorted Arrays –––");
log("a:", a);
log("b:", b);
log("merge result:", merge(a, b));
