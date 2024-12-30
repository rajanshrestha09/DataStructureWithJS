class Node {
    constructor(data, next = null) {
        this.data = data,
            this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
}

// Insert value at given node
LinkedList.prototype.insertAtHead = function (prevNode, data) {
    if (!prevNode) {
        console.log("Please provide Previous node");
        return
    }
    const newNode = new Node(data, prevNode.node)
    prevNode.next = newNode
}





