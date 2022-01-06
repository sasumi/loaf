const getEl = selector => {
	return document.querySelector(selector);
};

const rand = (min, max) => {
	return Math.ceil(Math.random()*max+min);
};

const randSec = (min, max)=>{
	return rand(min*1000, max*1000);
}

const bindScreenToggle = ()=>{
	document.onclick = function (event) {
		if (document.fullscreenElement) {
			document.exitFullscreen()
				.then(() => console.log("Document Exited from Full screen mode"))
				.catch((err) => console.error(err))
		} else {
			document.documentElement.requestFullscreen();
		}
	}
};