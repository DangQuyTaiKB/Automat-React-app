const HandlePoints=(props)=>{
    
    const points=props.points;
    return (
        <>
            <b>Vrcholy:</b>
            <table  className="table table-primary table-hover table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>[x, y]</th>
                        <th>Zmenit<small> (Stav a Vyznam nejsou povinne)</small></th>
                        <th>Vymaz</th>
                    </tr>
                </thead>
                <tbody>
                    {points.map(point=>(
                        <tr>
                            <td>{point.id}</td>
                            <td>[{point.x}, {point.y}]</td>
                            <td><input type="search" placeholder ="X Y Stav Vyznam" onChange={(e)=>props.handlePointChange(point,e.target.value)}/> </td>
                            <td><button className="btn btn-primary btn-sm" onClick={()=>props.onRemovePoint(point.id)}> - </button></td>
                        </tr>       
                    ))}
                </tbody>
            </table>
            <label>Novy Vrchol:</label>
            <select onChange={(e)=>{props.handleNewPoint(e.target.value)}}>
                <option value="commonState">Bezny stav</option>
                <option value="initialState">Pocatecni stav</option>
                <option value="finalState">Koncovy stav</option>
            </select>
        </>
    );

}
export default HandlePoints