const HandleEdges=(props)=>{
    const edges=props.edges;
    return(
        <>
            {edges.map(edge=>(
                <p>Hrana [{edge.startId},{edge.endId}] Id: {edge.id} Znaky:{edge.symbols}
                <button className="btn btn-primary btn-sm" onClick={()=>props.onRemoveEdge(edge.id)}>-</button>
                <input type="text" onChange={(e)=>props.handleEdgeChange(edge.id,e.target.value)}/>
                </p>
            ))}
            <label>Novou hranu: Id Start End Symbols
                <input 
                    type="text" 
                    onChange={(e)=>props.handleNewEdge(e.target.value)}
                />
            </label>
        </>
    );
}
export default HandleEdges

