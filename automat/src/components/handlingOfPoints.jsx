const HandlePoint = (props) => {
    return(
        <>
            <pre> - Vrchol {props.index}: [{props.x}, {props.y}]</pre>
        </>
    );
}

const HandlePoints=(props)=>{
    const points=props.points;
    let formy=[];
    for(let i=0;i<props.numberOfChange;i++){
        formy.push(1);
    }
    return (
        <>
            {points.map((point,index)=> (
                <HandlePoint 
                    index={index} 
                    x={point.x} 
                    y={point.y}
                />
            ))} 
            {formy.map(form=>(
                <form >
                    <label>Zmen pozice vrcholu:
                        <input 
                            type="text" 
                            onChange={props.handlePointChange}
                        />
                    </label>
                </form> 
            ))}
            <button className="btn btn-primary btn-sm" onClick={()=>props.addChange()}>Zmen pozice</button>
        </>
    );
}
export default HandlePoints