import { prefix } from '../../utils/prefix.js';

const data = {
	pages : [
		{
			title: 'Principal',
			link: '/principal',
			src: `${prefix}/imgs/main/Icon_principal.svg`,
		},
		{
			title: 'ETESC',
			link: '/etesc',
			src: `${prefix}/imgs/main/Icon_ETESC.svg`,
		},
		{
			title: 'Zonas Comunes',
			link: '/zones',
			src: `${prefix}/imgs/main/Icon_zonas_comunes.svg`,
		},
		{
			title: 'Oficina',
			link: '/office',
			src: `${prefix}/imgs/main/Icon_Oficina.svg`,
		},
		{
			title: 'Informacion',
			link: '/info/about',
			src: `${prefix}/imgs/main/Icon_Informacion.svg`,
		},
	]
}

export const getPages = () => data.pages
