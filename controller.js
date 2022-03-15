
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode;
	this.currLineWidth;
	this.currColour;
	this.currentShape = 0;
	this.ctx = ctx;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	this.FLineWidth = function(){
		this.currLineWidth = document.getElementById('spinnerWidth').value;
	}.bind(this);

	new DnD(canvas, this);

	this.FEditingMode = function(){
		if (document.getElementById("butRect").checked){
			this.currEditingMode =editingMode.rect;
		}
		else{
			this.currEditingMode =editingMode.line;
		}
	}.bind(this);

	this.FColor = function(){
		this.currColour = document.getElementById('colour').value;
	}.bind(this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function(dnd){
		this.FEditingMode();
		this.FLineWidth();
		this.FColor();
		switch(this.currEditingMode){
			case editingMode.rect: {
				this.currentShape = new Rectangle(dnd.getXStart(),dnd.getYStart(),0,0,this.currLineWidth,this.currColour);
			  break;
			}
			case editingMode.line: {
				this.currentShape = new Line(dnd.getXStart(),dnd.getYStart(),dnd.getXEnd(),dnd.getYEnd(),this.currLineWidth,this.currColour);
			  break;
			}
		  }
	}.bind(this);

	this.onInteractionUpdate = function(dnd){
		if(this.currEditingMode == 0){
		this.currentShape.x2 = dnd.getXEnd()-this.currentShape.x1;
		this.currentShape.y2 = dnd.getYEnd()-this.currentShape.y1;
		}
		else {
		this.currentShape.x2 = dnd.getXEnd();
		this.currentShape.y2 = dnd.getYEnd();
		}
		drawing.paint(this.ctx);
		this.currentShape.paint(this.ctx);
	}.bind(this);

	this.onInteractionEnd = function(dnd){
		if(this.currEditingMode == 0){
		this.currentShape.x2 =dnd.getXEnd()-this.currentShape.x1;
		this.currentShape.y2 = dnd.getYEnd()-this.currentShape.y1;
		}
		else {
			this.currentShape.x2 = dnd.getXEnd();
			this.currentShape.y2 = dnd.getYEnd();
			}
		this.currentShape.paint(this.ctx);
		drawing.addForms(this.currentShape);
		drawing.paint(this.ctx);
	}.bind(this);
};


