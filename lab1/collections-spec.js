describe("The set implementation ", function () {
    it("Create a set and check the size and that its empty", function () {
        var collection = new collections.Set();
        expect(collection.size()).toBe(0);
        expect(collection.isEmpty()).toBe(true);
    });
    it("Create a set and check the size and that its empty", function () {
        var collection = new collections.Set();
        collection.add(6);
        collection.add(0);
        collection.add(0);
        expect(collection.size()).toBe(2);
        expect(collection.isEmpty()).toBe(false);
        expect(collection.contains(0)).toBe(true);
    });
    it("Create a set and check the size and that its empty", function () {
        var collection = new collections.Set();
        collection.add(6);
        collection.add(0);
        collection.add(4);
        expect(collection.size()).toBe(3);
        expect(collection.isEmpty()).toBe(false);
        collection.remove(0);
        expect(collection.size()).toBe(2);
    });
    it("Create a set and check the size and that its empty", function () {
        var collection = new collections.Set();
        expect(collection.size()).toBe(0);
        expect(collection.isEmpty()).toBe(true);
    });
});
describe("The list implementation ", function () {
    it("Create a list and check the size and that its empty", function () {
        var collection = new collections.List();
        expect(collection.size()).toBe(0);
        expect(collection.isEmpty()).toBe(true);
    });
    it("Create a list and add object and check tat the size is 1", function () {
        var collection = new collections.List();
        collection.add(2);
        expect(collection.size()).toBe(1);
    });
    it("Create a list and add object and verify that it exists in the list", function () {
        var collection = new collections.List();
        var myNumber = 2;
        collection.add(myNumber);
        expect(collection.contains(myNumber)).toBe(true);
    });
    it("Create a list and add multiple objects and verify the size increases", function () {
        var collection = new collections.List();
        var myString = "Hej";
        collection.add(myString);
        collection.add(myString);
        collection.add(myString);
        collection.add(myString);
        collection.add(myString);
        expect(collection.size()).toBe(5);
    });
    it("Create a list and add multiple objects and verify that iterator works", function () {
        var collection = new collections.List();
        var myString = "Hej";
        collection.add(myString);
        collection.add(myString);
        collection.add(myString);
        collection.add(myString);
        collection.add(myString);
        var collectionItr = collection.iterator();
        expect(collectionItr.next()).toBe(myString);
        expect(collectionItr.hasNext()).toBe(true);
    });
    it("Create a list and add multiple objects and verify that AddAllAtindex works", function () {
        var collection = new collections.List();
        var myString = "Hej";
        collection.add(myString);
        collection.add(myString + "hopp");
        collection.add(myString + "plopp");
        collection.add(myString + "stopp");
        var collectionToAdd = new collections.List();
        collectionToAdd.add("La");
        collectionToAdd.add("Di");
        collectionToAdd.add("Da");
        expect(collection.size()).toBe(4);
        collection.addAllAtIndex(3, collectionToAdd);
        expect(collection.size()).toBe(7);
    });
    it("Create a list and add multiple objects and verify that Clear works", function () {
        var collection = new collections.List();
        var myString = "Hej";
        collection.add(myString);
        collection.add(myString + "hopp");
        collection.add(myString + "plopp");
        collection.add(myString + "stopp");
        collection.add("La");
        collection.add("Di");
        collection.add("Da");
        expect(collection.size()).toBe(7);
        collection.clear();
        expect(collection.size()).toBe(0);
    });
    it("Create a list and add multiple objects and verify that Get works", function () {
        var collection = new collections.List();
        var myString = "Hej";
        collection.add(myString);
        collection.add(myString + "hopp");
        collection.add(myString + "plopp");
        collection.add(myString + "stopp");
        collection.add("La");
        collection.add("Di");
        collection.add("Da");
        expect(collection.size()).toBe(7);
        var objectToGet = collection.get(0);
        expect(objectToGet).toBe("Hej");
    });
    it("Create a list and add multiple objects and verify that Set works", function () {
        var collection = new collections.List();
        var myString = "Hej";
        collection.add(myString);
        collection.add(myString + "hopp");
        collection.add(myString + "plopp");
        collection.add(myString + "stopp");
        collection.add("La");
        collection.add("Di");
        collection.add("Da");
        expect(collection.size()).toBe(7);
        var objectSet = collection.set(0, "Walla");
        expect(objectSet).toBe("Walla");
    });
});
describe("The map implementation ", function () {
});
describe("The entry implementation ", function () {
});
//# sourceMappingURL=collections-spec.js.map