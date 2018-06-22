let btn=document.getElementById('big-button');
btn.addEventListener('click', function(){
  console.log(this);
  //style transform
  this.style.textTransform='uppercase';
});
console.log('end of script');