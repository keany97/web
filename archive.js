var games;
var gameweekSelect;
var categoriesForm;


var Calender = new Date();
var currentYear = Calender.getFullYear();

//needed to give scope to all functions.
var scopeYear;


window.onload = function() {

	var sortByYear  = document.getElementById("yearFilter");
	var yearSelected = sortByYear.value;


	scopeYear = sortByYear.value;
	getGameData(function() {

		

		// display the game data
		


		sortByYear.onchange = function(e) {
			yearSelected = sortByYear.value;
			scopeYear = sortByYear.value;
			displayGameData();
		};

		
		displayGameData();

	});
	
}

// retrieves the raw game data from the server
function getGameData(func) {
	var request = new XMLHttpRequest();

	console.log("hello");
	request.onload = function(e) {
		games = JSON.parse(request.response);
		func();
	}

	request.open("GET", "getData.php");
	request.send();
}


function yearFilter(element)
{	
	if(element.year == scopeYear)
	{
		return true;
	}
}

function filterByYear() {

	var gameData = games;
	var filtered = _.filter(gameData, yearFilter);
	// return the filtered game data

	
	return filtered;
}




// renders the tabular game data
function displayGameData() {

	
	var result;
	var filteredByYear = filterByYear();
	
    //template += "<tr><th>Rnd</th><th>HomeTeamID</th><th>AwayTeamID</th><th>date</th><th>HomeTeamScore</th><th>AwayTeamScore</th><th>HomeTeamTries</th><th>AwayTeamTries</th><th>Venue</th></tr>";
	console.log("hello");

	_.each(filteredByYear, function(r, i) {


		//result = Mustache.render(template, {Round: r.rnd},{Home Team: r.HomeTeamID}, {HomeTeamScore: r.HomeTeamScore}, {AwayTeamScore: r.AwayTeamScore}, {AwayTeamID: r.AwayTeamID}, {Venue: r.venue});
	     
	     result  += "<tr><td>" + r.rnd + "</td><td>" + r.HomeTeamID + "</td><td>" + r.AwayTeamID + "</td><td>" +
	 	r.date + "</td><td>" + r.HomeTeamScore + "</td><td>" + r.AwayTeamScore + "</td><td>" + r.HomeTeamTries + "</td><td>" + r.AwayTeamTries + "</td><td>" + r.venue +"</td></tr>";
	document.getElementById("data").innerHTML=result;
	 });



}