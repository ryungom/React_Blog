import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "../src/components/Header/Header"
import HomePage from "./pages/HomePage";
import PostView from "./pages/PostView";
import Footer from "../src/components/Footer/Footer";
import data from "../src/db/data.json";
import "./app.css";

function App() {
	return(
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Header profileImg={data.users[0].profileImg} />
			<Routes>
				<Route
					path="/"
					element={<HomePage data={data} />}
				/>
				<Route
					path="/PostView"
					element={<PostView />}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
