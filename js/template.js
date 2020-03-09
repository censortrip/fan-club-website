(function() {
  'use strict';
  var doc = document;
  
	window.addEventListener('load', function () {			 																	
		doc.querySelector('.main-content-test').className = 'main-content';														
		doc.getElementById('menu-btn').addEventListener('click', function(){autoScroll();});									
		doc.querySelector('.up-arrow').addEventListener('click', function(){autoScrollTop();});																			
		yearTemplate();
		nextGameTemplate();						
	}, false);
	 
function autoScroll(){
	var scrollY = 0;
	var top = document.getElementById('schedule').offsetTop; //offsetTop gets Y of target element
    var currentY = window.pageYOffset;
	var bodyHeight = document.body.offsetHeight;
	var yPos = currentY + window.innerHeight;
	var animator = setTimeout(function(){autoScroll();},10);
			
	//in the future, see about using a transition for this functionality
	//**IMPORTANT NOTE, the >= bodyHeight is required for this to work in FireFox properly
	if(yPos >= bodyHeight){
	    clearTimeout(animator);
	} else if (currentY < top - 55)	{
		scrollY = currentY + 55;
		window.scroll(0, scrollY); 			 
	} else {
		clearTimeout(animator);
	}		  
}

function autoScrollTop(){
  var scrollY = 0;	
  var currentY = window.pageYOffset;
  var animator = setTimeout(function(){autoScrollTop();},10);
  
		if(currentY > 0){
		    scrollY = currentY - 55;
		    window.scroll(0, scrollY); 		
		} else {
			clearTimeout(animator);
		}	
}
	
/*AUTOMATIC COPYRIGHT GENERATION TEMPLATE*/
  function yearTemplate(){	
	var thisYear = {
	    currentYear : function(){
		var year = new Date();
		return year.getFullYear();		
	  }
	};

	var output = Mustache.render( 'Copyright {{currentYear}} <br/> North Atlanta Steeler Nation', thisYear);
	doc.getElementById('copyright').innerHTML = output;
  }

  /*THIS FUNCTION COMPUTES THE CURRENT GAME WEEK FOR THE NEXT-GAME COMPONENT ON THE HOME PAGE*/
  function getGameWeek(){
	    var now = new Date();
		/*the get month function returns 0 for January, thus the reason for the + 1 */
		var nowFormated = now.getMonth() + 1 + '/' + now.getDate() + '/'  + now.getFullYear();	
		var currentMonth = now.getMonth() + 1;
		
		return 20;
  }
  
  /*NEXT-GAME SECTION TEMPLATE THAT GENERATES THE CURRENT NEXT OPPONENTS LOGO */
  function nextGameTemplate(){	 		
		var currentGameWeek = getGameWeek();
		
  var teamImage = { 
	  getLogo: function(){
		var teamNames = ["giants","falcons", "colts", "panthers", "browns", "vikings", "bears", "ravens", "jaguars", "chiefs", "bengals", "lions", "colts", "titans", "packers", "bengals","ravens", "patriots", "texans", "jaguars"];	
		return teamNames[currentGameWeek - 1];						
	}		
  };
  
  var gameData = {  
	  homeAwayData : function(){
		   var homeAwayList = ["@", "VS.", "VS.", "@", "@", "VS.", "@", "@", "VS.", "@", "VS.", "@", "@", "VS.", "VS.", "@", "VS.","VS.","@","VS."];
		   return homeAwayList[currentGameWeek - 1];
	  },
	  nextGameDate: function(){		
		  var gameDates = ["Monday    September 12, 2016", "Sunday    August 20, 2017", "Saturday    August 26, 2017", "Thursday    August    31, 2017", "Sunday    September    10, 2017", "Sunday    September  17, 2017", "Sunday    September   24, 2017", "Sunday    October   1, 2017", "Sunday    October  8, 2017", "Sunday    October  15, 2017", "Sunday  October  22, 2017", "Sunday    October   29, 2017", "Sunday    November  12, 2017", "Thursday    November  16, 2017", "Sunday    November  26, 2017", "Monday    December  4, 2017", "Sunday    December  10, 2017", "Sunday    December  17, 2017", "Monday    December  25, 2017", "Sunday    January  14, 2017"];							   		  						   
		  return gameDates[currentGameWeek -1];
	 },
	 
	 nextGameTime : function (){
			var gameTimes = ["7:10 pm", "4:00 pm", "7:30 pm", "7:30 pm", "1:00 pm", "1:00 pm", "1:00 pm", "1:00 pm", "1:00 pm", "4:25 pm", "1:00 pm", "8:30 pm", "1:00 pm", "8:25 pm", "8:30 pm", "8:30 pm", "8:30 pm", "4:25 pm", "4:30 pm", "1:05 pm"];						   		  						   
		  return gameTimes[currentGameWeek -1];
	 }
  };
    
	var output1 = Mustache.render( '<img src="images/team-logos/logos-large/{{getLogo}}-large.png" alt="{{getLogo}}-logo" >', teamImage);
	doc.getElementById('right-team-logo').innerHTML = output1;
	
    var output2 = Mustache.render('<h1 id="next-game">Next Game</h1>' + '<h1 id="home-away">{{homeAwayData}}</h1>' + '<h3 id="next-game-date"> {{nextGameDate}} <br> {{nextGameTime}} </h3>', gameData);
	doc.getElementById('next-game-content').innerHTML = output2;
}
  	
})();


  
  
  
	
 
  
  

