<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css">
    <meta charset="utf-8">
    <title>Exercícios</title>
    <script type="text/javascript">

      function atualiza() {

      var r = Math.floor(Math.random() * 100);
      document.getElementById('n1').innerHTML = r;

      }

      function teste(){


        var div = document.getElementById('n1').innerHTML;
        var input = document.getElementById('n2').value;


        if (input == "") {

          alert("O campo não pode ficar em branco");
          return false;

        }

        if (div == input) {
          alert("Os números estão iguais");

        }
        else {
          alert("Os números estão diferentes");

        }
              atualiza();
              document.getElementById('n2').value='';
              document.getElementById('n2').focus();

      }


      function handle()
      {

          var keycode = window.event.keyCode;

          if (keycode == 13)

          {
              teste();

          }
      }

    </script>
  </head>
  <body onload="atualiza()" onkeypress="handle()">
    <div class="all">
      <div class="square1" id="n1">0</div>
      <br>
        <input type="text" name="button" value="" id="n2">
      <br>
    </div>
    <div class="verify">
      <button type="submit" onclick=teste()>Verificar</button>
    </div>
  </body>
</html>
