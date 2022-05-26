const HandlePoints=(props)=>{
    const points=props.points;
    return (
        <>
            {points.map(point=>(
                <p>-Vrchol {point.id}: [{point.x}, {point.y}] Stav: {point.state}  
                <button className="btn btn-primary btn-sm" onClick={()=>props.onRemovePoint(point.id)}>-</button>
                </p>
            ))} 
            <form >
                <label>Pridany vrchol:
                    <input 
                        type="text" 
                        onChange={props.handlePointChange}
                    />
                </label>
            </form> 
        </>
    );
}

export default HandlePoints