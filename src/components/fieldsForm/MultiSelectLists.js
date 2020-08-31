import React, { useState, useEffect } from 'react'
import MultiSelect from '@kenshooui/react-multi-select'
import { makeStyles } from '@material-ui/core/styles'
import InputWrapper from './InputWrapper'
import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(
	({ fontSizes, palette, spacing, familyRoboto }) => ({
		icon: {
			marginRight: spacing(0),
		},
		wrapper: {
			fontSize: fontSizes[1],
			borderColor: `#dddddd`,
			border: `none`,
			flexDirection: 'column',
			fontFamily: familyRoboto,
			'& > div': {
				borderColor: `#dddddd`,
				width: '100%',
				overflow: 'hidden',
				overflowY: 'scroll',
			},
			'& > div:first-child': {
				borderBottom: `1px solid ${palette.secondary.dark}`,
			},
		},

		item: {
			paddingLeft: spacing(2),
		},
	})
)

function ItemRender({
	item,
	group,
	height,
	checked,
	disabled,
	disabledGroup,
	onChange,
	allItems,
	value,
}) {
	const classes = useStyles()
	const handleOnChange = ({ group, id, allItems, value, checked }) => {
		if (checked) {
			if (group) {
				const nextItems = allItems.filter(x => x.group === id)
				const nextValue = [...value, ...nextItems]
				onChange(nextValue)
			} else {
				const nextItem = allItems.find(x => x.id === id)
				const nextValue = [...value, nextItem]
				onChange(nextValue)
			}
		} else {
			if (group) {
				const nextValue = value.filter(x => x.group !== id)
				onChange(nextValue)
			} else {
				const nextValue = value.filter(x => x.id !== id)
				onChange(nextValue)
			}
		}
	}
	let nextChecked = checked
	let nextDisabled = nextChecked ? false : disabled
	//Verificar si es group y si es verificar si todos los inputs existen en el value
	if (group) {
		//verificar si es el grupo seleccionado y a ese no pasarle el disabled
		nextDisabled = disabledGroup
		const groupsItems = allItems.filter(x => x.group === item.id)
		const groupItemsValue = value.filter(x => x.group === item.id)
		if (groupsItems.length === groupItemsValue.length) {
			nextChecked = true
			nextDisabled = false
		}
	}
	return (
		<Grid
			container
			item
			alignItems="center"
			className={group ? classes.itemGroup : classes.item}
		>
			<Checkbox
				disabled={nextDisabled}
				checked={nextChecked}
				onChange={({ target: { checked } }) =>
					handleOnChange({ group, id: item.id, allItems, value, checked })
				}
				name={item.id}
				style={{ height }}
			/>
			<Typography>{item.label}</Typography>
		</Grid>
	)
}
function SelectAllRendered({
	height,
	onClick,
	isAllSelected,
	selectAllMessage,
	disabled,
}) {
	return (
		<Grid container item alignItems="center">
			<Checkbox
				checked={isAllSelected}
				onClick={onClick}
				name="Select all"
				style={{ height }}
				disabled={disabled}
			/>
			<Typography>{selectAllMessage}</Typography>
		</Grid>
	)
}

function MultiSelectLists({
	label,
	error, //Puede ser boolean o string
	isRequired = false,
	onChange,
	value,
	name,
	isValid,
	disabled = false,
	disabledGroup = false,
	disabledSelectAll = false,
	xs = 12,
	md = 12,
	id,
	items,
	withGrouping = true,
	...rest
}) {
	const classes = useStyles()
	const [localItems, setLocalItems] = useState([])
	const [filteredItems, setFilteredItems] = useState(localItems)
	const handleOnChange = value => {
		onChange({ name, value })
	}
	const search = value => {
		const nextFilteredItems = localItems.filter(
			x =>
				x.label.toUpperCase().includes(value.toUpperCase()) ||
				x.group.toUpperCase().includes(value.toUpperCase())
		)
		setFilteredItems(nextFilteredItems)
	}
	useEffect(() => {
		setFilteredItems(localItems)
	}, [localItems])
	useEffect(() => {
		if (items.length) {
			setLocalItems(items)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [items])
	return (
		<InputWrapper
			label={label}
			isRequired={isRequired}
			error={error}
			xs={xs}
			md={md}
			disabled={disabled}
			{...rest}
		>
			<MultiSelect
				isLocked={() => disabled}
				items={filteredItems}
				selectedItems={value}
				withGrouping={withGrouping}
				onChange={handleOnChange}
				wrapperClassName={classes.wrapper}
				messages={{
					searchPlaceholder: `Buscar...`,
					noItemsMessage: `No existen items...`,
					noneSelectedMessage: `No existe selección`,
					selectedMessage: `seleccionados`,
					selectAllMessage: `SELECCIONAR TODO`,
					clearAllMessage: `Limpiar todo`,
					disabledItemsTooltip: `Puedes seleccionar solo uno`,
				}}
				itemRenderer={props => (
					<ItemRender
						{...props}
						onChange={handleOnChange}
						allItems={localItems}
						value={value}
						disabled={disabled}
						disabledGroup={disabledGroup}
						withGrouping={withGrouping}
					/>
				)}
				selectAllRenderer={props => (
					<SelectAllRendered {...props} disabled={disabledSelectAll} />
				)}
				searchValueChanged={search}
			/>
		</InputWrapper>
	)
}

export default MultiSelectLists
