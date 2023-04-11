/*
    4 4 4 4 4 4 4  
    4 3 3 3 3 3 4   
    4 3 2 2 2 3 4   
    4 3 2 1 2 3 4   
    4 3 2 2 2 3 4   
    4 3 3 3 3 3 4   
    4 4 4 4 4 4 4  
*/

function pattern31(n) {
  n = 2 * n - 1;

  for (let row = n; row >= 1; row--) {
    for (let col = n; col >= 1; col--) {
      let ans = Math.max(col, row, n - row, n - col);
      process.stdout.write(String(Math.round(ans/2)) + " ");
    }
    console.log();
  }
}

pattern31(4);
