/* eslint-disable */

//write your code here
domain = () => {
  let first = ["the", "her", "him", "prime", "beauty", "dance"];
  let second = ["great", "big", "saucy", "blue", "happy", "domain"];
  let third = [".com", ".org", ".net", ".edu", ".io", ".info"];

  for (let i = 0; i < first.length; i++) {
    for (let a = 0; a < second.length; a++) {
      for (let b = 0; b < third.length; b++) {
        console.log(first[i] + second[a] + third[b]);
      }
    }
  }
};

console.log(domain());
