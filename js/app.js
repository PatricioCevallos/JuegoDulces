var cambiarColor=True;


$(fucntion(){
    setInterval(function(){
      cambiarColor ? $(".main-titulo").css('color', 'white') : $(".main-titulo").css('color', 'yellow');
      cambiarColor = !cambiarColor;
    }, 1000);
})
