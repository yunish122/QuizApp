document.getElementById("menu_id").addEventListener("click", (e) => {
	const btn = e.target.closest("button");
	if (!btn) return;

	if (btn.id === "start") {
		window.location.href = "../index.html";
	}
	if (btn.id === "diff") {
		window.location.href = "../htmls/difficulty.html";
	}
})