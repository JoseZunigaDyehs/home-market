export const kindFoodById = {
	1: { id: 1, name: 'Carnes' },
	2: { id: 2, name: 'Pollo' },
	3: { id: 3, name: 'Pollo' },
	4: { id: 4, name: 'Vegetariano' },
	5: { id: 5, name: 'Vegano' },
	6: { id: 6, name: 'Todos' },
}
export const ingredientsById = {
	1: { id: 1, name: 'Pan' },
	2: { id: 2, name: 'Palta' },
	3: { id: 3, name: 'Tomate' },
	4: { id: 4, name: 'Hamburguesa lenteja' },
	5: { id: 5, name: 'Choclo' },
	6: { id: 6, name: 'Queso' },
	7: { id: 7, name: 'Papas' },
}
export const kindPayById = {
	1: { id: 1, name: 'Efectivo' },
	2: { id: 2, name: 'Transferencia' },
}
export const foodsIds = [1, 2]
export const foodsById = {
	1: {
		id: 1,
		name: 'Italiano - Lentejas',
		ingredientsIds: [1, 2, 3, 4],
		kindFoodId: 4,
		price: 2800,
	},
	2: {
		id: 2,
		name: 'Papas fritas - Individual',
		ingredientsIds: [7],
		kindFoodId: 5,
		price: 1000,
	},
	3: {
		id: 3,
		name: 'Empanada - Choclo Queso',
		ingredientsIds: [5, 6],
		kindFoodId: 4,
		price: 1000,
	},
}
export const statusOrderById = {
	1: { id: 1, name: 'Por cocinar' },
	2: { id: 2, name: 'Por enviar' },
	3: { id: 3, name: 'Enviado' },
}
export const orders = [
	{
		id: 1,
		createDate: '24-08-2020 02:57:00',
		closeDate: null,
		userId: 1,
		foodsIds: [1, 2, 3],
		totalValue: 3800,
		deliveryPrice: 0,
		orderStateId: 1,
	},
]
