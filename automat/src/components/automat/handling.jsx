import HandlePoints from './handlingOfPoints'
import HandleEdges from './handlingOfEdges'
import HandleSymbols from './handlingOfSymbols';

const Handle=(props)=>{
    const graphData=props.graphData;
    return(
        <>
            <HandlePoints 
                points={graphData.points} 
                onRemovePoint={props.onRemovePoint}
                handlePointChange={props.handlePointChange}
                handleNewPoint={props.handleNewPoint}
            />
            <br/>
            <HandleEdges 
                edges= {graphData.edges}
                onRemoveEdge={props.onRemoveEdge}
                handleEdgeChange={props.handleEdgeChange} 
                handleNewEdge={props.handleNewEdge}
            />
            <br/>
            <HandleSymbols
                symbols={graphData.symbols}
                onRemoveSymbol={props.onRemoveSymbol}
                handleSymbolChange={props.handleSymbolChange}
                handleNewSymbol={props.handleNewSymbol}
            />
        </>
    );
}

export default Handle