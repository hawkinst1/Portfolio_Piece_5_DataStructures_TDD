


const linkedList = require("./LinkedLists/linkedList")
const Graph = require("./dataProduction.js/graph/graph")

const ll = new linkedList();

ll.insertAtHead(10);
ll.insertAtHead(30);

console.log(ll);


///
//Complex data
///

const map = new Graph(false,true)

const myHouse =  map.addVertex("MyHouse")
const localShop =  map.addVertex("MyShop")
const postOffice = map.addVertex("Post Office")
const trainStation = map.addVertex("trainStation")

map.addEdge(myHouse,localShop)
map.addEdge(myHouse,postOffice)

map.print()

/*
=====================================================================================================
                            ASYMPTOTIC                   ASYMPTOTIC

=====================================================================================================
*/
/*
=====================================================================================================
                            BUBBLE SORT                   BUBBLE SORT

=====================================================================================================
*/
const BubbleSort = require("./algorithms/bubbleSort/bubbleSort")

const arr = [3,6,2,5,10,12,13,2,16,1,333]
BubbleSort(arr) 
/*
=====================================================================================================
                            MERGE SORT                   MERGE SORT

=====================================================================================================
*/
const MergeSort = require("./algorithms/mergeSort/mergeSort")

const neumannArr = [98,13,274,7,12,981,5]
console.log(MergeSort(neumannArr))

 

/*
=====================================================================================================
                            QUICK SORT                   QUICK SORT

=====================================================================================================
*/
const QuickSort = require("./algorithms/quickSort/quickSort")
const arr1 = [-6,2,5,-1,100];

console.log(QuickSort(arr1));
 

/*
=====================================================================================================
                            RECURSIONS                   RECURSIONS

=====================================================================================================
*/


/**
 ====================================================================================================
                                                    BINARY TREE
 
 ====================================================================================================
 */
/* const binaryTree = require("./BinaryTree/binaryTree")
// requires a sorted array;
const arr = [1,4,8,9,33,44,100]
const target = 1;
const targetIndex = binaryTree(arr,target);

console.log(`index of ${target} is ${targetIndex}`) 
const Tree = require("./BinaryTree/BinaryTreeMaker")

const bigTree = new Tree(4);

console.log(bigTree.value)
bigTree.insert(2);
bigTree.insert(12);
console.log(bigTree.left.value)
console.log(bigTree.right.value)

bigTree.depthFirstTraversal();
*/

/**
 ====================================================================================================
                                                    GRAPH TRAVERSAL
 
 ====================================================================================================
 */
 const graph = require("./Tree_Graphs/GraphTraversal/graphTraversal")
 const testGraph = require("./Tree_Graphs/GraphTraversal/testGraph")
 graph(testGraph.vertices[0], vertices => {console.log(vertices.data)})