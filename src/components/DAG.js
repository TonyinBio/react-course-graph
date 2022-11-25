import React, { useEffect } from 'react';

import "@react-sigma/core/lib/react-sigma.min.css";
import { SigmaContainer, useLoadGraph } from '@react-sigma/core';
import { UndirectedGraph } from 'graphology';

import {erdosRenyi} from 'graphology-generators/random';

function LoadGraph({data}) {
    const loadGraph = useLoadGraph()

    useEffect(() => {
        
        const graph = erdosRenyi(UndirectedGraph, { order: 100, probability: 0.2 })
        console.log(graph)
        loadGraph(graph);
    }, [data])
}

export default function DAG() {

  return (
    <SigmaContainer style ={{height:"500px", width: "500px"}}>
        <LoadGraph />
    </SigmaContainer>
  )
}
