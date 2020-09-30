'use strict';


function getEdges( arr, graph){
    let price =0;
    let i =0;
    let j =1;
    while( j< arr.length){
     
    let neigbors = graph.getNeigborsByValue(arr[i]);
    //  
    let nextCity = graph.getVertexByValue(arr[j]);
   
  
    if(!neigbors || !nextCity){
      return 0;
    }else{
      let possibleEdge = neigbors.filter(edge=> edge.destination.val === arr[j]);
      //  console.log(possibleEdge[0].weight)
      if(possibleEdge.length >0){
        price += possibleEdge[0].weight;
      }else{
        return 0;
      }
    }
      i++;
      j++;
    }
    return price;
   
  }
  
  
  
//   let graph = new Graph()
  
//   let austin = graph.addVertex('Austin')
//   let dallas= graph.addVertex('Dallas')
//   let huston = graph.addVertex('Huston')
//   let sverdlovs = graph.addVertex('Sverdlovsk')
//   let chernovci = graph.addVertex('Chernovci')
//   let hawaii = graph.addVertex('Hawaii')
  
//   graph.addEdge(austin, sverdlovs, 100)
  
//   graph.addEdge(austin, chernovci, 20)
//   graph.addEdge(austin, hawaii, 15)
//   graph.addEdge(sverdlovs, chernovci, 7)
  
  
//   getEdges(["Austin","Sverdlovsk", "Chernovci"], graph)

  module.exports = getEdges;