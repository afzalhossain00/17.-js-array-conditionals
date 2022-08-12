var numbers = [78, 45, 98, 45];
// use push to add element to an array in last position
numbers.push(63);
console.log(numbers);
var friends = ['balam', 'salam', 'kalam'];
friends.push('gelam', 'gelam');
friends.push('pailam');
// use push to add element to an array in first position
friends.unshift("first");
console.log(friends);
// use pop to get rid of the last element 
// friends.pop();
var element = friends.pop();
// use to get rid of the first element 
friends.shift();
console.log(friends);
console.log(element);