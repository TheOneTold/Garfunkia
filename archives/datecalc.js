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

function calculateSubmit3() {
	var xDate = document.getElementById("fdate1").value;
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
		gYear = -1;
	}
	if (gYear < 0) {
		gYear = gYear - 1;
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
	
	
	// Convert second date.
	
	var xDate2 = document.getElementById("fdate2").value;
	var dateArray2 = xDate2.split('-');
	var xMonthDay2 = dateArray2[0];
	var xGyear2 = dateArray2[1];
	
	var xMonth2 = xMonthDay2.slice(0,1)
	var xDay2 = parseInt(xMonthDay2.slice(1,))
	
	if(xDate2 == null || xMonthDay2 == null || xGyear2 == null || xMonth2 == null || xDay2 == null){
		alert("Incorrect format. Please use the MD-Y format.");
		return false;
	}
	
	var xGY2 = xGyear2.replace(/\d/g,'')
	if (xGY2 !== "GYε" && xGY2 !== "GYe") {
		var xYear2 = parseInt(xGyear2.replace( /^\D+/g, ''));
	} else {
		var xYear2 = 0;
		var xGY2 = "GY"
		
	}
	
	var gMonth2;
	var gDay2;
	var gYear2;
	
	if(isInt(xDay2) == false || isInt(xYear2) == false){
		alert("Day and year must be numbers. Please use the MD-Y format. ");
		return false;
	}
	if(xGY2 !== "GYe" && xGY2 !== "GYε" && xGY2 !== "GY" && xGY2 !== "BGY"){
		alert("Incorrect year format. Please use GY or BGY.");
		return false;
	}
	
	// Finds Gregorian month and day
	
	if (xMonth2 == "G" && xDay2 < 27 ) {
		gMonth2 = 4;
		gDay2 = xDay2 + 4;
	}
	if (xMonth2 == "G" && xDay2 > 26 && xDay2 < 58 ) {
		gMonth2 = 5;
		gDay2 = xDay2 - 26;
	}
	if (xMonth2 == "G" && xDay2 > 57 ) {
		gMonth2 = 6;
		gDay2 = xDay2 - 57;
	}
	
	if (xMonth2 == "L" && xDay2 < 18 ) {
		gMonth2 = 6;
		gDay2 = xDay2 + 13;
	}
	if (xMonth2 == "L" && xDay2 > 17 && xDay2 < 49 ) {
		gMonth2 = 7;
		gDay2 = xDay2 - 17;
	}
	if (xMonth2 == "L" && xDay2 > 48 ) {
		gMonth2 = 8;
		gDay2 = xDay2 - 48;
	}
	
	if (xMonth2 == "P" && xDay2 < 10 ) {
		gMonth2 = 8;
		gDay2 = xDay2 + 22;
	}
	if (xMonth2 == "P" && xDay2 > 9 && xDay2 < 40) {
		gMonth2 = 9;
		gDay2 = xDay2 - 9;
	}
	if (xMonth2 == "P" && xDay2 > 39) {
		gMonth2 = 10;
		gDay2 = xDay2 - 39;
	}
	
	if (xMonth2 == "D" && xDay2 < 31 ) {
		gMonth2 = 11;
		gDay2 = xDay2 - 0;
	}
	if (xMonth2 == "D" && xDay2 > 30 && xDay2 < 62 ) {
		gMonth2 = 12;
		gDay2 = xDay2 - 30;
	}
	if (xMonth2 == "D" && xDay2 > 61 ) {
		gMonth2 = 1;
		gDay2 = xDay2 - 61;
	}
	
	if (xMonth2 == "C" && xDay2 < 23 ) {
		gMonth2 = 1;
		gDay2 = xDay2 + 9;
	}
	if (xMonth2 == "C" && xDay2 > 22 && xDay2 < 51 ) {
		gMonth2 = 2;
		gDay2 = xDay2 - 22;
	}
	if (xMonth2 == "C" && xDay2 > 50 ) {
		gMonth2 = 3;
		gDay2 = xDay2 - 50;
	}
	
	if (xMonth2 == "R" && xDay2 < 12 ) {
		gMonth2 = 3;
		// Changed this from 19 to 20. Hopefully this works.
		gDay2 = xDay2 + 20;
	}
	if (xMonth2 == "R" && xDay2 > 11 ) {
		gMonth2 = 4;
		// Changed this from 11 to 12.
		gDay2 = xDay2 - 11;
	}
		//Finds Gregorian year
	
	if (xGY2 == "GY" && gMonth2 > 4 || xGY2 == "GY" && gMonth2 ==4 && gDay2 > 4) {
		gYear2 =xYear2+2018;
	}
	if (xGY2 == "GY" && gMonth2 < 4 || xGY2 == "GY" && gMonth2 ==4 && gDay2 < 5) {
		gYear2 =xYear2+2019;
	}
	if (xGY2 == "BGY" && gMonth2 > 4 || xGY2 == "BGY" && gMonth2 ==4 && gDay2 > 4) {
		gYear2 =2018 - xYear2;
	}
	if (xGY2 == "BGY" && gMonth2 < 4 || xGY2 == "BGY" && gMonth2 ==4 && gDay2 < 5) {
		gYear2 =2019 - xYear2;
	}
	if (gYear2 == 0) {
		gYear2 = -1;
	}
	if (gYear2 < 0) {
		gYear2 = gYear2 - 1;
	}
	
	if (xMonth2 == "R" && xDay2 > 15) {
		gMonth2 = 4;
		gDay2=4;
		gYear2 = gYear2 + 1
	}
	
	//Leap year nonsense
	if (leapYear(gYear2) && xYear2 > 0){
		if (xMonth2 == "C" && xDay2 > 22 && xDay2 < 52 ) {
			gMonth2 = 2;
			gDay2 = xDay2 - 22;
		}
		if (xMonth2 == "C" && xDay2 > 51 ) {
			gMonth2 = 3;
			gDay2 = xDay2 - 51;
		}
		if (xMonth2 == "R" && xDay2 < 13 ) {
			gMonth2 = 3;
			gDay2 = xDay2 + 19;
		}
		if (xMonth2 == "R" && xDay2 > 12 ) {
			gMonth2 = 4;
			gDay2 = xDay2 - 12;
		}
		if (xMonth2 == "R" && xDay2 > 15) {
			gDay2 =4;
			
		}
		
	}
	var pYear2 = parseInt(gYear2);
	if (leapYear(pYear2) && xYear2 < 1){
		if (xMonth2 == "C" && xDay2 > 22 && xDay2 < 52 ) {
			gMonth2 = 2;
			gDay2 = xDay2 - 22;
		}
		if (xMonth2 == "C" && xDay2 > 51 ) {
			gMonth2 = 3;
			gDay2 = xDay2 - 51;
		}
		if (xMonth2 == "R" && xDay2 < 13 ) {
			gMonth2 = 3;
			gDay2 = xDay2 + 19;
		}
		if (xMonth2 == "R" && xDay2 > 12 ) {
			gMonth2 = 4;
			gDay2 = xDay2 - 12;
		}
		if (xMonth2 == "R" && xDay2 == 16) {
			gDay2=4;
			gYear2 =xYear2+2020;
		}
		if (xMonth2 == "R" && xDay2 == 15) {
			gDay2=3;
		}
		
	}
	
	// Find distance between these two dates.
	
	var t1 = new Date(gYear, gMonth, gDay, 0, 0, 0, 0);
	var t2 = new Date(gYear2, gMonth2, gDay2, 0, 0, 0, 0);
	var dif = t1.getTime() - t2.getTime();
	var Seconds_from_T1_to_T2 = dif / 1000;
	var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
	var Days_Between_Dates = Math.round(Seconds_Between_Dates / 86400);
	if (document.getElementById("include-last-day").checked == true){
		Days_Between_Dates = Days_Between_Dates + 1;
	}
	var Years_Between_Dates = Math.trunc(Days_Between_Dates / 365);
	var Days_Between_Dates_2 = Math.trunc(Days_Between_Dates % 365.2425);
	
	if (leapYear(gYear2 + 1) && gMonth2 < 3){
		Days_Between_Dates_2 = Days_Between_Dates_2 + 1;
	}
	
	if (Days_Between_Dates_2 == 365){
		Days_Between_Dates_2 = 0;
	}
	
	if (Years_Between_Dates == 2 && Days_Between_Dates == 730){
		Days_Between_Dates_2 = 0;
	}
	
	
	
	document.getElementById("p4").innerHTML = Years_Between_Dates + " year(s) and " + Days_Between_Dates_2 + " day(s).";	
	document.getElementById("p5").innerHTML = "Or, " + Days_Between_Dates + " days in total.";
}
