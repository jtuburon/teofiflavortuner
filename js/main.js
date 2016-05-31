
var currentLevel=0;

function updateLevel(levelDelta){
	if(levelDelta>0){
		currentLevel+= levelDelta;	
	}
	console.log(currentLevel);
	frameId="#tuner_"+currentLevel;
	className= "green";
	
	if(currentLevel>0 && currentLevel<=5){
		className= "green_frame";
	}else if(currentLevel <=8){
		className= "yellow_frame";
	}else{
		className= "red_frame";
	}
		
	if(levelDelta>0){
		$(frameId).addClass(className);	
	}else{
		$(frameId).removeClass(className);
		currentLevel+= levelDelta;
	}
	
	if(currentLevel==0){
		$("#message").html("<strong>Bajito en sal<strong>");
	}else if(currentLevel==10){
		$("#message").html("<strong>No te metas a loco<strong>");
	}else{
		$("#message").html("");
	}
}

$(window).load(function(){
	document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });
	
	
	$('#downBtn').on("click", function(){
		if(currentLevel>0){
			updateLevel(-1);
		}				
	});
	
	$('#upBtn').on("click", function(){
		if(currentLevel<10){
			updateLevel(1);
		}
	});
});
