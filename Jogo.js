//FASE 1
var tamanhox = 1080, tamanhoy = 700 //TAMANHO DA TELA
var horizontal=100, vertical=634, noar = false, nochao = true // POSIÇAO DO JOGADOR
var reprovado = 0, pontos = 0, fase = 1  //TEXTO
var xinimigo1=1100,yinimigo1=500, superior1 = yinimigo1 - 50, inferior1 = yinimigo1+50 //INIMIGO 1
var xinimigo2 = 1100,yinimigo2=200, superior2 = yinimigo2 - 50, inferior2 = yinimigo2+50 //INIMIGO 2
var xinimigo3 = 1100, yinimigo3 =650 //INIMIGO 3
var xvida=8000, yvida=500 //POSIÇÃO DA VIDA
var posicaoxmsg=1200, posicaoymsg=350
var andando=[],anima,contframe=0, paraframe=0
var voltando=[],anima2,contframe2=0,paraframe2=0
var voando, voando2

//FASE 2
var horizontal2=50, vertical2=640
var xchuva=[],ychuva=[],qtdchuva=1000
var meteorox=[], meteoroy=[], qtdmeteoros = 30
var fase2 = 1

//FASE3
var horizontal3 = 100, vertical3 = 634 // JOGADOR
var velo = 0, pulo = 0, grav = 1
var xd=0, yd=0, estadodisparo = false
var xdd = 0, ydd = 0, tiroinimigo = false, cont = 0, contfacada = 0
var xinimigo=900, yinimigo= 550, danoinimigo = 7
var xchuva2=[],ychuva2=[],qtdchuva2=1000
var bater=[], anima3,contframe3=0,paraframe3=0
var movimentodragao=[], anima5,contframe5=0,paraframe5=0, contframe52=0
var cuspindo=[], anima6,contframe6=0,paraframe6=0, contframe62=0
//LASERS
var serrinha=[], anima4,contframe4=0,paraframe4=0


//TELAS
var tela1 = true, tela2 = false, tela3 = false, tela4 = false, tela5 = false, tela6 = false, tela7 = false, tela8 = false
let imginicial
let semestre1 
let semestre6
let gameover1
let tomardano
let livro
let reprovadomenosde5
let reprovado10
let entre5e10
let bloodmoon
let fundovulcao
let portaochina
let portaonether
var song
let cuspefogo
let somvida
//IMAGENS
function preload(){
    imginicial = loadImage('play1.png') 
    semestre1 = loadImage('semestre2editado.png')
    semestre6 = loadImage('semestreseis.png')
    gameover1 = loadImage('gameover.png')
    tomardano = loadImage('TOMARDANO.png')
    livro = loadImage('livro2.png')
    bloodmoon = loadImage('fundobloodmoon.png')
    reprovadomenosde5 = loadImage('reprovadomenosde5.png')
    reprovado10 = loadImage('reprovado10.png')
    entre5e10 = loadImage('entre5a10.png')
    for(i=0;i<4;i++){
        bater[i]=loadImage("bater"+i+".png")  
    }
    for(i=0;i<4;i++){
        serrinha[i]=loadImage("serrao"+i+".png")
    } 
    song = loadSound("musicanaruto.mp3")
    somdano = loadSound("somdano.mp3")
    zerado = loadSound("zerado.mp3")
    somvida = loadSound("somvida.mp3")
  
  
    for(i=0;i<3;i++){
        andando[i]=loadImage("andando"+i+".png")
    }
    for(i=0;i<3;i++){
        voltando[i]=loadImage("voltando"+i+".png")  
    }
    for(i=0;i<7;i++){
        movimentodragao[i]=loadImage("dragao"+i+".png") 
    }
    for(i=0;i<5;i++){
        cuspindo[i]=loadImage("cuspindo"+i+".png")
    }
    voando = loadImage("voando0.png")
    voando2 = loadImage("voando2.png")
    posicaoinicial = loadImage("bater2.png")
    lava0 = loadImage("lava01.png")
    boladefogo = loadImage('bolonadefogo.png')
    fundovulcao = loadImage('fundovulcao1.png')
    fundofase1 = loadImage('fundoninja.png')
    portaochina = loadImage('portaochina.png')
    portaonether = loadImage('portaonether.png')
    cuspefogo = loadImage('cuspefogo.png')
}


