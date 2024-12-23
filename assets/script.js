const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


/*** Selection */
let dotContainer = document.querySelector(".dots") /// bullet point
let bannerText = document.querySelector("#banner p") // Texte de bannière
let slode = 0  // compteur et slide active
let banner = document.querySelector(".banner-img") // balise image qui contient la diapo
const arrowLeft = document.querySelector(".arrow_left") //fleche de gauche
const arrowRight = document.querySelector(".arrow_right") //fleche de droite

/** Modif */

dotContainer.innerHTML = "<span class='dot'></span>".repeat(slides.length) // créer autant de point (vide) qu'il y a de diapositive
let bp = document.querySelectorAll(".dot") /// span de point
bp[0].classList.add("dot_selected")  //ajoute la classe selectionné au premier point


/** Fleche de droite */

if (arrowRight)
	arrowRight.addEventListener ("click", (event) => {  // ecoute le click gauche
	if(event.button === 0)
		if (slode < slides.length-1){  // dans le cas ou on est pas sur le dernier diapo
		bp[slode].classList.remove('dot_selected') // enleve le point actif car il change !
		slode += 1 // augmente le compteur car il nous servira pour récupérer les nouveaux texte image et point selectionné
		bp[slode].classList.add('dot_selected') // selectionne le nouveau point 
		banner.src = "assets/images/slideshow/" + slides[slode].image // on se sert de la nouvelle source pour changer l'image de fond
		bannerText.innerHTML = slides[slode].tagLine // nouvelle tagline
		}
		else{ // on reprend le slide de depart
		bp[slode].classList.remove('dot_selected') 
		slode = 0
		bp[slode].classList.add('dot_selected')
		banner.src = "assets/images/slideshow/" + slides[slode].image
		bannerText.innerHTML = slides[slode].tagLine
		}
	
	})

/** fleche de gauche */

if (arrowLeft)
	arrowLeft.addEventListener ("click", function(event){
		if(event.button === 0)
			if (slode === 0){
			bp[slode].classList.remove('dot_selected')
			slode = slides.length-1
			bp[slode].classList.add('dot_selected')
			banner.src = "assets/images/slideshow/" + slides[slode].image
			bannerText.innerHTML = slides[slode].tagLine
			}
			else{
			bp[slode].classList.remove('dot_selected')
			slode -= 1
			banner.src = "assets/images/slideshow/" + slides[slode].image
			bp[slode].classList.add('dot_selected')
			bannerText.innerHTML = slides[slode].tagLine
			}
		
	})
