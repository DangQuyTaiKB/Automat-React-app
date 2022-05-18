import Point from'./point'

const Points=(props)=>{
    const points=props.points
    return (
        <>
            {points.map((point,index)=>(<Point index={index} x={point.x} y={point.y}/>))}
        </>
    );
}

export default Points