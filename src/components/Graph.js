import React, { useEffect } from "react";

import { useLoadGraph } from "@react-sigma/core";
import circular from "graphology-layout/circular";
import { MultiDirectedGraph } from "graphology";

export default function Graph({ data }) {
	const loadGraph = useLoadGraph();

	useEffect(() => {
		const graph = new MultiDirectedGraph();
		graph.import(data);

		graph.updateEachNodeAttributes((node, attr) => {
			return {
				...attr,
				label: attr.title,
			};
		});
		console.log(graph);

		circular.assign(graph);
		loadGraph(graph);
	}, [data]);
}
