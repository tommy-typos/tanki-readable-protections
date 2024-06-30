const obj = {
	spider: "mine",
	fox: "jiqa / fire",
	badger: "freeze",
	ocelot: "isida",
	weasel: "tesla",
	wolf: "hammer",
	panther: "twins",
	lion: "rikoshet",
	dolphin: "smoky",
	orka: "striker",
	shark: "vulkan",
	grizzly: "qrom / thunder",
	vulture: "skorpion",
	falcon: "relsa",
	griffin: "magnum",
	owl: "gauss",
	eagle: "shaft",
};

const interval = setInterval(() => {
	// 1
        const shopContainer = document.querySelector(".ShopCategoryOfferSectionStyle-innerContainer");
        if(shopContainer) {
			shopContainer.children[0].style.display = 'none';
		}

        // 2
	const garageItemsWrapper = document.querySelectorAll(
		".ListItemsComponentStyle-itemsContainer"
	)[0];

	if (!garageItemsWrapper) {
		return;
	}

	const firstChildSpan = garageItemsWrapper.children[0].querySelector(
		".garage-item > div > div > span"
	);
	if (!(firstChildSpan.innerText?.toLowerCase() === "spider")) {
		return;
	}
	garageItemsWrapper.style.display = "flex";
	garageItemsWrapper.style.flexWrap = "wrap";
	garageItemsWrapper.style.marginBottom = "20px";

	for (const item of garageItemsWrapper.children) {
		const span = item.querySelector(".garage-item > div > div > span");
		if (!span.innerText) {
			continue;
		}
		span.innerText = obj[span.innerText.toLowerCase()];
		span.style.fontSize = "18px";

		// wraps span and levelText
		const textDiv = item.querySelector(".garage-item > div");
		textDiv.style.height = "50px";

		const levelText = item.querySelector(".garage-item > div > h2");
		levelText.style.fontSize = "10px";
	}
}, [250]);
