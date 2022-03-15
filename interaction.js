
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.XStartPos = 0;
  this.YStartPos = 0;
  this.XEndPos = 0;
  this.YEndPos = 0;
  this.isclicked = false;
  this.canvas = canvas;
	// Developper les 3 fonctions gérant les événements

  this.OnClick = function (evt) {
    this.isclicked =true;
    this.XStartPos = getMousePosition(this.canvas,evt).x;
    this.YStartPos = getMousePosition(this.canvas,evt).y;
    console.log(this.XStartPos + "--" + this.YStartPos);
  }.bind(this);

  this.KeepClick = function (evt) {
    if(this.isclicked){
      this.XEndPos = getMousePosition(this.canvas,evt).x;
      this.YEndPos = getMousePosition(this.canvas,evt).y;
      console.log(this.XEndPos + "--" + this.YEndPos);
    }
  }.bind(this);

  this.UnleashClick = function (evt) {
    this.isclicked = false;
    this.XEndPos = getMousePosition(this.canvas,evt).x;
    this.YEndPos = getMousePosition(this.canvas,evt).y;
    console.log(this.XEndPos + "--" + this.YEndPos);
  }.bind(this);
    	// Associer les fonctions précédentes aux évènements du canvas.
      this.canvas.addEventListener('mousedown', this.OnClick, false);
      this.canvas.addEventListener('mousemove', this.KeepClick, false);
      this.canvas.addEventListener('mouseup', this.UnleashClick, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



