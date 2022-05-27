const HandleEdges=(props)=>{
    const edges=props.edges;
    return(
        <>
            {edges.map(edges=>(
                <p>Hrana [{edges.startId},{edges.endId}] Id: {edges.id} Znaky:{edges.symbols}
                <button className="btn btn-primary btn-sm" onClick={()=>props.onRemoveEdge(edges.startId,edges.endId)}>-</button>
                <input type="text" onChange={(e)=>props.handleEdgeChange(edges.id,e.target.value)}/>
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