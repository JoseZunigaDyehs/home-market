/* eslint-disable camelcase */
import React, { useContext, useState, useEffect } from 'react'
import { ENV } from 'env'
import API from 'config/api'
import { Loader } from 'components'
import { orders as orderMock } from 'mockup'

const OrdersContext = React.createContext()

//ORDERS BY DAY
function OrdersProvider({ children }) {
	const [orders, setOrders] = useState([])
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		const getMe = async () => {
			try {
				setLoading(true)
				let nextOrders = ENV.REACT_APP_AVOID_ORDERS_REQUEST
					? orderMock
					: await API.me(null)
				setOrders(nextOrders)
				setLoading(false)
			} catch (error) {
				setLoading(false)
			}
		}
		getMe()
	}, [])

	return (
		<OrdersContext.Provider value={{ orders, loadingOrders: loading }}>
			{loading ? <Loader /> : children}
		</OrdersContext.Provider>
	)
}

function useOrders() {
	const context = useContext(OrdersContext)
	if (!context) {
		throw new Error(`useOrders must be used within a OrdersProvider`)
	}
	return context
}

export { OrdersProvider, useOrders }
