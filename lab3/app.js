
    let x = 10;
    let y = "Hello"
    const z = 20.2;

    //Array
    const arr = [1,"Test",3,4,5];
    const car = []
    car[0] = "BMW";
    car[1] = "AUDI"
    const fruit = new Array("Apple","Banana","Orange");
    const profile = [[1,2,3],"name","age"]

    console.log(profile[0][1]);
    console.log(fruit);

//array methods
fruit.push("Mango");
fruit.shift();
console.log(fruit);

arr.map ((item) => {
    console.log(item);
    });


    //object
    const person = {
        fitstName: "john",
        lastName: "Done",
        age: 50,
        eyeColor: ["blue", "black"],
        fullName: function(){
            return this.fitstName + " " + this.lastName;
        }
    };

    person.adress = {
        street: "Sth Avenue",
        city: "New York"
    };

    console.log(person.fullName());

//function
function sum(a,b) {
    return a + b;
}
 function sub(a,b) {
    console.log(a - b);
 }

 const mull = (a,b) => {
    return a * b;
 }

 const div = (a,b) => a/b;

 const result = sum=(10,20);
 console.log(result);

document.getElementById("message1").innerHTML ="Hello World";


 