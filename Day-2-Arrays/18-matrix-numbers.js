function horizontalMatrix(n) {
  let matrix = [];
  let number = 1;

  for (let i = 0; i < n; i++) {
    let row = [];

    for (let j = 1; j <= n; j++) {
      row.push(number);
      number++;
    }
    matrix.push(row);
  }

  for (let e of matrix) {
    console.log(e.join("\t"));
    console.log("\n");
  }
}

horizontalMatrix(4);
console.log("\t Horizontal Matrix \n================================");

function verticalMatrix(n) {
  let matrix = [];
  let number = 1;

  for (let i = 0; i < n; i++) {
    let colum = [];
    for (let j = 0; j < n; j++) {
      colum.push(number);
      number++;
    }
    matrix.push(colum);
  }

  for (let i = 0; i < matrix.length; i++) {

    let row=[]

    for (let j = 0; j < matrix.length; j++) {
        row.push(matrix[j][i]);
        
    }
    console.log(row.join('\t'));
    console.log("\n");
  }

}

verticalMatrix(4);
console.log("\t Vertical Matrix From Top \n================================");

function verticalMatrixV2(n) {
    let matrix = [];
    let number = 1;
  
    for (let i = 0; i < n; i++) {
      let colum = [];
      for (let j = 0; j < n; j++) {
        colum.push(number);
        number++;
      }
      if(i%2==1){
          colum.reverse();
      }
      matrix.push(colum);
    }
  
    for (let i = 0; i < matrix.length; i++) {
  
      let row=[]
  
      for (let j = 0; j < matrix.length; j++) {
          row.push(matrix[j][i]);
          
      }
      
      console.log(row.join('\t'));
      console.log("\n");
    }
  
  }
  
  verticalMatrixV2(4);
  console.log("\t Vertical Matrix From Top And Bottom \n================================");
  

  function diagonalMatrix(n){

    let matrix= []
    number=1

    for(i=n; i>0; i--){

        let x= i*(i-1)/2 +1

    }
  }

  diagonalMatrix(4)

  console.log("\t Diagonal Matrix\n================================");
