const Edge=(props)=>{
    const points=props.points;
    const startPoint= points.filter(point=>(point.id===props.startId))[0];
    const endPoint= points.filter(point=>(point.id===props.endId))[0];
    const label=props.label;
    const symbols=props.symbols;

    const A=startPoint;
    const B=endPoint;
    const radius=20;
    const h=10; //vyska trojuhelnik sipky
    const lengthAB = Math.sqrt((A.x-B.x)**2+(A.y-B.y)**2);
    if(label==='obecna'){
        const x1=A.x+(B.x-A.x)*(radius/lengthAB);
        const y1=A.y+(B.y-A.y)*(radius/lengthAB);
        const x2=B.x-(B.x-A.x)*(radius/lengthAB);
        const y2=B.y-(B.y-A.y)*(radius/lengthAB);

        const x3=B.x-(B.x-A.x)*((radius+h)/lengthAB);
        const y3=B.y-(B.y-A.y)*((radius+h)/lengthAB);
        
        const x4=x3+(B.y-A.y)*(h/lengthAB);
        const y4=y3-(B.x-A.x)*(h/lengthAB);
        const x5=x3-(B.y-A.y)*(h/lengthAB);
        const y5=y3+(B.x-A.x)*(h/lengthAB);
        //regular line
        return <>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth="2"/>
            <polygon 
                points={[
                    [x2,y2],
                    [x4,y4],
                    [x5,y5]
                ]}
                stroke="black" fill="black" strokeWidth="2"
            />
            <text x={(A.x+B.x)/2} y={(A.y+B.y)/2} fill="red">{symbols}</text>
        </>
    }
    if(label=='smycka'){
        //loop
        return<>
            <ellipse cx={A.x} cy={A.y-radius} rx={2*radius} ry={radius} stroke="black" stroke-width="2" fill="white"/>
            <polygon 
                points={[
                    [A.x,A.y-2*radius+h],
                    [A.x,A.y-2*radius-h],
                    [A.x+h,A.y-2*radius]
                ]} 
                stroke= "black" strokeWidth="2" fill="black"
            />
            <text x={A.x-radius} y={A.y-2*radius} fill="red">{symbols}</text>
        </>
    }
    //if(label==='krivka')
}
export default Edge