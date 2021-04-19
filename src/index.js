import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";
import { Home } from "./components";
import "./styles/global.css";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Home />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,

	document.getElementById("root")
);
