const HandleEdges=(props)=>{
    const edges=props.edges;
    return(
        <>
            <b>Hrany:</b>
            <table className="table table-primary">
                <tr>
                    <th>ID</th>
                    <th>[S,E]</th>
                    <th>Znaky</th>
                    <th>Zmenit</th>
                    <th>Vymaz</th>
                </tr>
            {edges.map(edge=>(
                <tr>
                    <td>{edge.id}</td>
                    <td>[{edge.startId}, {edge.endId}]</td>
                    <td>{edge.symbols}</td>
                    <td><input type="search" placeholder ="Start End Symbol" onChange={(e)=>props.handleEdgeChange(edge.id,e.target.value)}/></td>
                    <td><button className="btn btn-sm" onClick={()=>props.onRemoveEdge(edge.id)}>-</button></td>
                </tr>
            ))}
            </table>
            <br />
            <div>&emsp;<button className="btn btn-primary btn-sm" type = "submit">Nova Hrana</button> &emsp;
                <input type="search" placeholder ="Id Start End Symbol" name = "Nova Hrana" onChange={(e)=>props.handleNewEdge(e.target.value)}/>
            </div>
        </>
    );
}
export default HandleEdges

