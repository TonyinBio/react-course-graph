import React, { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "@react-sigma/core/lib/react-sigma.min.css";

import { SigmaContainer, useLoadGraph, useSigma } from "@react-sigma/core";
import { DirectedGraph, MultiDirectedGraph } from "graphology";

import { useWorkerLayoutForceAtlas2 } from "@react-sigma/layout-forceatlas2";

import circular from "graphology-layout/circular";

function Graph({ data }) {
	const loadGraph = useLoadGraph();

	useEffect(() => {
		const graph = new MultiDirectedGraph();
		graph.import(data);

		circular.assign(graph);
		loadGraph(graph);
	}, [data]);
}

function Fa2() {
	const { start, kill, isRunning } = useWorkerLayoutForceAtlas2({
		settings: { slowDown: 10 },
	});

	useEffect(() => {
		// start FA2
		start();
		return () => {
			// Kill FA2 on unmount
			kill();
		};
	}, [start, kill]);
}

export default function DAG({ data }) {
	const { height, width } = useWindowDimensions();

	return (
		<SigmaContainer
			graph={MultiDirectedGraph}
			style={{ height, width }}
			settings={{ renderEdgeLabels: true, defaultEdgeType: "arrow" }}
		>
			<Graph data={data} />
			<Fa2 />
		</SigmaContainer>
	);
}
