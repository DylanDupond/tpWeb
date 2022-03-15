// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
    this.forms = new Array();

    this.getForms = function() {
        return this.forms;
      }.bind(this) ;
    
      this.addForms = function(form) {
        this.forms.push(form);
      }.bind(this) ;
    
}

function Form(x1,y1,thick,color){
    this.thick=thick;
    this.color=color;
    this.x1=x1;
    this.y1=y1;

    this.getX1= function(){
        return this.x1;
    }.bind(this);
    this.getY1= function(){
        return this.y1;
    }.bind(this);
    this.getThick= function(){
        return this.thick;
    }.bind(this);
    this.getColor= function(){
        return this.color;
    }.bind(this);
}

function Rectangle(x1,y1,width,height,thick,color){
    Form.call(this,x1,y1,thick,color);
    this.width=width;
    this.height=height;

    this.getWidth= function(){
        return this.width;
    }.bind(this);
    this.getHeight= function(){
        return this.height;
    }.bind(this);
};
Rectangle.prototype = new Form();

function Line(x1,y1,x2,y2,thick,color){
    Form.call(this,x1,y1,thick,color);
    this.x2=x2;
    this.y2=y2;

    this.getX2= function(){
        return this.x2;
    }.bind(this);
    this.getY2= function(){
        return this.y2;
    }.bind(this);
};
Line.prototype = new Line();
