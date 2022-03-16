// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
    this.forms = new Array();
    this.count=0;

    this.getCount = function(){
        return this.count;
    }.bind(this);
    this.getForms = function() {
        return this.forms;
      }.bind(this);
    
      this.addForms = function(form) {
        this.forms.push(form);
      }.bind(this);
      
      this.removeForms = function(elm){
        this.forms.splice(this.forms.indexOf(elm),1);
        this.count--;
      }.bind(this);
    
}

function Form(x1,y1,x2,y2,thick,color,form){
    this.thick=thick;
    this.color=color;
    this.x1=x1;
    this.y1=y1;
    this.x2=x2;
    this.y2=y2;
    this.form=form;

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
    this.getX2= function(){
        return this.x2;
    }.bind(this);
    this.getY2= function(){
        return this.y2;
    }.bind(this);
    this.getForm= function(){
        return this.form;
    }.bind(this);
}

function Rectangle(x1,y1,width,height,thick,color){
    Form.call(this,x1,y1,width,height,thick,color,"Rectangle");
};
Rectangle.prototype = new Form();

function Line(x1,y1,x2,y2,thick,color){
    Form.call(this,x1,y1,x2,y2,thick,color,"Line");
};
Line.prototype = new Line();
