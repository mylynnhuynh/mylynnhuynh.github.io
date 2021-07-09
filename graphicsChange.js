var dsc1 = " One of my favorite things to design is graphics for apparel. As much as I enjoy the process and journey of creating, nothing brings me more joy but the end result: to see my design come to life through seeing people wear them. Take a look at my brainstorming and alternative designs here. * Currently working on updating content... * (Crickhollow Housing Jacket, Healing Jacket, Solar Longsleeves)";
function changeToApparel(){
	document.getElementById("graphics-txt").innerHTML = "A collection of apparel designs.";
	document.getElementById("graphics-txt3").innerHTML = dsc1;
	document.getElementById("graphics-txt2").href = "";
	document.getElementById("graphics-txt2").innerHTML = "";

	document.getElementById("one").src = "images/apparel/f.JPG";
	document.getElementById("one").alt = "hunger over easy longsleeve";
	document.getElementById("two").src = "images/apparel/a.jpg";
	document.getElementById("three").src = "images/apparel/g.jpg";
	document.getElementById("four").src = "images/apparel/h.jpg";
	document.getElementById("five").src = "";
	document.getElementById("six").src = "";
}
			

var dsc2 = "During my time in college, I was a board member for a campus org called Circle K International. One of my main duties as the club's Media Chair was to create and design newsletters (the graphics, backgrounds, typography, etc.) throughout the year to keep our members informed/updated on everything going on within the club. A full look of our published newsletters can be found on:";
function changeToNewsletter() {
	document.getElementById("graphics-txt").innerHTML = "Published newsletters.";
	document.getElementById("graphics-txt3").innerHTML = dsc2;
	document.getElementById("graphics-txt2").href = "https://issuu.com/ucicki20172018";
	document.getElementById("graphics-txt2").target = "_blank";
	document.getElementById("graphics-txt2").innerHTML = "issuu.com";

	document.getElementById("one").src = "images/newsletters/Members.png";
	document.getElementById("two").src = "images/newsletters/Winter.png";
	document.getElementById("three").src = "images/newsletters/Fall.png";
	document.getElementById("four").src = "images/newsletters/Summer.png";
	document.getElementById("five").src = "images/newsletters/Welcome.png";
	document.getElementById("six").src = "images/newsletters/spring.png";
}

var dsc3 = "* Currently Updating... * (Social media banners, cover photos, posts, etc.)";
function changeToMedia() {
	document.getElementById("graphics-txt").innerHTML = "Social Media.";
	document.getElementById("graphics-txt3").innerHTML = dsc3;
	document.getElementById("graphics-txt2").href = "";
	document.getElementById("graphics-txt2").innerHTML = "";

	document.getElementById("one").src = "images/placeholder.png";
	document.getElementById("two").src = "images/placeholder.png";
	document.getElementById("three").src = "images/placeholder.png";
	document.getElementById("four").src = "images/placeholder.png";
	document.getElementById("five").src = "images/placeholder.png";
	document.getElementById("six").src = "images/placeholder.png";
}

var dsc4 = "* Currently Updating... * (flyers, logos, etc.)";
function changeToAdvertising() {
	document.getElementById("graphics-txt").innerHTML = "Advertising.";
	document.getElementById("graphics-txt3").innerHTML = dsc4;
	document.getElementById("graphics-txt2").href = "";
	document.getElementById("graphics-txt2").innerHTML = "";

	document.getElementById("one").src = "images/placeholder.png";
	document.getElementById("two").src = "images/placeholder.png";
	document.getElementById("three").src = "images/placeholder.png";
	document.getElementById("four").src = "images/placeholder.png";
	document.getElementById("five").src = "images/placeholder.png";
	document.getElementById("six").src = "images/placeholder.png";
}
