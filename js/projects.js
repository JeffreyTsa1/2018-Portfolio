var projects_arr_name = ["#hgtxt","#ttmtxt","#pevtxt","#aatxt"]; // Array of the ID for each project name
var projects_arr_pic = ["#hgprv","#ttmprv","#pevprv","#aaprv"]; // Array of the ID of the imgs of projects

var hgVis = false
var ttmVis = false;
var pevVis = false;
var aaVis = false;

$("#hgtxt").hover(function() {
	if(hgVis!=true){
		hg(0);
	}
},
function(){
	if(hgVis!=true){		
		hg(1);
	}
});

$("#ttmtxt").hover(function() {
	if(ttmVis!=true){		
		ttm(0);
	}
	else{
		
	}
},
function(){
	if(ttmVis!=true){		
		ttm(1);
	}
});

// $("#hgtxt").hover(function() {
// 	hg(0);
// },
// function(){
// 	hg(1);
// });

$("#hgtxt").click(function(){
	if(hgVis==true){
		hgVis=false;
		hg(1);
		$("#ptxt").css("opacity","1");
		$("#hourglass").removeClass("true");
	}
	else{
		hgVis = true;
		hg(0);
		$("#ptxt").css("opacity","0");
		$("#hourglass").addClass("true");
	}
});

$("#ttmtxt").click(function(){
	if(ttmVis==true){
		ttmVis=false;
		ttm(1);
		$("#twitter_vis").removeClass("true");
	}
	else{
		ttmVis = true;
		ttm(0);
		$("#twitter_vis").addClass("true");
	}
});


function hg(value){
	// $("#ttmtxt").css("opacity",value);
	// $("#pevtxt").css("opacity",value);
	// $("#aatxt").css("opacity",value);
	var val = parseInt(value,10);
	$("#hgprv").css("opacity",val^1+"");	
}

function ttm(value){
	// $("#hgtxt").css("opacity",value);
	// $("#pevtxt").css("opacity",value);
	// $("#aatxt").css("opacity",value);
	var val = parseInt(value,10);
	$("#ttmprv").css("opacity",val^1+"");	
}

// function hg(value){
// 	$("#ttmtxt").css("opacity",value);
// 	$("#pevtxt").css("opacity",value);
// 	$("#aatxt").css("opacity",value);
// 	var val = parseInt(value,10);
// 	$("#hgprv").css("opacity",val^1+"");	
// }

// function hg(value){
// 	$("#ttmtxt").css("opacity",value);
// 	$("#pevtxt").css("opacity",value);
// 	$("#aatxt").css("opacity",value);
// 	var val = parseInt(value,10);
// 	$("#hgprv").css("opacity",val^1+"");	
// }

var selection = function(classname, load){







}