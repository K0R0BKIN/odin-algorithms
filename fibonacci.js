function fibonacci(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const seq = fibonacci(n - 1);
  const sum = seq.at(-2) + seq.at(-1);
  return [...seq, sum];
}

console.log(fibonacci(8));
