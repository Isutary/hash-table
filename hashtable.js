let hashTable = {
    setup: function (length) {
        // helper function for ensuring length of hash table is prime
        function nextPrime (num) {
            function isPrime(n) {
                if (n <= 1) throw new Error("Length must be greater then 1!");
                for (let i=2; i<=Math.sqrt(n); i++) {
                    if (n % i == 0) return false;
                }
                return true;
            }
            while (!isPrime(num)) num++;
            return num;
        }

        this.length = nextPrime(length);
        this.numberOfElements = 0;
        this.table = [];
        for (let i = 0; i < this.length; i++) this.table[i] = [];
    },
    hashFunction: function (input) {
        let sum = 0;
        input = input.toLowerCase();
        for (let i = 1; i < input.length; i++) {
            sum += input.charCodeAt(i) - 96;
        }
        return sum % this.length;
    },
    put: function (key, value = key) {
        // helper function for resizing hash table when # of elements equals the length of table
        function resize(table) {
            let oldTable = JSON.parse(JSON.stringify(table));
            Object.setPrototypeOf(oldTable, table);
            table.setup(2*table.length);
            for (let element of oldTable) {
                table.put(element.key, element.value);
            }
        }

        if (this.numberOfElements >= this.length) resize(this); 
        let index = this.hashFunction(key);
        this.table[index].push({
            key: key,
            value: value
        });
        this.numberOfElements++;
    },
    includes: function (key) {
        let index = this.hashFunction(key);
        for (let element of this.table[index]) {
            if (element.key == key) return true;
        }
        return false;
    },
    find: function (key) {
        let index = this.hashFunction(key);
        for (let element of this.table[index]) {
            if (element.key == key) return element.value;
        }
    },
    remove: function (key) {
        let index = this.hashFunction(key);
        for (let i=0; i<this.table[index].length; i++) {
            if (this.table[index][i].key == key) {
                this.table[index].splice(i, 1);
                this.numberOfElements--;
                return true;
            }
        }
        return false;
    },
    clear: function () {
        this.setup(this.length);
    },
    [Symbol.iterator]: function() {
        let i=0, j=0;
        let self = this;
        return {
            [Symbol.iterator]() { return this; },
            next: function next () {
                if (j < self.table[i].length) {
                    j++;
                    return {
                        value: self.table[i][j-1],
                        done: false
                    }
                }
                else if (i < self.table.length - 1) {
                    i++;
                    j = 0;
                    return next();
                }   
                else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

export default hashTable;