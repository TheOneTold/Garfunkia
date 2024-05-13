function isInt(value) {
	return !isNaN(value) && 
	parseInt(Number(value)) == value && 
	!isNaN(parseInt(value, 10));
}
function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 !== 0)) || (year % 400 == 0);
}
	
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

if(zMonth < 0 || zDay < 0){
	alert("Month and Day cannot be negative.");
	return false;
}

if(isInt(zMonth) == false || isInt(zDay) == false || isInt(zYear) == false){
	alert("Month, day, and year must be valid integers.");
    return false;
}

if(zMonth > 11){
	alert("Month cannot be greater than 12.");
    return false;
}

if((zMonth == 3 || zMonth == 5 || zMonth == 8 || zMonth == 10) && zDay > 30){
	alert("Day cannot be greater than 30.");
    return false;
}
if((zMonth == 1 && zDay > 28 && leapYear(zYear) == false) || (zMonth == 1 && zDay > 29 && leapYear(zYear) == true) ){
	alert("Day cannot be greater than 30.");
    return false;
}

if(isInt(zYear) == false){
	alert("Year must be a number. Do not include A.D. or B.C. Use negative numbers to represent B.C. years.");
    return false;
}

if(zYear == 0){
	alert("0 is not a valid year. Use -1 for 1BC, or 1 for 1AD.");
    return false;
}

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
	if(zYear < 1){
		year = zYear - 2017;
	}

} else {
	year = zYear - 2019;
	if(zYear < 1){
		year = zYear - 2019;
	}
}

// End of year finding

// Below subtracts 1 if before 6am
if(tzoff!=12 && zHour < 6){
	day=day-1;

}
// Below
// exports the day formatted to the correct format into a paragraph with the id of "p1".
if( year > 0 ){
document.getElementById("p2").innerHTML = month + day + "-GY" + (year);
} else {
if( year == 0 ){
document.getElementById("p2").innerHTML = month + day + "-GYε";
}
if ( year < 0 ) {
document.getElementById("p2").innerHTML = month + day + "-BGY" + Math.abs(year);
}
}
}

