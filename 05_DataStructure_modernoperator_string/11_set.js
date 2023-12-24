/*
     set is collection of unique value ( means no duplicate value in set unlike array)

     set is used in all iterable.
     set  : unique value                     |         array : duplicate value
            order doesn't matter             |                 order does matter
            no index to retrieve value       |                 indexes to retrieve element, arr[index]
            setname.add(value)               |                 arrayname.push(element), arrayname.unshift(element)
            setname.delete(value)            |                 arrayname.pop(), arrayname.shift()
            setname.has(value)               |                 arrayname.includes(element)
            setname.size()                   |                 arrayname.length()

*/

const orderSet = ["pasta", "pizza", "pizza", "risetto", "pasta", "Pizza"];
console.log(orderSet);
