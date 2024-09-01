import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import { AuthChecker } from "./Services/AuthService";

const App: React.FC = () => (
	<div className="app">
		<BrowserRouter>
			{/* Ensure authToken is checked before rendering routes */}
			<AuthChecker />
			<main className="">
				<AppRoutes />
			</main>
		</BrowserRouter>
	</div>
);

export default App;
