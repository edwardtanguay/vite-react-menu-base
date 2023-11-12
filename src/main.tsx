import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import { Welcome } from "./pages/Welcome.tsx";
import { Info } from "./pages/Info.tsx";
import { About } from "./pages/About.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: '/',
				element: <Welcome />,
			},
			{
				path: 'info',
				element: <Info />,
			},
			{
				path: 'about',
				element: <About />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
