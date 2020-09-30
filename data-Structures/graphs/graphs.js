'use strict';

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
  
    getNeigborsByValue(vertexVal){
        let vert = this.vertices.filter(v => v.val === vertexVal);
        if (vert.length > 0) {
          return this.getNeigbors(vert[0])
        } else {
          return null;
        }
      }
  
      getVertexByValue(vertexVal){
        let vert = this.vertices.filter(v => v.val === vertexVal);
        return vert ? vert[0] : null;
      }
  

}

module.exports = Graph;


// let graph = new Graph()

// let nodeKate = graph.addVertex('Kate')
// let nodeHulk= graph.addVertex('Hulk')
// let nodeMac = graph.addVertex('Mac')

// graph.addEdge(nodeKate, nodeHulk)

// graph.addEdge(nodeMac, nodeHulk)
// graph.addEdge(nodeKate, nodeMac)

// console.log(graph.getNeigbors(nodeKate))