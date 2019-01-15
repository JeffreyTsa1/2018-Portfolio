
function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
}

/**** Loading Animation ****/
var nl = setInterval(function(){
		document.getElementById("title").innerHTML = randomWordGen(0);
		console.log("Me too");
	}, 40);

function randomWordGen(count){
	var string = "";
	for (var i=0;i<12-count;i++){
		string += String.fromCharCode(Math.floor(Math.random()*40 + 65));
	}
	return string;
}

var i = 0;
var name = "Jeffrey Tsai";

function loaded() {
	setTimeout(function(){
		var are = setInterval(function(){
			console.log("still running");
			document.getElementById("title").innerHTML = name.substring(0,i)+ randomWordGen(i);
			if(i==13){
				clearInterval(are);
			}
		}, 40);
		i++;
		if(i<13) {
			loaded();
		}

	},280-(i*18));
}

function enter() {

}

$(window).load(function() {
	unloadScrollBars();
	setTimeout(function(){
		$("h5").css("opacity","0");
	},1000);
	setTimeout(function(){
		loaded();
	},1700);
	setTimeout(function(){clearInterval(nl);},2000);
    setTimeout(function() {
        $(".intro").addClass("loaded");
    	$(".about").addClass("appear");
    }, 4000);
    setTimeout(function(){
    	$(".intro").css("display","none");
    	$(".about a").addClass("entrance");
    	$("#paragraph p").addClass("entrance");
    },5500);
});

