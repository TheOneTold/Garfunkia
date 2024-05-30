// Nonesense that tells you days since a date. //
function parseDate(str) {
	var mdy = str.split('/');
	return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function datediff(first, second) {
	// Take the difference between the dates and divide by milliseconds per day.
	// Round to nearest whole number to deal with DST.
	return Math.round((second-first)/(1000*60*60*24));
}
function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 !== 0)) || (year % 400 == 0);
}
//end of that//
var d = new Date();
var currentMonth = d.getMonth();
var currentYear = d.getFullYear();
var currentDay = d.getDate();
var currentHour = d.getHours();
var month;
var day;
// Finds out the month (Not current set up for leap years. Keep that in mind.) //
if (currentMonth == 3 && currentDay > 4 || currentMonth == 4 || currentMonth == 5 && currentDay < 14){
	var month = "G";
}
if (currentMonth == 5 && currentDay > 13 || currentMonth == 6 || currentMonth == 7 && currentDay < 23){
	var month = "L";
}
if (currentMonth == 7 && currentDay > 22 || currentMonth == 8 || currentMonth == 9){
	var month = "P";
}
if (currentMonth == 10 || currentMonth == 11 || currentMonth == 0 && currentDay < 10){
	var month = "D";
}
if (currentMonth == 0 && currentDay > 9 || currentMonth == 1 || currentMonth == 2 && currentDay < 22){
	var month = "C";
}
if (currentMonth == 2 && currentDay > 20 || currentMonth == 3 && currentDay < 5){
	var month = "R";
}
// Finds out the day.//
if (month == "G"){
	day = datediff(parseDate("4/4/" + currentYear), parseDate(currentMonth + 1 + "/" + currentDay + "/" + currentYear))
}
if (month == "L"){
	day = datediff(parseDate("6/13/" + currentYear), parseDate(currentMonth + 1 + "/" + currentDay + "/" + currentYear))
}
if (month == "P"){
	day = datediff(parseDate("8/22/" + currentYear), parseDate(currentMonth + 1 + "/" + currentDay + "/" + currentYear))
}
if (month == "D" && currentMonth !== 0){
	day = datediff(parseDate("10/31/" + currentYear), parseDate(currentMonth + 1 + "/" + currentDay + "/" + currentYear))
}
if (month == "D" && currentMonth == 0){
	day = 62 + datediff(parseDate("1/1/" + currentYear), parseDate(currentMonth + 1 + "/" + currentDay + "/" + currentYear))
}
if (month == "C"){
	day = datediff(parseDate("1/9/" + currentYear), parseDate(currentMonth + 1 + "/" + currentDay + "/" + currentYear))
}
// Whether or not the year is a leap year changes the dates //
if (month == "R" && leapYear(currentYear) ==! true){
	day = datediff(parseDate("3/20/" + currentYear), parseDate(currentMonth + 1 + "/" + currentDay + "/" + currentYear))
}
if (month == "R" && leapYear(currentYear) == true){
	day = datediff(parseDate("3/19/" + currentYear), parseDate(currentMonth + 1 + "/" + currentDay + "/" + currentYear))
}
if(month == "C" && day == 71){
	var day = 1;
	var month = "R";
}
//End of leap year dates //
// End of day finding


//end of that

var tzoff = d.getTimezoneOffset() / 60;
// Find year
var year;
if( currentMonth > 3 || currentMonth==3 && currentDay>4){
	year = currentYear - 2018;
	
} else {
	year = currentYear - 2019;
}
// End of year finding

// Below subtracts 1 if before 6am
if(tzoff!=12 && currentHour < 6){
	day=day-1;
	
}





// Below
// exports the day formatted to the correct format into a paragraph with the id of "p1".
if( year > 0 ){
document.getElementById("p1").innerHTML = month + day + "-GY" + year;	
} else {
document.getElementById("p1").innerHTML = month + day + "-BGY" + Math.abs(year);
}

