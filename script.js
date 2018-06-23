var _friendName = ['aaron', 'brad', 'carl', 'denise', 'emily'];
var _locationName = ['bathroom', 'closet', 'copy room', 'training room', 'accounting', 'payroll', 'hr', 'qual', 'breakroom', 'conference room'];
var _weaponName = ['axe', 'hammer', 'screwdriver', 'saw', 'bamboo stik', 'nail gun', 'drill', 'rope', 'helmet', 'tire iron',
'lug wrench', 'knife', 'revolver', 'shotgun', 'cable', 'candlestick', 'lead pipe', 'harpoon', 'bomb', '2x4'];
var accusation = {_friendName,_locationName,_weaponName}
for(i=1; i< accusation.length; i++)
var btn = document.getElementById('big-button');
btn.addEventListener('click', function accusation(){
  console.log(accusation);
});


