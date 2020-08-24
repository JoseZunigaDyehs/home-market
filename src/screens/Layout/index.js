import React from 'react'
import Grid from '@material-ui/core/Grid'
import Header from './Header'
import { SnackBar } from 'components'
import { useFeedback } from 'context'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ spacing }) => ({
	root: {
		padding: spacing(3, 4),
	},
}))

function Layout({ children }) {
	const { root } = useStyles()
	const { setFeedback, ...feedback } = useFeedback()
	return (
		<Grid container className={root}>
			<Header />
			{children}
			<SnackBar {...feedback} setOpen={open => setFeedback({ open })} />
		</Grid>
	)
}

export default Layout
