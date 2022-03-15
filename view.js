
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.lineWidth = this.getThick();
    ctx.strokeStyle= this.getColor();
    ctx.beginPath();
    ctx.rect(this.getX1(), this.getY1(),this.getX2(),this.getY2());
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.lineWidth = this.getThick();
    ctx.strokeStyle= this.getColor();
    ctx.beginPath();
    ctx.moveTo(this.getX1(), this.getY1());
    ctx.lineTo(this.getX2(), this.getY2());
    ctx.stroke();
  };
  
  Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };
  