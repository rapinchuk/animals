"use strict"

window.onload = function(){


	//anims
	gsap.registerPlugin(ScrollTrigger);
	var tl = gsap.timeline();

	function anim(el){
		gsap.from(el, {
			duration:1, y:"100",opacity: 0, ease:Power3.easeOut, 
			  scrollTrigger: {
				trigger:el,
				markers:false,
				start:"top 75%", //when top of herman passes 75% viewport height
				end:"bottom 25%", //when bottom of herman passes 25% viewport height
				
					 //events: onEnter onLeave onEnterBack onLeaveBack
				toggleActions:"play"
					//options: play, pause, resume, reset, restart, complete, reverse,none
			  },
			  stagger: 0.2
		  }) 
	}

	anim(".hero__wrap")
	anim(".promo__wrap")
	anim(".services__wrap")
	anim('.promo-2__wrap')
	anim(".servive-2")
	anim(".team__wrap")
	anim("statistic__wrap")
	anim("blog__wrap")

	gsap.from(".card-1", {
		duration:2, y:"100",opacity: 0, ease:Power3.easeOut, 
			scrollTrigger: {
			trigger:".services__wrap",
			markers:false,
			start:"top 75%", //when top of herman passes 75% viewport height
			end:"bottom 25%", //when bottom of herman passes 25% viewport height
			
					//events: onEnter onLeave onEnterBack onLeaveBack
			toggleActions:"play"
				//options: play, pause, resume, reset, restart, complete, reverse,none
			},
			stagger: 0.3
		}) 

	gsap.from(".card-2", {
	duration:2, y:"100",opacity: 0, ease:Power3.easeOut, 
		scrollTrigger: {
		trigger:".services-2",
		markers:false,
		start:"top 75%", //when top of herman passes 75% viewport height
		end:"bottom 25%", //when bottom of herman passes 25% viewport height
		
				//events: onEnter onLeave onEnterBack onLeaveBack
		toggleActions:"play"
			//options: play, pause, resume, reset, restart, complete, reverse,none
		},
		stagger: 0.3
	}) 
	gsap.from(".card-3", {
	duration:2, y:"100",opacity: 0, ease:Power3.easeOut, 
		scrollTrigger: {
		trigger:".team__wrap",
		markers:false,
		start:"top 75%", //when top of herman passes 75% viewport height
		end:"bottom 25%", //when bottom of herman passes 25% viewport height
		
				//events: onEnter onLeave onEnterBack onLeaveBack
		toggleActions:"play"
			//options: play, pause, resume, reset, restart, complete, reverse,none
		},
		stagger: 0.3
	}) 
	gsap.from(".statistic__item", {
	duration:2, y:"100",opacity: 0, ease:Power3.easeOut, 
		scrollTrigger: {
		trigger:".statistic__wrap",
		markers:false,
		start:"top 75%", //when top of herman passes 75% viewport height
		end:"bottom 25%", //when bottom of herman passes 25% viewport height
		
				//events: onEnter onLeave onEnterBack onLeaveBack
		toggleActions:"play"
			//options: play, pause, resume, reset, restart, complete, reverse,none
		},
		stagger: 0.3
	}) 
	gsap.from(".card-blog", {
	duration:2, y:"100",opacity: 0, ease:Power3.easeOut, 
		scrollTrigger: {
		trigger:".blog__wrap",
		markers:false,
		start:"top 75%", //when top of herman passes 75% viewport height
		end:"bottom 25%", //when bottom of herman passes 25% viewport height
		
				//events: onEnter onLeave onEnterBack onLeaveBack
		toggleActions:"play"
			//options: play, pause, resume, reset, restart, complete, reverse,none
		},
		stagger: 0.3
	}) 

	//counter anim
	const items = document.querySelectorAll(".statistic__counter");

	gsap.from(items, {
	scrollTrigger: {
		trigger:".statistic__wrap",
		markers:false,
		start:"top 75%", //when top of herman passes 75% viewport height
		end:"bottom 25%", //when bottom of herman passes 25% viewport height
		
			//events: onEnter onLeave onEnterBack onLeaveBack
		toggleActions:"play"
			//options: play, pause, resume, reset, restart, complete, reverse,none
		},
	textContent: 0,
	duration: 2,
	ease: Power1.easeIn,
	snap: { textContent: 1 },
	stagger: 0.1,
	// onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
	});


	
	//burger
	let $burger = document.querySelector('.burger')
	let $burgerSpan = document.querySelector('.burger-span')
	let $body =	document.querySelector('body')
	let $menu = document.querySelector('.header__nav-wraper')
	// let burgerHandle = function(e){
	// 	burgerSpan.classList.toggle("active")
	// }


	$burger.addEventListener("click", (e)=>{
		$burgerSpan.classList.toggle("active")
		if($burgerSpan.classList.contains("active")){
			$body.style.overflow = "hidden",
			$menu.style.display = "flex"
		}
		else{
			$body.style.overflow = "auto"
			$menu.style.display = "none"
		}
	});

		  

};