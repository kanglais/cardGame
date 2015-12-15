// Create a javascript card game, 
//no rules, do whatever you want. 
// Just make sure it’s good enough 
//to put as a portfolio project. 


// three cards, guess a card
// 1. shown the suicide king
// 2. card is flipped over
// 3. animation - cards are mixed up
// 4. user prompt: pick a card- click on an img 
// 5. user clicks card
// 6. card is flipped over
// 6.5 card is compared to suicide king card
// 7. card match = user wins
// 8. card doesnt = computer wins
// 8.5 track cards
// 9. play again?


$(document).ready(function(){
	$("a").click(function(){
		$(".back").toggleClass('hidden');
		$(".front").toggleClass('hidden');
	});
	$(".front").click(function () {
		var parent = $("#shuffle");
		var divs = parent.children();
		while (divs.length) {
			parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
		}
		$("h4").text("Where da king at?");
	});
	$('a.back').on('click', function() {
	  	if($(this).hasClass("winner") == true) {
			alert("You da fuxkin best.");
		}
		else {
			alert("Way to go, buddy, you're awful.");
		}
		$("h4").text("Click the King to go again!");
	});
});