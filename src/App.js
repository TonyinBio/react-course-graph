import DAG from "./components/DAG";
import rawData from "./assets/dag-data.json";

function App() {
	const dagData = JSON.parse(JSON.stringify(rawData))
	

	dagData.options = {
		allowSelfLoops: false,
		multi: true,
		type: "directed"
	}
	dagData.edges = dagData.links;
	delete dagData.links;

	dagData.nodes.forEach((node, i) => {
		const { id, ...attributes } = node;

		dagData.nodes[i] = { key: id, attributes: attributes };
	});

	const {edges, nodes, options, ...attributes} = dagData
	const finalData = {edges, nodes, options, attributes}

	return <DAG data={finalData} />;
}

export default App;
