<!-- conexion -->
<?php

    $servidor = "localhost";
    $usuario = "root";
    $clave = "";
    $bd = "juegodelgato";

    $coneccion = mysqli_connect ($servidor, $usuario, $clave, $bd )

?>

<!-- html -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JuegoDelGato | Feedback</title>
    <!-- importación css bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <!-- icono bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    
</head>
<body>
    <!-- fondo rgb -->
    <style>#background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: linear-gradient(45deg, #ff00ff, #00ffff, #00ff00, #ffff00, #ff0000, #ff00ff);
        background-size: 600% 600%;
        animation: gradientAnimation 15s ease infinite;
       }
         
       @keyframes gradientAnimation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
       }
         </style>
    <div id="background"></div>
    <!-- header -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <!-- Menú hamburguesa para pantallas chicas -->
                <a href="#" class="navbar-brand">Juego del Gato - <span class="text-primary">Feedback</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarS" aria-controls="navbarS" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- Menú de opciones -->
                <div class="collapse navbar-collapse" id="navbarS">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                         <a href="https://phariushs.github.io/FullStack/Frontend/primerpag.html" class="nav-link">Inicio</a>
                        </li>
                        <li class="nav-item">
                         <a href="https://phariushs.github.io/FullStack/Frontend/Juegodelgato.html" class="nav-link">Instrucciones</a>
                        </li>
                        <li class="nav-item">
                         <a href="https://phariushs.github.io/FullStack/Frontend/index.html"  class="nav-link ">Jugar</a>
                        </li>
                        <li class="nav-item">
                         <a href="http://localhost/juegodelgato/" class="nav-link disabled">Feedback</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav><br><br><br><br><br><br>
        <!-- Formulario Feedback -->
    <section class="d-flex justify-content-center align-items-center">
        <div class="card shadow col-xs-12 col-sm-6 col-md-6 col-lg-4   p-4"> 
            <div class="mb-4 d-flex justify-content-start align-items-center">
              
                <h4>  <i class="bi bi-chat-left-quote"></i> &nbsp; Feedback</h4>
            </div>
            <div class="mb-1">
                <form id = "contacto" method="post" >
                    <div class="mb-4 d-flex justify-content-between"> 
                        <div>
                            <label for="nombre"> <i class="bi bi-person-fill"></i> Nombre</label>
                            <input type="text" class="form-control" name="nombre" placeholder= "ej: Gabriel" required>
                            <div class="nombre text-danger "></div>
                        </div>
                        <div >
                            <label for="apellido"> <i class="bi bi-person-bounding-box"></i> Apellido</label>
                            <input type="text" class="form-control" name="apellido"  placeholder= "ej: Pacheco" required>
                            <div class="apellido text-danger"></div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <label for="correo"><i class="bi bi-envelope-fill"></i> Correo</label>
                        <input type="email" class="form-control" name="correo" placeholder= "ej: gpmcheco@mail.com" required>
                        <div class="correo text-danger"></div>
                        
                    </div> 
                    <div class="mb-4">
                        <label for="mensaje"> <i class="bi bi-chat-right-dots-fill" required></i> Mensaje</label>
                        <textarea name="mensaje"  class="form-control" placeholder="ej: hola"></textarea>
                        <div class="mensaje text-danger"></div>
                    </div> 
                    
                    <div class="mb-2">
                        <button id ="botton" name="enviar" class="col-12 btn btn-primary d-flex justify-content-between ">
                            <span>Enviar </span><i id="icono" class="bi bi-cursor-fill "></i>
                        </button>
                    </div> 
                              
                </form>
            </div>
        </div>
    </section>
</body>
</html>

  <!-- Importación bootstrap js -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>


<!-- registro -->
<?php

  if(isset($_POST['enviar'])){
      
      $nombre = $_POST['nombre'];
      $apellido = $_POST['apellido'];
      $correo = $_POST['correo'];
      $mensaje = $_POST['mensaje'];
      
      $insertar = "INSERT INTO datos Values ('$nombre','$apellido','$correo','$mensaje')";
      
      $coneccion = mysqli_query($coneccion,$insertar);
  }
?>
