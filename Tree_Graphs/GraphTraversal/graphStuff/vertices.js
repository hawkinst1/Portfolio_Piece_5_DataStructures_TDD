const Edge = require('./Edge.js');

class Vertex {
  constructor(data) {
    this.data = data;
    this.edges = [];
  }

  addEdge(vertex, weight){
    if(!(vertex instanceof Vertex)) throw new Error("Edge start and end must both be Vertex")
    this.edges.push(new Edge(this, vertex, weight))

  }

  removeEdge(vertex){
    this.edges = this.edges.filter(e => e !== vertex)
  }

  print() {
    const edgeList = this.edges.map(edge =>
        edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data);

    const output = `${this.data} --> ${edgeList.join(', ')}`;
    console.log(output);
  }
}

module.exports = Vertex;