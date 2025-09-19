function mergeSort(array) {
  if (array.length <= 1) return array;

  const pivotIndex = Math.floor(array.length / 2);
  let half1 = mergeSort(array.slice(0, pivotIndex));
  let half2 = mergeSort(array.slice(pivotIndex));

  let sortedArray = [];
  while (half1.length && half2.length) {
    if (half1[0] <= half2[0]) sortedArray.push(half1.shift());
    else sortedArray.push(half2.shift());
  }

  return sortedArray.concat(half1).concat(half2);
}
