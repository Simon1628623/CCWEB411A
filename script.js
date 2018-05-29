//<![CDATA[	


	//calculator
	function calc() {
	alert("only works for multiplication")
	var frst = prompt('Enter first value');
	//if(frst.eNbr.value == "") {alert("cannot be blank please enter something")}
	//else{
	var scnd = prompt('Enter Second Value');
	//if(isNaN(scnd.eNbr.value)) {alert("has to be numeric")}
	//else{
	var result = frst * scnd
	alert(result)
	//}
	//}
	}
	
	//confirmation
	function displayQuestion() {
			//stores info on which button was clicked
			var response = confirm("did you like my website?");
			
			//test which button was clicked
			if (response == true)
			    alert("Thanks, better mark me good!");
			else
			    alert(".......");
				}
		
		//date
		function displayOriginalFormatDate() {
	
	var now = new Date;
	
	
	document.write(now);
	} 
	
	function displayLocaleFormatDate() {
	
	var now = new Date;
	
	
	document.write(now.toLocaleString());
	}
	
	function displayCurrentTime() {
	
	var now = new Date;
	
	
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
	
	
	if (m<10)
	m = "0" +m;
	
	if (s<10)
	s = "0" +s;
	
	
	document.getElementById('clock').innerHTML = h +":" +m +":" +s;
	
	
	
	setTimeout("displayCurrentTime()", 1000);
	}
		
		
		
		
		
		
		
		
		//alert
		    function showMessage() {
			alert("Hello, enjoy my website!");
			} 
			
			function showAlert() {
			alert("Stop clicking me!");
			} 
			
		//change button
			function changeButtonName(b) {
			
			if (b.value == "Press ME!")
			    b.value="No Press ME!";
			else 
			    b.value="Press ME!";
				}
		//clock		
	d1 = new Image();
		d1.src = "images/n1.gif";
		d2 = new Image();
		d2.src = "images/n2.gif";
		d3 = new Image();
		d3.src = "images/n3.gif";
		d4 = new Image();
		d4.src = "images/n4.gif";
		d5 = new Image();
		d5.src = "images/n5.gif";
		d6 = new Image();
		d6.src = "images/n6.gif";
		d7 = new Image();
		d7.src = "images/n7.gif";
		d8 = new Image();
		d8.src = "images/n8.gif";
		d9 = new Image();
		d9.src = "images/n9.gif";
		d0 = new Image();
		d0.src = "images/n0.gif";

		
		var clockImgs = new Array(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9);

		
		function runDigitalClock() {
			
			var today = new Date();

			
			var secs = today.getSeconds();
			var mins = today.getMinutes();
			var hour = today.getHours();

			
			if (secs >= 0 && secs <= 9) {
				secs = "0" + secs;
			}

			if (mins >= 0 && mins <= 9) {
				mins= "0" + mins;
			}

			if (hour >= 0 && hour <= 9) {
				hour = "0" + hour;
			}

			
			var stringSecs = secs.toString();
			var stringMins = mins.toString();
			var stringHour= hour.toString();

			
			var leftSideSecs = stringSecs.charAt(0);
			var rightSideSecs = stringSecs.charAt(1);
			var leftSideMins = stringMins.charAt(0);
			var rightSideMins = stringMins.charAt(1);
			var leftSideHour = stringHour.charAt(0);
			var rightSideHour = stringHour.charAt(1);

			
			document.getElementById('num1').src = clockImgs[eval(leftSideHour)].src;
			document.getElementById('num2').src = clockImgs[eval(rightSideHour)].src;
			document.getElementById('num3').src = clockImgs[eval(leftSideMins)].src;
			document.getElementById('num4').src = clockImgs[eval(rightSideMins)].src;
			document.getElementById('num5').src = clockImgs[eval(leftSideSecs)].src;
			document.getElementById('num6').src = clockImgs[eval(rightSideSecs)].src;

			
			setTimeout("runDigitalClock()", 1000)
		}
	//change image	
		function changeImage(photo, imagePath) {
	photo.src=imagePath;
	}
	
	var imgArray = new Array(4);
	
	imgArray[0] = new Image;
	imgArray[0].src = "images/car.jpg";
	
	imgArray[1] = new Image;
	imgArray[1].src = "images/incognito.jpg";
	
	imgArray[2] = new Image;
	imgArray[2].src = "images/sky.jpg";
	
	imgArray[3] = new Image;
	imgArray[3].src = "images/top.jpg";
	
	
	var index = 0;
	
	function displayImage() {
	document.getElementById('photo').src = imgArray[index].src;
	
	
	index++;
	
	if(index >=imgArray.length) {
	index = 0;
	}
	
	setTimeout("displayImage()", 3000)
	}
		
	//windows
	function openNewWindow() {
	         window.open("http://www.w3schools.com");
			 }
			 
			 function openPopupWindow() {
         popUpWin = window.open("calculator.html", "terms", "width=250, height=250, left=500, top=200, scrollbars=no, menubar=no, location=no, status=no toolbar=20 titlebar=no");
		 popUpWin.focus();
		 }
   		 
		 function openPopupWindow2() {
         popUpWin = window.open("slideshow.html", "terms", "width=350, height=425, left=500, top=200, scrollbars=no, menubar=no, location=no, status=no toolbar=20 titlebar=no");
		 popUpWin.focus();
		 }
		 
	function printPage() {
	         window.print();
			 }
			 
	function changeLocation() {
	         window.location = "http://www.blackle.com";
			 }
			 
				 
	function viewImage() {
	         popUpWin = window.open("", "tri", "width=460, height=460, left=200, top=200, scrollbars=yes, menubar=no, location=no, status=no toolbar=no titlebar=no");
			 popUpWin.document.write('<img src="images/slideImg0.jpg" alt="tricorder" title="tricorder" width="400" height="400"/>');
			 popUpWin.document.write('<p><input type="button" value="CloseWindow" onclick="window.close()"/></p>');
			 }
			 
	//form
	
	function validator()
	{
	if(document.myForm.fName.value == "" )
	{
	alert("please provide a first name!");
	document.myForm.fName.focus();
	return false;
	}
	if(document.myForm.lName.value == "" )
	{
	alert("please provide a last name!");
	document.myForm.lName.focus();
	return false;
	}
	 
	//  if(document.myForm.EMail.value == "" )
	//{
	//alert("please provide a email!");
	//document.myForm.EMail.focus();
	//return false;
	//}
   
    var emailID = document.myForm.EMail.value;
   atpos = emailID.indexOf("@");
   dotpos = emailID.lastIndexOf(".");
   if (atpos < 1 || ( dotpos - atpos < 2 )) 
   {
       alert("Please enter correct email ID")
       document.myForm.EMail.focus() ;
       return false;
   }
   
        
   
   if( document.myForm.Age.value == "")
   {
     alert( "Please enter Something in age category." );
     document.myForm.Age.focus() ;
     return false;
   }
   
   if(isNaN( document.myForm.Age.value ))
   {
     alert( "Please provide a age  that is numeric." );
     document.myForm.Age.focus() ;
     return false;
   }
   
   if( 
           document.myForm.Age.value.length > 120 )
   {
     alert( "Please provide a age less than 120." );
     document.myForm.Age.focus() ;
     return false;
   }
   
   if( document.myForm.Country.value == "-1" )
   {
     alert( "Please provide your country!" );
     return false;
   }
   
  
   
   if (document.myForm.termcond.checked == 0){
         alert("You must agree to terms and conditions to continue.")
		 return false;
		 }
   
   return( true );
}
	
//]]>
				
			