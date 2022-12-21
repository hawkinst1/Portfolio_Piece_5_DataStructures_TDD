const assert = require ("chai").assert;
const expect =  require ("chai").expect;

const LinkedListCreation = require("../LinkedListCreation");

describe("insertAtHead", () =>{
    it("Adds a node to the head of the list", () => {
        const newList = new LinkedListCreation();
        newList.insertAtHead("item1");
        const previousHead = newList.head;
        newList.insertAtHead("item2")

        expect(newList.head.data).to.equal("item2");
        expect(newList.head.next).to.equal(previousHead);
        expect(newList.length).to.equal(2); 
    });
});

describe("getNodeByIndex", () => {
    describe("with an index less than 0", () => {
        it("returns null", () => {
            const newList = new LinkedListCreation();
            newList.insertAtHead("item1");

            expect(newList.getNodeByIndex(-1)).to.be.null;         
        });
    });
    describe("with index greater length than list", () => {
        it("returns null", () =>{
            const newList = new LinkedListCreation();
            newList.insertAtHead("item1");

            expect(newList.getNodeByIndex(1)).to.be.null;   
        });
    });
    describe("index at position 0", () => {
        it("gets the head of the list", () =>{
            const newList = new LinkedListCreation();
            newList.insertAtHead("node-1");

            expect(newList.getNodeByIndex(0).data).to.equal("node-1")
        });
    });
    describe("index at position middle", () => {
        it("gets the node in the required position", () =>{
            const newList = new LinkedListCreation();
            newList.insertAtHead("Node-4"); //3
            newList.insertAtHead("Node-3"); //2
            newList.insertAtHead("Node-2"); //1
            newList.insertAtHead("Node-1"); //0
            
            expect(newList.getNodeByIndex(2).data).to.equal("Node-3");
        });
    });
})

describe("addtoTail", () => {
    it("adds a node to the end of the linked list", () => {
        const newList = new LinkedListCreation(); //create
        newList.insertAtHead("head-Node"); // add head item

        newList.insertAtTail("tail-Node"); // add behind the head.
        //we expect the tail node to be the this.head.next.value
        expect(newList.head.next.data).to.equal("tail-Node");
        expect(newList.length).to.equal(2);
    });
    it("Makes the data passed, the head node if list is empty", () => {
        const newList = new LinkedListCreation(); //create
        //no head creation method called
        newList.insertAtTail("data");

        expect(newList.head.data).to.equal("data");
        expect(newList.length).to.equal(1);
    });
    it("will iterate the list until the last node is found if a tail already exists",()=>{
        const newList = new LinkedListCreation(); //create
        newList.insertAtHead("Node-1"); 
        newList.insertAtHead("Node-2"); 
        //expect the node at length -1's next.data to be what we pass in to add to the tail
        //expect length to +1
        newList.insertAtTail("node-3");
        expect(newList.getNodeByIndex(1).next.data).to.equal("node-3");

        expect(newList.length).to.equal(3);
    });
});
/* 
describe("removeNodeHead",() => {
    describe("empty list", ()=> {
        it("returns null", () => {
            const newList = new LinkedListCreation();
            expect(newList.removeNodeHead()).to.be.null; 
        });
    });
    describe("single node present in list", ()=> {
        it("returns null", () => {
            //if there is only one thing to remove it should then return an empty list where data and next is null
            const newList = new LinkedListCreation();
            newList.insertAtHead("node-1");

            expect(newList.removeNodeHead()).to.be.null; 
        }); 
    });
    describe("nodes present in list", ()=> {
        it("returns the next node data as the new head", () => {
            //if there is a head then set the current head.next as the head and remove the current one fomr the list
            const newList = new LinkedListCreation();
            newList.insertAtHead("Node-1"); // head to be beheaded
            newList.insertAtTail("Node-2"); // new head -> its data is the {this.head}
            newList.insertAtTail("Node-3"); // tail
            newList.insertAtTail("Node-4"); // tail

            newList.removeNodeHead();

            expect(newList.head.data).to.equal("Node-2");
            expect(newList.length).to.equal(3);
        });
    });
});
 */
 describe("removeNodeTail", () => {
    describe("empty list", ()=> {
        it("returns null", () => {
            const newList = new LinkedListCreation();

            expect(newList.removeNodeTail()).to.be.null; 
        });
    });
    describe("single node present in list", ()=> {
        it("returns null", () => {
            const newList = new LinkedListCreation();
            newList.insertAtHead("node-1");

            expect(newList.removeNodeTail()).to.be.null; 
            //if there is only one thing to remove it should then return an empty list where data and next is null
        });
    });
    describe("2 or more nodes present in list", ()=> {
        it("returns null", () => {
            //removing the last element should mean that the penultimate node has no next, 
            //and the list length--
            // checking by index where index is the length of the arr-1, then we can predict the data in that
            const newList = new LinkedListCreation();
            newList.insertAtHead("Node-1"); // head 
            newList.insertAtTail("Node-2"); // tail
            newList.insertAtTail("Node-3"); // tail -> takes place as new tailend
            newList.insertAtTail("Node-4"); // tail to be cut off

            newList.removeNodeTail();

            expect(newList.length).to.equal(3);
            expect(newList.getNodeByIndex(2).next).to.be.null;
            expect(newList.getNodeByIndex((newList.length-1)).data).to.equal("Node-3");
        });
    });
   
}); 