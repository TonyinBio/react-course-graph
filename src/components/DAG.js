import React, { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "@react-sigma/core/lib/react-sigma.min.css";

import { SigmaContainer } from "@react-sigma/core";
import { DirectedGraph, MultiDirectedGraph } from "graphology";

import Graph from "./Graph";
import Force from "./Force"

export default function DAG({ data }) {
	const { height, width } = useWindowDimensions();

	return (
		<SigmaContainer
			graph={MultiDirectedGraph}
			style={{ height, width }}
			settings={{ renderEdgeLabels: true, defaultEdgeType: "arrow" }}
		>
			<Graph data={data} />
			<Force />
		</SigmaContainer>
	);
}
