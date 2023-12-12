//  var a;
// a = 5;
// alert(a);
// document.write("Sandeep")
// document.getElementById("h").innerHTML="S";
//  let z = 'hi';
//  let b = 55;
//  var c = z+b
//  console.log(c);

//  let x;

//  let y='Shelli';
//  x='Sandeep'; 
//  console.log(x+y);

//  let d = 4;
//  console.log(++d);
//  console.log(--d);

 
//  z='hello'
//  console.log(`Sandeep${z}`)

//  let v = (2>4 || 2>1);
//  console.log(v)

//  let age = 18;
//  let votercard = 'no'
//  if(age>18 && votercard=='yes'){
//     alert("you are eligible for vote");
//  }
//  else if(age==18){
//     alert("Congratulations")
//  } 
//  else{
//     alert("you are not eligible to vote");
//  }

//  let login = 1;
//  let option=login==1?"login":'logout';
//  document.write(option)
// //  if(login == 0){
// //     document.write("login");}
// //     else{document.write(" "+"logout");
// //  }

//  let user;
//  alert(user ?? "Guest user");

// //  let input= 'y'
// // //  console.log(typeof input)
// // if(input==1){
// // document.write("continue...")
// // }else if(input=='y'){
// //    document.write("continue...")
// // }else if(input=='yes'){
// //    document.write("continue...")
// // }else if(input==0){
// //    document.write("break")
// // }else if(input=='n'){
// //    document.write('break')
// // }else if(input=='no'){
// //    document.write("break")
// // }
// // else{
// //    document.write("End")
// // }
// let input = 0
//  switch(input){
//    case 1:
//       document.write("continue..");
//       break;
//    case 'y':
//       document.write("continue...")
//       break;
//    case 'yes':
//       document.write("continue...")
//       break;
//    case 0:
//       document.write("break...")
//    case 'n':
//       document.write("break...")
//    case 'no':
//       document.write("brea...")
//    default:
//       document.write("End");
// }

// let count =1;
// while(count<=10){
//    document.write("SS");
//    count+=11;
// }

// let num = 1;
// let sum = 0;
// while(num>=100){
//    if(num%2==0){
      
//       sum = sum+num;
//    }
//    num++;
// }
// document.write(sum)

// // let one = 1;
// // do{
// //    document.write("baka");
// //    one++;
// // }while(one<=30)

// // for(let you = 1; you<=10; you++){
// //    document.write("Sandeep")
// // }

// // for(let hum =1; hum<=10; hum++){
// //    document.write(hum);
// //    document.write("<br>");
// //    for(let hum1 = 1; hum1<2; h++){
// //       document.write("Sandeep");
// //       document.write("<br>");
// //    }
   
// // }

// let statement = 10;
// while(statement<=15){
//    document.write("statement");
//    if(statement==3){
//       continue;
//    }
// }
// let number = 2+"5";
// console.log(typeof number);
// console.log(number);

// let a = 34;
// console.log(a);
// console.log(typeof a);
// a = String(a);
// console.log(typeof a);
// a = Boolean(a);
// console.log(typeof a);

// let a = "Sandeep";
// console.log(a.length);

// let a = "Sandeep Thakur";
// let c = a.lastIndexOf("Thakur");
// let d = a.indexOf("Thakur")
// console.log(c);
// console.log(d);

// let book = ["maths","English","Java",1,2,3]
// let d = ["Javascript","Phthon"];
// console.log(book.concat(d));
// book.push("Hindi");

// book.unshift("Hindi");
// book.pop();
// let b = book.indexOf(1);
// let c = book.lastIndexOf(1);
// console.log(b);
// console.log(c);

// let a = "This is a random text";
// let c = a.split(" ");
// console.log(c);

// let pages = [
//     ["maths",["300","700"]],
//     ["Python","500"]];
// let take = pages[0][1][1]; 
// console.log(take)

let book = ["Maths","English","Python"];
let lenght = book.length;
for(i=0;i<length;i++){
console.log(`Element ${i}`);
}
