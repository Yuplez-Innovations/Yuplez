const container = document.querySelector(".slidercontainer");
const boxes = container.querySelectorAll(".sliderbox");

let containerCopy = container.cloneNode(true);
container.appendChild(containerCopy);

let position = 0;
const speed = 2;

function animate() {
	position -= speed;
	container.style.left = `${position}px`;
	if (position <= -containerCopy.offsetWidth) {
		position = 0;
	}
	window.requestAnimationFrame(animate);
}
animate();
