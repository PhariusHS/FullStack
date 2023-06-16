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
