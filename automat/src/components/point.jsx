const Point=(props)=>{
    const x=props.x;
    const y=props.y
    const id=props.id;

    const radius= 20;
    const h=10;
    //  ???
    if(id===0){
        //initial state
        return <> 
            <line x1={x-3*radius} y1={y} x2={x-radius} y2={y} stroke="black" strokeWidth="2"/>
            <polygon 
                points={[
                    [x-radius,y],
                    [x-radius-h,y+h],
                    [x-radius-h,y-h]
                ]}
                stroke="black" fill="black" strokeWidth="2"
            />
            <circle cx= {x} cy={y} r={radius} stroke="black" strokeWidth="2" fill="white"></circle>
            <circle cx= {x} cy={y} r={radius-5} stroke="black" strokeWidth="2" fill="white"></circle>
            <text x={x-5} y={y+5} fill="red">{id}</text>
        </>
    }
    else{
        //regular state
        return <> 
            <circle cx= {x} cy={y} r={radius} stroke="black" strokeWidth="2" fill="white"></circle>
            <text x={x-5} y={y+5} fill="red">{id}</text>
        </>
    }
}

export default Point
