const HandleEdges=(props)=>{
    const dataOfEdges=props.dataOfEdges;
    return(
        <>
            {dataOfEdges.map(dataOfEdge=>(
                <p>Hrana [{dataOfEdge.startId},{dataOfEdge.endId}] Id: {dataOfEdge.id} Znaky:{dataOfEdge.symbols}
                <button className="btn btn-primary btn-sm" onClick={()=>props.onRemoveEdge(dataOfEdge.startId,dataOfEdge.endId)}>-</button>
                <input type="text" onChange={(e)=>props.handleEdgeChange(dataOfEdge.id,e.target.value)}/>
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