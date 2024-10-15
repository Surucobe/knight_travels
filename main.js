//[x/y]
//starting position [0/0]
//predecessor vertex [0/0] -> [D/P] which means distance and predecesor [distance/predecessor]
//use a queue to rememeber which has been visited and where they have been visited from
//once we move from a queue we most delete the obj that was in queue and add the next to be visit along with the update of the distance
//in order to do this i will need recursivity, each element must have it's value and it's distance from the initial value
//queue = [{0,3}] -> remove element queue = [] -> added the next element in the queue along with their distance, queue = [{1,2}, {1,6}]
//vertex 2: distance = null, predecessor = null, after being visit vertex 2: distance = 1, predecessor = 3
//can only move to another axis once
function kngithMoves(move1, move2){}