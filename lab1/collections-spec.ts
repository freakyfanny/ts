

describe("The set implementation ", () => {
  it("Create a set and check the size and that its empty", () => {
         let collection : collections.Set<number>  =
             new collections.Set<number>();
         expect(collection.size()).toBe(0);
         expect(collection.isEmpty()).toBe(true);
     });
  it("Create a set and check the size and that its empty", () => {
        let collection : collections.Set<number>  =
            new collections.Set<number>();
        collection.add(6);
        collection.add(0);
        collection.add(0);
        expect(collection.size()).toBe(2);
        expect(collection.isEmpty()).toBe(false);
        expect(collection.contains(0)).toBe(true);
    });
  it("Create a set and check the size and that its empty", () => {
         let collection : collections.Set<number>  =
             new collections.Set<number>();
         collection.add(6);
         collection.add(0);
         collection.add(4);
         expect(collection.size()).toBe(3);
         expect(collection.isEmpty()).toBe(false);
         collection.remove(0);
         expect(collection.size()).toBe(2);
     });
  it("Create a set and check the size and that its empty", () => {
        let collection : collections.Set<number>  =
            new collections.Set<number>();
        expect(collection.size()).toBe(0);
        expect(collection.isEmpty()).toBe(true);
    });


});


describe("The list implementation ", () => {

  it("Create a list and check the size and that its empty", () => {
         let collection : collections.List<number>  =
             new collections.List<number>();
         expect(collection.size()).toBe(0);
         expect(collection.isEmpty()).toBe(true);
     });


     it("Create a list and add object and check tat the size is 1", () => {
         let collection : collections.List<number> =
             new collections.List<number>();
         collection.add(2);
         expect(collection.size()).toBe(1);
     })

     it("Create a list and add object and verify that it exists in the list", () => {
         let collection : collections.List<number> =
             new collections.List<number>();
         let myNumber : number = 2;
         collection.add(myNumber);
         expect(collection.contains(myNumber)).toBe(true);
     });

     it("Create a list and add multiple objects and verify the size increases", () => {
         let collection : collections.List<string> =
             new collections.List<string>();
         let myString : string = "Hej";
         collection.add(myString);
         collection.add(myString);
         collection.add(myString);
         collection.add(myString);
         collection.add(myString);
         expect(collection.size()).toBe(5);
     });

     it("Create a list and add multiple objects and verify that iterator works", () => {
         let collection : collections.List<string> =
             new collections.List<string>();
         let myString : string = "Hej";
         collection.add(myString);
         collection.add(myString);
         collection.add(myString);
         collection.add(myString);
         collection.add(myString);
         let collectionItr = collection.iterator();
         expect(collectionItr.next()).toBe(myString);
         expect(collectionItr.hasNext()).toBe(true);
     });

     it("Create a list and add multiple objects and verify that AddAllAtindex works", () => {
         let collection : collections.List<string> =
             new collections.List<string>();
         let myString : string = "Hej";
         collection.add(myString);
         collection.add(myString + "hopp");
         collection.add(myString + "plopp");
         collection.add(myString + "stopp");
         let collectionToAdd : collections.List<string> =
             new collections.List<string>();
         collectionToAdd.add("La");
         collectionToAdd.add("Di");
         collectionToAdd.add("Da");
         expect(collection.size()).toBe(4);
         collection.addAllAtIndex(3, collectionToAdd);
         expect(collection.size()).toBe(7);
     });

     it("Create a list and add multiple objects and verify that Clear works", () => {
         let collection : collections.List<string> =
             new collections.List<string>();
         let myString : string = "Hej";
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

     it("Create a list and add multiple objects and verify that Get works", () => {
         let collection : collections.List<string> =
             new collections.List<string>();
         let myString : string = "Hej";
         collection.add(myString);
         collection.add(myString + "hopp");
         collection.add(myString + "plopp");
         collection.add(myString + "stopp");
         collection.add("La");
         collection.add("Di");
         collection.add("Da");
         expect(collection.size()).toBe(7);
         let objectToGet = collection.get(0);
         expect(objectToGet).toBe("Hej");
     });

     it("Create a list and add multiple objects and verify that Set works", () => {
         let collection : collections.List<string> =
             new collections.List<string>();
         let myString : string = "Hej";
         collection.add(myString);
         collection.add(myString + "hopp");
         collection.add(myString + "plopp");
         collection.add(myString + "stopp");
         collection.add("La");
         collection.add("Di");
         collection.add("Da");
         expect(collection.size()).toBe(7);
         let objectSet = collection.set(0, "Walla");
         expect(objectSet).toBe("Walla");
     });
});

describe("The map implementation ", () => {

});

describe("The entry implementation ", () => {

});
