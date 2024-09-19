import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import AlertTag from "./Components/AlertTag"

const App: React.FC = () => (
	<div className="app">
		<BrowserRouter>
		{/* Add AlertTag here to make it global */}
		<AlertTag />
			<main className="">
				<AppRoutes />
			</main>
		</BrowserRouter>
	</div>
);

export default App;
