import React from 'react'
import CheckBoxMui from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ fontSizes }) => ({
	root: {
		height: fontSizes[1],
		width: fontSizes[1],
	},
}))

function CheckBox({ name, onChange, value, disabled }) {
	const classes = useStyles()
	return (
		<CheckBoxMui
			color="primary"
			name={name}
			onChange={onChange}
			checked={value}
			disabled={disabled}
			classes={{ root: classes.root }}
		/>
	)
}

export default CheckBox
