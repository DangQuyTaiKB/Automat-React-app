import Point from'./point'

const Points=(props)=>{
    const points=props.points
    return (
        <>
            {/*vykresleni bodu*/}
            {points.map(point=>(<Point id={point.id} x={point.x} y={point.y}/>))}
        </>
    );
}

export default Points