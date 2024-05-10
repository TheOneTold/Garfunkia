



function calculateSubmit() {
	var fmonth = document.getElementById("fmonth").value; 
	var fday = document.getElementById("fday").value; 
	var fyear = document.getElementById("fyear").value;
	var d = new Date();
var zMonth = fmonth-1;
var zYear = fyear;
var zDay = fday;
var zHour = 12;
var month;
var day;

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
  return ((fyear % 4 == 0) && (fyear % 100 !== 0)) || (fyear % 400 == 0);
}
//end of that//



// Finds out the month //
if (zMonth == 3 && zDay > 4 || zMonth == 4 || zMonth == 5 && zDay < 14){
	var month = "G";
}
if (zMonth == 5 && zDay > 13 || zMonth == 6 || zMonth == 7 && zDay < 23){
	var month = "L";
}
if (zMonth == 7 && zDay > 22 || zMonth == 8 || zMonth == 9){
	var month = "P";
}
if (zMonth == 10 || zMonth == 11 || zMonth == 0 && zDay < 10){
	var month = "D";
}
if (zMonth == 0 && zDay > 9 || zMonth == 1 || zMonth == 2 && zDay < 22){
	var month = "C";
}
if (zMonth == 2 && zDay > 20 || zMonth == 3 && zDay < 5){
	var month = "R";
}
// Finds out the day.//
if (month == "G"){
	day = datediff(parseDate("4/4/" + zYear), parseDate(zMonth + 1 + "/" + zDay + "/" + zYear))
}
if (month == "L"){
	day = datediff(parseDate("6/13/" + zYear), parseDate(zMonth + 1 + "/" + zDay + "/" + zYear))
}
if (month == "P"){
	day = datediff(parseDate("8/22/" + zYear), parseDate(zMonth + 1 + "/" + zDay + "/" + zYear))
}
if (month == "D" && zMonth !== 0){
	day = datediff(parseDate("10/31/" + zYear), parseDate(zMonth + 1 + "/" + zDay + "/" + zYear))
}
if (month == "D" && zMonth == 0){
	day = 62 + datediff(parseDate("1/1/" + zYear), parseDate(zMonth + 1 + "/" + zDay + "/" + zYear))
}
if (month == "C"){
	day = datediff(parseDate("1/9/" + zYear), parseDate(zMonth + 1 + "/" + zDay + "/" + zYear))
}
// Whether or not the year is a leap year changes the dates //
if (month == "R" && leapYear(zYear) ==! true){
	day = datediff(parseDate("3/20/" + zYear), parseDate(zMonth + 1 + "/" + zDay + "/" + zYear))
}
if (month == "R" && leapYear(zYear) == true){
	day = datediff(parseDate("3/19/" + zYear), parseDate(zMonth + 1 + "/" + zDay + "/" + zYear))
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
if( zMonth > 3 || zMonth==3 && zDay>4){
	year = zYear - 2018;
	
} else {
	year = zYear - 2019;
}
// End of year finding

// Below subtracts 1 if before 6am
if(tzoff!=12 && zHour < 6){
	day=day-1;
	
}

if (fyear < 0){
	year = year + 1;
}
// Below
// exports the day formatted to the correct format into a paragraph with the id of "p1".
if( year > -1 ){
document.getElementById("p2").innerHTML = month + day + "-GY" + (year);	
} else {
if( year == 0 ){
document.getElementById("p2").innerHTML = month + day + "-GYε";	
}
if ( year > 0 ) {
document.getElementById("p2").innerHTML = month + day + "-BGY" + Math.abs(year);
}
}











