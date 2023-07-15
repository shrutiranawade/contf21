/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(arr => {
    if(arr.profession === "developer"){
      console.log(arr);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(arr =>{
    if(arr.profession === "developer"){
      console.log(arr);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newEmp =  {id:4,name:"susan",age:"20",profession:"intern"} ;
  arr.push(newEmp);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.filter(arr =>{
    if(arr.profession != "admin"){
      console.log(arr);
    }
  })
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray =[ {id:4,name:"susan",age:"20",profession:"intern"},
  {id:5,name:"shruti",age:"23",profession:"tester"},
  {id:6,name:"durvesh",age:"15",profession:"designer"} 
];

let concatenateArray  =arr.concat(newArray);

console.log(concatenateArray);
}
