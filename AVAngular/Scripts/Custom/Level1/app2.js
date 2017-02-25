(function () {
	var app = angular.module('store', []);

	app.controller('StoreController', function () {
		this.products = gems;
	});

	// Gems array
	var gems = [
		{
			name: 'Koh-i-Noor',
			price: 229.05,
			description: 'The Koh-i-Noor (Persian for Mountain of Light; also spelled Kohinoor and Koh-i-nur) is a large, colorless diamond that was found near Guntur in Andhra Pradesh, India, possibly in the 13th century. It weighed 793 carats (158.6 g) uncut and was first owned by the Kakatiya dynasty. The stone changed hands several times between various feuding factions in South Asia over the next few hundred years, before ending up in the possession of Queen Victoria after the British conquest of the Punjab in 1849.',
			canPurchase: false,
			soldOut: false
		},
		{
			name: 'Tavernier Blue',
			price: 121.27,
			description: 'The Tavernier Blue was the precursor diamond to the Blue Diamond of the French Crown (aka the French Blue), and subsequently the Hope Diamond. This has been accepted by many historians and gemologists for years and was scientifically proven with 3D imaging and prototyping technology in 2005. It is a Type IIb diamond.',
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Hope Diamond',
			price: 97.54,
			description: 'The Hope Diamond is one of the most famous jewels in the world, with ownership records dating back almost four centuries. Its much-admired rare blue color is due to trace amounts of boron atoms. Weighing 45.52 carats, its exceptional size has revealed new findings about the formation of gemstones.',
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Regent Diamond',
			price: 221.54,
			description: 'The Regent Diamond is a 141 carats (28.2 g) diamond owned by the French state and on display in the Louvre, worth as of 2015 £48,000,000.',
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Nassak Diamond',
			price: 165.45,
			description: 'The Nassak Diamond (also known as the Nassac Diamond[2] and the Eye of the Idol[3]) is a large, 43.38 carats (8.676 g) diamond that originated as a larger 89 carat diamond in the 15th century in India.[4] Found in the Amaragiri mine located in Mahbubnagar, Telangana, India,[5] and originally cut in India, the diamond was the adornment in the Trimbakeshwar Shiva Temple, near Nashik, in the state of Maharashtra, India from at least 1500 to 1817.',
			canPurchase: false,
			soldOut: false
		}
	]
})();