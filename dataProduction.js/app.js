const Graph = require("./graph/graph")

const map = new Graph(false,true)

const myHouse =  map.addVertex("63 Northcroft")
const localShop =  map.addVertex("Tesco")
const postOffice = map.addVertex("Post Office")
const trainStation = map.addVertex("trainStation")

map.addEdge(myHouse,localShop)
map.addEdge(myHouse,postOffice)

map.print()

