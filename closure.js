function greeter(personName){
  return function(){
    alert('Hello'+personName+'!');
  }
}
let greetJohn=greeter('John');
let greetJane=greeter('Jane');
greetJohn();
greetJane();
console.log('end of script')