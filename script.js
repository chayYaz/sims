var d=document.getElementById("d");
var skin=document.getElementById("colorSkin");
var face=document.getElementById("face");
var rightEye=document.getElementById("right-eye");
var leftEye=document.getElementById("left-eye");
var eyes=document.getElementById("colorEyes");
var hairC=document.getElementById("colorHair");
var hair=document.getElementById("hair");
var hairLen=document.getElementById("hairLength");
var me;
class sims {
  constructor(name) {
    this.vacDays=3;
    this.name=name;
    this.energy=60;
    this.smart=0;
    this.power=0;
  }
  sleep(){
    this.energy+=60;
    this.vacDays-=1;
  }
  
}
function endlessloop(){
  setInterval(createMe,100);
// face.style.backgroundColor = skin.value;
// leftEye.style.backgroundColor =eyes.value;
// rightEye.style.backgroundColor =eyes.value;
// hair.style.backgroundColor =hairC.value;
// if(hairLen.value=="m"){
//   hair.style.height="300px";
//   hair.style.width="450px";
// }
// else if(hairLen.value=="s"){
//   hair.style.height="200px";
//    hair.style.width="400px";
// }
// else{
//   hair.style.height="600px";
//   hair.style.width="450px";
// }

//endlessloop();
}
function createMe(){
//var name=prompt("name");
face.style.backgroundColor = (skin.value)
leftEye.style.backgroundColor =eyes.value;
rightEye.style.backgroundColor =eyes.value;
hair.style.backgroundColor =hairC.value;
if(hairLen.value=="m"){
  hair.style.height="300px";
  hair.style.width="450px";
}
else if(hairLen.value=="s"){
  hair.style.height="200px";
   hair.style.width="400px";
}
else{
  hair.style.height="600px"
  hair.style.width="450px";
}

//me=new sims(name);
//console.log(me.name+" is on vacation");

}
function print(){
  console.log(me);
  d.innerHTML="name:"+me.name+" vacation days: "+me.vacDays+" energy: "+me.energy+" smart: "+me.smart+" power:"+me.power
}
