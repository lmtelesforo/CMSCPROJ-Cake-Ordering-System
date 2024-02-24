function dateChecker() {
	var deliveryDate = document.getElementById("prefDDate").value;
	var dateEntered = new Date(deliveryDate);
	var dateEnteredSpliced = dateEntered.getFullYear() + "-" + dateEntered.getMonth() + "-" + dateEntered.getDate();

	const fullDate = new Date();
	var date = fullDate.getFullYear() + "-" + fullDate.getMonth() + "-" + fullDate.getDate();
	const fullDate_plus1 = new Date();
	fullDate_plus1.setDate(fullDate_plus1.getDate() + 1);

	if (dateEntered < fullDate_plus1) {
		// alert("Please provide a future date. :)");
		document.getElementById("alert").innerHTML = "Please provide a future date. :)";
	}

	else {
		document.getElementById("alert").innerHTML = "";
		return true;
	}
}

function timeChecker() {
	var timeEntered = document.getElementById("prefDTime").value;
	const time = timeEntered.split(":");
	// alert(time)
	var hour = time[0];
	var min = time[1];
	// alert(hour);
	var hournum = parseInt(hour);
	var minnum = parseInt(min);
	// alert(minnum);

	if (hournum >= 6 && hournum <= 18) {
		if (hournum == 18 && minnum > 0) {
			alert("Delivery times are only from 6:00 AM to 6:00 PM.")
		}
		else {
			document.getElementById("alert").innerHTML = "";
			return true
		}
	}
	else {
		// alert("Delivery times are only from 6 AM to 6 PM.")
		document.getElementById("alert").innerHTML = "Delivery times are only from 6 AM to 6 PM.";
	}
}

