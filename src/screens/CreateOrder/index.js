import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useForm } from 'hooks'
import { Select, MultiSelectLists } from 'components/fieldsForm'
import { orderFieldsById } from './formData'

function CreateOrder() {
	const {
		fieldsById,
		onFocusHandle,
		onChangefield,
		setFieldsById,
		isAllValid,
	} = useForm({
		defaultFieldsById: orderFieldsById,
	})
	const inputProps = {
		onChange: onChangefield,
		onFocusHandle: onFocusHandle,
	}
	return (
		<Grid container>
			<Select {...fieldsById.userId} {...inputProps} />
			<MultiSelectLists {...fieldsById.foodsIds} {...inputProps} />
			<Select {...fieldsById.kindPay} {...inputProps} />
			<Select {...fieldsById.statusOrder} {...inputProps} />
		</Grid>
	)
}

export default CreateOrder
