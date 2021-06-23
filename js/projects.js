var projects_arr_name = ["#hgtxt","#ttmtxt","#pevtxt","#aatxt"]; // Array of the ID for each project name
var projects_arr_pic = ["#hgprv","#ttmprv","#pevprv","#aaprv"]; // Array of the ID of the imgs of projects

var hgVis = false // HourGlass
var ttmVis = false; // Tree Tab Manager
var pevVis = false; // Twitter 2016 visualization
var aaVis = false;

$("#close").click(function(){
	if(hgVis){
		hgVis=false;
		hg(1);
		$("#ptxt").css("transform","translateY(0px)");
		$("#close").css("transform","translateY(60px)");
		$("#hourglass").removeClass("true");
		$("#sDown").css("opacity","0");
	}
	if(ttmVis){
		ttmVis=false;
		ttm(1);
		$("#ptxt").css("transform","translateY(0px)");
		$("#close").css("transform","translateY(60px)");
		$("#treetab").removeClass("true");
		$("#sDown").css("opacity","0");
	}
	if(pevVis){
		pevVis=false;
		pev(1);
		$("#ptxt").css("transform","translateY(0px)");
		$("#close").css("transform","translateY(60px)");
		$("#twitter_vis").removeClass("true");
		$("#sDown").css("opacity","0");
	}
});


$("#hgtxt").hover(function() {
	if(!(ttmVis || pevVis || aaVis)){
		if(hgVis!=true){
			$("#hgprv").css("transform","translateY(0px)");
			hg(0);
		}
	}
},
function(){
	if(!(hgVis || pevVis || aaVis)){
		if(hgVis!=true){
			$("#hgprv").css("transform","translateY(10px)");		
			hg(1);
		}
	}
});

$("#ttmtxt").hover(function() {
	if(!(hgVis || pevVis || aaVis)){
		if(ttmVis!=true){	
			$("#ttmprv").css("transform","translateY(0px)");		
			ttm(0);
		}

	}

},
function(){
	if(!(hgVis || pevVis || aaVis)){
		if(ttmVis!=true){		
			$("#ttmprv").css("transform","translateY(10px)");	
			ttm(1);
		}
	}
});

$("#pevtxt").hover(function() {
	if(!(ttmVis || hgVis || aaVis)){
		if(pevVis!=true){	
			$("#pevprv").css("transform","translateY(0px)");	
			pev(0);
		}

	}

},
function(){
	if(!(hgVis || ttmVis || aaVis)){
		if(pevVis!=true){
			$("#pevprv").css("transform","translateY(10px)");	
			pev(1);
		}
	}
});

function redirection(sectionVal){
	if(hgVis){

	}
	else if(ttmVis){

	}
	else if(pevVis){

	}
	else if(aaVis){

	}
	else{
		alert("error");
	}

}


$("#hgtxt").click(function(){
	if(ttmVis || pevVis || aaVis){
		ttm(1);
		$("#treetab").removeClass("true");
		ttmVis=false;

		$("#twitter_vis").removeClass("true");
		pev(1);
		pevVis=false;
	}
	if(hgVis==true){
		hgVis=false;
		hg(1);
		$("#ptxt").css("transform","translateY(0px)");
		$("#close").css("transform","translateY(60px)");
		$("#hourglass").removeClass("true");
		$("#sDown").css("opacity","0");
	}
	else{ // Case where it toggles
		hgVis = true;
		hg(0);
		$("#ptxt").css("transform","translateY(-60px)");
		$("#close").css("transform","translateY(0px)");
		$("#hourglass").addClass("true");
		$("#sDown").css("opacity","1");
	}
});

$("#ttmtxt").click(function(){
	if(hgVis || pevVis || aaVis){
		hg(1);
		$("#hourglass").removeClass("true");
		hgVis=false;

		$("#twitter_vis").removeClass("true");
		pev(1);
		pevVis=false;
	}
	if(ttmVis==true){
		ttmVis=false;
		ttm(1);
		$("#ptxt").css("transform","translateY(0px)");
		$("#close").css("transform","translateY(60px)");
		$("#treetab").removeClass("true");
		$("#sDown").css("opacity","0");
	}
	else{
		ttmVis = true;
		ttm(0);
		$("#ptxt").css("transform","translateY(-60px)");
		$("#close").css("transform","translateY(0px)");
		$("#treetab").addClass("true");	
		$("#sDown").css("opacity","1");

	}
});

$("#pevtxt").click(function(){
	if(hgVis || ttmVis || aaVis){
		$("#hourglass").removeClass("true");
		hg(1);
		hgVis=false;

		ttm(1);
		$("#treetab").removeClass("true");
		ttmVis=false;
	}
	if(pevVis==true){
		pevVis=false;
		pev(1);
		$("#ptxt").css("transform","translateY(0px)");
		$("#close").css("transform","translateY(60px)");
		$("#twitter_vis").removeClass("true");
		$("#sDown").css("opacity","0");
	}
	else{
		pevVis = true;
		pev(0);
		$("#ptxt").css("transform","translateY(-60px)");
		$("#close").css("transform","translateY(0px)");
		$("#twitter_vis").addClass("true");	
		$("#sDown").css("opacity","1");

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

function pev(value){
	// $("#hgtxt").css("opacity",value);
	// $("#pevtxt").css("opacity",value);
	// $("#aatxt").css("opacity",value);
	var val = parseInt(value,10);
	$("#pevprv").css("opacity",val^1+"");	
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



$(window).load(function() {
	setTimeout(function(){
		$("#ptxt").css("opacity","1");
		$("#pContainer").css("opacity","1");
	},1000);
	
});