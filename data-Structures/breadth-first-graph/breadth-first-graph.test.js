'use strict';

const Graph = require('./breadth-first-graph.js');

let graph = new Graph()

let austin = graph.addVertex('Austin')
let dallas= graph.addVertex('Dallas')
let huston = graph.addVertex('Huston')
let sverdlovs = graph.addVertex('Sverdlovsk')
let chernovci = graph.addVertex('Chernovci')
let hawaii = graph.addVertex('Hawaii')


graph.addEdge(austin, sverdlovs, 100)

graph.addEdge(austin, chernovci, 20)
graph.addEdge(austin, hawaii, 15)
graph.addEdge(sverdlovs, chernovci, 7)
graph.addEdge(chernovci, dallas)
graph.addEdge(dallas, huston)



it('Happy path', () => {

  expect(graph.breadthFirstGraph(austin)).toEqual(['Austin', 'Sverdlovsk', 'Chernovci', 'Hawaii', 'Dallas', 'Huston']);
});

