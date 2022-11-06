const openSideBar = () => {
	document.querySelector("#sidebarbackground").style.display = 'block'
	document.querySelector("#sidebar").classList.add("animateIn")
}

const closeSideBar = () => {
	document.querySelector("#sidebarbackground").style.display = 'none'
	document.querySelector("#sidebar").classList.remove("animateIn")
}

const flexGuy = document.querySelector("#flexguy")
const transform = document.querySelector("#transform")

window.onload = ()=> {
	animateIn(transform,50,"animateIn")
}

window.onscroll = ()=> {
	animateIn(flexGuy,150,"animateIn")
}

const animateIn = (element,revealpoint=150,animation) => {
	let height = window.innerHeight
    let revealTop = element.getBoundingClientRect().top
  
    if (revealTop < height - revealpoint) { 
      element.classList.add(animation)
    } else {
		element.classList.remove(animation)

    }
}