if (month == "G" && day == 1){
	document.getElementById("logo").src="holiday/garfunkelday.png";
}
if (month == "G" && day == 5){
	document.getElementById("logo").src="holiday/laws.png";
}
if (month == "G" && day == 6){
	document.getElementById("logo").src="holiday/garfunkiaindependence.png";
}
if (month == "G" && day == 31){
	document.getElementById("logo").src="holiday/summer.png";
}
if (month == "G" && day == 55){
	document.getElementById("logo").src="holiday/jesse.png";
}
if (month == "L" && day == 8){
	document.getElementById("logo").src="holiday/reviewbrah.png";
}
if (month == "L" && day == 22){
	document.getElementById("logo").src="holiday/seinfeld.png";
}
if (month == "L" && day == 36){
	document.getElementById("logo").src="holiday/henrald.png";
}
if (month == "L" && day == 50){
	document.getElementById("logo").src="holiday/aidan.png";
}
if (month == "L" && day == 59){
	document.getElementById("logo").src="holiday/terry.png";
}
if (month == "L" && day == 63){
	document.getElementById("logo").src="holiday/brony.png";
}
if (month == "L" && day == 68){
	document.getElementById("logo").src="holiday/afghan.png";
}
if (month == "P" && day == 26){
	document.getElementById("logo").src="holiday/curiousgeorge.png";
}
if (month == "P" && day == 30){
	document.getElementById("logo").src="holiday/shinzoabe.png";
}
if (month == "L" && day == 55){
	document.getElementById("logo").src="holiday/fall.png";
}
if (month == "P" && day == 41){
	document.getElementById("logo").src="holiday/pawwah.png";
}
if (month == "P" && day == 65){
	document.getElementById("logo").src="holiday/superd.png";
}
if (month == "D" && day == 15){
	document.getElementById("logo").src="holiday/jason.png";
}
if (month == "D" && day == 17){
	document.getElementById("logo").src="holiday/doug.png";
}
if (month == "D" && day == 20){
	document.getElementById("logo").src="holiday/brony.png";
}
if (month == "D" && day == 20){
	document.getElementById("logo").src="holiday/donkeykongcountry2.png";
}
if (month == "D" && day == 28){
	document.getElementById("logo").src="holiday/zach.png";
}
if (month == "D" && day == 36){
	document.getElementById("logo").src="holiday/brony.png";
}
if (month == "D" && day == 44){
	document.getElementById("logo").src="holiday/alvin.png";
}
if (month == "D" && day == 45){
	document.getElementById("logo").src="holiday/terrynick.png";
}
if (month == "D" && day == 49){
	document.getElementById("logo").src="holiday/desp.png";
}
if (month == "D" && day == 7){
	document.getElementById("logo").src="holiday/winter.png";
}
if (month == "D" && day == 57){
}
if (month == "D" && day == 70){
	document.getElementById("logo").src="holiday/nixon.png";
}
if (month == "C" && day == 1){
	document.getElementById("logo").src="holiday/tintin.png";
}
if (month == "C" && day == 20){
	document.getElementById("logo").src="holiday/kansas.png";
}
if (month == "C" && day == 33){
	document.getElementById("logo").src="holiday/alex.png";
}
if (month == "C" && day == 37){
	document.getElementById("logo").src="holiday/professor.png";
}
if (month == "C" && day == 40){
	document.getElementById("logo").src="holiday/chad.png";
}
if (month == "C" && day == 63){
	document.getElementById("logo").src="holiday/scatman.png";
}
if (month == "C" && day == 67){
	document.getElementById("logo").src="holiday/gangweed.png";
}
if (month == "C" && day == 26){
	document.getElementById("logo").src="holiday/spring.png";
}
if (month == "R" && day == 1){
	// first day of repentence
}
if (month == "R" && day == 13){
	document.getElementById("logo").src="holiday/yahoo.png";
}
if (month == "R" && day == 15 && leapYear(currentYear) ==! true){
	document.getElementById("logo").src="holiday/newyearseve.png";
}
if (month == "R" && day == 16 && leapYear(currentYear) == true){
	document.getElementById("logo").src="holiday/newyearseve.png";
}

//audio-video nonesense

var g = document.getElementById("garfunkiaAudio"); 
g.volume = 0.5;

// Functions for flag clicks.

function flagclicked(){
	if (month == "R" && day == 15 && leapYear(currentYear) ==! true){
		var embedCode = '<video controls autoplay><source src="video/newyear.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
	}
	if (month == "R" && day == 16 && leapYear(currentYear) == true){
		var embedCode = '<video controls autoplay><source src="video/newyear.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
	}
	if (month == "D" && day == 44){
		document.getElementById("gfaudio").src="sound/alvin.mp3";
		g.play();
	}
	if (month == "L" && day == 22){
		document.getElementById("gfaudio").src="sound/seinfeld.mp3";
		g.play();
	}
	if (month == "L" && day == 59){
		document.getElementById("gfaudio").src="sound/terry.mp3";
		g.play();
	}
	if (month == "P" && day == 65){
		document.getElementById("gfaudio").src="sound/superd.mp3";
		g.play();
	}
	if (month == "L" && day == 68){
		document.getElementById("gfaudio").src="sound/afghan.mp3";
		g.play();
	}
	if (month == "P" && day == 26){
		document.getElementById("gfaudio").src="sound/curious.mp3";
		g.play();
	}
	if (month == "C" && day == 1){
		var embedCode = '<video controls autoplay><source src="video/tintin.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
	}
	if (month == "C" && day == 37){
		document.getElementById("gfaudio").src="sound/professor.mp3";
		g.play();
	}
	if (month == "P" && day == 20){
		var embedCode = '<video controls autoplay><source src="video/911.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
	}
	
	
	
	if (month == "P" && day == 41){
	var embedCode = '<video controls autoplay><source src="video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
if (month == "P" && day == 42){
	var embedCode = '<video controls autoplay><source src="video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
if (month == "P" && day == 43){
	var embedCode = '<video controls autoplay><source src="video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
if (month == "P" && day == 44){
	var embedCode = '<video controls autoplay><source src="video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
if (month == "P" && day == 45){
	var embedCode = '<video controls autoplay><source src="video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
if (month == "P" && day == 46){
	var embedCode = '<video controls autoplay><source src="video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
if (month == "P" && day == 47){
	var embedCode = '<video controls autoplay><source src="video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
if (month == "P" && day == 48){
	var embedCode = '<video controls autoplay><source src="video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
if (month == "P" && day == 49){
	var embedCode = '<video controls autoplay><source src="video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
if (month == "P" && day == 50){
	var embedCode = '<video controls autoplay><source src="video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
}