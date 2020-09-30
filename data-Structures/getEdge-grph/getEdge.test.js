'use strict';

const Graph = require('../graphs/graphs.js')
const getEdges = require('./getEdges');

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


  it('Happy path', () => {

    expect(getEdges(["Austin", "Sverdlovsk"], graph)).toBe(100)
  });


  it('Happy path', () => {

    expect(getEdges(["Austin", "Sverdlovsk", "Chernovci"], graph)).toBe(107)
  });

  it('Fail', () => {

    expect(getEdges(["Austin", "Dallas"], graph)).toBe(0)
  });

  it('Edge case', () => {

    expect(getEdges(["Kharkiv", "Dallas"], graph)).toBe(0)
  });
  
  