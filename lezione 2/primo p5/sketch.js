let xsize = 500;
let ysize = 400;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //fare cielo scuro
  background("darkblue");
  //vogliamo disegnare la luna
  fill("yellow");
  //definisco il contorno
  stroke("white");
  strokeWeight(10);
  circle(300, 75, 100);
  //prima della forma desiderata
  //cambiare fill e stroke
  fill("green");
  stroke("darkgreen");
  strokeWeight(5);
  rect(0,200,400,200);

  stroke("yellow");
  strokeWeight(30);
  let xStars_prim = 10;
  let yStars_prim = 20;
  point (xStars_prim,yStars_prim);
  let passo=1;
  //for(init; test; update){}
  for(let i=0; i<50; i =i+passo){
    if(i%2==0){ // mi chiedo se il resto della divisione per 2 è 0
      //corpo di ramo vero
      //numeri pqri
      stroke("yellow");
    }else {
      //altrimenti questo
      stroke("white");
    }
    point (xStars_prim*i,yStars_prim*i);
  }

  //stella polare
  //point (xStars_primordiale+60,30);
  //point (xStars_prim,100);
  //point(75,100);
 
  //l'ordine delle istruzioni conta
  fill("white");
  stroke(0); //0 è nero, 250 è bianco
  strokeWeight(0); //non vedo il contorno
  textSize(20);
  text("c'era una volta...", 200,350);

   //fill("white")
    //square(10,170,30)
    //fill("red")
    //triangle(10, 170, 40, 170, 25, 150)


  //ciclo per quadrati  
  let xcasa = 10;

  let passo=50;
  //for(init; test; update){}
  for(let i=0; i<4; i =i+passo){
    xcasa=10+i;

    fill("white");
    
    
  }

  // ciclo per triangoli
 

  //fill("red");
   //triangle(10+i, 170+i, 40+i, 170+i, 25+i, 150+i);