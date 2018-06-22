function testThis(){
  console.log(this);
}
testThis();
let btn=document.getElementById('big-button');
btn.addEventListener('click', testThis);
console.log('end of script');