function calculateSubmit2() {
	var xDate = document.getElementById("fdate").value;
	var dateArray = xDate.split('-');
	var xMonthDay = dateArray[0];
	var xGyear = dateArray[1];
	
	var xMonth = xMonthDay.slice(0,1)
	var xDay = parseInt(xMonthDay.slice(1,))
	
	if(xDate == null || xMonthDay == null || xGyear == null || xMonth == null || xDay == null){
		alert("Incorrect format. Please use the MD-Y format.");
		return false;
	}
	
	var xGY = xGyear.replace(/\d/g,'')
	if (xGY !== "GYε" && xGY !== "GYe") {
		var xYear = parseInt(xGyear.replace( /^\D+/g, ''));
	} else {
		var xYear = 0;
		var xGY = "GY"
		
	}
	
	var gMonth;
	var gDay;
	var gYear;
	
	if(isInt(xDay) == false || isInt(xYear) == false){
		alert("Day and year must be numbers. Please use the MD-Y format. ");
		return false;
	}
	if(xGY !== "GYe" && xGY !== "GYε" && xGY !== "GY" && xGY !== "BGY"){
		alert("Incorrect year format. Please use GY or BGY.");
		return false;
	}
	
	// Finds Gregorian month and day
	
	if (xMonth == "G" && xDay < 27 ) {
		gMonth = 4;
		gDay = xDay + 4;
	}
	if (xMonth == "G" && xDay > 26 && xDay < 58 ) {
		gMonth = 5;
		gDay = xDay - 26;
	}
	if (xMonth == "G" && xDay > 57 ) {
		gMonth = 6;
		gDay = xDay - 57;
	}
	
	if (xMonth == "L" && xDay < 18 ) {
		gMonth = 6;
		gDay = xDay + 13;
	}
	if (xMonth == "L" && xDay > 17 && xDay < 49 ) {
		gMonth = 7;
		gDay = xDay - 17;
	}
	if (xMonth == "L" && xDay > 48 ) {
		gMonth = 8;
		gDay = xDay - 48;
	}
	
	if (xMonth == "P" && xDay < 10 ) {
		gMonth = 8;
		gDay = xDay + 22;
	}
	if (xMonth == "P" && xDay > 9 && xDay < 40) {
		gMonth = 9;
		gDay = xDay - 9;
	}
	if (xMonth == "P" && xDay > 39) {
		gMonth = 10;
		gDay = xDay - 39;
	}
	
	if (xMonth == "D" && xDay < 31 ) {
		gMonth = 11;
		gDay = xDay - 0;
	}
	if (xMonth == "D" && xDay > 30 && xDay < 62 ) {
		gMonth = 12;
		gDay = xDay - 30;
	}
	if (xMonth == "D" && xDay > 61 ) {
		gMonth = 1;
		gDay = xDay - 61;
	}
	
	if (xMonth == "C" && xDay < 23 ) {
		gMonth = 1;
		gDay = xDay + 9;
	}
	if (xMonth == "C" && xDay > 22 && xDay < 51 ) {
		gMonth = 2;
		gDay = xDay - 22;
	}
	if (xMonth == "C" && xDay > 50 ) {
		gMonth = 3;
		gDay = xDay - 50;
	}
	
	if (xMonth == "R" && xDay < 12 ) {
		gMonth = 3;
		// Changed this from 19 to 20. Hopefully this works.
		gDay = xDay + 20;
	}
	if (xMonth == "R" && xDay > 11 ) {
		gMonth = 4;
		// Changed this from 11 to 12.
		gDay = xDay - 11;
	}
		//Finds Gregorian year
	
	if (xGY == "GY" && gMonth > 4 || xGY == "GY" && gMonth ==4 && gDay > 4) {
		gYear =xYear+2018;
	}
	if (xGY == "GY" && gMonth < 4 || xGY == "GY" && gMonth ==4 && gDay < 5) {
		gYear =xYear+2019;
	}
	if (xGY == "BGY" && gMonth > 4 || xGY == "BGY" && gMonth ==4 && gDay > 4) {
		gYear =2018 - xYear;
	}
	if (xGY == "BGY" && gMonth < 4 || xGY == "BGY" && gMonth ==4 && gDay < 5) {
		gYear =2019 - xYear;
	}
	if (gYear == 0) {
		gYear = 1 + "BC";
	}
	if (gYear < 0) {
		gYear = Math.abs(gYear) + 1 + "BC";
	}
	
	if (xMonth == "R" && xDay > 15) {
		gMonth = 4;
		gDay=4;
		gYear = gYear + 1
	}
	
	//Leap year nonsense
	if (leapYear(gYear) && xYear > 0){
		if (xMonth == "C" && xDay > 22 && xDay < 52 ) {
			gMonth = 2;
			gDay = xDay - 22;
		}
		if (xMonth == "C" && xDay > 51 ) {
			gMonth = 3;
			gDay = xDay - 51;
		}
		if (xMonth == "R" && xDay < 13 ) {
			gMonth = 3;
			gDay = xDay + 19;
		}
		if (xMonth == "R" && xDay > 12 ) {
			gMonth = 4;
			gDay = xDay - 12;
		}
		if (xMonth == "R" && xDay > 15) {
			gDay=4;
			
		}
		
	}
	var pYear = parseInt(gYear);
	if (leapYear(pYear) && xYear < 1){
		if (xMonth == "C" && xDay > 22 && xDay < 52 ) {
			gMonth = 2;
			gDay = xDay - 22;
		}
		if (xMonth == "C" && xDay > 51 ) {
			gMonth = 3;
			gDay = xDay - 51;
		}
		if (xMonth == "R" && xDay < 13 ) {
			gMonth = 3;
			gDay = xDay + 19;
		}
		if (xMonth == "R" && xDay > 12 ) {
			gMonth = 4;
			gDay = xDay - 12;
		}
		if (xMonth == "R" && xDay == 16) {
			gDay=4;
			gYear =xYear+2020;
		}
		if (xMonth == "R" && xDay == 15) {
			gDay=3;
		}
		
	}
	
	
document.getElementById("p3").innerHTML = gMonth + "/" + gDay + "/" + gYear;	
}
