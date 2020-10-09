

function DFS(graph) {
    // let firstVertex = verices[0];
  
    let visited = new Map();
  
    let i= 0;
  while( i < graph.vertices.length){
    // if( visited.has(graph.vertices[i]) === false){
    //   visites.set(graph.vertices[i]);
    //   graph.getNeigbors(graph.vertices[i])
  
    // }
    dfs_helper(graph, graph.vertices[i], visited);
    i++;
  }
  
  return Array.from(visited.keys()).map(v => v.val);
  }
  
  
  function dfs_helper(graph, vertex, visited){
    if(!visited.has(vertex)){
      visited.set(vertex);
      let neigbors = graph.edges[vertex];
      let i = 0;
      while(i < neigbors.length) {
        dfs_helper(graph, neigbors[i].destination, visited);
        i ++;
      }
    }
  }

  
  module.export = DFS;