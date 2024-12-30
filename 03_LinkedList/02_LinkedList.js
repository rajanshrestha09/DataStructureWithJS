// Create Node
class Node{
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}

// Create LinkedList
class LinkedList{
    constructor(){
       this.head = null
    }
}

// Insert at the start/head
LinkedList.prototype.insertAtBegining = function(data){
    const newNode = new Node(data)
    this.head = newNode
}

// Insert at the end
// 1. Take data
// 2. Convert it to Node
// 3. Check
//      if head is null => add
//      if head is not null => move to end => add

// Move to end
//     Assume head is last
//     verify(last.next == null)
//         add
//         not null
//             update last with new value
LinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data)
    if(!this.head){
        this.head = newNode
    }

    let last = this.head
    while(last.next){
        last = last.next
    }

    last.next = newNode
}

// Find node
LinkedList.prototype.findNode = function(data){
    let current = this.head
    while(current){
        if(current.data == data){
            return current
        }

        current = current.next
    }
    return null;

}

// Insert value at given node
LinkedList.prototype.insertAtGivenNode = function (prevNode, data) {
    console.log("here");
    
    if (!prevNode) {
        console.log("Please provide Previous node");
        return
    }
    const newNode = new Node(data, prevNode.next)
    prevNode.next = newNode
}


// Print all element in linked list
LinkedList.prototype.printAllElement = function(){
    let current = this.head
    while(current){
        console.log(current);
        current = current.next
    }
}

const insert = new LinkedList()

insert.insertAtBegining(11)
insert.insertAtEnd(40)
insert.insertAtGivenNode(insert.findNode(11), 15)
insert.insertAtGivenNode(insert.findNode(15), 25)
insert.printAllElement();
