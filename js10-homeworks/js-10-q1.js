// Using an example, explain the difference between block,global and function scope in variables.

//Global scope means variables are accessible from anywhere in the code. Function scope means variables are accessible only within the function they are declared in. Block scope means variables are accessible only within the block (e.g., within {}) they are declared in

const idk = "global";

console.log(idk); //We have access







function scope() {
  const scop = "this is function scope";
  console.log(scop);   //We have access
}

scope()
//console.log(scop)  We do not have direct access






function block() {
  // console.log(block1)  We do not have  access
  if (true) {
    const block1 = "this is block";
    console.log(block1); //We have access
  }
}
//console.log(block1)  We do not have direct access
block();