function cakecost() {
	var tiernum = document.getElementById("tiernum").value;
	var cake_tier_costoftier1 = 0;
	var cake_tier_costoftier2 = 0;
	var cake_tier_costoftier3 = 0;
	var cake_tier_costoftier4 = 0;
	var cake_tier_costoftier5 = 0;
	var radius;
	var name = document.getElementById("name").value;
	var number = document.getElementById("number").value;
	var email = document.getElementById("email").value;

	var cake_flavor;
	var cake_multiplier = 0;
	var filling;
	var icing;
	var inscakeadd;
	var decadd;
	var liqinf;


	//--------------------cake flavor----------------------
	if (document.getElementById("tradwhite").checked) {
		cake_flavor = "Traditional White";
		cake_multiplier += 4;
	}

	else if (document.getElementById("devil").checked) {
		cake_flavor = "Devil's Food Chocolate"
		cake_multiplier += 10;
	}

	else if (document.getElementById("redvelvet").checked) {
		cake_flavor = "Red Velvet";
		cake_multiplier += 6;
	}

	else if (document.getElementById("lemon").checked) {
		cake_flavor = "Lemon";
		cake_multiplier += 6;
	}

	//--------------------filling----------------------
	if (document.getElementById("raspjam").checked) {
		filling = "Raspberry Jam";
		cake_multiplier += 1;
	}

	else if (document.getElementById("strawberryjam").checked) {
		filling = "Strawberry Jam";
		cake_multiplier += 1;
	}

	else if (document.getElementById("buttercream").checked) {
		filling = "Buttercream";
		cake_multiplier += 2;
	}

	else if (document.getElementById("apricot").checked) {
		filling = "Apricot Jam";
		cake_multiplier += 2;
	}

	//--------------------icing----------------------
	if (document.getElementById("butter").checked) {
		icing = "Buttercream";
		cake_multiplier += 2;
	}

	else if (document.getElementById("creamcheese").checked) {
		icing = "Cream Cheese"
		cake_multiplier += 2;
	}

	else if (document.getElementById("mocha").checked) {
		icing = "Mocha/Espresso";
		cake_multiplier += 3;
	}

	//--------------------inside cake additions----------------------

	inscakeadd = "";

	if (document.getElementById("walnut").checked) {
		inscakeadd = inscakeadd + ", " + "Walnut";	
		cake_multiplier += 1;
	}
	if (document.getElementById("chocchips").checked) {
		inscakeadd = inscakeadd + ", " + "Chocolate Chips";
		cake_multiplier += 1;
	}
	if (document.getElementById("macadamianuts").checked) {
		inscakeadd = inscakeadd + ", " + "Macadamia Nuts";
		cake_multiplier += 1;
	}
	if (document.getElementById("whitecchips").checked) {
		inscakeadd = inscakeadd + ", " + "White Chocolate Chips";	
		cake_multiplier += 1;
	}
	if (inscakeadd == "") {
		inscakeadd = "None";
	}
	if (inscakeadd[0] == ",") {
		var inscakeadd1 = inscakeadd.substring(1);
		inscakeadd = inscakeadd1;
	}

	//--------------------decorative additions----------------------
	decadd = "";

	if (document.getElementById("walnutt").checked) {
		decadd = decadd + ", " + "Walnut";
		cake_multiplier += 1;
	}
	if (document.getElementById("chocchipss").checked) {
		decadd = decadd + ", " + "Chocolate Chips";
		cake_multiplier += 1;
	}
	if (document.getElementById("macadamianutss").checked) {
		decadd = decadd + ", " + "Macadamia Nuts";
		cake_multiplier += 1;
	}
	if (document.getElementById("whitecchipss").checked) {
		decadd = decadd + ", " + "White Chocolate Chips";	
		cake_multiplier += 1;
	}
	if (decadd == "") {
		decadd = "None";
	}
	if (decadd[0] == ",") {
		var decadd1 = decadd.substring(1);
		decadd = decadd1;
	}

	//--------------------liquid infusion----------------------

	if ((document.getElementById("liquor_choice").value) == "Rum") {
		liqinf = "Rum";
		cake_multiplier += 2;
	}

	if ((document.getElementById("liquor_choice").value) == "Amaretto") {
		liqinf = "Amaretto";	
		cake_multiplier += 5;
	}

	if ((document.getElementById("liquor_choice").value) == "Kaluha") {
		liqinf = "Kaluha";	
		cake_multiplier += 2;
	}

	if ((document.getElementById("liquor_choice").value) == "None") {
		liqinf = "None";	
		cake_multiplier += 0;
	}

	//-----------------------tiers----------------------

	if (tiernum == 1) {
		// radius = 2; 
		cake_tier_costoftier1 = (Math.PI * 2**2 * 5 * cake_multiplier);
		var cake_cost = cake_tier_costoftier1
	}

	if (tiernum == 2) {
		// radius = 3;
		cake_tier_costoftier1 = (Math.PI * 2**2 * 5 * cake_multiplier);
		cake_tier_costoftier2 = (Math.PI * 3**2 * 5 * cake_multiplier);
		var cake_cost = cake_tier_costoftier1 + cake_tier_costoftier2; 
	}

	if (tiernum == 3) {
		// radius = 4;
		cake_tier_costoftier1 = (Math.PI * 2**2 * 5 * cake_multiplier);
		cake_tier_costoftier2 = (Math.PI * 3**2 * 5 * cake_multiplier);
		cake_tier_costoftier3 = (Math.PI * 4**2 * 5 * cake_multiplier);

		var cake_cost = cake_tier_costoftier1 + cake_tier_costoftier2 + cake_tier_costoftier3;
	}

	if (tiernum == 4) {
		// radius = 5;
		cake_tier_costoftier1 = (Math.PI * 2**2 * 5 * cake_multiplier);
		cake_tier_costoftier2 = (Math.PI * 3**2 * 5 * cake_multiplier);
		cake_tier_costoftier3 = (Math.PI * 4**2 * 5 * cake_multiplier);
		cake_tier_costoftier4 = (Math.PI * 5**2 * 5 * cake_multiplier);

		var cake_cost = cake_tier_costoftier1 + cake_tier_costoftier2 + cake_tier_costoftier3 + cake_tier_costoftier4;
	}

	if (tiernum == 5) {
		// radius = 6;
		cake_tier_costoftier1 = (Math.PI * 2**2 * 5 * cake_multiplier);
		cake_tier_costoftier2 = (Math.PI * 3**2 * 5 * cake_multiplier);
		cake_tier_costoftier3 = (Math.PI * 4**2 * 5 * cake_multiplier);
		cake_tier_costoftier4 = (Math.PI * 5**2 * 5 * cake_multiplier);
		cake_tier_costoftier5 = (Math.PI * 6**2 * 5 * cake_multiplier);

		var cake_cost = cake_tier_costoftier1 + cake_tier_costoftier2 + cake_tier_costoftier3 + cake_tier_costoftier4 + cake_tier_costoftier5;

	}
	
	var del_add = document.getElementById("deliveryAddress").value;
	var deliveryFee = 0;

	if (deliverOpt == false) {
		alert("Name: " + name + "\n" +
		"Mobile Number: " + number + "\n" +
		"Email: " + email + "\n" +
		"Tiers: " + tiernum + "\n" +
		"Cake Flavor: " + cake_flavor + "\n" + 
		"Filling: " + filling + "\n" + 
		"Icing: " + icing + "\n" +
		"Inside Cake Additions: " + inscakeadd + "\n" + 
		"Decorative Additions: " + decadd + "\n" + 
		"Infusion: " + liqinf + "\n" +
		"Total Cost: " + cake_cost)
	}

	else if (dateChecker() == true && timeChecker() == true) {
		if (deliverOpt == true) {
			var deliveryDate = document.getElementById("prefDDate").value;
			var dateEntered = new Date(deliveryDate);
			var dateEnteredSpliced = dateEntered.getFullYear() + "-" + dateEntered.getMonth() + "-" + dateEntered.getDate();
			var timeEntered = document.getElementById("prefDTime").value;


			cake_cost = cake_cost + 500
			alert("Name: " + name + "\n" +
			"Mobile Number: " + number + "\n" +
			"Email: " + email + "\n" +
			"Tiers: " + tiernum + "\n" +
			"Cake Flavor: " + cake_flavor + "\n" + 
			"Filling: " + filling + "\n" + 
			"Icing: " + icing + "\n" +
			"Inside Cake Additions: " + inscakeadd + "\n" + 
			"Decorative Additions: " + decadd + "\n" + 
			"Infusion: " + liqinf + "\n" +
			"+ 500 delivery fee. Delivery Address: " + del_add + "\n" +
			"Delivery Date and Time: " + dateEnteredSpliced + " " + timeEntered + "\n" +
			"Total Cost: " + cake_cost)
		}		
	}
}


if (document.getElementById("storepickup").checked == true) {	
	document.getElementById("deliveryAddress").disabled = true;
	document.getElementById("prefDDate").disabled = true;
	document.getElementById("prefDTime").disabled = true;
	deliverOpt = false;	
}	

if (document.getElementById("radioDeliver").checked == true) {	
	deliverOpt = true;	
}	

function disableDelivery() {
	document.getElementById("deliveryAddress").disabled = true;
	document.getElementById("prefDDate").disabled = true;
	document.getElementById("prefDTime").disabled = true;
	document.getElementById("radioDeliver").checked = false;	
	document.getElementById("storepickup").checked = true;	
	deliverOpt = false;	
}

function enableDelivery() {
	document.getElementById("deliveryAddress").disabled = false;
	document.getElementById("prefDDate").disabled = false;
	document.getElementById("prefDTime").disabled = false;
	document.getElementById("storepickup").checked = false;	
	document.getElementById("radioDeliver").checked = true;	
	deliverOpt = true;	
}