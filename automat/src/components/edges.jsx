import Edge from './edge'

const Edges=(props)=>{
    const edges=props.edges;
    const points=props.points;
    return (
        <>
            {edges.map(edge =>{
                //wrong way startPoint= points[dataOfEdge.startId];
                return <Edge 
                    id={edge.id}
                    points={points}
                    startId={edge.startId} 
                    endId={edge.endId}  
                    symbols={edge.symbols}
                />
            })}
        </>
    );
}

export default Edges