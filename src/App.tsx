import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import { useAlertTag } from "../src/Hooks/useAlertTag";

const App: React.FC = () => {
	const { alertTag } = useAlertTag({ timeout: 3000 });
	return (
		<div className="app">
			<BrowserRouter>
				<main className="">
					{/* Render the global alertTag */}
					{alertTag}

					<AppRoutes />
				</main>
			</BrowserRouter>
		</div>
	);
};

export default App;
