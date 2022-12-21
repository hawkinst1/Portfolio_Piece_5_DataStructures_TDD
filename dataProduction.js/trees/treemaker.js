class Tree{
    constructor(data){
        this.data = data;
        this.children = [];
        this.size = 1;
    }

    addChild(childData){
        if(childData instanceof Tree){
            this.children.push(childData);
        }
        this.children.push(new Tree(childData));
        this.size++;
    }

    removeChild(childToRemove){
        const childrenLength = this.children.length;

        this.children = this.children.filter(child => {
            if(childToRemove instanceof Tree){
                return childToRemove !== child
            } else {
                return child.data !== childToRemove
            }
        })
        //needed to then remove the nodes attached. else it would be akin to taking a node out of 
        // a linked list. 
        if(childrenLength === this.children.length){
            this.children.forEach(child => child.removeChild(childToRemove));
        }
        this.size --;
    }

    depthFirstTraversal(){
            console.log(this.data)
            this.children.forEach(child => child.depthFirstTraversal())
    }

    breadthFirstTravel(){
        let queue = [this];
        while (queue.length > 0){
            const current = queue.shift()
            console.log(current.data);
            queue = queue.concat(current.children);
        }
    }

    treePrint(level = 0){
        let result = "";
        for (let a = 0; a < level; a++) {
            result += "-- ";
        }
        result += this.data;
        console.log(result)
        this.children.forEach(child => child.treePrint(level + 1));
    }
}

module.exports = Tree;