import React from 'react'
import { Component } from 'react'
import Layout from './layout'
export default class ErrorFallback extends Component {

	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}
	static getDerivedStateFromError(error) {
		return { hasError: true }
	}
	componentDidCatch(error, errorLog) {
		console.log(errorLog);
	}
	render() {

		if (this.state.hasError)
			return <h2>Error Page</h2>;
		else
			return <Layout></Layout>;

	}
}
