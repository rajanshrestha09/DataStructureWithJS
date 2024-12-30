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


const insert = new LinkedList()
insert.insertAtBegining(4)
console.log(insert);
insert.insertAtBegining(6)
console.log(insert);
insert.insertAtBegining(11)
console.log(insert);
insert.insertAtEnd(40)
console.log(insert);
