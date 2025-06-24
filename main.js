console.log("method math");

let number=Math.round(2.6);
console.log(number);

let cel=Math.ceil(4.1);
console.log(cel);

let fl=Math.floor(2.5);
console.log(fl);

let ra=Math.random(2);
console.log(ra);

let ab=Math.abs(-2.3);
let bs=Math.abs(2.3);
console.log(ab);
console.log(bs);

let si=Math.sign(2);
console.log(si);

let sq=Math.sqrt(40);
console.log(sq);


let aa = Math.max(5, 10);
let bb = Math.max(0, 150, 30, 20, 38);
let cc = Math.max(-5, 10);
let dd = Math.max(-5, -10);
let ee = Math.max(1.5, 2.5);
console.log(aa);  
console.log(bb);
console.log(cc);
console.log(dd);
console.log(ee);

let random = Math.floor(Math.random() * 11.6);
console.log(random);
let number1 = parseInt(prompt("Guess a no from 1 to 10: "));
console.log(number1);
if(number1 == random){

console.log("You guessed the correct number");
}
else { 
console.log("Guessed the wrong no");
}



let ac="swetha";
console.log("loop");

for(let i=0;i<ac.length;i++){
    console.log(ac.charAt(i));
}
console.log("Stringing first");
let i=(ac.length-1) 
console.log(ac.charAt(i));

console.log("String in vowel");
let b, ie
for (ie=0; ie<=ac.length-1; ie++){
  b = ac[ie]  // or a.charAt(i)
  if (b=="a"|| b=="e" || b=="i" || b=="o" || b=="u" ||
  b=="A"|| b=="E"|| b=="I" || b=="O" || b=="U"){
  console.log(b)
  }
}


console.log("STRING");

let x="Welcome to javascript"
let y=" welcome to javascript"
console.log(x.length);
console.log(x.slice(1,6));
console.log(x.replace("Welcome"," Say hello"));
console.log(y.replaceAll("welcome to ","hi "));
console.log(x.toUpperCase());
console.log(x.toLowerCase());
console.log(x.concat(y));
console.log(x.trim());
console.log(x.trimEnd());
console.log(x.trimStart());
console.log(y.charAt(1));
console.log(y.charCodeAt(1));
console.log(String.fromCharCode(5));