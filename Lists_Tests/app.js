const Node = require("./nodeCreation");
const LinkedListCreation = require("./LinkedListCreation");
const doubleLinkedListCreation = require("./doubleLinkedListCreation");
const queueCreation = require("./QueueCreation");
const stackMaker = require("./StackCreation");

const newStack = new stackMaker();

newStack.addToStack("Book 1");
newStack.addToStack("Book 2");
newStack.addToStack("Book 3");

newStack.printStack();

newStack.removeStack();

newStack.printStack();

