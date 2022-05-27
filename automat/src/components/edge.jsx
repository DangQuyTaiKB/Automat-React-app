const Edge=(props)=>{
    const A=props.startPoint;
    const B=props.endPoint; 
    const symbols=props.symbols;
    //velikost kruhu
    const radius=20; 
    //vyska trojuhelnik sipky
    const h=5; 
    //vzdalenost AB
    const lengthAB = Math.sqrt((A.x-B.x)**2+(A.y-B.y)**2);
    
    if(lengthAB!==0){ 
        const x1=A.x+(B.x-A.x)*(radius/lengthAB);
        const y1=A.y+(B.y-A.y)*(radius/lengthAB);
        const x2=B.x-(B.x-A.x)*(radius/lengthAB); 
        const y2=B.y-(B.y-A.y)*(radius/lengthAB);

        //vykresleni trojuhelniku sipky
        const x3=B.x-(B.x-A.x)*((radius+h)/lengthAB);
        const y3=B.y-(B.y-A.y)*((radius+h)/lengthAB);  
        
        const x4=x3+(B.y-A.y)*(h/lengthAB);
        const y4=y3-(B.x-A.x)*(h/lengthAB); 
        const x5=x3-(B.y-A.y)*(h/lengthAB);  
        const y5=y3+(B.x-A.x)*(h/lengthAB);

        //regular line
        // kiểm tra xem nó có đường thẳng chưa, nếu có thì vẽ thêm đường cong
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
            <text x={(A.x+B.x)/2} y={(A.y+B.y)/2-2} fill="red">{symbols}</text>
        </>
    }
    else{
        // chỗ này không để đường thẳng cắt elipse
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
            <text x={A.x-radius} y={A.y-2*radius-2} fill="red">{symbols}</text> 
        </>
    }
}
export default Edge 
