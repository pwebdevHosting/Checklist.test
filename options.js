function optionClicked() {

	var link = document.getElementById('waiting');
	link.style.display = 'none'; //or


	let datalist1 = document.getElementById("datalist1").value;
	let datalist2 = document.getElementById("datalist2").value;
	var div = document.getElementById("div");
	//ITALY JURISDICTION CONDITION
	if (datalist1 == 'it' && datalist2 == 'slot') {

		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT - Slot</h1><p><table><tr><th>ID TEST<p></th><th>TEST TITLE</th></th><th>RESULT</th><th>NOTES ABOUT TEST</th></tr><tr><td><a href='TestMethodsGame.html' target='_blank'>TG01</a></td><td>Preliminar check</td><td><button type='button' id='q1button' onclick='changeBg(this);'>PASS</button><button type='button' id='q2button' onclick='changeBg(this);'>FAIL</button><button type='button' id='q3button' onclick='changeBg(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG02</a></td><td>Game Info</td><td><button type='button' id='button1tg02' onclick='changeBgtg02(this);'>PASS</button><button type='button' id='button2tg02' onclick='changeBgtg02(this);'>FAIL</button><button type='button' id='button3tg02' onclick='changeBgtg02(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG03</a></td><td>RTP Dynamic</td><td><button type='button' id='button1tg03' onclick='changeBgtg03(this);'>PASS</button><button type='button' id='button2tg03' onclick='changeBgtg03(this);'>FAIL</button><button type='button' id='button3tg03' onclick='changeBgtg03(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG04</a></td><td>Dynamic Paytable</td><td><button type='button' id='button1tg04' onclick='changeBgtg04(this);'>PASS</button><button type='button' id='button2tg04' onclick='changeBgtg04(this);'>FAIL</button><button type='button' id='button3tg04' onclick='changeBgtg04(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG05</a></td><td>Game with Strategy</td><td><button type='button' id='button1tg05' onclick='changeBgtg05(this);'>PASS</button><button type='button' id='button2tg05' onclick='changeBgtg05(this);'>FAIL</button><button type='button' id='button3tg05' onclick='changeBgtg05(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG06</a></td><td>Gameplay with C-Tool</td><td><button type='button' id='button1tg06' onclick='changeBgtg06(this);'>PASS</button><button type='button' id='button2tg06' onclick='changeBgtg06(this);'>FAIL</button><button type='button' id='button3tg06' onclick='changeBgtg06(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG07</a></td><td>Gameplay</td><td><button type='button' id='button1tg07' onclick='changeBgtg07(this);'>PASS</button><button type='button' id='button2tg07' onclick='changeBgtg07(this);'>FAIL</button><button type='button' id='button3tg07' onclick='changeBgtg07(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG08</a></td><td>Metamorphic Games</td><td><button type='button' id='button1tg08' onclick='changeBgtg08(this);'>PASS</button><button type='button' id='button2tg08' onclick='changeBgtg08(this);'>FAIL</button><button type='button' id='button3tg08' onclick='changeBgtg08(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG09</a></td><td>Features</td><td><button type='button' id='button1tg09' onclick='changeBgtg09(this);'>PASS</button><button type='button' id='button2tg09' onclick='changeBgtg09(this);'>FAIL</button><button type='button' id='button3tg09' onclick='changeBgtg09(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG10</a></td><td>Buy Features</td><td><button type='button' id='button1tg10' onclick='changeBgtg10(this);'>PASS</button><button type='button' id='button2tg10' onclick='changeBgtg10(this);'>FAIL</button><button type='button' id='button3tg10' onclick='changeBgtg10(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG11</a></td><td>Gamble</td><td><button type='button' id='button1tg11' onclick='changeBgtg11(this);'>PASS</button><button type='button' id='button2tg11' onclick='changeBgtg11(this);'>FAIL</button><button type='button' id='button3tg11' onclick='changeBgtg11(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG12</a></td><td>Interrupted Game</td><td><button type='button' id='button1tg12' onclick='changeBgtg12(this);'>PASS</button><button type='button' id='button2tg12' onclick='changeBgtg12(this);'>FAIL</button><button type='button' id='button3tg12' onclick='changeBgtg12(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG13</a></td><td>Win Cap</td><td><button type='button' id='button1tg13' onclick='changeBgtg13(this);'>PASS</button><button type='button' id='button2tg13' onclick='changeBgtg13(this);'>FAIL</button><button type='button' id='button3tg13' onclick='changeBgtg13(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG14</a></td><td>Jackpot</td><td><button type='button' id='button1tg14' onclick='changeBgtg14(this);'>PASS</button><button type='button' id='button2tg14' onclick='changeBgtg14(this);'>FAIL</button><button type='button' id='button3tg14' onclick='changeBgtg14(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG15</a></td><td>History</td><td><button type='button' id='button1tg15' onclick='changeBgtg15(this);'>PASS</button><button type='button' id='button2tg15' onclick='changeBgtg15(this);'>FAIL</button><button type='button' id='button3tg15' onclick='changeBgtg15(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG16</a></td><td>Autoplay</td><td><button type='button' id='button1tg16' onclick='changeBgtg16(this);'>PASS</button><button type='button' id='button2tg16' onclick='changeBgtg16(this);'>FAIL</button><button type='button' id='button3tg16' onclick='changeBgtg16(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG17</a></td><td>Game overview</td><td><button type='button' id='button1tg17' onclick='changeBgtg17(this);'>PASS</button><button type='button' id='button2tg17' onclick='changeBgtg17(this);'>FAIL</button><button type='button' id='button3tg17' onclick='changeBgtg17(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG18</a></td><td>Demo</td><td><button type='button' id='button1tn18' onclick='changeBgtn18(this);'>PASS</button><button type='button' id='button2tn18' onclick='changeBgtn18(this);'>FAIL</button><button type='button' id='button3tn18' onclick='changeBgtn18(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG28</a></td><td>Inappropriate Content</td><td><button type='button' id='button1tg28' onclick='changeBgtg28(this);'>PASS</button><button type='button' id='button2tg28' onclick='changeBgtg28(this);'>FAIL</button><button type='button' id='button3tg28' onclick='changeBgtg28(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN01</a></td><td><i>Compliance</td><td><button type='button' id='button1tn01' onclick='changeBgtn01(this);'>PASS</button><button type='button' id='button2tn01' onclick='changeBgtn01(this);'>FAIL</button><button type='button' id='button3tn01' onclick='changeBgtn01(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN02</a></td><td><i>Language</td><td><button type='button' id='button1tn02' onclick='changeBgtn02(this);'>PASS</button><button type='button' id='button2tn02' onclick='changeBgtn02(this);'>FAIL</button><button type='button' id='button3tn02' onclick='changeBgtn02(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN03</a></td><td><i>Currency</td><td><button type='button' id='button1tn03' onclick='changeBgtn03(this);'>PASS</button><button type='button' id='button2tn03' onclick='changeBgtn03(this);'>FAIL</button><button type='button' id='button3tn03' onclick='changeBgtn03(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN24</a></td><td><i>Physical Device presentation - Main game</td><td><button type='button' id='button1tn24' onclick='changeBgtn24(this);'>PASS</button><button type='button' id='button2tn24' onclick='changeBgtn24(this);'>FAIL</button><button type='button' id='button3tn24' onclick='changeBgtn24(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN25</a></td><td><i>Physical Device presentation - Secondary game</td><td><button type='button' id='button1tn25' onclick='changeBgtn25(this);'>PASS</button><button type='button' id='button2tn25' onclick='changeBgtn25(this);'>FAIL</button><button type='button' id='button3tn25' onclick='changeBgtn25(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN31</a></td><td><i>History BO</td><td><button type='button' id='button1tn31' onclick='changeBgtn31(this);'>PASS</button><button type='button' id='button2tn31' onclick='changeBgtn31(this);'>FAIL</button><button type='button' id='button3tn31' onclick='changeBgtn31(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN32</a></td><td><i>Game Disable</td><td><button type='button' id='button1tn32' onclick='changeBgtn32(this);'>PASS</button><button type='button' id='button2tn32' onclick='changeBgtn32(this);'>FAIL</button><button type='button' id='button3tn32' onclick='changeBgtn32(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN43</a></td><td><i>Extra Wager in Feature</td><td><button type='button' id='button1tn43' onclick='changeBgtn43(this);'>PASS</button><button type='button' id='button2tn43' onclick='changeBgtn43(this);'>FAIL</button><button type='button' id='button3tn43' onclick='changeBgtn43(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN49</a></td><td><i>Sound Information</td><td><button type='button' id='button1tn49' onclick='changeBgtn49(this);'>PASS</button><button type='button' id='button2tn49' onclick='changeBgtn49(this);'>FAIL</button><button type='button' id='button3tn49' onclick='changeBgtn49(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG18</a></td><td>Demo</td><td><button type='button' id='button1tn18' onclick='changeBgtn18(this);'>PASS</button><button type='button' id='button2tn18' onclick='changeBgtn18(this);'>FAIL</button><button type='button' id='button3tn18' onclick='changeBgtn18(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></table>";


			
	} else if (datalist1 == 'it' && datalist2 == 'EuroRoul') {


		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -European Roulette</h1><p><table><tr><th>ID TEST<p></th><th>TEST TITLE</th></th><th>RESULT</th><th>NOTES</th></tr><tr><td><a href='TestMethodsGame.html' target='_blank'>TG01</a></td><td>Preliminar check</td><td><button type='button' id='q1button' onclick='changeBg(this);'>PASS</button><button type='button' id='q2button' onclick='changeBg(this);'>FAIL</button><button type='button' id='q3button' onclick='changeBg(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG02</a></td><td>Game Info</td><td><button type='button' id='button1tg02' onclick='changeBgtg02(this);'>PASS</button><button type='button' id='button2tg02' onclick='changeBgtg02(this);'>FAIL</button><button type='button' id='button3tg02' onclick='changeBgtg02(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG03</a></td><td>RTP Dynamic</td><td><button type='button' id='button1tg03' onclick='changeBgtg03(this);'>PASS</button><button type='button' id='button2tg03' onclick='changeBgtg03(this);'>FAIL</button><button type='button' id='button3tg03' onclick='changeBgtg03(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG04</a></td><td>Dynamic Paytable</td><td><button type='button' id='button1tg04' onclick='changeBgtg04(this);'>PASS</button><button type='button' id='button2tg04' onclick='changeBgtg04(this);'>FAIL</button><button type='button' id='button3tg04' onclick='changeBgtg04(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG06</a></td><td>Gameplay with C-Tool</td><td><button type='button' id='button1tg06' onclick='changeBgtg06(this);'>PASS</button><button type='button' id='button2tg06' onclick='changeBgtg06(this);'>FAIL</button><button type='button' id='button3tg06' onclick='changeBgtg06(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG07</a></td><td>Gameplay</td><td><button type='button' id='button1tg07' onclick='changeBgtg07(this);'>PASS</button><button type='button' id='button2tg07' onclick='changeBgtg07(this);'>FAIL</button><button type='button' id='button3tg07' onclick='changeBgtg07(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG12</a></td><td>Interrupted Game</td><td><button type='button' id='button1tg12' onclick='changeBgtg12(this);'>PASS</button><button type='button' id='button2tg12' onclick='changeBgtg12(this);'>FAIL</button><button type='button' id='button3tg12' onclick='changeBgtg12(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG13</a></td><td>Win Cap</td><td><button type='button' id='button1tg13' onclick='changeBgtg13(this);'>PASS</button><button type='button' id='button2tg13' onclick='changeBgtg13(this);'>FAIL</button><button type='button' id='button3tg13' onclick='changeBgtg13(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG15</a></td><td>History</td><td><button type='button' id='button1tg15' onclick='changeBgtg15(this);'>PASS</button><button type='button' id='button2tg15' onclick='changeBgtg15(this);'>FAIL</button><button type='button' id='button3tg15' onclick='changeBgtg15(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG16</a></td><td>Autoplay</td><td><button type='button' id='button1tg16' onclick='changeBgtg16(this);'>PASS</button><button type='button' id='button2tg16' onclick='changeBgtg16(this);'>FAIL</button><button type='button' id='button3tg16' onclick='changeBgtg16(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG17</a></td><td>Game overview</td><td><button type='button' id='button1tg17' onclick='changeBgtg17(this);'>PASS</button><button type='button' id='button2tg17' onclick='changeBgtg17(this);'>FAIL</button><button type='button' id='button3tg17' onclick='changeBgtg17(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG18</a></td><td>Demo</td><td><button type='button' id='button1tn18' onclick='changeBgtn18(this);'>PASS</button><button type='button' id='button2tn18' onclick='changeBgtn18(this);'>FAIL</button><button type='button' id='button3tn18' onclick='changeBgtn18(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG21</a></td><td>Live session</td><td><button type='button' id='button1tg21' onclick='changeBgtg21(this);'>PASS</button><button type='button' id='button2tg21' onclick='changeBgtg21(this);'>FAIL</button><button type='button' id='button3tg21' onclick='changeBgtg21(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG22</a></td><td>Forced Outcomes Live</td><td><button type='button' id='button1tg22' onclick='changeBgtg22(this);'>PASS</button><button type='button' id='button2tg22' onclick='changeBgtg22(this);'>FAIL</button><button type='button' id='button3tg22' onclick='changeBgtg22(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG23</a></td><td>Error Handling Live</td><td><button type='button' id='button1tg23' onclick='changeBgtg23(this);'>PASS</button><button type='button' id='button2tg23' onclick='changeBgtg23(this);'>FAIL</button><button type='button' id='button3tg23' onclick='changeBgtg23(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'>    <tr><td><a href='TestMethodsGame.html' target='_blank'>TG24</a></td><td>Check Doc Live</td><td><button type='button' id='button1tg24' onclick='changeBgtg24(this);'>PASS</button><button type='button' id='button2tg24' onclick='changeBgtg24(this);'>FAIL</button><button type='button' id='button3tg24' onclick='changeBgtg24(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'>   <tr><td><a href='TestMethodsGame.html' target='_blank'>TG28</a></td><td>Inappropriate Content</td><td><button type='button' id='button1tg28' onclick='changeBgtg28(this);'>PASS</button><button type='button' id='button2tg28' onclick='changeBgtg28(this);'>FAIL</button><button type='button' id='button3tg28' onclick='changeBgtg28(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN01</a></td><td><i>Compliance</td><td><button type='button' id='button1tn01' onclick='changeBgtn01(this);'>PASS</button><button type='button' id='button2tn01' onclick='changeBgtn01(this);'>FAIL</button><button type='button' id='button3tn01' onclick='changeBgtn01(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN02</a></td><td><i>Language</td><td><button type='button' id='button1tn02' onclick='changeBgtn02(this);'>PASS</button><button type='button' id='button2tn02' onclick='changeBgtn02(this);'>FAIL</button><button type='button' id='button3tn02' onclick='changeBgtn02(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN03</a></td><td><i>Currency</td><td><button type='button' id='button1tn03' onclick='changeBgtn03(this);'>PASS</button><button type='button' id='button2tn03' onclick='changeBgtn03(this);'>FAIL</button><button type='button' id='button3tn03' onclick='changeBgtn03(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN24</a></td><td><i>Physical Device presentation - Main game</td><td><button type='button' id='button1tn24' onclick='changeBgtn24(this);'>PASS</button><button type='button' id='button2tn24' onclick='changeBgtn24(this);'>FAIL</button><button type='button' id='button3tn24' onclick='changeBgtn24(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN31</a></td><td><i>History BO</td><td><button type='button' id='button1tn31' onclick='changeBgtn31(this);'>PASS</button><button type='button' id='button2tn31' onclick='changeBgtn31(this);'>FAIL</button><button type='button' id='button3tn31' onclick='changeBgtn31(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN32</a></td><td><i>Game Disable</td><td><button type='button' id='button1tn32' onclick='changeBgtn32(this);'>PASS</button><button type='button' id='button2tn32' onclick='changeBgtn32(this);'>FAIL</button><button type='button' id='button3tn32' onclick='changeBgtn32(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN49</a></td><td><i>Sound Information</td><td><button type='button' id='button1tn49' onclick='changeBgtn49(this);'>PASS</button><button type='button' id='button2tn49' onclick='changeBgtn49(this);'>FAIL</button><button type='button' id='button3tn49' onclick='changeBgtn49(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></table>";







	} else if (datalist1 == 'it' && datalist2 == 'FrenRoul') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT - French Roulette</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'AmeriRoul') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -American Roulette</h1>"

	} else if (datalist1 == 'it' && datalist2 == 'DoubBRoul') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Double Ball Roulette</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'OthRoul') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Other Roulette</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'BlackClass') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Blackjack Classic</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'BlackAmeri') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Blackjack American</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'BlackSurr') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Blackjack Surrender</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'BlackPont') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Blackjack Pontoon</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'BlackSupe') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Blackjack Super 21</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'OthBlack') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT Other Blackjack</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'Baccar') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Baccarat</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'OthBaccar') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Other Baccarat</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'DiceCr') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Dice Craps</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'OthCrap') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Other Craps</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VideoPok') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Videopoker</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'PokeSinPl') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Poker Single Player</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'PokeMultCa') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Poker Multi Player Cash</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'PokeMulPT') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Poker Multi Player Tournament</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'SkilGMPC') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Skill Game Multi Player Cash</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'SkillGMPT') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Skill Game Multi Player Tournament</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'ScratReve') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Scratch / Reveal</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtFoot') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual Football</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtBask') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual Basket</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtTenn') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual Tennis</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtFigh') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual Fighting</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtRacH') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual Racing - Horse</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtRacT') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual Racing - Trotting</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtRacD') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual Racing - Dog</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtRSM') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual Racing - SpeedWay - Motorway</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtRacCy') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual Racing - Cycling</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtOth') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual Other</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtODF') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual ON DEMAND Football</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtODB') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual ON DEMAND Basket</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtODT') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual ON DEMAND Tennis</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtODF') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual ON DEMAND Fighting</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtRacOD') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual Racing ON DEMAND - Horse</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtRacODT') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual Racing ON DEMAND - Trotting</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtRacODG') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual Racing ON DEMAND - Dog</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtRacODSM') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual Racing ON DEMAND - Speedway - Motorway</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtRacODC') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual Racing ON DEMAND - Cycling</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtODoth') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Virtual on demand Other</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'SporBett') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Sport Betting</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'FantSporC') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Fanstasy Sport Cash</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'FantSporTou') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Fanstasy Sport Tournament</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'Ken') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Keno</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'BingMult') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Bingo Multiplayer</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'Lott') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Lottery</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'MinGam') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Mine Games</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'CrasGame') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Crash Games</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'OCGSP') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -OTHER CARD GAMES SINGLE PLAYER</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'OCGM') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -OTHER CARD GAMES MULTIPLAYER</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'OGSP') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -OTHER GAMES SINGLE PLAYER</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'OGM') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -OTHER GAMES MULTIPLAYER</h1>"
	}

	//MALT JURISDICTION CONDITION

	else if (datalist1 == 'mt' && datalist2 == 'slot') {
		
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT - Slot</h1><p><table><tr><th>ID TEST<p></th><th>TEST TITLE</th></th><th>RESULT</th><th>NOTES ABOUT TEST</th></tr><tr><td><a href='TestMethodsGame.html' target='_blank'>TG01</a></td><td>Preliminar check</td><td><button type='button' id='q1button' onclick='changeBg(this);'>PASS</button><button type='button' id='q2button' onclick='changeBg(this);'>FAIL</button><button type='button' id='q3button' onclick='changeBg(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG02</a></td><td>Game Info</td><td><button type='button' id='button1tg02' onclick='changeBgtg02(this);'>PASS</button><button type='button' id='button2tg02' onclick='changeBgtg02(this);'>FAIL</button><button type='button' id='button3tg02' onclick='changeBgtg02(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG03</a></td><td>RTP Dynamic</td><td><button type='button' id='button1tg03' onclick='changeBgtg03(this);'>PASS</button><button type='button' id='button2tg03' onclick='changeBgtg03(this);'>FAIL</button><button type='button' id='button3tg03' onclick='changeBgtg03(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG04</a></td><td>Dynamic Paytable</td><td><button type='button' id='button1tg04' onclick='changeBgtg04(this);'>PASS</button><button type='button' id='button2tg04' onclick='changeBgtg04(this);'>FAIL</button><button type='button' id='button3tg04' onclick='changeBgtg04(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG05</a></td><td>Game with Strategy</td><td><button type='button' id='button1tg05' onclick='changeBgtg05(this);'>PASS</button><button type='button' id='button2tg05' onclick='changeBgtg05(this);'>FAIL</button><button type='button' id='button3tg05' onclick='changeBgtg05(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG06</a></td><td>Gameplay with C-Tool</td><td><button type='button' id='button1tg06' onclick='changeBgtg06(this);'>PASS</button><button type='button' id='button2tg06' onclick='changeBgtg06(this);'>FAIL</button><button type='button' id='button3tg06' onclick='changeBgtg06(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG07</a></td><td>Gameplay</td><td><button type='button' id='button1tg07' onclick='changeBgtg07(this);'>PASS</button><button type='button' id='button2tg07' onclick='changeBgtg07(this);'>FAIL</button><button type='button' id='button3tg07' onclick='changeBgtg07(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG08</a></td><td>Metamorphic Games</td><td><button type='button' id='button1tg08' onclick='changeBgtg08(this);'>PASS</button><button type='button' id='button2tg08' onclick='changeBgtg08(this);'>FAIL</button><button type='button' id='button3tg08' onclick='changeBgtg08(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG09</a></td><td>Features</td><td><button type='button' id='button1tg09' onclick='changeBgtg09(this);'>PASS</button><button type='button' id='button2tg09' onclick='changeBgtg09(this);'>FAIL</button><button type='button' id='button3tg09' onclick='changeBgtg09(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG10</a></td><td>Buy Features</td><td><button type='button' id='button1tg10' onclick='changeBgtg10(this);'>PASS</button><button type='button' id='button2tg10' onclick='changeBgtg10(this);'>FAIL</button><button type='button' id='button3tg10' onclick='changeBgtg10(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG11</a></td><td>Gamble</td><td><button type='button' id='button1tg11' onclick='changeBgtg11(this);'>PASS</button><button type='button' id='button2tg11' onclick='changeBgtg11(this);'>FAIL</button><button type='button' id='button3tg11' onclick='changeBgtg11(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG12</a></td><td>Interrupted Game</td><td><button type='button' id='button1tg12' onclick='changeBgtg12(this);'>PASS</button><button type='button' id='button2tg12' onclick='changeBgtg12(this);'>FAIL</button><button type='button' id='button3tg12' onclick='changeBgtg12(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG13</a></td><td>Win Cap</td><td><button type='button' id='button1tg13' onclick='changeBgtg13(this);'>PASS</button><button type='button' id='button2tg13' onclick='changeBgtg13(this);'>FAIL</button><button type='button' id='button3tg13' onclick='changeBgtg13(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG14</a></td><td>Jackpot</td><td><button type='button' id='button1tg14' onclick='changeBgtg14(this);'>PASS</button><button type='button' id='button2tg14' onclick='changeBgtg14(this);'>FAIL</button><button type='button' id='button3tg14' onclick='changeBgtg14(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG15</a></td><td>History</td><td><button type='button' id='button1tg15' onclick='changeBgtg15(this);'>PASS</button><button type='button' id='button2tg15' onclick='changeBgtg15(this);'>FAIL</button><button type='button' id='button3tg15' onclick='changeBgtg15(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG16</a></td><td>Autoplay</td><td><button type='button' id='button1tg16' onclick='changeBgtg16(this);'>PASS</button><button type='button' id='button2tg16' onclick='changeBgtg16(this);'>FAIL</button><button type='button' id='button3tg16' onclick='changeBgtg16(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG17</a></td><td>Game overview</td><td><button type='button' id='button1tg17' onclick='changeBgtg17(this);'>PASS</button><button type='button' id='button2tg17' onclick='changeBgtg17(this);'>FAIL</button><button type='button' id='button3tg17' onclick='changeBgtg17(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG28</a></td><td>Inappropriate Content</td><td><button type='button' id='button1tg28' onclick='changeBgtg28(this);'>PASS</button><button type='button' id='button2tg28' onclick='changeBgtg28(this);'>FAIL</button><button type='button' id='button3tg28' onclick='changeBgtg28(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN01</a></td><td><i>Compliance</td><td><button type='button' id='button1tn01' onclick='changeBgtn01(this);'>PASS</button><button type='button' id='button2tn01' onclick='changeBgtn01(this);'>FAIL</button><button type='button' id='button3tn01' onclick='changeBgtn01(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN02</a></td><td><i>Language</td><td><button type='button' id='button1tn02' onclick='changeBgtn02(this);'>PASS</button><button type='button' id='button2tn02' onclick='changeBgtn02(this);'>FAIL</button><button type='button' id='button3tn02' onclick='changeBgtn02(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN03</a></td><td><i>Currency</td><td><button type='button' id='button1tn03' onclick='changeBgtn03(this);'>PASS</button><button type='button' id='button2tn03' onclick='changeBgtn03(this);'>FAIL</button><button type='button' id='button3tn03' onclick='changeBgtn03(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN43</a></td><td><i>Extra Wager in Feature</td><td><button type='button' id='button1tn43' onclick='changeBgtn43(this);'>PASS</button><button type='button' id='button2tn43' onclick='changeBgtn43(this);'>FAIL</button><button type='button' id='button3tn43' onclick='changeBgtn43(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></table>";
		
	}  else if (datalist1 == 'mt' && datalist2 == 'EuroRoul') {


		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -European Roulette</h1><p><table><tr><th>ID TEST<p></th><th>TEST TITLE</th></th><th>RESULT</th><th>NOTES</th></tr><tr><td><a href='TestMethodsGame.html' target='_blank'>TG01</a></td><td>Preliminar check</td><td><button type='button' id='q1button' onclick='changeBg(this);'>PASS</button><button type='button' id='q2button' onclick='changeBg(this);'>FAIL</button><button type='button' id='q3button' onclick='changeBg(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG02</a></td><td>Game Info</td><td><button type='button' id='button1tg02' onclick='changeBgtg02(this);'>PASS</button><button type='button' id='button2tg02' onclick='changeBgtg02(this);'>FAIL</button><button type='button' id='button3tg02' onclick='changeBgtg02(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG03</a></td><td>RTP Dynamic</td><td><button type='button' id='button1tg03' onclick='changeBgtg03(this);'>PASS</button><button type='button' id='button2tg03' onclick='changeBgtg03(this);'>FAIL</button><button type='button' id='button3tg03' onclick='changeBgtg03(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG04</a></td><td>Dynamic Paytable</td><td><button type='button' id='button1tg04' onclick='changeBgtg04(this);'>PASS</button><button type='button' id='button2tg04' onclick='changeBgtg04(this);'>FAIL</button><button type='button' id='button3tg04' onclick='changeBgtg04(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG06</a></td><td>Gameplay with C-Tool</td><td><button type='button' id='button1tg06' onclick='changeBgtg06(this);'>PASS</button><button type='button' id='button2tg06' onclick='changeBgtg06(this);'>FAIL</button><button type='button' id='button3tg06' onclick='changeBgtg06(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG07</a></td><td>Gameplay</td><td><button type='button' id='button1tg07' onclick='changeBgtg07(this);'>PASS</button><button type='button' id='button2tg07' onclick='changeBgtg07(this);'>FAIL</button><button type='button' id='button3tg07' onclick='changeBgtg07(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG12</a></td><td>Interrupted Game</td><td><button type='button' id='button1tg12' onclick='changeBgtg12(this);'>PASS</button><button type='button' id='button2tg12' onclick='changeBgtg12(this);'>FAIL</button><button type='button' id='button3tg12' onclick='changeBgtg12(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG13</a></td><td>Win Cap</td><td><button type='button' id='button1tg13' onclick='changeBgtg13(this);'>PASS</button><button type='button' id='button2tg13' onclick='changeBgtg13(this);'>FAIL</button><button type='button' id='button3tg13' onclick='changeBgtg13(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG15</a></td><td>History</td><td><button type='button' id='button1tg15' onclick='changeBgtg15(this);'>PASS</button><button type='button' id='button2tg15' onclick='changeBgtg15(this);'>FAIL</button><button type='button' id='button3tg15' onclick='changeBgtg15(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG16</a></td><td>Autoplay</td><td><button type='button' id='button1tg16' onclick='changeBgtg16(this);'>PASS</button><button type='button' id='button2tg16' onclick='changeBgtg16(this);'>FAIL</button><button type='button' id='button3tg16' onclick='changeBgtg16(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG17</a></td><td>Game overview</td><td><button type='button' id='button1tg17' onclick='changeBgtg17(this);'>PASS</button><button type='button' id='button2tg17' onclick='changeBgtg17(this);'>FAIL</button><button type='button' id='button3tg17' onclick='changeBgtg17(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG21</a></td><td>Live session</td><td><button type='button' id='button1tg21' onclick='changeBgtg21(this);'>PASS</button><button type='button' id='button2tg21' onclick='changeBgtg21(this);'>FAIL</button><button type='button' id='button3tg21' onclick='changeBgtg21(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG22</a></td><td>Forced Outcomes Live</td><td><button type='button' id='button1tg22' onclick='changeBgtg22(this);'>PASS</button><button type='button' id='button2tg22' onclick='changeBgtg22(this);'>FAIL</button><button type='button' id='button3tg22' onclick='changeBgtg22(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG23</a></td><td>Error Handling Live</td><td><button type='button' id='button1tg23' onclick='changeBgtg23(this);'>PASS</button><button type='button' id='button2tg23' onclick='changeBgtg23(this);'>FAIL</button><button type='button' id='button3tg23' onclick='changeBgtg23(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'>    <tr><td><a href='TestMethodsGame.html' target='_blank'>TG24</a></td><td>Check Doc Live</td><td><button type='button' id='button1tg24' onclick='changeBgtg24(this);'>PASS</button><button type='button' id='button2tg24' onclick='changeBgtg24(this);'>FAIL</button><button type='button' id='button3tg24' onclick='changeBgtg24(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'>   <tr><td><a href='TestMethodsGame.html' target='_blank'>TG28</a></td><td>Inappropriate Content</td><td><button type='button' id='button1tg28' onclick='changeBgtg28(this);'>PASS</button><button type='button' id='button2tg28' onclick='changeBgtg28(this);'>FAIL</button><button type='button' id='button3tg28' onclick='changeBgtg28(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN01</a></td><td><i>Compliance</td><td><button type='button' id='button1tn01' onclick='changeBgtn01(this);'>PASS</button><button type='button' id='button2tn01' onclick='changeBgtn01(this);'>FAIL</button><button type='button' id='button3tn01' onclick='changeBgtn01(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN02</a></td><td><i>Language</td><td><button type='button' id='button1tn02' onclick='changeBgtn02(this);'>PASS</button><button type='button' id='button2tn02' onclick='changeBgtn02(this);'>FAIL</button><button type='button' id='button3tn02' onclick='changeBgtn02(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN03</a></td><td><i>Currency</td><td><button type='button' id='button1tn03' onclick='changeBgtn03(this);'>PASS</button><button type='button' id='button2tn03' onclick='changeBgtn03(this);'>FAIL</button><button type='button' id='button3tn03' onclick='changeBgtn03(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></table>";



	}else if (datalist1 == 'mt' && datalist2 == 'FrenRoul') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT - French Roulette</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'AmeriRoul') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -American Roulette</h1>"

	} else if (datalist1 == 'mt' && datalist2 == 'DoubBRoul') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Double Ball Roulette</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'OthRoul') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Other Roulette</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'BlackClass') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Blackjack Classic</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'BlackAmeri') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Blackjack American</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'BlackSurr') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Blackjack Surrender</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'BlackPont') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Blackjack Pontoon</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'BlackSupe') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Blackjack Super 21</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'OthBlack') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT Other Blackjack</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'Baccar') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Baccarat</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'OthBaccar') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Other Baccarat</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'DiceCr') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Dice Craps</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'OthCrap') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Other Craps</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VideoPok') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Videopoker</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'PokeSinPl') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Poker Single Player</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'PokeMultCa') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Poker Multi Player Cash</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'PokeMulPT') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Poker Multi Player Tournament</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'SkilGMPC') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Skill Game Multi Player Cash</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'SkillGMPT') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Skill Game Multi Player Tournament</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'ScratReve') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Scratch / Reveal</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtFoot') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Football</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtBask') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Basket</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtTenn') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Tennis</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtFigh') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Fighting</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtRacH') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing - Horse</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtRacT') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing - Trotting</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtRacD') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing - Dog</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtRSM') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing - SpeedWay - Motorway</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtRacCy') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing - Cycling</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtOth') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Other</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtODF') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual ON DEMAND Football</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtODB') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual ON DEMAND Basket</h1>"
	} else if (datalist1 == 'it' && datalist2 == 'VirtODT') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual ON DEMAND Tennis</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtODF') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual ON DEMAND Fighting</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtRacOD') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing ON DEMAND - Horse</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtRacODT') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing ON DEMAND - Trotting</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtRacODG') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing ON DEMAND - Dog</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtRacODSM') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing ON DEMAND - Speedway - Motorway</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtRacODC') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing ON DEMAND - Cycling</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'VirtODoth') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual on demand Other</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'SporBett') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Sport Betting</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'FantSporC') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Fanstasy Sport Cash</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'FantSporTou') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Fanstasy Sport Tournament</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'Ken') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Keno</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'BingMult') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Bingo Multiplayer</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'Lott') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Lottery</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'MinGam') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Mine Games</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'CrasGame') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Crash Games</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'OCGSP') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -OTHER CARD GAMES SINGLE PLAYER</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'OCGM') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -OTHER CARD GAMES MULTIPLAYER</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'OGSP') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -OTHER GAMES SINGLE PLAYER</h1>"
	} else if (datalist1 == 'mt' && datalist2 == 'OGM') {
		div.innerHTML =

			"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -OTHER GAMES MULTIPLAYER</h1>"
	}
	
		//UK JURISDICTION CONDITION
		else if (datalist1 == 'uk' && datalist2 == 'slot') {
		
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR UK - Slot</h1><p><table><tr><th>ID TEST<p></th><th>TEST TITLE</th></th><th>RESULT</th><th>NOTES ABOUT TEST</th></tr><tr><td><a href='TestMethodsGame.html' target='_blank'>TG01</a></td><td>Preliminar check</td><td><button type='button' id='q1button' onclick='changeBg(this);'>PASS</button><button type='button' id='q2button' onclick='changeBg(this);'>FAIL</button><button type='button' id='q3button' onclick='changeBg(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG02</a></td><td>Game Info</td><td><button type='button' id='button1tg02' onclick='changeBgtg02(this);'>PASS</button><button type='button' id='button2tg02' onclick='changeBgtg02(this);'>FAIL</button><button type='button' id='button3tg02' onclick='changeBgtg02(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG03</a></td><td>RTP Dynamic</td><td><button type='button' id='button1tg03' onclick='changeBgtg03(this);'>PASS</button><button type='button' id='button2tg03' onclick='changeBgtg03(this);'>FAIL</button><button type='button' id='button3tg03' onclick='changeBgtg03(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG04</a></td><td>Dynamic Paytable</td><td><button type='button' id='button1tg04' onclick='changeBgtg04(this);'>PASS</button><button type='button' id='button2tg04' onclick='changeBgtg04(this);'>FAIL</button><button type='button' id='button3tg04' onclick='changeBgtg04(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG05</a></td><td>Game with Strategy</td><td><button type='button' id='button1tg05' onclick='changeBgtg05(this);'>PASS</button><button type='button' id='button2tg05' onclick='changeBgtg05(this);'>FAIL</button><button type='button' id='button3tg05' onclick='changeBgtg05(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG06</a></td><td>Gameplay with C-Tool</td><td><button type='button' id='button1tg06' onclick='changeBgtg06(this);'>PASS</button><button type='button' id='button2tg06' onclick='changeBgtg06(this);'>FAIL</button><button type='button' id='button3tg06' onclick='changeBgtg06(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG07</a></td><td>Gameplay</td><td><button type='button' id='button1tg07' onclick='changeBgtg07(this);'>PASS</button><button type='button' id='button2tg07' onclick='changeBgtg07(this);'>FAIL</button><button type='button' id='button3tg07' onclick='changeBgtg07(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG08</a></td><td>Metamorphic Games</td><td><button type='button' id='button1tg08' onclick='changeBgtg08(this);'>PASS</button><button type='button' id='button2tg08' onclick='changeBgtg08(this);'>FAIL</button><button type='button' id='button3tg08' onclick='changeBgtg08(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG09</a></td><td>Features</td><td><button type='button' id='button1tg09' onclick='changeBgtg09(this);'>PASS</button><button type='button' id='button2tg09' onclick='changeBgtg09(this);'>FAIL</button><button type='button' id='button3tg09' onclick='changeBgtg09(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG11</a></td><td>Gamble</td><td><button type='button' id='button1tg11' onclick='changeBgtg11(this);'>PASS</button><button type='button' id='button2tg11' onclick='changeBgtg11(this);'>FAIL</button><button type='button' id='button3tg11' onclick='changeBgtg11(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG12</a></td><td>Interrupted Game</td><td><button type='button' id='button1tg12' onclick='changeBgtg12(this);'>PASS</button><button type='button' id='button2tg12' onclick='changeBgtg12(this);'>FAIL</button><button type='button' id='button3tg12' onclick='changeBgtg12(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG13</a></td><td>Win Cap</td><td><button type='button' id='button1tg13' onclick='changeBgtg13(this);'>PASS</button><button type='button' id='button2tg13' onclick='changeBgtg13(this);'>FAIL</button><button type='button' id='button3tg13' onclick='changeBgtg13(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG14</a></td><td>Jackpot</td><td><button type='button' id='button1tg14' onclick='changeBgtg14(this);'>PASS</button><button type='button' id='button2tg14' onclick='changeBgtg14(this);'>FAIL</button><button type='button' id='button3tg14' onclick='changeBgtg14(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG15</a></td><td>History</td><td><button type='button' id='button1tg15' onclick='changeBgtg15(this);'>PASS</button><button type='button' id='button2tg15' onclick='changeBgtg15(this);'>FAIL</button><button type='button' id='button3tg15' onclick='changeBgtg15(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG16</a></td><td>Autoplay</td><td><button type='button' id='button1tg16' onclick='changeBgtg16(this);'>PASS</button><button type='button' id='button2tg16' onclick='changeBgtg16(this);'>FAIL</button><button type='button' id='button3tg16' onclick='changeBgtg16(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG17</a></td><td>Game overview</td><td><button type='button' id='button1tg17' onclick='changeBgtg17(this);'>PASS</button><button type='button' id='button2tg17' onclick='changeBgtg17(this);'>FAIL</button><button type='button' id='button3tg17' onclick='changeBgtg17(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG28</a></td><td>Inappropriate Content</td><td><button type='button' id='button1tg28' onclick='changeBgtg28(this);'>PASS</button><button type='button' id='button2tg28' onclick='changeBgtg28(this);'>FAIL</button><button type='button' id='button3tg28' onclick='changeBgtg28(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN01</a></td><td><i>Compliance</td><td><button type='button' id='button1tn01' onclick='changeBgtn01(this);'>PASS</button><button type='button' id='button2tn01' onclick='changeBgtn01(this);'>FAIL</button><button type='button' id='button3tn01' onclick='changeBgtn01(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN02</a></td><td><i>Language</td><td><button type='button' id='button1tn02' onclick='changeBgtn02(this);'>PASS</button><button type='button' id='button2tn02' onclick='changeBgtn02(this);'>FAIL</button><button type='button' id='button3tn02' onclick='changeBgtn02(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN03</a></td><td><i>Currency</td><td><button type='button' id='button1tn03' onclick='changeBgtn03(this);'>PASS</button><button type='button' id='button2tn03' onclick='changeBgtn03(this);'>FAIL</button><button type='button' id='button3tn03' onclick='changeBgtn03(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN12</a></td><td><i>Timer</td><td><button type='button' id='button1tn12' onclick='changeBgtn12(this);'>PASS</button><button type='button' id='button2tn12' onclick='changeBgtn12(this);'>FAIL</button><button type='button' id='button3tn12' onclick='changeBgtn12(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN13</a></td><td><i>Net Position</td><td><button type='button' id='button1tn13' onclick='changeBgtn13(this);'>PASS</button><button type='button' id='button2tn13' onclick='changeBgtn13(this);'>FAIL</button><button type='button' id='button3tn13' onclick='changeBgtn13(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN14</a></td><td><i>Win Celebration</td><td><button type='button' id='button1tn14' onclick='changeBgtn14(this);'>PASS</button><button type='button' id='button2tn14' onclick='changeBgtn14(this);'>FAIL</button><button type='button' id='button3tn14' onclick='changeBgtn14(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN15</a></td><td><i>Result Presentation</td><td><button type='button' id='button1tn15' onclick='changeBgtn15(this);'>PASS</button><button type='button' id='button2tn15' onclick='changeBgtn15(this);'>FAIL</button><button type='button' id='button3tn15' onclick='changeBgtn15(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN16</a></td><td><i>Spin Start</td><td><button type='button' id='button1tn16' onclick='changeBgtn16(this);'>PASS</button><button type='button' id='button2tn16' onclick='changeBgtn16(this);'>FAIL</button><button type='button' id='button3tn16' onclick='changeBgtn16(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN18</a></td><td><i>Game Cycle</td><td><button type='button' id='button1tn18' onclick='changeBgtn18(this);'>PASS</button><button type='button' id='button2tn18' onclick='changeBgtn18(this);'>FAIL</button><button type='button' id='button3tn18' onclick='changeBgtn18(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN24</a></td><td><i>Physical Device presentation - Main game</td><td><button type='button' id='button1tn24' onclick='changeBgtn24(this);'>PASS</button><button type='button' id='button2tn24' onclick='changeBgtn24(this);'>FAIL</button><button type='button' id='button3tn24' onclick='changeBgtn24(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN25</a></td><td><i>Physical Device presentation - Secondary game</td><td><button type='button' id='button1tn25' onclick='changeBgtn25(this);'>PASS</button><button type='button' id='button2tn25' onclick='changeBgtn25(this);'>FAIL</button><button type='button' id='button3tn25' onclick='changeBgtn25(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN28</a></td><td><i>Jurisdictional Autoplay</td><td><button type='button' id='button1tn28' onclick='changeBgtn28(this);'>PASS</button><button type='button' id='button2tn28' onclick='changeBgtn28(this);'>FAIL</button><button type='button' id='button3tn28' onclick='changeBgtn28(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN33</a></td><td><i>Reality Check</td><td><button type='button' id='button1tn33' onclick='changeBgtn33(this);'>PASS</button><button type='button' id='button2tn33' onclick='changeBgtn33(this);'>FAIL</button><button type='button' id='button3tn33' onclick='changeBgtn33(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN38</a></td><td><i>Dynamic usage of the word WIN</td><td><button type='button' id='button1tn38' onclick='changeBgtn38(this);'>PASS</button><button type='button' id='button2tn38' onclick='changeBgtn38(this);'>FAIL</button><button type='button' id='button3tn38' onclick='changeBgtn38(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN43</a></td><td><i>Extra Wager in Feature</td><td><button type='button' id='button1tn43' onclick='changeBgtn43(this);'>PASS</button><button type='button' id='button2tn43' onclick='changeBgtn43(this);'>FAIL</button><button type='button' id='button3tn43' onclick='changeBgtn43(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></table>";
			
		}  else if (datalist1 == 'uk' && datalist2 == 'EuroRoul') {
	
	
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -European Roulette</h1><p><table><tr><th>ID TEST<p></th><th>TEST TITLE</th></th><th>RESULT</th><th>NOTES</th></tr><tr><td><a href='TestMethodsGame.html' target='_blank'>TG01</a></td><td>Preliminar check</td><td><button type='button' id='q1button' onclick='changeBg(this);'>PASS</button><button type='button' id='q2button' onclick='changeBg(this);'>FAIL</button><button type='button' id='q3button' onclick='changeBg(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG02</a></td><td>Game Info</td><td><button type='button' id='button1tg02' onclick='changeBgtg02(this);'>PASS</button><button type='button' id='button2tg02' onclick='changeBgtg02(this);'>FAIL</button><button type='button' id='button3tg02' onclick='changeBgtg02(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG03</a></td><td>RTP Dynamic</td><td><button type='button' id='button1tg03' onclick='changeBgtg03(this);'>PASS</button><button type='button' id='button2tg03' onclick='changeBgtg03(this);'>FAIL</button><button type='button' id='button3tg03' onclick='changeBgtg03(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG04</a></td><td>Dynamic Paytable</td><td><button type='button' id='button1tg04' onclick='changeBgtg04(this);'>PASS</button><button type='button' id='button2tg04' onclick='changeBgtg04(this);'>FAIL</button><button type='button' id='button3tg04' onclick='changeBgtg04(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></td><tr><td><a href='TestMethodsGame.html' target='_blank'>TG06</a></td><td>Gameplay with C-Tool</td><td><button type='button' id='button1tg06' onclick='changeBgtg06(this);'>PASS</button><button type='button' id='button2tg06' onclick='changeBgtg06(this);'>FAIL</button><button type='button' id='button3tg06' onclick='changeBgtg06(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG07</a></td><td>Gameplay</td><td><button type='button' id='button1tg07' onclick='changeBgtg07(this);'>PASS</button><button type='button' id='button2tg07' onclick='changeBgtg07(this);'>FAIL</button><button type='button' id='button3tg07' onclick='changeBgtg07(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG12</a></td><td>Interrupted Game</td><td><button type='button' id='button1tg12' onclick='changeBgtg12(this);'>PASS</button><button type='button' id='button2tg12' onclick='changeBgtg12(this);'>FAIL</button><button type='button' id='button3tg12' onclick='changeBgtg12(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG13</a></td><td>Win Cap</td><td><button type='button' id='button1tg13' onclick='changeBgtg13(this);'>PASS</button><button type='button' id='button2tg13' onclick='changeBgtg13(this);'>FAIL</button><button type='button' id='button3tg13' onclick='changeBgtg13(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG15</a></td><td>History</td><td><button type='button' id='button1tg15' onclick='changeBgtg15(this);'>PASS</button><button type='button' id='button2tg15' onclick='changeBgtg15(this);'>FAIL</button><button type='button' id='button3tg15' onclick='changeBgtg15(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG16</a></td><td>Autoplay</td><td><button type='button' id='button1tg16' onclick='changeBgtg16(this);'>PASS</button><button type='button' id='button2tg16' onclick='changeBgtg16(this);'>FAIL</button><button type='button' id='button3tg16' onclick='changeBgtg16(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG17</a></td><td>Game overview</td><td><button type='button' id='button1tg17' onclick='changeBgtg17(this);'>PASS</button><button type='button' id='button2tg17' onclick='changeBgtg17(this);'>FAIL</button><button type='button' id='button3tg17' onclick='changeBgtg17(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG21</a></td><td>Live session</td><td><button type='button' id='button1tg21' onclick='changeBgtg21(this);'>PASS</button><button type='button' id='button2tg21' onclick='changeBgtg21(this);'>FAIL</button><button type='button' id='button3tg21' onclick='changeBgtg21(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG22</a></td><td>Forced Outcomes Live</td><td><button type='button' id='button1tg22' onclick='changeBgtg22(this);'>PASS</button><button type='button' id='button2tg22' onclick='changeBgtg22(this);'>FAIL</button><button type='button' id='button3tg22' onclick='changeBgtg22(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TG23</a></td><td>Error Handling Live</td><td><button type='button' id='button1tg23' onclick='changeBgtg23(this);'>PASS</button><button type='button' id='button2tg23' onclick='changeBgtg23(this);'>FAIL</button><button type='button' id='button3tg23' onclick='changeBgtg23(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'>    <tr><td><a href='TestMethodsGame.html' target='_blank'>TG24</a></td><td>Check Doc Live</td><td><button type='button' id='button1tg24' onclick='changeBgtg24(this);'>PASS</button><button type='button' id='button2tg24' onclick='changeBgtg24(this);'>FAIL</button><button type='button' id='button3tg24' onclick='changeBgtg24(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'>   <tr><td><a href='TestMethodsGame.html' target='_blank'>TG28</a></td><td>Inappropriate Content</td><td><button type='button' id='button1tg28' onclick='changeBgtg28(this);'>PASS</button><button type='button' id='button2tg28' onclick='changeBgtg28(this);'>FAIL</button><button type='button' id='button3tg28' onclick='changeBgtg28(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN01</a></td><td><i>Compliance</td><td><button type='button' id='button1tn01' onclick='changeBgtn01(this);'>PASS</button><button type='button' id='button2tn01' onclick='changeBgtn01(this);'>FAIL</button><button type='button' id='button3tn01' onclick='changeBgtn01(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN02</a></td><td><i>Language</td><td><button type='button' id='button1tn02' onclick='changeBgtn02(this);'>PASS</button><button type='button' id='button2tn02' onclick='changeBgtn02(this);'>FAIL</button><button type='button' id='button3tn02' onclick='changeBgtn02(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN03</a></td><td><i>Currency</td><td><button type='button' id='button1tn03' onclick='changeBgtn03(this);'>PASS</button><button type='button' id='button2tn03' onclick='changeBgtn03(this);'>FAIL</button><button type='button' id='button3tn03' onclick='changeBgtn03(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN12</a></td><td><i>Timer</td><td><button type='button' id='button1tn12' onclick='changeBgtn12(this);'>PASS</button><button type='button' id='button2tn12' onclick='changeBgtn12(this);'>FAIL</button><button type='button' id='button3tn12' onclick='changeBgtn12(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN16</a></td><td><i>Spin Start</td><td><button type='button' id='button1tn16' onclick='changeBgtn16(this);'>PASS</button><button type='button' id='button2tn16' onclick='changeBgtn16(this);'>FAIL</button><button type='button' id='button3tn16' onclick='changeBgtn16(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN18</a></td><td><i>Game Cycle</td><td><button type='button' id='button1tn18' onclick='changeBgtn18(this);'>PASS</button><button type='button' id='button2tn18' onclick='changeBgtn18(this);'>FAIL</button><button type='button' id='button3tn18' onclick='changeBgtn18(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN24</a></td><td><i>Physical Device presentation - Main game</td><td><button type='button' id='button1tn24' onclick='changeBgtn24(this);'>PASS</button><button type='button' id='button2tn24' onclick='changeBgtn24(this);'>FAIL</button><button type='button' id='button3tn24' onclick='changeBgtn24(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN28</a></td><td><i>Jurisdictional Autoplay</td><td><button type='button' id='button1tn28' onclick='changeBgtn28(this);'>PASS</button><button type='button' id='button2tn28' onclick='changeBgtn28(this);'>FAIL</button><button type='button' id='button3tn28' onclick='changeBgtn28(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'><tr><td><a href='TestMethodsGame.html' target='_blank'>TN33</a></td><td><i>Reality Check</td><td><button type='button' id='button1tn33' onclick='changeBgtn33(this);'>PASS</button><button type='button' id='button2tn33' onclick='changeBgtn33(this);'>FAIL</button><button type='button' id='button3tn33' onclick='changeBgtn33(this);'>N/A</button></td><td><input type='text' name='usrname' placeholder='Notes'></table>";
	
	
	
		}else if (datalist1 == 'mt' && datalist2 == 'FrenRoul') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT - French Roulette</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'AmeriRoul') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -American Roulette</h1>"
	
		} else if (datalist1 == 'mt' && datalist2 == 'DoubBRoul') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Double Ball Roulette</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'OthRoul') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Other Roulette</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'BlackClass') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Blackjack Classic</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'BlackAmeri') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Blackjack American</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'BlackSurr') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Blackjack Surrender</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'BlackPont') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Blackjack Pontoon</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'BlackSupe') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Blackjack Super 21</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'OthBlack') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT Other Blackjack</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'Baccar') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Baccarat</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'OthBaccar') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Other Baccarat</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'DiceCr') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Dice Craps</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'OthCrap') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Other Craps</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VideoPok') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Videopoker</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'PokeSinPl') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Poker Single Player</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'PokeMultCa') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Poker Multi Player Cash</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'PokeMulPT') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Poker Multi Player Tournament</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'SkilGMPC') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Skill Game Multi Player Cash</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'SkillGMPT') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Skill Game Multi Player Tournament</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'ScratReve') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Scratch / Reveal</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtFoot') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Football</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtBask') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Basket</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtTenn') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Tennis</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtFigh') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Fighting</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtRacH') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing - Horse</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtRacT') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing - Trotting</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtRacD') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing - Dog</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtRSM') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing - SpeedWay - Motorway</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtRacCy') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing - Cycling</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtOth') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Other</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtODF') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual ON DEMAND Football</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtODB') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual ON DEMAND Basket</h1>"
		} else if (datalist1 == 'it' && datalist2 == 'VirtODT') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual ON DEMAND Tennis</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtODF') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual ON DEMAND Fighting</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtRacOD') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing ON DEMAND - Horse</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtRacODT') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing ON DEMAND - Trotting</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtRacODG') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing ON DEMAND - Dog</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtRacODSM') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing ON DEMAND - Speedway - Motorway</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtRacODC') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual Racing ON DEMAND - Cycling</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'VirtODoth') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Virtual on demand Other</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'SporBett') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Sport Betting</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'FantSporC') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Fanstasy Sport Cash</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'FantSporTou') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Fanstasy Sport Tournament</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'Ken') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR MT -Keno</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'BingMult') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Bingo Multiplayer</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'Lott') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Lottery</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'MinGam') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Mine Games</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'CrasGame') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -Crash Games</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'OCGSP') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -OTHER CARD GAMES SINGLE PLAYER</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'OCGM') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -OTHER CARD GAMES MULTIPLAYER</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'OGSP') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -OTHER GAMES SINGLE PLAYER</h1>"
		} else if (datalist1 == 'mt' && datalist2 == 'OGM') {
			div.innerHTML =
	
				"<h1 align='center'>LIST OF TESTS TO BE DONE FOR IT -OTHER GAMES MULTIPLAYER</h1>"
		}


	else {
		alert("JURISDICTION NON ANCORA DISPONIBILE..");
	}
}
