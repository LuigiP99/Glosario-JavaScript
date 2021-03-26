function myFunction() {
  document.getElementById("demo").innerHTML = Math.abs(-7.25);
}

function FunctionAlert() {
    alert("Hola! Soy un cuadro de alerta!");
  }

  function FuntionCodeName() {
    var x = "Browser CodeName: " + navigator.appCodeName;
    document.getElementById("demo2").innerHTML = x;
  }

  function FuntionBody() {
    document.body.style.backgroundColor = "gray";
  }

  function FunctionCharSet() {
    var x = document.characterSet;
    document.getElementById("demo3").innerHTML = x;
  }

  function FunctionClassList() {
    document.getElementById("myDIV").classList.add("mystyle");
  }

  function FunctionClick() {
    document.getElementById("myCheck").click();
  }

  function FunctionConfirm() {
    confirm("Presiona un boton!");
  }

  function FunctionFor() {
    var text = "";
    var i;
    for (i = 0; i < 5; i++) {
      text += "El numero es: " + i + "<br>";
    }
    document.getElementById("demo4").innerHTML = text;
  }

  function FunctionHours() {
    var d = new Date();
    var n = d.getHours();
    document.getElementById("demo5").innerHTML = n;
  }

  function FunctionLog() {
    document.getElementById("demo6").innerHTML = Math.log(2);
  }

  function FunctionMax() {
    document.getElementById("demo7").innerHTML = Math.max(5, 10);
  }

  function FunctionString() {
    var x1 = Boolean(0);
    var x2 = Boolean(1);
    var x3 = new Date();
    var x4 = "12345";
    var x5 = 12345;
  
    var res =
    String(x1) + "<br>" +
    String(x2) + "<br>" +
    String(x3) + "<br>" +
    String(x4) + "<br>" +
    String(x5);
    document.getElementById("demo8").innerHTML = res;
  }

  function FunctionSign() {
    var a = Math.sign(3);
    var b = Math.sign(-3);
    var c = Math.sign(0);
    
    var x = a + "<br>" + b + "<br>" + c;
    document.getElementById("demo9").innerHTML = x;
  }