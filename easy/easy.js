person1 = "John";
person2 = "Thomas";

if (person1.length === person2.length) {
    console.log(`The name ${person1} is the same length as ${person2}.`);
} else if (person1.length > person2.length) {
    console.log(`The name ${person1} is longer than ${person2} by ` + (person1.length - person2.length) + ' characters');
} else {
    console.log(`The name ${person2} is longer than ${person1} by ` + (person2.length - person1.length) + ' characters');
}
