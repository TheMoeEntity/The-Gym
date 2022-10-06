const openSideBar = () => {
	document.querySelector("#sidebarbackground").style.display = 'block'
	document.querySelector("#sidebar").classList.add("animateIn")
}

const closeSideBar = () => {
	document.querySelector("#sidebarbackground").style.display = 'none'
	document.querySelector("#sidebar").classList.remove("animateIn")
}
