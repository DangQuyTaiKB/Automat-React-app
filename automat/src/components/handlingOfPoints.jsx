const HandlePoints=(props)=>{
    const points=props.points;
    return (
        <>
         {points.map(point=>(
                <div>
                    <table>
                        <tr>
                            <td>{point.id}</td>
                            <td>[{point.x}, {point.y}]</td>
                            <td>{point.state}</td>
                            <td><input type="text" onChange={(e)=>props.handlePointChange(point.id,e.target.value)}/> &emsp;
                                <button className="btn btn-primary btn-sm" onClick={()=>props.onRemovePoint(point.id)}> - </button></td>
                        </tr>       
                    </table>
                </div>
            ))}
            <br />
            &emsp;<button className="btn btn-primary btn-sm" onClick={props.handleNewPoint}>Novy Vrchol</button>
        </>
    );

}
export default HandlePoints