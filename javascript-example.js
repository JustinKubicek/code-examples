//Example 1 For Each

var lawntools = [
	'Mower',
	'Weed whip',
	'Shovel',
	'Garden Hoe'
];

lawntools.forEach(function (tool, index) {
	console.log(index + ": " + tool);
});

// returns "0: Mower", "1: Weed whip", "2: Shovel", "3: "Garden Hoe"

// Other examples of selecting without using jQuery
// jQuery version $("#example")
// Vanilla version:
document.getElementById('example')
// jQuery version $(".example")
// Vanilla version:
document.getElementsByClassName('.example')

// Fade out an element, then remove it. 
var eObj = document.getElementById('section__5').style;
eObj.opacity = 1;
(function fade(){
    (eObj.opacity-=.1) < 0 ? eObj.display="none" : setTimeout(fade,40)
})();