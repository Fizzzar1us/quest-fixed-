let uchitel = document.querySelector(".uchitel")
let body = document.querySelector(".body");
let door = document.querySelector(".door")
let doorsknob = document.querySelector(".doorsknob")
let class2 = document.querySelector(".class2")
// let koridor = document.querySelector(".koridor")
let location1 = document.querySelector(".location1")
let dialogs1 = document.querySelector(".loc1_talk")
let dialogs2 = document.querySelector(".loc1_talk2")
let loc1_talkk = document.querySelector(".loc1_talkk")
let loc1_talkkk = document.querySelector(".loc1_talkkk")
let loc1_talkk2 = document.querySelector(".loc1_talkk2")
let loc1_talkkk2 = document.querySelector(".loc1_talkkk2")
let loc1_variants_block = document.querySelector(".loc1_variants_block")
let loc1_bait = document.querySelector(".loc1_bait")
let loc1_baitalk = document.querySelector(".loc1_baitalk")
let loc1_baitalk1 = document.querySelector(".loc1_baitalk1")
let loc1_tualet = document.querySelector(".loc1_tualet")
let uchitel_talk = document.querySelector(".uchitel_talk")
let koridortalk = document.querySelector(".koridortalk")
let trash = document.querySelector(".trash")
let lighter = document.querySelector(".lighter")
let score = 0;
let gg = document.querySelector(".gg")
let scoree = document.querySelector(".scoree")
let drug = document.querySelector(".drug")
let inv = document.querySelector(".inv")
let inv1 = document.querySelector(".inv1")
score = 0
document.querySelector(".score").innerHTML = score;
// let scoreTag = document.querySelector(".scoreTag")
let btn = document.querySelector(".btn")

// let loc1 = function(){
	// body.style.background = "green"
// }
let talk1 = function(){
	dialogs1.style.display = "block"
}
let talk2 = function(){
	dialogs1.style.display = "none"
	dialogs2.style.display = "block"
}	
let loc1_variants = function(){
	loc1_variants_block.style.display = "block"
}
	
// let aftervariant1 = function(){
	
// }

let talk1_talkk = function(){
	loc1_talkk.style.display = "block"
}
let talk1_talkkk = function(){
	loc1_talkkk.style.display = "block"
}
let talk1_talkk2 = function(){
	loc1_talkk2.style.display = "block"
}
let talk1_talkkk2 = function(){
	loc1_talkkk2.style.display = "block"
}
let itog = function(){
	alert("Учитель повернулся и заметил тебя, ты возвращаешься на свою парту")
}
let poltori = function() {
	alert("Твое время вышло и тебе пора вернутся в класс(Обнови страницу и начни заново)")
}
let changelocation = function(){
	gg.style.left = "90%"
 	gg.style.top = "50%"
	class2.style.backgroundImage = 'url(koridor.jpg)'
	koridortalk.style.display = "block"
	trash.style.display = "block"
	trash.onclick = function(){
		if(inv.style.backgroundImage == 0){
			lighter.style.left = 15 + "px"
			lighter.style.top = 60 + "px"
			lighter.style.display = "block"
		}else{
			lighter.style.left = 100 + "px"
			lighter.style.top = 60 + "px"
			lighter.style.display = "block"
		}
	}
}
let changelocation1 = function(){
	gg.style.left = "90%"
 	gg.style.top = "50%"
 	trash.style.display = "none"
	class2.style.backgroundImage = 'url(tualet.png)'
	
}
loc1_tualet.onclick = function(){
 	uchitel_talk.style.display = "block"
 	door.style.display = "block"
 	loc1_tualet.style.display = "none"
 	loc1_bait.style.display = "none"

 	door.onclick = function(){
 		gg.style.top = "38%";
		gg.style.left = "50%";	
		setTimeout(changelocation , 500)
		setTimeout(poltori , 90000)
		uchitel_talk.style.display = "none"
		loc1_talkk2.style.display = "none"
		loc1_talkkk2.style.display = "none"
		loc1_baitalk1.style.display = "none"
		door.style.display = "none"
		drug.style.display = "none"
		uchitel.style.display = "none"
		if (class2.style.backgroundImage = 'url(koridor.jpg)') {
 			doorsknob.style.display = "block"
 		}
 	}			
}
loc1_bait.onclick = function(){
	loc1_talkk2.style.display = "none"
	loc1_talkkk2.style.display = "none"
	loc1_baitalk.style.display = "block"
	loc1_baitalk1.style.display = "block"
	loc1_baitalk1.style.left = 300 + "px"
 	uchitel.style.left = 300 + "px"
 	let time = setTimeout(itog, 10000,);
 	
 	loc1_bait.style.display = "none"
 	loc1_tualet.style.display = "none"
 	scoree.style.display = "block"
 	btn.style.display = "block"
 	btn.onclick = function(){
		score = score + 1
		document.querySelector(".score").innerHTML = score;
		
		if(score>=40) {
	 		door.style.display = "block"
	 		door.onclick = function(){
				gg.style.top = "38%";
				gg.style.left = "50%";
				setTimeout(changelocation , 500)
				
				loc1_talkk2.style.display = "none"
				loc1_talkkk2.style.display = "none"
				loc1_baitalk.style.display = "none"
				loc1_baitalk1.style.display = "none"
				scoree.style.display = "none"
 				btn.style.display = "none"
 				drug.style.display = "none"
 				uchitel.style.display = "none"
 				door.style.display = "none"
				if (class2.style.backgroundImage = 'url(koridor.jpg)') {
 					clearTimeout(time)
 					doorsknob.style.display = "block"
 				}
			}
	 	}
	}
}
doorsknob.onclick = function(){
	gg.style.left = 150 + "px"
	gg.style.top = 525 + "px"
	setTimeout(changelocation1 , 1000)
	if (class2.style.backgroundImage = 'url(tualet.png)') {
 		doorsknob.style.display = "none"
 	}
}

// if(loc1_variants_block == "loc1_tualet"){
//  	uchitel_talk.style.display = "block"
// }

setTimeout(talk1 , 1000);
setTimeout(talk2 , 5000);
setTimeout(loc1_variants , 8000);
	
