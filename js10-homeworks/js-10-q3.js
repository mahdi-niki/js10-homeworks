// According to your js10 session, write a code that shows why we shouldn't use var?

if (true) {
  var idk3 = 12345;
  let idk2 = 1234567;
}
console.log(idk3); // 12345, even though idk3 was declared inside the if block  and this issue causes problems and bug
console.log(idk2); // idk2 is not defined
