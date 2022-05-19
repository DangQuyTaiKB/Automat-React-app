import Edge from './edge'

const Edges=(props)=>{
    const dataOfEdges=props.dataOfEdges;
    const points=props.points;
    return (
        <>
            {dataOfEdges.map(dataOfEdge =>{
                //wrong way startPoint= points[dataOfEdge.startId];
                const startPoint= points.filter(point=>(point.id===dataOfEdge.startId))[0];
                const endPoint= points.filter(point=>(point.id===dataOfEdge.endId))[0];
                const signaly=dataOfEdge.signaly;
                return <Edge startPoint={startPoint} endPoint={endPoint}  signaly={signaly}/>
            })}
        </>
    );
}

export default Edges