class Edges{
    constructor(node1, node2, weight=1){
        this.origin = node1;
        this.destination = node2;
        this.weight =weight;
    }
}

class Vertex{
    constructor(val){
        this.val = val;
    }
}

class Graph{
    constructor(){
        this.vertices =[];
        this.edges = {};
        this.numberOfEdges =0;

    }

    addVertex(value){
        let vertex = new Vertex(value);
        this.vertices.push(vertex);
        this.edges[vertex]= [];
        return vertex;
    }

    addEdge(origin, destination, weight=1){
        if(!this.edges[origin] || !this.edges[destination]) {
            return null;
        }
        let edge = new Edges(origin, destination, weight);
        this.edges[origin].push(edge);
        this.numberOfEdges++;
    }

    getNeigbors(vertex){
        return Object.values(this.edges).flat().filter(edge => edge.origin === vertex || edge.destination === vertex);
    }

    getVertex(){
      return this.vertices;
    }

    size(){
      return this.vertices.length;
    }

    breadthFirstGraph(vertex){
    let queue = [];
    let explored = {};
    queue.push(vertex);

   explored[vertex] = 'found';
   console.log(explored);

   while (queue.length > 0) {
      let ver = queue.shift();

  
      this.edges[ver]
      .map(e => e.destination)
      .forEach(n => {
        if(!explored[n]) {
          explored[n] = 'found';
          queue.push(n);
        }
        // console.log(explored)
      });
   }
  //  console.log(explored)
   return Object.keys(explored);
}
}


let graph = new Graph()

let nodeKate = graph.addVertex('Kate')
let nodeHulk= graph.addVertex('Hulk')
let nodeMac = graph.addVertex('Mac')

graph.addEdge(nodeKate, nodeHulk)

graph.addEdge(nodeMac, nodeHulk)
graph.addEdge(nodeKate, nodeMac)

console.log(nodeKate)
graph.breadthFirstGraph(nodeKate).length

// console.log(graph.getNeigbors(nodeKate))



module.exports = Graph;