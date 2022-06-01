const HandleEdges=(props)=>{
    const edges=props.edges;
    //!symbols cach nhau boi dau ',' do <StateTransitionTable>
    //o ham HandleEdgeChange, symbols la bat buoc, neu k xay ra loi o <StateTransitionTable>
    return(
        <>
            <b>Hrany:</b>
            <table className="table table-primary">
                <tr>
                    <th>ID</th>
                    <th>[S,E]</th>
                    <th>Znaky</th>
                    <th>Zmenit<small> Znaky jsou oddeleny carkami</small></th>
                    <th>Vymaz</th>
                </tr>
                {edges.map(edge=>(
                    <tr>
                        <td>{edge.id}</td>
                        <td>[{edge.startId}, {edge.endId}]</td>
                        <td>{edge.symbols}</td>
                        <td><input type="search" placeholder ="StartId EndId Znaky" onChange={(e)=>props.handleEdgeChange(edge.id,e.target.value)}/></td>
                        <td><button className="btn btn-sm" onClick={()=>props.onRemoveEdge(edge.id)}>-</button></td>
                    </tr>
                ))}
            </table>
            <br />
            <div>&emsp;<button className="btn btn-primary btn-sm" type = "submit">Nova Hrana</button> &emsp;
                <input type="search" placeholder ="StartId EndId Znaky" name = "Nova Hrana" onChange={(e)=>props.handleNewEdge(e.target.value)}/>
            </div>
        </>
    );
}
export default HandleEdges

