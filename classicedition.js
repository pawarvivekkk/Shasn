function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	document.getElementById("cell1name").textContent = "Equality Rights";

	// Add images to enlarges.
	document.getElementById("enlarge5token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge15token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge25token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge35token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge12token").innerHTML += '<img src="images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge28token").innerHTML += '<img src="images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Utility" is learned 4 times amount shown on dice.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Utilitys" are owned rent is 10 times amount shown on dice.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Rent<span style="float: right;">$25.</span><br />If 2 Railroads are owned<span style="float: right;">50.</span><br />If 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />If 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

function luxurytax() {
	addAlert(player[turn].name + " paid 100 Justice Pts for landing on Constitutional obligation.");
	player[turn].pay(100, 0);

	$("#landed").show().text("You landed on Constitutional obligation. Pay 100 Justice Pts.");
}

function citytax() {
	addAlert(player[turn].name + " paid 200 Justice Pts for landing on Public Infrastructure Contribution.");
	player[turn].pay(200, 0);

	$("#landed").show().text("You landed on Public Infrastructure Contribution. Pay 200 Justice Pts.");
}

var square = [];

square[0] = new Square(" ", "COLLECT 200 Justice Points AS YOU PASS.", "#FFFFFF");
square[1] = new Square("Equality Rights", "60 Justice Pts", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[3] = new Square("Freedom Rights", "60 Justice Pts", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("Public Infrastructure Contribution", "Pay 200 Justice Pts", "#FFFFFF");
square[5] = new Square("Equality before law", "200 Justice Pts", "#FFFFFF", 200, 1);
square[6] = new Square("Right Against Exploitation", "100 Justice Pts", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[8] = new Square("Religious Freedom", "100 Justice Pts", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Cultural and Educational Rights", "120 Justice Pts", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("Go to Jail", "Go directly to Jail. Do not pass GO. Do not collect 200 Justice Pts.", "#FFFFFF");
square[11] = new Square("Legal Remedies", "140 Justice Pts", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("No Discrimination", "150 Justice Pts", "#FFFFFF", 150, 2);
square[13] = new Square("Protection of certain rights regarding freedom", "140 Justice Pts", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("Protection from Conviction", "160 Justice Pts", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("Equal Job Opportunities", "200 Justice Pts", "#FFFFFF", 200, 1);
square[16] = new Square("Life and Liberty Rights", "180 Justice Pts", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[18] = new Square("No Unlawful Detention", "180 Justice Pts", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("No Human Trafficking", "200 Justice Pts", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("Resting Area","", "#FFFFFF");
square[21] = new Square("No Child Labor", "220 Justice Pts", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[23] = new Square("Freedom of Religion", "220 Justice Pts", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("Freedom to manage religious affairs", "240 Justice Pts", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("End Untouchability", "200 Justice Pts", "#FFFFFF", 200, 1);
square[26] = new Square("No Taxes for Religion", "260 Justice Pts", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Worship in Schools", "260 Justice Pts", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Abolition of Titles ", "150 Justice Pts", "#FFFFFF", 150, 2);
square[29] = new Square("Minority Protection", "280 Justice Pts", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("Go to Jail", "Go directly to Jail. Do not pass GO. Do not collect 200 Justice Pts.", "#FFFFFF");
square[31] = new Square("Minority Rights in Education", "300 Justice Pts", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[32] = new Square("Right to information", "300 Justice Pts", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[33] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[34] = new Square("Rights Limit in Martial Law", "320 Justice Pts", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("Assembly citizens", "200 Justice Pts", "#FFFFFF", 200, 1);
square[36] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[37] = new Square("Definition of state", "350 Justice Pts", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("Pay Constitutional obligation", "Pay 100 Justice Pts", "#FFFFFF");
square[39] = new Square("Judicial reviews", "400 Justice Pts", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Right to Protection from Arbitrary Arrest under Article 22. This card may be kept until needed or sold.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("Right to Equality under Article 14. Collect 10 Justice Pts.", function() { addamount(10, 'Community Chest');});
communityChestCards[2] = new Card("Freedom of Trade and Commerce under Article 19(1)(g), you get 50 Justice Pts.", function() { addamount(50, 'Community Chest');});
communityChestCards[3] = new Card("Right to Financial Protection under Article 41. Collect 100 Justice Pts.", function() { addamount(100, 'Community Chest');});
communityChestCards[4] = new Card("Constitutional Duty to pay taxes. Collect 20 Justice Pts.", function() { addamount(20, 'Community Chest');});
communityChestCards[5] = new Card("Rest and Leisure under Directive Principles. Receive 100 Justice Pts.", function() { addamount(100, 'Community Chest');});
communityChestCards[6] = new Card("You inherit 100 Justice Pts.", function() { addamount(100, 'Community Chest');});
communityChestCards[7] = new Card("Receive 25 Justice Pts.", function() { addamount(25, 'Community Chest');});
communityChestCards[8] = new Card("Right to Health under Directive Principles. Pay of 100 Justice Pts.", function() { subtractamount(100, 'Community Chest');});
communityChestCards[9] = new Card("Fair Treatment and Protection. Collect 200 Justice Pts.", function() { addamount(200, 'Community Chest');});
communityChestCards[10] = new Card("Right to Education under Article 21A. Pay 50 Justice Pts.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[11] = new Card("Right to Health and Medical Treatment under Article 21. Pay 50 Justice Pts.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[12] = new Card("Right to Equality and Non-discrimination, Article 14. Collect 10 Justice Pts from every player.", function() { collectfromeachplayer(10, 'Community Chest');});
communityChestCards[13] = new Card("Advance to \"GO\" (Collect 200 Justice Pts).", function() { advance(0);});
communityChestCards[14] = new Card("Duty to the State under Article 51A: Civic Duties. 40 Justice Pts per Community Center. 115 Justice Pts per Public Welfare Hub.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Go to Jail. Go directly to Jail. Do not pass \"GO\". Do not collect 200 Justice Pts.", function() { gotojail();});


chanceCards[0] = new Card("Protection of Personal Liberty under Article 21. This card may be kept until needed.", function(p) { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Duty to maintain public order and property rights. For each Community Center pay 25 Justice Pts. For each Public Welfare Hub 100 Justice Pts.", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("You have exercised your right to information. Gain 25 Justice Points.", function() { addamount(25, 'Chance');});
chanceCards[3] = new Card("You have been elected chairman of the board. Pay each player 50 Justice Pts.", function() { payeachplayer(50, 'Chance');});
chanceCards[4] = new Card("Go back three spaces.", function() { gobackthreespaces();});
chanceCards[5] = new Card("The Supreme Court has upheld your constitutional rights. Advance to the nearest learned lecture. IF Unlearned, you may learn it. IF learned by other player, throw dice and pay owner a total ten times the amount thrown.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("You have promoted education under Article 21A. Collect 50 Justice Points.", function() { addamount(50, 'Chance');});
chanceCards[7] = new Card("ADVANCE TO THE NEAREST UTILITY. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("Duty to the State under Article 51A: Fundamental Duties to assist the State.", function() { subtractamount(15, 'Chance');});
chanceCards[9] = new Card("Take a trip to Equality before law. If you pass \"GO\" collect 200 Justice Pts.", function() { advance(5);});
chanceCards[10] = new Card("ADVANCE to Judicial revies.", function() { advance(39);});
chanceCards[11] = new Card("ADVANCE to Freedom to manage religious affairs. If you pass \"GO\" collect 200 Justice Pts.", function() { advance(24);});
chanceCards[12] = new Card("You've won the 'Citizen of the Year' award. Collect 200 Justice Points.", function() { addamount(200, 'Chance');});
chanceCards[13] = new Card("A new amendment has been passed. Pay a fine of 20 Justice Points.", function() { subtractamount(20, 'Chance');});
chanceCards[14] = new Card("ADVANCE to Legal Remedies. If you pass \"GO\" collect 200 Justice Pts.", function() { advance(11);});
chanceCards[15] = new Card("You have violated a constitutional provision. Go directly to jail. Do not pass \"GO\". Do not collect 200 Justice Pts.", function() { gotojail();});

const constitutionSquares = {
    cell0: {
        image: 'path/to/image0.jpg',
        text: 'Description of the first square related to Indian Constitution'
    },
    cell1: {
        image: 'path/to/image1.jpg',
        text: 'Description of the second square related to Indian Constitution'
    },
    // Add more squares...
};

function updateConstitutionInfo(cellId) {
    const info = constitutionSquares[cellId];
    if (info) {
        document.getElementById('constitution-image').innerHTML = 
            `<img src="${info.image}" alt="Constitutional Info">`;
        document.getElementById('constitution-text').textContent = info.text;
    }
}