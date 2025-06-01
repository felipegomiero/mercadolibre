import type { IDetail } from "../types";

const mockBreadCrumbsItems = [
	{ label: "Celulares e telefones" },
	{ label: "Celulares e smartphones" },
	{ label: "Samsung" },
];

const mockItem: IDetail = {
	title: "Samsung Galaxy S24 Galaxy Ai 256GB Preto 8GB RAM",
	price: "R$ 3.438",
	stock: 56,
	shippingPromSecLeft: 104500,
	evaluation: {
		stars: 2.5,
		qty: 34567,
	},
	qtySold: 100450,
	seller: {
		title: "Samsung",
		verified: true,
		qtyProducts: 10000000,
		status: {
			title: "MercadoLíder Premium",
			desc: "É um dos melhores do site!",
			qtySold: 12591309,
			csStatus: "Bom",
			deliverOnTime: true,
		},
	},
	paymentMethods: {
		debit: [
			{
				title: "ELO",
				companyLogo:
					"https://http2.mlstatic.com/storage/logos-api-admin/d2407420-f3bd-11eb-8e0d-6f4af49bf82e-m.svg",
			},
		],
		credit: [
			{
				title: "MasterCard",
				installments: 12,
				companyLogo:
					"https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg",
			},
			{
				title: "Visa",
				installments: 8,
				companyLogo:
					"https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg",
			},
		],
		others: [
			{
				title: "PIX",
				desc: "Aprovação imediata",
				companyLogo:
					"https://http2.mlstatic.com/storage/logos-api-admin/f99fcca0-f3bd-11eb-9984-b7076edb0bb7-m.svg",
			},
			{
				title: "Boleto bancário",
				desc: "Ao comprar, explicaremos como fazer o pagamento em qualquer agência bancária, caixa eletrônico, Internet Banking ou correspondentes bancários.",
				companyLogo:
					"https://http2.mlstatic.com/storage/logos-api-admin/00174300-571e-11e8-8364-bff51f08d440-m.svg",
			},
		],
	},
	images: [
		{
			alt: "Samsung galaxy s24 256gb",
			src: "https://a-static.mlcdn.com.br/800x560/smartphone-samsung-galaxy-s24-62-galaxy-ai-256gb-preto-5g-8gb-ram-cam-tripla-50mp-selfie-12mp-bateria-4000mah-dual-chip/magazineluiza/238095300/e7d6a769c701da9491194643ae02c865.jpg",
		},
		{
			alt: "Samsung Cores",
			src: "https://http2.mlstatic.com/D_NQ_NP_942153-MLA83864739934_042025-O.webp",
		},
		{
			alt: "Samsung AI",
			src: "https://http2.mlstatic.com/D_NQ_NP_692256-MLA83864680656_042025-O.webp",
		},
		{
			alt: "Samsung câmera",
			src: "https://http2.mlstatic.com/D_NQ_NP_828777-MLA83864710362_042025-O.webp",
		},
		{
			alt: "Samsung config",
			src: "https://http2.mlstatic.com/D_NQ_NP_623102-MLA83864680674_042025-O.webp",
		},
		{
			alt: "Samsung acessórios",
			src: "https://http2.mlstatic.com/D_NQ_NP_810783-MLA83864720268_042025-O.webp",
		},
	],
	keyFeatures: [
		{
			desc: "Memória RAM: 8 GB",
		},
		{
			desc: "Dispositivo desbloqueado para que você escolha a companhia telefônica de sua preferência.",
		},
		{
			desc: "Compatível com redes 5G.",
		},
		{
			desc: 'Tela AMOLED Dinamico 2X de 6.2".',
		},
		{
			desc: "Tem 3 câmeras traseiras de 50Mpx/12Mpx/10Mpx.",
		},
		{
			desc: "Câmeras frontais de 12.0 MP.",
		},
		{
			desc: "Bateria de 4000mAh.",
		},
	],
	desc: `Celular Samsung Galaxy A06 com tela de 6.7", 128GB, 4GB de RAM, Câmera Traseira de 50MP, Câmera Frontal de 8MP, Bateria de 5000mAh, Dual Chip, Android<br><br>

O Galaxy A06 foi feito com tudo que você precisa para acompanhar e assistir seus conteúdos favoritos.<br><br>

Feito para durar e atualizado por mais tempo, o Galaxy A06 oferece uma experiência duradoura e segura com o seu aparelho, assegurando até 2 atualizações de sistema operacional Android e até 4 anos de atualizações de Segurança. Fora isso, a sua proteção é aprimorada de seus dados e apps mais seguros por Knox Vault, garantindo que dados confidenciais e sigilosos permaneçam seguros, e com Cadeado Galaxy, protegendo os seus dados e acessos a aplicativos por terceiros.<br><br>

Com uma grande tela HD+ de 6.7”, esse celular garante uma visualização imersiva nos seus conteúdos, que terão uma transição mais fluida graças a taxa de atualização de 60Hz.<br><br>
O Galaxy A06 apresenta um design com acabamento elegante e oferece 3 opções de cores para você escolher a que mais combina com você: Azul Escuro, Branco e Verde.<br><br>

Com um desempenho absurdo, experimente a potência do processador Mediatek | MT6177M, armazenamento de 128GB e memória RAM de 4GB até 8GB utilizando RAM Plus.<br><br>

Com um design fino e moderno o, Galaxy A06 ainda conta com o a nova função de leitor de impressão de digital.<br><br>

A sua Câmera Dupla de até 50MP e a Selfie de 8MP garantem diversas possibilidades para que as suas fotos fiquem incríveis.<br><br>

Esse aparelho te acompanha em todos os momentos com a sua bateria de 5.000 mAh, que dura até dois dias de uso, e um Carregamento Rápido de até 25W, para que você não precise passar muito tempo ao lado da tomada. Assim, você pode assistir a conteúdos, realizar diversos downloads e utilizar o seu celular sem faltar energia.<br><br>

Com o aplicativo SmartSwitch você transfere de forma fácil e prática o conteúdo do seu celular anterior (fotos, contatos, eventos do calendário, notas, configurações do dispositivo e muito mais) para o seu novo Galaxy A06.`,
};

export default { mockBreadCrumbsItems, mockItem };
