for (let i = 1; i <= 10; i++) {
  if (i === 3){
    console.log("Continue ", i)
    continue;
  }
  if (i === 5) {
    console.log("Breaking at", i);
    break;
  }
  console.log("i =", i);
}
