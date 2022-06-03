const HandlePoints=(props)=>{
    
    const points=props.points;
    return (
        <>
            <b>1. Vrcholy:</b>
            <em> (Stav a Vyznam nejsou povinne)</em>
            <table  className="table table-primary table-hover table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Stav</th>
                        <th>[x, y]</th>
                        <th>Zmen</th>
                        <th>Vymaz</th>
                    </tr>
                </thead>
                <tbody>
                    {points.map(point=>(
                        <tr>
                            <td>{point.id}</td>
                            <td>{point.state}</td>
                            <td>[{point.x}, {point.y}]</td>
                            <td><input type="search" placeholder ="X Y Stav Vyznam" onChange={(e)=>props.handlePointChange(point,e.target.value)}/> </td>
                            <td><button className="btn btn-primary btn-sm" onClick={()=>props.onRemovePoint(point.id)}> - </button></td>
                        </tr>       
                    ))}
                </tbody>
            </table>
            <label>Novy Vrchol:</label>
            <select value="abc" onChange={(e)=>{props.handleNewPoint(e.target.value)}}>
                <option value="">Zvolit jaky stav</option>
                <option value="commonState">Bezny stav</option>
                <option value="initialState">Pocatecni stav</option>
                <option value="finalState">Koncovy stav</option>
            </select>
        </>
    );

}
export default HandlePoints