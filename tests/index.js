/* A Queue object for queue-like functionality over JavaScript arrays. */
class Queue {
  constructor(){
    this.items = [];
  }

  enqueue(obj) {
    this.items.push(obj);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty(){
    return this.items.length === 0;
  }
}

var doBFS = function(graph, source) {
  var bfsInfo = [];

  for (var i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
        distance: null,
        predecessor: null 
      };
  }

  bfsInfo[source].distance = 0;

  var queue = new Queue();
  queue.enqueue(source);

  while(!queue.isEmpty()){
    let elmSrc = queue.dequeue()

    graph[elmSrc].forEach(elm => {
      if(bfsInfo[elm].distance === null){
        bfsInfo[elm].distance = bfsInfo[elmSrc].distance + 1;
        bfsInfo[elm].predecessor = elmSrc;
        queue.enqueue(elm);
      }
    });
  }
  
  return bfsInfo;
};


var adjList = [
  [1], //0
  [0, 4, 5], //1
  [3, 4, 5], //2
  [2, 6], //3
  [1, 2], //4
  [1, 2, 6], //5
  [3, 5], //6
  [] //7
  ];

var bfsInfo = doBFS(adjList, 3);

for (let i = 0; i < adjList.length; i++) {
  console.log(`vertex ${i}: distance = ${bfsInfo[i].distance}, predecessor = ${bfsInfo[i].predecessor}`);
}
console.log(bfsInfo);