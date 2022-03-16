var idgen=0;

/*
Une fonction annexe me permettant d'appliquer en temps réel sur le canvas la suppresion à partir du bouton.
*/
function rm(id2Delete,draw,ctx,elm){
    this.delet=id2Delete;
    this.draw=draw;
    document.getElementById(delet).remove();
    document.getElementById(delet+"l").remove();
    this.draw.removeForms(elm);
    this.draw.paint(ctx);
}
Drawing.prototype.UpdateShapeList=function(draw,ctx){
    if(idgen >9999){
        idgen=0;
    }
    //Declaration des variables
        var elm = this.getForms()[this.getCount()];
        let tmp = document.createElement("li");
        tmp.id = idgen+"l";
        let save2call =elm.getForm();

        //Affichage du contenu des <li></li> HTML
        if(save2call=="Rectangle"){
            tmp.textContent="ID:"+idgen+ save2call+ "-["+elm.getX1()+"-" +elm.getY1() +"] comme point supérieur gauche de largeur :"+elm.getX2()+" et de hauteur :"+elm.getY2();
        }
        else{
            tmp.textContent= "ID:"+idgen+save2call+ "-["+elm.getX1()+"-" +elm.getY1() +"] jusqu'à ["+elm.getX2()+"-"+elm.getY2()+"]";
        }
        
        document.getElementById("shapeList").appendChild(tmp);

        //Creation du button avec le span
        let but = document.createElement("button");
        but.setAttribute("type","button")
        but.className +="btn btn-default";
        but.id=idgen;
        but.addEventListener("click", function (){
            rm(this.id,draw,ctx,elm);
        });
        let spa = document.createElement("span");
        spa.className +="glyphicon glyphicon-remove-sign";
        document.getElementById("shapeList").insertBefore(but,tmp);
        but.appendChild(spa);
        this.count++; 
        idgen++;
}
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
  