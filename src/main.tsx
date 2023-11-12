import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import { Welcome } from "./pages/Welcome.tsx";
import { Info } from "./pages/Info.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: 'welcome',
				element: <Welcome />,
			},
			{
				path: 'info',
				element: <Info />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