function setup() {
    createCanvas(tamanhox,tamanhoy);
    song.loop()
    song.setVolume(0.1) 

    //FASE 2
    //METEOROS
    for(i=0;i<qtdmeteoros;i++){
        meteorox[i]=random(150,950)
        meteoroy[i]=random(-50,-5000)
    }
    //CHUVA
    for(i=0;i<qtdchuva;i++){
        xchuva[i]=random(0,1100)
        ychuva[i]=random(-50,-1000)
    }
    for(i=0;i<qtdchuva2;i++){
        xchuva2[i]=random(0,1100)
        ychuva2[i]=random(-50,-5000)
    }
}

function draw() {
    if(tela1 == true){
        background(imginicial)
        if(keyIsDown(13)){
            tela1 = false
            tela2 = true
        }
    }
    if(tela1 == false && tela2 == true){
    imageMode(CORNERS)
    background(fundofase1)

    //JOGADOR 
    if(!keyIsDown(68) && !keyIsDown(65) && !keyIsDown(32) && !keyIsDown(87)&&vertical >= 634){
        anima=andando[contframe]
        imageMode(CENTER)
        image( anima,horizontal,vertical);
        paraframe++
        if(paraframe>5){
            paraframe=0
            contframe++
            if(contframe >2){
                contframe=0
            }
        }
    }
    if(keyIsDown(32) && vertical >= 634&&!keyIsDown(68) && !keyIsDown(65)){
        imageMode(CENTER)
        image(posicaoinicial,horizontal,vertical)
    }
    //COMANDOS MOVIMENTAÇAO JOGADOR
    if(keyIsDown(68)&& !keyIsDown(65)){ //Direita
        horizontal += 3
        if(vertical>=634){
            anima=andando[contframe]
            imageMode(CENTER)
            image(anima,horizontal,vertical);
            paraframe++
            if(paraframe>5){
                paraframe=0
                contframe++
                if(contframe >2){
                    contframe=0
                }
            }
        }
    }
   if(keyIsDown(65)&& keyIsDown(68) && vertical >= 634){
      anima=andando[contframe]
        imageMode(CENTER)
        image( anima,horizontal,vertical);
        paraframe++
        if(paraframe>5){
            paraframe=0
            contframe++
            if(contframe >2){
                contframe=0
            }
        }
    }
    if(keyIsDown(65)&& !keyIsDown(68)){ //Esquerda
        horizontal -= 3
        if(vertical>=634){
            anima2=voltando[contframe2]
            imageMode(CENTER)
            image(anima2,horizontal,vertical);
            paraframe2++
            if(paraframe2>5){
                paraframe2=0
                contframe2++
                if(contframe2 >2){
                    contframe2=0
                }
            }
        }
     }

//VOAR
  if(keyIsDown(87) && vertical >= 60&&nochao == true){ 
     vertical-=4
    imageMode(CENTER)
  image( voando,horizontal,vertical);
  }

  if(vertical < 634 && !keyIsDown(87)){
    vertical+=5
   if(keyIsDown(68) || !keyIsDown(65) ){ 
  imageMode(CENTER)
  image( voando,horizontal,vertical);
  }
          if(keyIsDown(65) && !keyIsDown(68)){ 
          imageMode(CENTER)
  image( voando2,horizontal,vertical);
  }
  }
 if(horizontal <= 50){
   horizontal = 51
 }  
  if(horizontal > 1000){
    horizontal = 999
  }
  if(vertical < 75){
   vertical = 76
  }
//CHAO
  fill(0,0,0)
  rect(0, 675,5000,50)
  
//TEXTOS
  stroke(252, 136, 0)
fill(255,255,255)
textSize(32);
text('Reprovações: '+reprovado, 10, 30);
textSize(32);
text('Pontuação: '+parseInt(pontos), 825, 30);
  textSize(32);
text('Fase: '+fase, 425, 30);
 
//INIMIGOS
//INIMIGO 1
  
       anima4=serrinha[contframe4]
    imageMode(CENTER)
  image( anima4,xinimigo1,inferior1);
paraframe4++
  if(paraframe4>5){
    paraframe4=0
   contframe4++
    if(contframe4 >2){
     contframe4=0
    }}
       
   
      anima4=serrinha[contframe4]
    imageMode(CENTER)
  image( anima4,xinimigo1,superior1);
paraframe4++
  if(paraframe4>5){
    paraframe4=0
   contframe4++
    if(contframe4 >2){
     contframe4=0
    }}
    
    
      anima4=serrinha[contframe4]
    imageMode(CENTER)
  image( anima4,xinimigo1,yinimigo1);
paraframe4++
  if(paraframe4>5){
    paraframe4=0
   contframe4++
    if(contframe4 >2){
     contframe4=0
    }}
    
    
    
//VELOCIDADE INIMIGO 1
  if(pontos<=200){
  xinimigo1 -= 5
  }
  if(pontos>200 && pontos <= 400){
  xinimigo1 -= 10
  }
  if(pontos>400 && pontos < 501){
  xinimigo1 -= 12
  }
    
//MOVIMENTAÇAO INIMIGO 1
  if(xinimigo1 <= 0){
    xinimigo1 = 1200
    yinimigo1 = random(70,300)
   inferior1 = yinimigo1 + 50
   superior1 = yinimigo1 - 50
  }
 
  
//INIMIGO 2
  
 anima4=serrinha[contframe4]
    imageMode(CENTER)
  image( anima4,xinimigo2,yinimigo2);
paraframe4++
  if(paraframe4>5){
    paraframe4=0
   contframe4++
    if(contframe4 >2){
     contframe4=0
    }}
    
 anima4=serrinha[contframe4]
    imageMode(CENTER)
  image( anima4,xinimigo2,inferior2);
paraframe4++
  if(paraframe4>5){
    paraframe4=0
   contframe4++
    if(contframe4 >2){
     contframe4=0
    }}
  
 anima4=serrinha[contframe4]
    imageMode(CENTER)
  image( anima4,xinimigo2,superior2);
paraframe4++
  if(paraframe4>5){
    paraframe4=0
   contframe4++
    if(contframe4 >2){
     contframe4=0
    }}
  
    
//VELOCIDADE INIMIGO 2
  if(pontos<=200){
   xinimigo2 -= 5
  }
  if(pontos>200 && pontos <= 400){
  xinimigo2 -= 10
  }
    if(pontos>400 && pontos < 501){
  xinimigo2 -= 12
  }

//MOVIMENTAÇAO INIMIGO 2
  if(xinimigo2 <= 0){
    xinimigo2 = 1200
    yinimigo2 = random(250,600)
     inferior2 = yinimigo2 + 50
   superior2 = yinimigo2 - 50
  }
  
//INIMIGO 3
  anima4=serrinha[contframe4]
    imageMode(CENTER)
  image( anima4,xinimigo3,yinimigo3);
paraframe4++
  if(paraframe4>5){
    paraframe4=0
   contframe4++
    if(contframe4 >2){
     contframe4=0
    }}
    
//VELOCIDADE INIMIGO 3
  if(pontos<=200){ 
  xinimigo3 -= 5
  }
  if(pontos>200 && pontos <= 400){
  xinimigo3 -= 10
  }
    if(pontos>400 && pontos < 501){
  xinimigo3 -= 12
  }
  
//MOVIMENTAÇAO INIMIGO 3
  if(xinimigo3 <= 0){
    xinimigo3 = 1200
  yinimigo3 = random(500,650)
  }

//COLISOES   
//COLISAO INIMIGO 1
 if(dist(horizontal,vertical,xinimigo1,yinimigo1)<=67){
   reprovado++
   somdano.play()
   xinimigo1 = 1100
   yinimigo1 = random(70,300)
   inferior1 = yinimigo1 + 50
   superior1 = yinimigo1 - 50
 }
  if(dist(horizontal,vertical,xinimigo1,inferior1)<=67){
   reprovado++
    somdano.play()
    xinimigo1 = 1100
    yinimigo1 = random(70,300)
    inferior1 = yinimigo1 + 50
   superior1 = yinimigo1 - 50
 }
  if(dist(horizontal,vertical,xinimigo1,superior1)<=67){
   reprovado++
    somdano.play()
    xinimigo1 = 1100
    yinimigo1 = random(70,300)
    inferior1 = yinimigo1 + 50
   superior1 = yinimigo1 - 50
 }
  
//COLISAO INIMIGO 2
  if(dist(horizontal,vertical,xinimigo2,yinimigo2)<=67){
   reprovado++
    somdano.play()
    xinimigo2=1100
    yinimigo2 = random(250,600)
     inferior2 = yinimigo2 + 50
   superior2 = yinimigo2 - 50
 }
  if(dist(horizontal,vertical,xinimigo2,superior2)<=67){
   reprovado++
    somdano.play()
    xinimigo2=1100
    inferior2 = yinimigo2 + 50
   superior2 = yinimigo2 - 50
 }
  if(dist(horizontal,vertical,xinimigo2,inferior2)<=67){
   reprovado++
    somdano.play()
    xinimigo2=1100
    inferior2 = yinimigo2 + 50
   superior2 = yinimigo2 - 50
 }
  
//COLISAO INIMIGO 3
  if(dist(horizontal,vertical,xinimigo3,yinimigo3)<=67){
   reprovado++
    somdano.play()
    xinimigo3=1100
    yinimigo3 = random(500,650)
 }
    
//POWER UPS
    fill(255,255,255)
  image(livro,xvida,yvida)
  xvida -= 5
  pontos+= 0.1
    if(xvida <- 50){
    xvida = 15000
    }
    if(dist(horizontal,vertical,xvida,yvida)<=84 ){
    if(reprovado > 0){
      reprovado--
      somvida.play()
    }
    xvida = 30000
  }
   
    
//COMANDO FASE 1/2
  if(pontos >= 500){
    fase++
   tela2 = false
    tela3 = true
  }}
    if(tela3 == true){
       imageMode(CORNER)
      background(semestre1)
    
    }
    if(tela3 == true){
      if(keyIsDown(13)){
      tela3 = false
      tela4 = true
    }}
    if(tela4 == true){
      imageMode(CORNERS)
background(fundovulcao)
      

//TEXTOS
fill(255,255,255)
textSize(32);
text('Reprovações: '+reprovado, 10, 30);
textSize(32);
text('Semestre: '+fase, 425, 30);


      if(horizontal2 <= 50){
   horizontal2 = 51
 }  
      
//CHAO
fill(0,0,0)
rect(0,680,1100,50)
  
//COMANDOS MOVIMENTAÇAO JOGADOR
 if(keyIsDown(68) && !keyIsDown(65)){ //Direita
   horizontal2 += 3
   
   anima=andando[contframe]
    imageMode(CENTER)
  image( anima,horizontal2,vertical2);
paraframe++
  if(paraframe>5){
    paraframe=0
   contframe++
    if(contframe >2){
     contframe=0
    }}}
     
      if(keyIsDown(65) && keyIsDown(68)){
        imageMode(CENTER)
        image(posicaoinicial,horizontal2,vertical2)
      }
 if(keyIsDown(65)&& !keyIsDown(68)){ //Esquerda
   horizontal2 -= 3
       anima2=voltando[contframe2]
    imageMode(CENTER)
  image( anima2,horizontal2,vertical2);
paraframe2++
  if(paraframe2>5){
    paraframe2=0
   contframe2++
    if(contframe2 >2){
     contframe2=0
    }
  }}
     
      
//CHUVA
  for(i=0;i<qtdchuva;i++){
 fill(252, 136, 0) 
  stroke(252, 136, 0)
    line(xchuva[i],ychuva[i],xchuva[i]+15,ychuva[i]+10) 
  ychuva[i] += 10
  if(ychuva[i]>=700){
    ychuva[i]=random(-50,-500)
  }
  }
      
if(keyIsDown(32) && !keyIsDown(65)&&!keyIsDown(68)){
  imageMode(CENTER)
  image(posicaoinicial,horizontal2,vertical2)
}
  if(keyIsDown(87)&& !keyIsDown(68) && !keyIsDown(65)){
   imageMode(CENTER)
image(posicaoinicial,horizontal2,vertical2) 
  }
   
//JOGADOR 
 if(!keyIsDown(68) && !keyIsDown(65) && !keyIsDown(32) && !keyIsDown(87)&&vertical2 >= 630){
imageMode(CENTER)
image(posicaoinicial,horizontal2,vertical2)
}

//METEOROS
  if(fase==2){
    imageMode(CENTER)
  image(portaochina,980,560)
  for(i=0;i<qtdmeteoros;i++){
    imageMode(CENTER)
  image(boladefogo,meteorox[i],meteoroy[i])
  meteoroy[i]+=5
  
  //RESET METEOROS
    if(meteoroy[i] >= 700){
      meteoroy[i]=random(-50,-5000)
  }
  //COLISAO METEOROS
      if(dist(horizontal2,vertical2,meteorox[i],meteoroy[i])<=57){
  reprovado++
        somdano.play()
      meteoroy[i] = 700
  }}
    //FIM DA FASE 2
     if(dist(horizontal2,vertical2,980+40,530+75)<= 42 + 40){
    fase++
       horizontal2 = 50
}
  }
  
    if(fase==3){
      imageMode(CENTER)
  image(portaochina,980,560)
  for(i=0;i<qtdmeteoros;i++){
    imageMode(CENTER)
 image(boladefogo,meteorox[i],meteoroy[i])
  meteoroy[i]+=6
    //RESET METEOROS
    if(meteoroy[i] >= 700){
      meteoroy[i]=random(-50,-5000)
  }
  //COLISAO METEOROS
      if(dist(horizontal2,vertical2,meteorox[i],meteoroy[i])<=57){
  reprovado++
        somdano.play()
      meteoroy[i] = 700
  }
  }
      //FIM DA FASE 2
     if(dist(horizontal2,vertical2,980+40,530+75)<= 42 + 40){
    fase++
       horizontal2 = 50
}
    }
    
    
      if(fase==4){  
         imageMode(CENTER)
  image(portaochina,980,560)
  for(i=0;i<qtdmeteoros;i++){
    imageMode(CENTER)
 image(boladefogo,meteorox[i],meteoroy[i])
  meteoroy[i]+=7
  //RESET METEOROS
    if(meteoroy[i] >= 700){
      meteoroy[i]=random(-50,-5000)
  }
  //COLISAO METEOROS
      if(dist(horizontal2,vertical2,meteorox[i],meteoroy[i])<=57){
  reprovado++
        somdano.play()
      meteoroy[i] = 700
  }
  }
        //FIM DA FASE 2
     if(dist(horizontal2,vertical2,980+40,530+75)<= 42 + 40){
    fase++
       horizontal2 = 50
}
      } 
        if(fase==5){  
           imageMode(CENTER)
  image(portaonether,980,560)
  for(i=0;i<qtdmeteoros;i++){
    imageMode(CENTER)
  image(boladefogo,meteorox[i],meteoroy[i])
  meteoroy[i]+=8
  //RESET METEOROS
    if(meteoroy[i] >= 700){
      meteoroy[i]=random(-50,-5000)
  }
  //COLISAO METEOROS
      if(dist(horizontal2,vertical2,meteorox[i],meteoroy[i])<=57){
  reprovado++
        somdano.play()
      meteoroy[i] = 700
  }
  }
        //FIM DA FASE 2
     if(dist(horizontal2,vertical2,980+40,530+75)<= 42 + 40){
    fase++
       horizontal2 = 50
       tela4 = false
       tela5 = true
}
        }
  }
  if(tela5 == true){
    imageMode(CORNER)
   background(semestre6) 
  }
  if(tela5 == true){
    if(keyIsDown(13)){
      tela5 = false
      tela6 = true
}}
if(tela6 == true){
  //FUNDO
  imageMode(CORNERS)
background(bloodmoon)
  
  
  //CHAO
fill(255.255,255)
rect(0, 675,5000,50)

//CHUVA
  for(i=0;i<qtdchuva2;i++){
   line(xchuva2[i],ychuva2[i],xchuva2[i],ychuva2[i]+10) 
  ychuva2[i] += 20
  if(ychuva2[i]>=700){
    ychuva2[i]=random(-50,-500)
  }
  }
  //PAREDE INVISIVEL
   if(horizontal3 <= 50){
   horizontal3 = 51
 }  
  if(horizontal3 >=1050){
    horizontal3 = 1050
  }
  
  if(!keyIsDown(68) && !keyIsDown(65) && !keyIsDown(32) && !keyIsDown(87)&&vertical3 == 634&&estadodisparo==false){
imageMode(CENTER)
image(posicaoinicial,horizontal3,vertical3)
}
  
  if(keyIsDown(68) && keyIsDown(65) && vertical3 == 634){
      imageMode(CENTER)
image(posicaoinicial,horizontal3,vertical3)
    }
  
  //COMANDOS MOVIMENTAÇAO JOGADOR
 if(keyIsDown(68) && !keyIsDown(65) && vertical3 >= 634 ){ //Direita
   horizontal3 += 3
   anima=andando[contframe]
   if(pulo==0){
    imageMode(CENTER)
  image( anima,horizontal3,vertical3);
paraframe++
  if(paraframe>5){
    paraframe=0
   contframe++
    if(contframe >2){
     contframe=0
    }}}
     }
 if(keyIsDown(65)&& !keyIsDown(68) && vertical3 >= 634 ){ //Esquerda
   horizontal3 -= 3
   if(pulo==0){
       anima2=voltando[contframe2]
    imageMode(CENTER)
  image( anima2,horizontal3,vertical3);
paraframe2++
  if(paraframe2>5){
    paraframe2=0
   contframe2++
    if(contframe2 >2){
     contframe2=0
    }}
  }}
 
  
  //PULO
  if(vertical3 >= 634){
			velo=0 
			vertical3=634
			pulo=0
		}
		if(keyIsDown(87)){ 
			pulo=1
		}
		if(pulo==1){
			vertical3-=18
			vertical3+=velo 
        
  if(keyIsDown(68) && !keyIsDown(65)){
    horizontal3+=4
  imageMode(CENTER)
  image( voando,horizontal3,vertical3);
  }
          if(keyIsDown(65) && !keyIsDown(68)){
            horizontal3-=4
          imageMode(CENTER)
  image( voando2,horizontal3,vertical3);
  }           
  if(keyIsDown(68) && keyIsDown(65)){ 
  imageMode(CENTER)
  image( voando,horizontal3,vertical3);
  }   
          if(!keyIsDown(68) && !keyIsDown(65)){
           imageMode(CENTER)
  image( voando,horizontal3,vertical3); 
          }    
		}
  velo+=grav
  
   //INIMIGO
    cont += 5
  fill(255,255,255)

      anima5=movimentodragao[contframe5]
    imageMode(CENTER)
  image( anima5,xinimigo,yinimigo);
paraframe5++
  contframe52++
  if(contframe52>15){
    contframe52=0
  if(paraframe5>6){
    paraframe2=0
   contframe5++
    if(contframe5 >6){
     contframe5=0
    }
  }}
  
  if(cont > 0 && tiroinimigo == false){
    tiroinimigo = true
    xdd = xinimigo
    ydd = yinimigo
 
}
  
   
  
  if(tiroinimigo == true){
    image(cuspefogo,xdd-150,ydd+50)
 xdd -= 5
   
  }
  if(xdd <= -999){
   tiroinimigo = false
  
}

//COLISAO TIRO INIMIGO
if(dist(horizontal3,vertical3,xdd-150,ydd+50)<=60){
reprovado++
  somdano.play()
  xdd = -100
  horizontal3 = 100
}

  //FACADA
  contfacada++
  if(contfacada == 100){
    contfacada = 0
  }
  if(contfacada < 50 && keyIsDown(32)&&!keyIsDown(65)&&vertical3 >= 634){
     imageMode(CENTER)
image(posicaoinicial,horizontal3,vertical3)
}
  if(keyIsDown(32) && estadodisparo == false && contfacada >= 50 && vertical3 >= 634&&!keyIsDown(68)){
    contfacada=0
    xd = horizontal3
    yd = vertical3
    estadodisparo = true
 }
  
  if(estadodisparo == true && !keyIsDown(87)&& !keyIsDown(65)&& !keyIsDown(68)){
   fill(40,0,0)
    noStroke()
    ellipse(xd,yd,10,10)
  xd = xd + 5
       anima3=bater[contframe3]
    imageMode(CENTER)
  image( anima3,horizontal3,vertical3);
paraframe3++
  if(paraframe3>5){
    paraframe3=0
   contframe3++
    if(contframe3 >3){
     contframe3=0
  }}
  }
  if(xd >= horizontal3 + 100){
    estadodisparo= false
  }
  
  if(cont >= 100){
    cont = 0
  }
  
  //COLISAO FACADA
  if(dist(xd,yd,xinimigo,yinimigo)<= 200){
   pontos++ 
    xd = 9999
    danoinimigo--
  }
  
  //COLISAO INIMIGO
 if(dist(horizontal3,vertical3,xinimigo,yinimigo)<=252){
   reprovado++
   somdano.play()
   horizontal3 -= 200
 }

  
 //TEXTOS
fill(255,255,255)
textSize(32);
text('Reprovações: '+reprovado, 10, 30);
textSize(32);
text('Vidas do Boss: '+danoinimigo, 825, 30);
  textSize(32);
text('Fase: '+fase, 425, 30);

if(danoinimigo < 0){
 tela6 = false
  tela7 = true
}  
}
  if(tela7 == true){
    zerado.play()
    tela7=false
    tela8=true
  }
    if(tela8==true){
    if(reprovado < 5){
       imageMode(CORNER)
      background(reprovadomenosde5)
      
    }
    if(reprovado > 10){
      imageMode(CORNER)
      background(reprovado10) 
    }
    if(reprovado >= 5 && reprovado <= 10){
    imageMode(CORNER)
      background(entre5e10)
  }
  }
  }
   

















    