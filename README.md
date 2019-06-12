# hash-table
Hash table implementation in JavaScript.

Interface consists of following functions:
-setup -- takes one parameter(length) and creates empty table of that length,
-hashFunction -- takes one parameter(input) that needs to be hashed, default hash function is provided but it can be changed if need be,
-put -- takes two parameters(key and value) and inserts { key, value } pair in to the table,
-includes -- takes one parameter(key) and checks if it exists in the table,
-find -- takes one parameter(key) and returns value with that key from the table if it exists, otherwise returns undefined,
-remove -- takes one parameter(key) and removes element with that key from table, returns true if element is found and deleted, false otherwise,
-clear -- clears the table
-iterator is defined and table is iterable
