const renderBoss = async () => {
	const requestedID = parseInt(window.location.href.split("/").pop());
	const response = await fetch("/bosses");
	const data = await response.json();
	let boss = data.find((boss) => boss.id === requestedID);
	const bossContent = document.getElementById("boss-content");
	if (boss) {
		document.getElementById("image").src = boss.image;
		document.getElementById("name").textContent = boss.name;
		document.getElementById("health").textContent = "Health: " + boss.health;
		document.getElementById("occurrences").textContent =
			"Spawns: " + boss.occurrences;
		document.getElementById("description").textContent =
			"Behavior: " + boss.description;
		document.title = `UnEarthed- ${boss.name}`;
		document.getElementById("strategy").textContent =
			"How to Beat: " + boss.strategy;
	} else {
		const message = document.createElement("h2");
		message.textContent = "No Bosses Available";
		bossContent.appendChild(message);
	}
};
renderBoss();
