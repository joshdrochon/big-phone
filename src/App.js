import { Route, Switch, withRouter } from "react-router-dom"
import { useEffect, useState } from 'react'

//relative imports
import './App.css';
import Phones from "./components/Phones"
import Checkout from "./components/Checkout"
import Header from "./components/global/Header"
import fetch from "./data/fetch"

function App({ history, location }) {
	
	//set Header title
	const title = location.pathname === "/checkout" ?
		"Checkout" :
		"Big Phone Catalog"

	//set initial state values object
	const [state, setState] = useState({
		data: [],
		offset: 0,
		cart: [],
		total: 0,
		cartOffSet: 0,
	})

	useEffect(() => {
		//force redirect
		history.push("/shopping")
		//import data dynamically
		import("./data/phone_catalog").then(({ default: data }) => {
			//emulate API fetch
			data = fetch(data, state.offset)
			//set fetched data
			setState({...state, data});
		})
	}, [state.offset, history])

	function checkout() {
		history.push("/checkout")
	}

	function continueShopping() {
		history.push('/shopping')
	}

	function pay() {
		history.push("/shopping")
		setState({...state, cart: [], total: 0, cartOffSet: 0})
	}

	function addPhone(phone) {
		let updatedCart = [...state.cart]

		updatedCart.push(phone)

		setState({...state, cart: updatedCart, total: state.total + phone.price})
	}
	
	function removePhone({ brand, price }) {
		let updatedCart = [...state.cart]

		updatedCart = updatedCart.filter(el => el.brand !== brand)
		
		//check if no items are in view
		let cartOffSet = updatedCart.length > 0 && 
		state.cartOffSet === updatedCart.length ? 
		state.cartOffSet - 3 : 
		state.cartOffSet

		setState({...state, cart: updatedCart, total: state.total - price, cartOffSet})
	}

	function setOffSet(offset) {
		setState({...state, offset})
	}

	function setCartOffSet(cartOffSet) {
		setState({...state, cartOffSet})
	}
	
	return (
		<div className="app">
			<Header
				title={title}
				numOfItems={state.cart.length}
				checkout={checkout}
				pathname={location.pathname}
				continueShopping={continueShopping}
			/>
			<Switch>
				{
					state.data?.length &&
					<Route
						exact
						path='/shopping'
						render={() => (
							<Phones
								phones={state.data}
								cart={state.cart}
								setOffSet={setOffSet}
								offset={state.offset}
								addPhone={addPhone}
								isAuthed
							/>
						)}
					/>
				}
				<Route
					path="/checkout"
					render={() => (
						<Checkout
							pay={pay}
							cart={state.cart}
							total={state.total}
							setCartOffSet={setCartOffSet}
							cartOffSet={state.cartOffSet}
							removePhone={removePhone}
						/>
					)}
				>
				</Route>
			</Switch>
		</div>
	);
}

export default withRouter(App);