import "./App.css";

import User from "./components/User";
import Header from "./components/Header"
import Footer from "./components/Footer";
const friends = [
	{
		id: 1,
		name: "Kadir",
	},
	{
		id: 2,
		name: "Tayfun",
	},
	{
		id: 3,
		name: "Gökhan",
	},
];

function App() {
	return (
		<>
		<Header/>
			<User
				// 
				surname="Bilinmiyor"
				isLoggedIn={true}
				age={26}
				friends={friends}
				address={{
					title: "Altındağ/Ankara",
					zip: "06444",
				}}
			/>
			<Footer/>
		</>
	);
}

export default App;
