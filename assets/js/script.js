// 1. Evenement .click
// 2. Récuperer taille rectangle $(.rectangle).heightRectangle
// 3. Condition
// 4. Changer sa taille
$(function(){
  $('#button1').click(function(){
    // On stock la hauteur du rectangle dans la variable rectangleHeight
    var rectangleHeight = $('.Rectangle').height();
    // Selon la hauteur qu'on récupére a chaque click , on y ajoute 10 ou on la remet a 10
    if (rectangleHeight < 100){
      rectangleHeight += 10;
    }else{
      rectangleHeight = 10;
    }
    // On attribue cette nouvelle hauteur au rectangle
  $('.Rectangle').height(rectangleHeight);
});
// On va stocké dans la variable firstColor la couleur de base du rectangle.
  var firstColor = $('.Rectangle').css('background-color'); // Récupére la valeur de la propriété
  $('#button2').click(function() {
    $('.Rectangle').css('background-color','green');
  });
  // On attribue a notre rectangle la couleur que l'on a stocké au chargement de la page
  $('#button3').click(function() {
    $('.Rectangle').css('background',firstColor);
  });
  $('#button4').click(function(){
    $('.Rectangle').hide();
  });
  $('#button5').click(function(){
    $('.Rectangle').show()
  });
});
