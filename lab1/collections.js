var collections;
(function (collections) {
    var StringIteratorImpl = (function () {
        function StringIteratorImpl(theStringCollection) {
            this.theStringCollection = theStringCollection;
            this.counter = 0;
        }
        StringIteratorImpl.prototype.hasNext = function () {
            return this.counter < this.theStringCollection.length;
        };
        StringIteratorImpl.prototype.next = function () {
            if (this.hasNext()) {
                return this.theStringCollection[this.counter++];
            }
            else {
                return null;
            }
        };
        return StringIteratorImpl;
    }());
    collections.StringIteratorImpl = StringIteratorImpl;
    var ListIteratorImpl = (function () {
        function ListIteratorImpl(theListCollection) {
            this.theListCollection = theListCollection;
            this.counter = 0;
        }
        ListIteratorImpl.prototype.hasNext = function () {
            return (this.counter < this.theListCollection.size());
        };
        ListIteratorImpl.prototype.next = function () {
            if (this.hasNext()) {
                return this.theListCollection.list[this.counter++];
            }
            else {
                return null;
            }
        };
        return ListIteratorImpl;
    }());
    collections.ListIteratorImpl = ListIteratorImpl;
    var SetIteratorImpl = (function () {
        function SetIteratorImpl(theSetCollection) {
            this.theSetCollection = theSetCollection;
            this.counter = 0;
        }
        SetIteratorImpl.prototype.hasNext = function () {
            return this.counter < this.theSetCollection.size();
        };
        SetIteratorImpl.prototype.next = function () {
            if (this.hasNext()) {
                return this.theSetCollection[this.counter++];
            }
            else {
                return null;
            }
        };
        return SetIteratorImpl;
    }());
    var Collection = (function () {
        function Collection() {
            this.list = [];
        }
        ;
        Collection.prototype.add = function (e) {
            this.list.push(e);
            return true;
        };
        ;
        Collection.prototype.remove = function (e) {
            if (this.contains(e)) {
                var index = this.list.indexOf(e);
                this.list.splice(index, 1);
                return true;
            }
            else {
                return false;
            }
        };
        ;
        Collection.prototype.clear = function () {
            this.list = [];
        };
        ;
        Collection.prototype.contains = function (e) {
            return this.list.indexOf(e) !== -1;
        };
        ;
        Collection.prototype.isEmpty = function () {
            return this.size() === 0;
        };
        ;
        Collection.prototype.size = function () {
            return this.list.length;
        };
        ;
        Collection.prototype.addAll = function (coll) {
            for (var _i = 0, _a = coll.toArray(); _i < _a.length; _i++) {
                var item = _a[_i];
                this.add(item);
            }
            return true;
        };
        ;
        Collection.prototype.removeAll = function (coll) {
            var changed = false;
            for (var _i = 0, _a = this.toArray(); _i < _a.length; _i++) {
                var item = _a[_i];
                if (coll.contains(item)) {
                    this.remove(item);
                    changed = true;
                }
            }
            return changed;
        };
        ;
        return Collection;
    }());
    collections.Collection = Collection;
    var List = (function () {
        function List() {
            this.list = [];
        }
        List.prototype.constructior = function () {
            this.list = [];
        };
        ;
        List.prototype.size = function () {
            return this.list.length;
        };
        ;
        List.prototype.isEmpty = function () {
            return this.list.length == 0;
        };
        ;
        List.prototype.contains = function (element) {
            for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
                var el = _a[_i];
                console.log(el);
                if (element == el) {
                    return true;
                }
            }
            return false;
        };
        ;
        List.prototype.iterator = function () {
            return new ListIteratorImpl(this);
        };
        ;
        List.prototype.toArray = function () {
            return this.list;
        };
        ;
        List.prototype.add = function (element) {
            this.list = this.list.concat([element]);
            return true;
        };
        ;
        List.prototype.remove = function (element) {
            var idx = this.lastIndexOf(element);
            if (idx != -1) {
                this.list = this.list.splice(idx, 1);
                return true;
            }
            return false;
        };
        ;
        List.prototype.lastIndexOf = function (element) {
            var idx = 0;
            for (var el in this.list) {
                idx++;
                if (element == el) {
                    return idx;
                }
            }
            return null;
        };
        ;
        List.prototype.addAll = function (col) {
            var modified = false;
            for (var el in col) {
                if (this.add(el)) {
                    modified = true;
                }
            }
            return modified;
        };
        ;
        List.prototype.removeAll = function (col) {
            var modified = false;
            for (var el in col) {
                if (this.remove(el)) {
                    modified = true;
                }
            }
            return modified;
        };
        ;
        List.prototype.containsAll = function (col) {
            var containsAll = false;
            for (var el in col) {
                if (this.contains(el)) {
                    containsAll = true;
                }
                else {
                    return containsAll = false;
                }
            }
            return containsAll;
        };
        ;
        List.prototype.retainAll = function (col) {
            var modified = false;
            for (var element in this.list) {
                if (!col.contains(element)) {
                    this.remove(element);
                    modified = true;
                }
            }
            return modified;
        };
        ;
        List.prototype.clear = function () {
            this.list = [];
        };
        ;
        List.prototype.addAllAtIndex = function (index, col) {
            var breakIndex = index - 1;
            var arrayToInsert = col.toArray();
            this.list = this.list.slice(0, breakIndex).concat(arrayToInsert, this.list.slice(breakIndex));
            return true;
        };
        ;
        List.prototype.get = function (index) {
            return this.list[index];
        };
        List.prototype.set = function (index, element) {
            this.list = this.list.slice(0, index).concat(element, this.list.slice(index));
            return this.get(index);
        };
        List.prototype.addAtIndex = function (index, element) {
            var breakIndex = index - 1;
            this.list = this.list.slice(0, breakIndex).concat(element, this.list.slice(breakIndex));
        };
        List.prototype.removeAtIndex = function (index) {
            var toRemove = this.get(index);
            this.remove(toRemove);
            return toRemove;
        };
        List.prototype.subList = function (fromIndex, toIndex) {
            var sublistarr = this.list.slice(fromIndex, toIndex);
            var sublist = this;
            this.list = sublistarr;
            return sublist;
        };
        return List;
    }());
    collections.List = List;
    var Set = (function () {
        function Set(valuesToAdd) {
            this.values = [];
            if (valuesToAdd) {
                for (var _i = 0, _a = valuesToAdd.toArray(); _i < _a.length; _i++) {
                    var value = _a[_i];
                    this.add(value);
                }
            }
            else {
                this.values = [];
            }
        }
        ;
        Set.prototype.size = function () {
            return this.values.length;
        };
        Set.prototype.isEmpty = function () {
            return this.values.length === 0;
        };
        Set.prototype.contains = function (value) {
            return this.values.indexOf(value) === 1;
        };
        Set.prototype.toArray = function () {
            return this.values.slice();
        };
        Set.prototype.add = function (value) {
            var index = this.values.indexOf(value);
            if (index === -1) {
                this.values.push(value);
                return true;
            }
            else {
                return false;
            }
        };
        Set.prototype.remove = function (value) {
            var index = this.values.indexOf(value);
            if (index === -1) {
                return false;
            }
            this.values.splice(index, 1);
            return true;
        };
        Set.prototype.clear = function () {
            this.values.length = 0;
        };
        return Set;
    }());
    collections.Set = Set;
    var Entry = (function () {
        function Entry(key, value) {
            this.keyValuePair = {};
            this.keyValuePair[key] = value;
        }
        Entry.prototype.getKey = function () {
            var keyValuePair = this.keyValuePair;
            var key;
            for (var prop in keyValuePair) {
                key = prop;
            }
            return key;
        };
        Entry.prototype.getValue = function () {
            var keyValuePair = this.keyValuePair;
            var value;
            for (var val in keyValuePair) {
                value = keyValuePair[val];
            }
            return value;
        };
        return Entry;
    }());
    collections.Entry = Entry;
    var Map = (function () {
        function Map() {
            this.map = {};
        }
        Map.prototype.put = function (key, value) {
            this.map[key] = value;
            return value;
        };
        Map.prototype.get = function (key) {
            var map = this.map;
            return map[key];
        };
        Map.prototype.remove = function (key) {
            var value = this.map[key];
            delete this.map[key];
            return value;
        };
        Map.prototype.clear = function () {
            this.map = {};
        };
        Map.prototype.putAll = function (map) {
            var mapArr = map.toArray();
            for (var _i = 0, mapArr_1 = mapArr; _i < mapArr_1.length; _i++) {
                var item = mapArr_1[_i];
                this.put(item[0], item[1]);
            }
        };
        Map.prototype.size = function () {
            var map = this.map;
            var count = 0;
            for (var item in map) {
                count++;
            }
            return count;
        };
        Map.prototype.isEmpty = function () {
            return this.size() === 0;
        };
        Map.prototype.containsKey = function (key) {
            return key in this.map;
        };
        Map.prototype.containsValue = function (value) {
            var map = this.map;
            var exists = false;
            for (var k in map) {
                if (map[k] === value)
                    exists = true;
            }
            return exists;
        };
        Map.prototype.toArray = function () {
            var mapArr = [];
            var map = this.map;
            for (var item in map) {
                mapArr.push([item, map[item]]);
            }
            return mapArr;
        };
        Map.prototype.keySet = function () {
            var keySet = new Set();
            var mapArr = this.toArray();
            for (var _i = 0, mapArr_2 = mapArr; _i < mapArr_2.length; _i++) {
                var item = mapArr_2[_i];
                keySet.add(item[0]);
            }
            return keySet;
        };
        Map.prototype.values = function () {
            var valCollection = new Collection();
            var mapArr = this.toArray();
            for (var _i = 0, mapArr_3 = mapArr; _i < mapArr_3.length; _i++) {
                var item = mapArr_3[_i];
                valCollection.add(item[1]);
            }
            return valCollection;
        };
        return Map;
    }());
    collections.Map = Map;
})(collections || (collections = {}));
//# sourceMappingURL=collections.js.map