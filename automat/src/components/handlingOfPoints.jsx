const HandlePoints=(props)=>{
    const points=props.points;
    return (
        <>
            <b>Vrcholy:</b>
            <table  className="table table-primary">
                <tr>
                    <th>ID</th>
                    <th>[x, y]</th>
                    {/* <th >Stav</th> */}
                    <th>Zmenit</th>
                    <th>Vymaz</th>
                </tr>
            
            {points.map(point=>(
                <tr>
                    <td>{point.id}</td>
                    <td>[{point.x}, {point.y}]</td>
                    {/* <td>{point.state}</td> */}
                    <td><input type="text" onChange={(e)=>props.handlePointChange(point.id,e.target.value)}/> </td>
                    <td><button className="btn  btn-sm" onClick={()=>props.onRemovePoint(point.id)}> - </button></td>
                </tr>       
            ))}
            </table>
            <br />
            &emsp;<button className="btn btn-primary btn-sm" onClick={props.handleNewPoint}>Novy Vrchol</button>
        </>
    );

}
export default HandlePoints