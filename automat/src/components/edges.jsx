import Edge from './edge'

const Edges=(props)=>{
    const edges=props.edges;
    const points=props.points;
    return (
        <>
            {edges.map(edge =>{
                //wrong way startPoint= points[dataOfEdge.startId];
                let label='obecna';
                if(edge.startId===edge.endId){
                    label='smycka';
                }
                return <Edge 
                    points={points}
                    startId={edge.startId} 
                    endId={edge.endId}  
                    label={label}
                    symbols={edge.symbols}
                />
            })}
        </>
    );
}

export default Edges