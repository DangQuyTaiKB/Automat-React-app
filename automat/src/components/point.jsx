const Point=(props)=>{
    const x=props.x;
    const y=props.y
    const index=props.index;

    const radius= 20;
    const h=10;
    if(index===0){
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
            <text x={x-5} y={y+5} fill="red">{index}</text>
        </>
    }
    else{
        return <> 
            <circle cx= {x} cy={y} r={radius} stroke="black" strokeWidth="2" fill="white"></circle>
            <text x={x-5} y={y+5} fill="red">{index}</text>
        </>
    }
}

export default Point
