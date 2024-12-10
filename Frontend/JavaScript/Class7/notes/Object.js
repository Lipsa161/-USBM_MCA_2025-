//Object(key-value(pairs))

//let student={name:"lipsa",age:21,batch:"MCA",roll:52}; //key=name ,value=lipsa
//key->anydatatype
//console.log(typeof student);

//object is meaningfull but array is not meaningfull
//let stu=[lipsa,21,mca,52];

//using Constructor
const stud=new Object();
stud.name="lipsa";
stud.age=21;
stud.batch="MCA";
stud.roll=52;
console.log(stud);

//Accessing Element
//Bracket notation([])
//Dot notation(.)

//ex: want to access student name ??
console.log(stud["name"]);  //Bracket
console.log(stud.name);     //Dot

//Modify Element
stud.name="lipsa";
console.log(stud);
//task:
//to do: create an array of object of 50 students

//JSON : javascript object notation

//nested object
let person={
    name:"lipsa",
    age:21,
    rollno:52,
    address:{
        city:"kdpr",
        post:"bamara",
        pin:754153,
    }

}

//social media
let user={
    username:"lipsa",gamil:"lipsu123@gmail.com",gender:"female",age:21,comment:["abs","def","efg"],
    address:{city:"bbsr",pin:754153,state:"odisha"}
}
//
//
//
//
//
//
//
