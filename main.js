
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
new DnD(canvas);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue
var rec = new Rectangle(100, 100, 50, 100, 5, '#00CCC0');
rec.paint(ctx);
var ligne = new Line(10, 20, 50, 100, 3, '#00CCC0');
ligne.paint(ctx);
// tester également Dessin.
var draw = new Drawing();
var rec1 = new Rectangle(550, 550, 50, 50, 10, '#ffff80');
var ligne1 = new Line(500, 10, 10, 500, 3, '000080');
var rec2 = new Rectangle(700, 0, 100, 300, 10, '#00cc00');
var ligne2 = new Line(10, 500, 300, 300, 3, '#7a378b');
draw.addForms(rec);
draw.addForms(ligne);
draw.addForms(rec1);
draw.addForms(rec2);
draw.addForms(ligne1);
draw.addForms(ligne2);
draw.paint(ctx);

////

// Code final à utiliser pour manipuler Pencil.
//var drawing = new Drawing();
//var pencil = new Pencil(ctx, drawing, canvas);
//drawing.paint(ctx, canvas);

