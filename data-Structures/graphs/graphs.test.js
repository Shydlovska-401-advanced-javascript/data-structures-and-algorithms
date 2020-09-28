'use strict';

const Graph = require('./graphs.js')

let graph = new Graph();


   it('Node can be successfully added to the graph', () => {


    expect(graph.addVertex('Kate')).toEqual({val : "Kate"})
    expect(graph.addVertex('Hulk')).toEqual({val : "Hulk"})
});



it('An edge can be successfully added to the graph ', () => {
    let newGraph = new Graph();
    let nodeKate = newGraph.addVertex('Kate');
    let nodeHulk = newGraph.addVertex('Hulk');
    newGraph.addEdge(nodeKate, nodeHulk);
    let neighbors = newGraph.getNeigbors(nodeKate)
    expect(neighbors.length).toBe(1)
});


it('A collection of all nodes can be properly retrieved from the graph', () => {
   let nodes = graph.getVertex()
    expect(nodes.length).toBe(2)
    expect(nodes[0].val).toBe("Kate")

});

it('All appropriate neighbors can be retrieved from the graph ', () => {
    let newGraph = new Graph();
    let nodeKate = newGraph.addVertex('Kate');
    let nodeHulk = newGraph.addVertex('Hulk');
    newGraph.addEdge(nodeKate, nodeHulk);
    let neighbors = newGraph.getNeigbors(nodeKate)
    expect(neighbors[0].origin).toEqual({val: "Kate"})
    expect(neighbors[0].destination).toEqual({val: "Hulk"})
});

it(' Neighbors are returned with the weight between nodes included ', () => {
    let newGraph = new Graph();
    let nodeKate = newGraph.addVertex('Kate');
    let nodeHulk = newGraph.addVertex('Hulk');
    newGraph.addEdge(nodeKate, nodeHulk, 100);
    let neighbors = newGraph.getNeigbors(nodeKate)
    expect(neighbors[0].origin).toEqual({val: "Kate"})
    expect(neighbors[0].destination).toEqual({val: "Hulk"})

    expect(neighbors[0].weight).toBe(100)
});


it(' The proper size is returned, representing the number of nodes in the graph', () => {

    expect(graph.size()).toBe(2)
});


