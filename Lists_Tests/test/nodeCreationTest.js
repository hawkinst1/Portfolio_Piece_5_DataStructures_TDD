const assert = require ("chai").assert;
const expect =  require ("chai").expect;

const Node = require("../nodeCreation");

describe("setNextNode", () => {
 /*    describe("is not an instance of Node ", () => {
        it("should throw an error", () => {
            const node1 = new Node("node1");
            expect(node1.setNextNode.bind(node1,"not a node")).to.throw(new Error("Next node must be a member of the Node class"));
        });
    }); */
    describe("passed null data", () => {
        it("set next node as null", () => {
            const node1 = new Node("node1");
            node1.setNextNode(null);

            expect(node1.next).to.equal(null);
        });
    });
    describe("passed an instance of Node", () => {
        it("set next node as node", () => {
            const node1 = new Node("node1");
            const node2 = new Node("node2");
            node1.setNextNode(node2);
            
            expect(node1.next).to.equal(node2);
        });
    });
})

