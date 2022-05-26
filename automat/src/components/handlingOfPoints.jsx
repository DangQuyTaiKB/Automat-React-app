const HandlePoints=(props)=>{
    const points=props.points;
    return (
        <>
            {points.map(point=>(
                <p>-Vrchol {point.id}: [{point.x}, {point.y}] Stav: {point.state}  
                <button className="btn btn-primary btn-sm" onClick={()=>props.onRemovePoint(point.id)}>-</button>
                <input type="text" onChange={(e)=>props.handlePointChange(point.id,e.target.value)}/>
                </p>
            ))} 
            <button className="btn btn-primary btn-sm" onClick={props.handleNewPoint}>Novy Vrchol</button>
        </>
    );
}

export default HandlePoints