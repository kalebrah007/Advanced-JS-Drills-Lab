function sayHello(name, age){
  console.log(name);
  console.log(age);
  console.log(this);
}
//sayHello.call('Jill', 'Jack', 25);

//let args=['Jack', 25];
//sayHello.apply('Jill', args);

let greeters=sayHello.bind('Jill');
greeters('Jack', 25);