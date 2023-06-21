var miNum1= 0;
var miNum2= 0;
var contT = 0;
var resu = 0;

var matriz = [  [11, 12, 14, 15, 16, 18, 20], 
                [21, 22, 24, 25, 27, 28, 30], 
                [32, 33, 35, 36, 40, 42, 44], 
                [45, 48, 49, 50, 54, 55, 56], 
                [60, 63, 64, 66, 70, 72, 77], 
                [80, 81, 84, 88, 90, 96, 99], 
                [100,108,110,120,121,132,144]];


                for (let i = 1; i <= 12; i++) {
                    const boton = document.getElementById(`boton${i}`);
                    boton.addEventListener("click", function() {
                      if (miNum1 == 0) {
                        miNum1 = i;

                        if (miNum1 == miNum2) {
                          resu = miNum2 * miNum1;
                          boton.style.backgroundImage = "linear-gradient(to right, #42ab49, #ec5853)";
                          contT++;
                        } else {
                          resu = miNum2 * miNum1;
                          boton.style.backgroundImage = "linear-gradient(to right, #ec5853, #ec5853)";
                          contT++;
                        }
                      } else if (miNum2 == 0) {
                        miNum2 = i;
                        if (miNum1 == miNum2) {
                          resu = miNum2 * miNum1;
                          boton.style.backgroundImage = "linear-gradient(to right, #42ab49, #ec5853)";
                          contT++;
                        } else {
                          resu = miNum2 * miNum1;
                          boton.style.backgroundImage = "linear-gradient(to right, #42ab49, #42ab49)";
                          contT++;
                        }
                      } else if (miNum1 == i) {
                        if (miNum1 == miNum2) {
                          miNum1 = 0;
                          resu = miNum2 * miNum1;
                          boton.style.backgroundImage = "linear-gradient(to right, #42ab49, #42ab49)";

                        } else {
                          miNum1 = 0;
                          resu = miNum2 * miNum1;
                          boton.style.backgroundImage = "linear-gradient(to right, #ffd992, #ffd992)";

                        }
                      } else if (miNum2 == i) {
                        miNum2 = 0;
                        resu = miNum2 * miNum1;
                        boton.style.backgroundImage = "linear-gradient(to right, #ffd992, #ffd992)";

                      }
                     refrescar(resu); 
                    });
                  }
                  
                  var contador = 0;
                  function refrescar(resu,contador){
                      


                      function matrizar(num, jug){
                          for (let i = 0; i < 7; i++) {
                              for (let j = 0; j < 7; j++) {
                                  if (matriz[i][j] === num){
                                      matriz[i][j] = jug;
                                  }
                              }
                          }
                          return false;
                          refrescar();
                      }

                      function comprobar(num){
                        for(let i = 0; i<7; i++){
                          for(let j = 0; j<7; j++){

                            if(matriz[i][j]===num){
                              return true;

                            }

                          }
                        }
                      }
                    
                  for(i =11; i<=144 ; i++){

                    if(contT % 2 == 0){



                      if (i == resu){

                          if(comprobar(resu, contT)){
                          document.getElementById(i.toString()).style.backgroundImage = "linear-gradient(to right, #ec5853, #ec5853)"; 
                          document.getElementById(i.toString()).setAttribute("value", "1")
                          document.getElementById("caja").innerHTML = "JUEGA VERDE";
                          document.getElementById("caja").style.fontSize = "2vw";
                          contador++;
                          matrizar(resu, 1); 
                          
                        } else {

                            alert("Casilla pintada, perdiste el turno")
                            document.getElementById("caja").innerHTML = "JUEGA VERDE (ROJO PERDIO TURNO)";
                            document.getElementById("caja").style.fontSize = "2vw";
                            contador++;
                            contT= contT+2;
                            resu=0;
                        }


                        }
                       
                         
                  
                      


                    }else if (i == resu){
                          if(comprobar(resu, contT)){                      
                          document.getElementById(i.toString()).style.backgroundImage ="linear-gradient(to right, #42ab49, #42ab49)";
                          document.getElementById(i.toString()).setAttribute("value", "2")
                          document.getElementById("caja").innerHTML = " JUEGA ROJO";
                          document.getElementById("caja").style.fontSize = "2vw";
                          contador++;
                          matrizar(resu, 2);  
                          } else {

                            alert("Casilla pintada, perdiste el truno")
                            document.getElementById("caja").innerHTML = " JUEGA ROJO (VERDE PERDIO TURNO)";
                            document.getElementById("caja").style.fontSize = "2vw";
                            resu=0;
                            contador++;
                            contT= contT+2;
                          }

                  }
                  
                  
                 
                      //Compara todas las filas y 3 columnas menos
                      for (let i = 0; i < 7; i++) {
                          for (let j = 0; j < 7 - 3; j++) {
                              if (matriz[i][j] === 1 && matriz[i][j+1] === 1 && matriz[i][j+2] === 1 && matriz[i][j+3] === 1) {
                                  setTimeout( function() { window.location.href = "win.html" }, 600);
                              }
                              else if (matriz[i][j] === 2 && matriz[i][j+1] === 2 && matriz[i][j+2] === 2 && matriz[i][j+3] === 2) {
                                  setTimeout( function() { window.location.href = "win.html" }, 600);
                              }
                          }
                      }
                      //Compara todas las columnas y 3 filas menos
                      for (let i = 0; i < 7 - 3; i++) {
                          for (let j = 0; j < 7; j++) {
                              if (matriz[i][j] === 1 && matriz[i+1][j] === 1 && matriz[i+2][j] === 1 && matriz[i+3][j] === 1) {
                                  setTimeout( function() { window.location.href = "win.html" }, 600);
                              }
                              else if (matriz[i][j] === 2 && matriz[i+1][j] === 2 && matriz[i+2][j] === 2 && matriz[i+3][j] === 2) {
                                  setTimeout( function() { window.location.href = "win.html" }, 600);
                              }
                          }
                      }
                      //Compara oblicuo derecho
                      for (let i = 0; i < 7 - 3; i++) {
                          for (let j = 0; j < 7 - 3; j++) {
                              if (matriz[i][j] === 1 && matriz[i+1][j+1] === 1 && matriz[i+2][j+2] === 1 && matriz[i+3][j+3] === 1) {
                                  setTimeout( function() { window.location.href = "win.html" }, 600);
                              }
                              else if (matriz[i][j] === 2 && matriz[i+1][j+1] === 2 && matriz[i+2][j+2] === 2 && matriz[i+3][j+3] === 2) {
                                  setTimeout( function() { window.location.href = "win.html" }, 600);
                              }
                          }
                      }
                      //Compara oblicuo izquierdo
                      for (let i = 3; i < 7; i++) {
                          for (let j = 3; j < 7; j++) {
                              if (matriz[i][j] === 1 && matriz[i-1][j-1] === 1 && matriz[i-2][j-2] === 1 && matriz[i-3][j-3] === 1) {
                                  setTimeout( function() { window.location.href = "win.html" }, 600);
                              }
                              else if (matriz[i][j] === 2 && matriz[i-1][j-1] === 2 && matriz[i-2][j-2] === 2 && matriz[i-3][j-3] === 2) {
                                  setTimeout( function() { window.location.href = "win.html" }, 600);
                              }
                          }
                      }
                    }
                      return contador;
                  }
                  
