import { LinkedList } from "../src/index"

var list:LinkedList = new LinkedList();

test("list is empty", () => {
    expect(list.toString()).toBe("[undefined]");
});

test("list is filled with numbers from 1 to 10", () => {
    for (var i = 1; i <= 10; i++) {
        list.add(i);
    }
    expect(list.toString()).toBe("[10 -> 9 -> 8 -> 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1]");
});

test("list contains 7", () => {
    expect(list.contains(7)).toBe(true);
});

test("list does not contain 7 as it was removed", () => {
    list.remove(7);
    expect(list.contains(7)).toBe(false);
});

test("list is filled with numbers from 1 to 10 without 7", () => {
    expect(list.toString()).toBe("[10 -> 9 -> 8 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1]");
});