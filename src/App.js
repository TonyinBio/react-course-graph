import DAG from "./components/DAG";
import dagData from "./assets/dag-data.json"

function App() {
	console.log(dagData)

	return <DAG data={dagData} />;
}

export default App;
