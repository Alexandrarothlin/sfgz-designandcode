
let vorname = "Noah";

let myFont;
function preload() {
  myFont = loadFont('CamelSans-Bold.otf');

  let lg_hfiad21 = new Array(); //deklarierung
  lg_hfiad21[0] = "Flavia";
  lg_hfiad21[1] = "Liza";
  lg_hfiad21[2] = "Mirjam";
  lg_hfiad21[3] = "Sario";
  lg_hfiad21[4] = "Cédric";
  lg_hfiad21[5] = "Natascha";
  lg_hfiad21[6] = "Noah";
  lg_hfiad21[7] = "Alexandra";
  lg_hfiad21[8] = "Robin";
  lg_hfiad21[9] = "Katrin";
  lg_hfiad21[10] = "Juri";
  lg_hfiad21[11] = "Melissa";
  lg_hfiad21[12] = "Alexandra";

}


function setup() {
  createCanvas(windowWidth, windowHeight);//mit den JavaScript Variablen könnt ihr die aktuelle Groesse des Fensters abfragen. 
  
}

function draw() {
  text(lg_hfiad21[6], mouseX, mouseY); 
  fill(40, 102, 50);
  textFont(myFont);
  textSize(40)
  text(vorname, mouseX, mouseY)
}


function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}