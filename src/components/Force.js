import { useEffect } from "react";
import { useWorkerLayoutForceAtlas2 } from "@react-sigma/layout-forceatlas2";

export default function Fa2() {
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