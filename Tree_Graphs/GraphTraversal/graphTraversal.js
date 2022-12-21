const testGraph = require("./testGraph")

const depthFirstTraversal = (start, callback ,visitedVertices = [start]) => {
   callback(start)

    start.edges.forEach(element => {
        const neighbour = element.end
        
      //  if(start.edges.length){// removing the if will mean all paths are checked not one
            //const neighbour = start.edges[0].end;
            if(!visitedVertices.includes(neighbour)){ 
                visitedVertices.push(neighbour)
                depthFirstTraversal(neighbour,callback,visitedVertices)
            }
        //}
    });
}

module.exports = depthFirstTraversal