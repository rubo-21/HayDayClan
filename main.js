var count = 1;
var max = 5;

function writeText(thatText){
	var txt = $(thatText).text();
	var timeOut;
	var txtLen = txt.length;
	var char = 0;
	$(thatText).fadeIn().text('|');
	(function typeIt() {   
	    var humanize = Math.round(Math.random() * (200 - 30)) + 30;
	    timeOut = setTimeout(function() {
	        char++;
	        var type = txt.substring(0, char);
	        $(thatText).text(type + '|');
	        typeIt();
	
	        if (char == txtLen) {
	            $(thatText).text($(thatText).text().slice(0, -1)); // remove the '|'
	            clearTimeout(timeOut);
	            if(count <= max) {
	            	count++;
	            	writeText('#write'+count);
	            	if (count == max) setTimeout(function (){ $('.links').fadeIn(2000); }, 3000);
	            }
	        }
	
	    }, humanize);
	}());
}

$(document).ready(function() {
	$('#fullpage').fullpage();
    writeText('#write'+count);
});