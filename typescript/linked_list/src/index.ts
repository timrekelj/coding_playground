export class ListNode {
    public value: number | undefined;
    public next: ListNode | undefined;


    constructor(value: number | undefined, next: ListNode | undefined) {
        this.value = value;
        this.next = next;
    }
}

export class LinkedList {
    start: ListNode;

    constructor() {
        this.start = new ListNode(undefined, undefined);
    }

    public add(value: number) {
        var newNode = new ListNode(value, this.start);
        this.start = newNode;
    }

    public remove(value: number): boolean {
        var current:ListNode = this.start;
        while (true) {
            if (current.next == undefined)
                return false;
            else if (current.next.value == value) {
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }
    }

    public contains(value: number): boolean {
        var current:ListNode = this.start;
        while (true) {
            if (current.value == value)
                return true;
            else if(current.next == undefined)
                return false;
            current = current.next;
        }
    }

    public toString(): string {
        var out : string = '[';
        var current:ListNode = this.start;
        while (true) {
            if (current.next?.next == undefined) break;
            out += current.value + ' -> ';
            current = current.next;
        }
        return out + current.value + ']';
    }
}

var list: LinkedList = new LinkedList();

for (var i = 1; i <= 10; i++) {
    list.add(i);
}
list.remove(7);

console.log("3: " + list.contains(3));
console.log("7: " + list.contains(7));
console.log(list.toString());
