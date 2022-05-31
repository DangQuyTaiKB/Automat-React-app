const HandleEdges=(props)=>{
    const edges=props.edges;
    return(
        <>
            {edges.map(edge=>(
                // <p>Hrana [{edge.startId},{edge.endId}] Id: {edge.id} Znaky:{edge.symbols}
                // <button className="btn btn-primary btn-sm" onClick={()=>props.onRemoveEdge(edge.id)}>-</button>
                // <input type="text" onChange={(e)=>props.handleEdgeChange(edge.id,e.target.value)}/>
                // </p>
                <div>
                    <table>
                        <tr>
                            <td>{edge.id}</td>
                            <td>[{edge.startId}, {edge.endId}]</td>
                            <td>{edge.symbols}</td>
                            <td><input type="search" onChange={(e)=>props.handleEdgeChange(edge.id,e.target.value)}/> &emsp;
                                <button className="btn btn-primary btn-sm" onClick={()=>props.onRemoveEdge(edge.id)}>-</button>
                            </td>
                        </tr>
                    </table>
                </div>
            ))}
            <br />
            <div>&emsp;<button className="btn btn-primary btn-sm" type = "submit">Nova Hrana</button> &emsp;
                <input type="search" placeholder ="Id, Start-End, Symbol" name = "Nova Hrana" onChange={(e)=>props.handleNewEdge(e.target.value)}/>
                
            </div>

        </>
    );
}
export default HandleEdges

