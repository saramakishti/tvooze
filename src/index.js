import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";
import { fetchData } from "./redux/actions";
import { TVShowList } from "./components";

const store = createStore(reducers, applyMiddleware(thunk));
store.dispatch(fetchData());

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<TVShowList />
		</Provider>
	</React.StrictMode>,

	document.getElementById("root")
);
