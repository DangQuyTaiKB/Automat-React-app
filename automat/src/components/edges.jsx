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
                const symbols=dataOfEdge.symbols;
                return <Edge startPoint={startPoint} endPoint={endPoint}  symbols={symbols}/>
            })}
        </>
    );
}

export default Edges