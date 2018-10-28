
/*--- Przeniesienie inputów z formularza do CV -----*/

var btn1 = document.getElementById('btn');
btn1.addEventListener('click', function()
{
  document.getElementById('btn2').style.display = 'block';   /* button to generowania CV się pojawia*/
  
  var nk = document.getElementById('nk').value; 
  var ikn = document.getElementById('ikn').value; 
  var im = document.getElementById('im').value;
  var naz = document.getElementById('naz').value;   
  var zd = document.getElementById('zd').value; 
  var tel = document.getElementById('tel').value;
  var eml = document.getElementById('eml').value;   
  var ops1 = document.getElementById('ops').value;
  var ops2 = document.getElementById('ops').defaultValue;   

/*--------- Do edukacji wartości inputów --------- */
  
	var edu11 = document.getElementById('ws1').value;
	var edu12 = document.getElementById('wk1').value;
	var edu13 = document.getElementById('wol1').value;
	var edu21 = document.getElementById('ws2').value;
	var edu22 = document.getElementById('wk2').value;
	var edu23 = document.getElementById('wol2').value;
	var edu31 = document.getElementById('ws3').value;
	var edu32 = document.getElementById('wk3').value;
	var edu33 = document.getElementById('wol3').value;
	
/*--------- Do pracy wartości inputów --------- */
	
	var work11 = document.getElementById('wsx1').value;
	var work12 = document.getElementById('wkx1').value;
	var work13 = document.getElementById('wolx1').value;
	var work21 = document.getElementById('wsx2').value;
	var work22 = document.getElementById('wkx2').value;
	var work23 = document.getElementById('wolx2').value;
	var work31 = document.getElementById('wsx3').value;
	var work32 = document.getElementById('wkx3').value;
	var work33 = document.getElementById('wolx3').value;
	
/*---------- Umiejętności -----------------------*/

    var u1 = document.getElementById('u1').value;
	var u2 = document.getElementById('u2').value;
	var u3 = document.getElementById('u3').value;
	var u4 = document.getElementById('u4').value;
	var u5 = document.getElementById('u5').value;
	var u6 = document.getElementById('u6').value;
	var u7 = document.getElementById('u7').value;
	var up1 = document.getElementById('up1').value;
	var up2 = document.getElementById('up2').value;
	var up3 = document.getElementById('up3').value;
	var up4 = document.getElementById('up4').value;
	var up5 = document.getElementById('up5').value;
	var up6 = document.getElementById('up6').value;
	var up7 = document.getElementById('up7').value;

      
  inputydocv(nk, ikn, im, naz, zd, tel, eml, ops1, ops2);
  edukacyja(edu11, edu12, edu13, edu21, edu22, edu23, edu31, edu32, edu33);
  pracyja(work11, work12, work13, work21, work22, work23, work31, work32, work33);
  umieje(u1, u2, u3, u4, u5, u5, u7, up1, up2, up3, up4, up5, up6, up7);
})

function inputydocv(v1,v2,v3,v4,v5,v6,v7,v8,v9)
{
  var title = document.getElementById('title');
  title.innerHTML = v1;
  var iconsm = document.getElementById('iconsm');
  iconsm.href = v2;
  var imnaz = document.getElementById('imnaz');
  imnaz.innerHTML = v3 + " " + v4;
  var pic = document.getElementById('pic');
  pic.src = v5;
  pic.alt = "Fotografia";
  var tele = document.getElementById('tele');
  var poczta = document.getElementById('poczta');
  tele.innerHTML = v6;
  poczta.href = "mailto:" + v7;
  poczta.innerHTML = v7;
  var ops = document.getElementById('ops1');
  if(v8.length != 0)
  ops.innerHTML = v8 ;
  else 
  ops.innerHTML = v9;
}
/*----- Znikanie formularza i pojawienie się CV -------- */

var btnshow = document.getElementById('btn2');
btnshow.addEventListener('click', function()
{
 document.getElementById('page-wrap').style.display = "block";
 document.getElementById('dane').style.display = "none";	
})
/*------- Pracyja ---------- */


function pracyja(work11, work12, work13, work21, work22, work23, work31, work32, work33){

var workArray = [work11, work12, work13, work21, work22, work23, work31, work32, work33];
var work = '<dt>Doświadczenie</dt>'; 
for(var i=0; i<workArray.length; i++) 
{	
	work += '<dd><h2><img src="images/people.png" alt="szkoła" class="icon"> ' + workArray[i] + '<span>' + workArray[i+1] + '</span></h2><p><strong>Stanowisko:</strong> ' + workArray[i+2] + '<br/></dd>';
    i=i+2;
}
work += '<dd class="clear"></dd>'
document.getElementById("robota").innerHTML = work;

}

/*------- Edukacyja ---------- */


function edukacyja(edu11, edu12, edu13, edu21, edu22, edu23, edu31, edu32, edu33){

var eduArray = [edu11, edu12, edu13, edu21, edu22, edu23, edu31, edu32, edu33];
var edu = '<dt>Edukacja</dt>'; 
for(var i=0; i<eduArray.length; i++) 
{	
	edu += '<dd><h2><img src="images/school.png" alt="szkoła" class="icon"> ' + eduArray[i] + '<span>' + eduArray[i+1] + '</span></h2><p><strong>Kierunek:</strong> ' + eduArray[i+2] + '<br/></dd>';
    i=i+2;
}
edu += '<dd class="clear"></dd>'
document.getElementById("edukacja").innerHTML = edu;

}

/* ----- Tabela umiejętności ------ */

function umieje(u1, u2, u3, u4, u5, u5, u7, up1, up2, up3, up4, up5, up6, up7)
{
var umArray = [u1, u2, u3, u4, u5, u5, u7, up1, up2, up3, up4, up5, up6, up7];


var um = '<table id="skillsy"><tr><th><img src="images/skill.png" alt="szkoła" class="icon"> Umiejętność</th><th>Poziom</th></tr>';
for(var i=0; i<7; ++i) {
	um += "<tr><td>" + umArray[i] + "</td><td>";
    for(var j=0; j<umArray[i+7] ; j++)
	 {	um += '<img src="images/star.png" alt="star" class="icon">'}
     um += '</td></tr>';
     
}

document.getElementById("um").innerHTML = um;
}

/* ------ Drukowanie ---------*/

var druk = document.getElementById('druk');
druk.addEventListener('click', function()
{
  document.getElementById('druk').style.display = 'none';
  window.print();
})