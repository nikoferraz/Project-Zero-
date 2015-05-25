// Convert numbers to words
// copyright 25th July 2006, by Stephen Chapman http://javascript.about.com
// permission to use this Javascript on your web page is granted
// provided that all of the code (including this copyright notice) is
// used exactly as shown (you can change the numbering system if you wish)

// American Numbering System
var th = ['','thousand','million', 'billion','trillion'];
// uncomment this line for English Number System
// var th = ['','thousand','million', 'milliard','billion'];

var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine']; 
var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen']; 
var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']; 
function toWords(s){s = s.toString(); s = s.replace(/[\, ]/g,''); 
  if (s != parseFloat(s)) 
    return 'not a number'; 
var x = s.indexOf('.'); 
  if (x == -1) x = s.length; if (x > 15) 
    return 'too big'; 
var n = s.split(''); 
var str = ''; 
var sk = 0; 
  for (var i=0; i < x; i++){
    if ((x-i)%3==2){
      if (n[i] == '1'){
        str += tn[Number(n[i+1])] + ' '; i++; sk=1;
      } 
      else if (n[i]!=0){
        str += tw[n[i]-2] + ' ';sk=1;
      }
    } 
    else if (n[i]!=0){
      str += dg[n[i]] +' ';
        if ((x-i)%3==0) str += 'hundred ';sk=1;
    } 
    if ((x-i)%3==1){
      if (sk) str += th[(x-i-1)/3] + ' ';sk=0;
      }
    } 
    if (x != s.length){
      var y = s.length; str += 'point '; 
      for (var i=x+1; i<y; i++) str += dg[n[i]] +' ';
      } 
    return str.replace(/\s+/g,' ');
  }

//calculates the number of bags of compost necessary given n square feet. 
function enter(){
  var key = event.keyCode;
  if(key==13){
    calculate(); 
  }
};
function calculate(){
  var ans=0;
  var a = document.getElementById("input1").value;
  //Aassumes there are only 20lbs bags and that each square foot requires 5lbs of compost. 
  if(a<1)
    window.alert("Invalid input!"); 
  else if(a<=4)
    ans=1;
  //if remainder is more than 0
  else if((a%4)>0)
    ans= ((a-(a%4))/4)+1; 
  //if remainder is 0 
  else if((a%4)===0)
    ans=a/4; 
  //convert answer from integer to English (1 becomes "one")
  ans= toWords(ans);  
  document.getElementById("output").innerHTML=("You need "+ans+" 20lbs. bag(s)."); 
};

