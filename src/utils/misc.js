export const getSelectDataFromEntity = ({ entity, entitesIds = [] }) => {
	const nextEntitiesIds = entitesIds.length ? entitesIds : Object.keys(entity)
	return nextEntitiesIds.map(entityId => {
		const { id, name } = entity[entityId]
		return {
			id,
			label: name,
		}
	})
}

export const getSelectListDataFromEntity = ({
	entity,
	entitesIds = [],
	groupKey = '',
	groupsByIds = [],
}) => {
	const nextEntitiesIds = entitesIds.length ? entitesIds : Object.keys(entity)
	return nextEntitiesIds.map(entityId => {
		const { id, name, ...rest } = entity[entityId]
		const { name: group } = groupsByIds[rest[groupKey]]
		return {
			id,
			label: name,
			group,
		}
	})
}
