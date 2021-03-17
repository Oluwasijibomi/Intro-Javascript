// var tipCalc = function(tip) {
//     if (tip < 50) {
//         return tip * 0.2;
//     } else if (tip > 50 && tip < 200) {
//         return tip * 0.15;
//     } else if (tip > 200) {
//         return tip * 0.1;
//     }
// }

// var tip = [];
// var bill = [124, 48, 268];
// var totalBill = [];
// tip.push(tipCalc(bill[0]), tipCalc(bill[1]), tipCalc(bill[2]));
// totalBill.push(tip[0] + bill[0], tip[1] + bill[1], tip[2] + bill[2])
// console.log(tip);
// console.log(totalBill)


// var hafeez = {
//     name: "hafeez",
//     lastName: "Ibrahim",
//     profession: "web developer",
//     age: 25,
//     family: ["Hakeem", "Malik", "Opeyemi"]
// }

// console.log(hafeez.age)

// var hafeez = new Object();

// hafeez.name = "Hafeez";
// hafeez.girlFriend = "Mona Fischer";

// console.log(hafeez)
// console.log(age)
// var age;
// age = 45;

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calcAge = function() {
//     console.log(2021 - this.yearOfBirth)
// }

// var hafeez = new Person("hafeez", 1995, "Programmer")

// hafeez.calcAge()

var years = [1990, 1993, 1995, 1997, 1999];

var res = []


var arrayCalc = function(arr, fn) {
    

    for (var i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]))
    }

    
}


function ageCalc(el) {
    return 2021 - el
}


arrayCalc(years, ageCalc)

console.log(res)

