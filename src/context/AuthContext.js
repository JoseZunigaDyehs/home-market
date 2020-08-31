/* eslint-disable camelcase */
import React, { useContext, useState, useEffect } from 'react'
import { ENV } from 'env'
import moment from 'moment'
import API from 'config/api'
import { Loader } from 'components'
import { userById } from 'mockup'

const AuthContext = React.createContext()

function AuthProvider({ children }) {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const getMe = async () => {
			try {
				setLoading(true)
				let nextUser = ENV.REACT_APP_AVOID_ME_REQUEST
					? userById['1']
					: await API.me(null)
				setUser(nextUser)
				setLoading(false)
			} catch (error) {
				setLoading(false)
			}
		}
		getMe()
	}, [])

	function logIn({ token, expires_in, nextUser }) {
		const expiresTime = moment().add(expires_in, `seconds`).format()
		setUser({ ...nextUser, token, expiresTime })
	}

	return (
		<AuthContext.Provider value={{ user, logIn }}>
			{loading ? <Loader /> : children}
		</AuthContext.Provider>
	)
}

function useAuth() {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error(`useAuth must be used within a AuthProvider`)
	}
	return context
}

export { AuthProvider, useAuth }
