class graph {
  numberNodes;
  adjacencyMatrix;
  currentPosition;

  constructor(numberNodes) {
    this.numberNodes = numberNodes;
    this.adjacencyMatrix = [];

    for(let i = 0; i < this.numberNodes; i++){
      this.adjacencyMatrix[i] = new Array(this.numberNodes).fill(0)
    }

    this.currentPosition = [Math.floor(this.adjacencyMatrix.length/2), Math.floor(this.adjacencyMatrix.length/2)];
  }

  getMatrix(){
    return this.adjacencyMatrix;
  }

  singleStep(value){
    if(this.adjacencyMatrix[value[0]][value[1]] === 0){
      let singleStepMovements = [
        [value[0]-1, value[1]],
        [value[0]+1,value[1]],
        [value[0],value[1]-1],
        [value[0],value[1]+1]
      ]

      singleStepMovements.forEach(coord => {
        this.adjacencyMatrix[coord[0]][coord[1]] = 1;
        this.multiStep(coord)
      })
    }
  }

  multiStep(value){
    if(this.adjacencyMatrix[value[0]][value[1]] === 1){
      console.log(value)
      if(this.currentPosition[1] !== value[1]){
        let finishMoving = [
          [value[0]+2, value[1]], 
          [value[0]-2, value[1]]
        ]
        finishMoving.forEach(coord => {
          this.adjacencyMatrix[coord[0]][coord[1]] = 3;
        })
      }else{
        let finishMoving = [
          [value[0], value[1]+2],
          [value[0], value[1]-2]
        ]
        finishMoving.forEach(coord => {
          this.adjacencyMatrix[coord[0]][coord[1]] = 3;
        })
      }
    }
    return value
  }

  getPossibleMoves(){
    var queue = new Queue();
    queue.enqueue(this.currentPosition);
    
    let current = queue.dequeue();
    this.singleStep(current)
  }
}