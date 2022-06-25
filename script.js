// var a = 5;
// var b = "value";
// var c = true;
// var x = a ;
// var y = b ;
// var z = c;
// x = 4;
// y = "guvi";
// z = null;

// console.log(a,b,c,x,y,z);

// var arr1 = [1,2,3];
// var obj1 = { name :"vidhya" , age:30};
// var arr2 = arr1;
// var obj2 = obj1;

// arr2[1] = 6;
// obj1.name = "guvi";

// console.log(arr1,arr2,obj1,obj2);

// var student = {
//     "id" : "1",
//     "name" : "vidhya",
//     "email" : "vidhya1@gmail.com"
// };
// // var student = {
// //     id : "1",
// //     name : "vidhya",
// //     email : "vidhya1@gmail.com"
// // };
// console.log(student.id);

// console.log(student["id"]);

let array =
[
    {
      "id": "1",
      "name": "Lura Senger",
      "email": "Xander_Collier@yahoo.com"
    },
    {
      "id": "2",
      "name": "Wilburn Weber",
      "email": "Bennett_Kreiger11@yahoo.com"
    },
    {
      "id": "3",
      "name": "Tyrique Hahn",
      "email": "Juston.Altenwerth@yahoo.com"
    },
    {
      "id": "4",
      "name": "Lenny Bailey",
      "email": "Guiseppe_Hegmann@yahoo.com"
    },
    {
      "id": "5",
      "name": "Vladimir Keeling",
      "email": "Louisa_Walsh18@hotmail.com"
    },
    {
      "id": "6",
      "name": "Kellie Crona",
      "email": "Chandler_Abernathy@yahoo.com"
    },
    {
      "id": "7",
      "name": "Carolina White",
      "email": "Royal50@hotmail.com"
    },
    {
      "id": "8",
      "name": "Alfredo Conn",
      "email": "Clarabelle34@hotmail.com"
    },
    {
      "id": "9",
      "name": "Stan Shanahan",
      "email": "Lamar.McClure@hotmail.com"
    },
    {
      "id": "10",
      "name": "Marvin Fay",
      "email": "Osbaldo58@hotmail.com"
    },

]
for (var i in array) {
    console.log(array[i]["id"], array[i].name, array[i].email);
}

for ( var i=0; i<=4; i++){
    console.log(array[i]["id"], array[i].name, array[i].email);
}

