const fakeData = [
	{
		id: 2,
		title: 'Chage title',
		slug: 'chage-title',
		price: 100,
		description:
			'Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.',
		category: {
			id: 1,
			name: 'Clothes',
			slug: 'clothes',
			image: 'https://i.imgur.com/QkIa5tT.jpeg',
			creationAt: '2025-05-15T15:42:11.000Z',
			updatedAt: '2025-05-15T15:42:11.000Z',
		},
		images: ['https://placehold.co/600x400'],
		creationAt: '2025-05-15T15:42:11.000Z',
		updatedAt: '2025-05-15T18:02:43.000Z',
	},
	{
		id: 3,
		title: 'Classic Heather Gray Hoodie ghsdhjkl',
		slug: 'classic-heather-gray-hoodie-ghsdhjkl',
		price: 69,
		description:
			'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
		category: {
			id: 1,
			name: 'Clothes',
			slug: 'clothes',
			image: 'https://i.imgur.com/QkIa5tT.jpeg',
			creationAt: '2025-05-15T15:42:11.000Z',
			updatedAt: '2025-05-15T15:42:11.000Z',
		},
		images: [
			'https://i.imgur.com/cHddUCu.jpeg',
			'https://i.imgur.com/CFOjAgK.jpeg',
			'https://i.imgur.com/wbIMMme.jpeg',
		],
		creationAt: '2025-05-15T15:42:11.000Z',
		updatedAt: '2025-05-15T18:04:09.000Z',
	},
	{
		id: 4,
		title: 'Classic Grey Hooded Sweatshirt',
		slug: 'classic-grey-hooded-sweatshirt',
		price: 90,
		description:
			'Elevate your casual wear with our Classic Grey Hooded Sweatshirt. Made from a soft cotton blend, this hoodie features a front kangaroo pocket, an adjustable drawstring hood, and ribbed cuffs for a snug fit. Perfect for those chilly evenings or lazy weekends, it pairs effortlessly with your favorite jeans or joggers.',
		category: {
			id: 1,
			name: 'Clothes',
			slug: 'clothes',
			image: 'https://i.imgur.com/QkIa5tT.jpeg',
			creationAt: '2025-05-15T15:42:11.000Z',
			updatedAt: '2025-05-15T15:42:11.000Z',
		},
		images: [
			'https://i.imgur.com/R2PN9Wq.jpeg',
			'https://i.imgur.com/IvxMPFr.jpeg',
			'https://i.imgur.com/7eW9nXP.jpeg',
		],
		creationAt: '2025-05-15T15:42:11.000Z',
		updatedAt: '2025-05-15T15:42:11.000Z',
	},
	{
		id: 5,
		title: 'Classic Black Hooded Sweatshirt',
		slug: 'classic-black-hooded-sweatshirt',
		price: 79,
		description:
			'Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.',
		category: {
			id: 1,
			name: 'Clothes',
			slug: 'clothes',
			image: 'https://i.imgur.com/QkIa5tT.jpeg',
			creationAt: '2025-05-15T15:42:11.000Z',
			updatedAt: '2025-05-15T15:42:11.000Z',
		},
		images: [
			'https://i.imgur.com/cSytoSD.jpeg',
			'https://i.imgur.com/WwKucXb.jpeg',
			'https://i.imgur.com/cE2Dxh9.jpeg',
		],
		creationAt: '2025-05-15T15:42:11.000Z',
		updatedAt: '2025-05-15T15:42:11.000Z',
	},
	{
		id: 6,
		title: 'Classic Comfort Fit Joggers',
		slug: 'classic-comfort-fit-joggers',
		price: 25,
		description:
			'Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.',
		category: {
			id: 1,
			name: 'Clothes',
			slug: 'clothes',
			image: 'https://i.imgur.com/QkIa5tT.jpeg',
			creationAt: '2025-05-15T15:42:11.000Z',
			updatedAt: '2025-05-15T15:42:11.000Z',
		},
		images: [
			'https://i.imgur.com/ZKGofuB.jpeg',
			'https://i.imgur.com/GJi73H0.jpeg',
			'https://i.imgur.com/633Fqrz.jpeg',
		],
		creationAt: '2025-05-15T15:42:11.000Z',
		updatedAt: '2025-05-15T15:42:11.000Z',
	},
	{
		id: 12,
		title: 'Classic Black Baseball Cap',
		slug: 'classic-black-baseball-cap',
		price: 58,
		description:
			'Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit. Whether you’re out for a jog or just running errands, this cap adds a touch of style to any outfit.',
		category: {
			id: 1,
			name: 'Clothes',
			slug: 'clothes',
			image: 'https://i.imgur.com/QkIa5tT.jpeg',
			creationAt: '2025-05-15T15:42:11.000Z',
			updatedAt: '2025-05-15T15:42:11.000Z',
		},
		images: [
			'https://i.imgur.com/KeqG6r4.jpeg',
			'https://i.imgur.com/xGQOw3p.jpeg',
			'https://i.imgur.com/oO5OUjb.jpeg',
		],
		creationAt: '2025-05-15T15:42:11.000Z',
		updatedAt: '2025-05-15T15:42:11.000Z',
	},
]

export default fakeData
