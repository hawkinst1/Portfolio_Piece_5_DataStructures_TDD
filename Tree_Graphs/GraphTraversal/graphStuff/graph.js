const Edge = require("./edge");
const Vertices = require("./vertices");

class Graph{
    constructor(isWeighted = false, isDirected)
    {
        this.vertices = []
        this.isWeighted  = isWeighted
        this.isDirected = isDirected
    }    

    addVertex(data)
    {
        const newVertex = new Vertices(data)
        this.vertices.push(newVertex)

        return newVertex;
    }

    removeVertex(vertex)
    {
        this.vertices = this.vertices.filter(v => v!= vertex)
    }

    addEdge(vertexOne, vertexTwo, weight)
    {
        const edgeWeight = this.isWeighted? weight : null;
        if (!(vertexOne instanceof Vertices) && !(vertexTwo instanceof Vertices)) throw new Error("Expected Vertex args.")
        vertexOne.addEdge(vertexTwo, edgeWeight)
        if (this.isDirected == true) return null
        vertexTwo.addEdge(vertexOne, edgeWeight)
        
        
    }
    
    removeEdge(vertexOne, vertexTwo)
    {
        if (!(vertexOne instanceof Vertices) && !(vertexTwo instanceof Vertices)) throw new Error("Expected Vertex args.")
        vertexOne.removeEdge(vertexTwo)   
        if (this.isDirected == true) return null
        vertexTwo.removeEdge(vertexOne)
    }

    print()
    {
        this.vertices.forEach(vertex => vertex.print())
    }

    
}

module.exports = Graph;