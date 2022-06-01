import HandlePoints from './handlingOfPoints'
import HandleEdges from './handlingOfEdges'

const Handle=(props)=>{
    const graphData=props.graphData;
    return(
        <>
            <HandlePoints 
                points={graphData.points} 
                handlePointChange={props.handlePointChange}
                onRemovePoint={props.onRemovePoint}
                handleNewPoint={props.handleNewPoint}
            />
            <br/>
            <HandleEdges 
                edges= {graphData.edges}
                handleEdgeChange={props.handleEdgeChange} 
                onRemoveEdge={props.onRemoveEdge}
                handleNewEdge={props.handleNewEdge}
            />
        </>
    );
}

export default Handle