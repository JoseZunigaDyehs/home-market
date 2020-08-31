import { CreateOrder } from 'screens'
export const routes = [
	{
		key: 1,
		path: `/`,
		title: `Crear orden`,
		component: CreateOrder,
	},
	{
		key: 2,
		path: `/autorizar`,
		title: `Autorizar`,
		component: null,
	},
]
