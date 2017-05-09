/**
 * For details:
 * http://docs.oracle.com/javase/8/docs/api/java/util/package-summary.html
 * https://docs.oracle.com/javase/tutorial/collections/
 *
 */
namespace collections {

    export interface Iterable<T> {
        iterator(): Iterator<T>;
    }
    /**
     * An interface for visiting each entry in a collection
     */
   export interface Iterator<T> {
        hasNext(): boolean;
        next(): T;
    }

   export class StringIteratorImpl implements Iterator<String> {
      private counter : number = 0;

      constructor(private theStringCollection: String[]) {

      }

      hasNext() : boolean{
        return this.counter < this.theStringCollection.length;
      }

      next() : String {
        if(this.hasNext()) {
          return this.theStringCollection[this.counter++];
        } else {
          return null;
        }
      }
    }

    export class ListIteratorImpl implements Iterator<any> {
       private counter : number = 0;

       constructor(private theListCollection: List<any>) {

       }

       hasNext() : boolean {
         return (this.counter < this.theListCollection.size());
       }

       next() : any {
         if(this.hasNext()) {
           return this.theListCollection.list[this.counter++];
         } else {
           return null;
         }
       }
     }


/*    class SetIteratorImpl implements Iterator<Set<any>> {
      private counter : number = 0;

      constructor(private theDetCollection: Set<any>) {

      }

      hasNext() : boolean{
        return this.counter < this.theDetCollection.length;
      }

      next() : Set<any> {
        if(this.hasNext()) {
          return this.theDetCollection[this.counter++];
        } else {
          return null;
        }
      }
    }*/

    /**
     * A bunch of objects
     */
    export interface Collection<T> extends Iterable<T> {

        size(): number;

        isEmpty(): boolean;

        contains(e: any): boolean;

        iterator(): Iterator<T>;

        toArray(): T[];

        add(e: T): boolean;

        remove(T: any): boolean;

        addAll(col: Collection<T>): boolean;

        removeAll(col: Collection<any>): boolean;

        containsAll(col: Collection<any>): boolean;

        retainAll(col: Collection<any>): boolean;

        clear(): void;

    }

    export class List<T> implements List<T> {
        list : T[] = [];

        constructior () {
          this.list = [];
        };

        size(): number {
          return this.list.length;
        };

        isEmpty(): boolean {
          return this.list.length == 0;
        };

        contains(element: any): boolean {
          for(let el of this.list){
            console.log(el);
            if(element == el) {
              return true;
            }
          }
          return false;
        };

        iterator(): Iterator<T> {
            return new ListIteratorImpl(this);
        };

        toArray(): T[] {
          return this.list;
        };

        add(element: any): boolean {
          this.list = this.list.concat([element]);
          return true;
        };

        remove(element: any): boolean {
          let idx = this.lastIndexOf(element);
          if(idx != -1) {
            this.list = this.list.splice(idx,1);
            return true;
          }
          return false;
        };

        lastIndexOf(element: any): number {
          let idx = 0;
          for(let el in this.list) {
            idx++;
            if(element == el) {
              return idx;
            }
          }
          return null;
        };

        addAll(col: Collection<T>): boolean {
          let modified = false;
          for(let el in col) {
            if(this.add(el)) {
              modified = true;
            }
          }
          return modified;
        };

        removeAll(col: Collection<any>): boolean {
          let modified = false;
          for(let el in col) {
            if(this.remove(el)) {
              modified = true;
            }
          }
          return modified;
        };

        containsAll(col: Collection<any>): boolean {
          let containsAll = false;
          for(let el in col) {
            if(this.contains(el)) {
              containsAll = true;
            } else {
              return containsAll = false;
            }
          }
          return containsAll;
        };

        retainAll(col: Collection<any>): boolean {
          let modified = false;
          for(let element in this.list) {
            if (!col.contains(element)) {
              this.remove(element);
              modified = true;
            }
          }
          return modified;
        };

        clear(): void {
          this.list = [];
        };

        addAllAtIndex(index: number, col: Collection<T>): boolean {
          let breakIndex = index-1;
          let arrayToInsert = col.toArray();
          this.list = this.list.slice(0, breakIndex).concat(arrayToInsert, this.list.slice(breakIndex));
          return true;
        };

        get(index: number): T {
          return this.list[index];
        }

        set(index: number, element: T): T {
          this.list = this.list.slice(0,index).concat(element,this.list.slice(index));
          return this.get(index);
        }

        addAtIndex(index: number, element: T): void {
          let breakIndex = index-1;
          this.list = this.list.slice(0, breakIndex).concat(element, this.list.slice(breakIndex));
        }

        removeAtIndex(index: number): T {
          let toRemove = this.get(index);
          this.remove(toRemove);
          return toRemove;
        }

        subList(fromIndex: number, toIndex: number): List<T> {
          let sublistarr = this.list.slice(fromIndex, toIndex);
          let sublist = this;
          this.list = sublistarr;
          return sublist;
        }

      }


      export class Set<T> implements Set<T> {
          values: T[] = [];

          constructor(valuesToAdd?: Collection<T>) {
            if(valuesToAdd) {
              for(let value of valuesToAdd.toArray()) {
                this.add(value);
              }
            } else {
              this.values = [];
            }
          };

          size(): number {
            return this.values.length;
          }

          isEmpty(): boolean {
            return this.values.length === 0;
          }

          contains(value: T): boolean {
            return this.values.indexOf(value) === 1;
          }

          toArray(): T[] {
            return [...this.values];
          }

          add(value: T): boolean {
            const index = this.values.indexOf(value);
            if (index === -1) {
              this.values.push(value);
              return true;
            } else {
              return false;
            }


          }

          remove(value: T): boolean {
            const index = this.values.indexOf(value);

            if (index === -1) {
              return false;
            }

            this.values.splice(index, 1);

            return true;
          }

          clear() {
            this.values.length = 0;
          }

      }

    /**
     * A collection with set semantics
     */
     export interface Set<T> extends Collection<T> {
    }

    /**
     * A collection with indices
     */
     export interface List<T> extends Collection<T> {

        addAllAtIndex(index: number, col: Collection<T>): boolean;

        get(index: number): T;

        set(index: number, element: T): T;

        addAtIndex(index: number, element: T): void;

        removeAtIndex(index: number): T;

        indexOf(o: any): number;

        lastIndexOf(o: any): number;

        subList(fromIndex: number, toIndex: number): List<T>;

    }

    /**
     * A key value pair
     */
     export interface Entry<K,V> {

        getKey(): K;

        getValue(): V;
    }

    /**
     * A set of keys mapping to values
     */
     export interface Map<K,V> {

        size(): number;

        isEmpty(): number;

        containsKey(key: any): boolean;

        containsValue(value: any): number;

        get(key: any): V;

        put(key: K, value: V): V;

        remove(key: any): V;

        putAll(map: Map<K, V>): void;

        clear(): void;

        keySet(): Set<K>;

        values(): Collection<V> ;

        entrySet(): Set<Entry<K, V>> ;

    }
}
