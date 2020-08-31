import {
	foodsIds,
	foodsById,
	userById,
	kindFoodById,
	kindPayById,
	statusOrderById,
} from 'mockup'
import { getSelectDataFromEntity, getSelectListDataFromEntity } from 'utils'
export const orderFieldsIds = ['userId', 'foodId', 'kindPay', 'statusOrder']
export const orderFieldsById = {
	userId: {
		name: 'userId',
		label: 'Usuario',
		required: true,
		isValid: true,
		status: 'default',
		type: 'select',
		value: -1,
		items: getSelectDataFromEntity({
			entity: userById,
		}),
		rule: { type: 'select' },
		md: 6,
	},
	foodsIds: {
		name: 'foodsIds',
		label: 'Comidas',
		required: true,
		isValid: true,
		status: 'default',
		type: 'multiSelectListSearch',
		value: [],
		items: getSelectListDataFromEntity({
			entity: foodsById,
			entitiesIds: foodsIds,
			groupKey: 'kindFoodId',
			groupsByIds: kindFoodById,
		}),
		rule: { type: 'arrayEmpty' },
		md: 12,
	},
	kindPay: {
		name: 'kindPay',
		label: 'Tipo de pago',
		required: true,
		isValid: true,
		status: 'default',
		type: 'select',
		value: -1,
		items: getSelectDataFromEntity({
			entity: kindPayById,
		}),
		rule: { type: 'select' },
		md: 6,
	},
	statusOrder: {
		name: 'statusOrder',
		label: 'Estado de pedido',
		required: true,
		isValid: true,
		status: 'default',
		type: 'select',
		value: -1,
		items: getSelectDataFromEntity({
			entity: statusOrderById,
		}),
		rule: { type: 'select' },
		md: 6,
	},
}
export const orderFieldsRequestAPIByFieldId = {
	userId: 'userId',
	foodsIds: 'foodsIds',
	kindPay: 'kindPay',
	statusOrder: 'statusOrder',
}
//TODO: Para llenar la data desde requests
//TODO: Manejarlo en el useForm
//TODO: Crear un Form Component para pasarle el array de fields ids
