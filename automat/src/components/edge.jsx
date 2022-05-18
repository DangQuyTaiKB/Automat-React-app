const Edge=(props)=>{
    const a=props.startPoint;
    const b=props.endPoint;
    const signaly=props.signaly;

    if(a===null&&b==null){
        return alert("Error: Invalid edge!");
    }
    else{
        const radius=20;
        const h=10; //vyska trojuhelnik sipky
        const delka = Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2);
        if(delka!==0){
            const x1=a.x+(b.x-a.x)*(radius/delka);
            const y1=a.y+(b.y-a.y)*(radius/delka);
            const x2=b.x-(b.x-a.x)*(radius/delka);
            const y2=b.y-(b.y-a.y)*(radius/delka);

            const x3=b.x-(b.x-a.x)*((radius+h)/delka);
            const y3=b.y-(b.y-a.y)*((radius+h)/delka);
            
            const x4=x3+(b.y-a.y)*(h/delka);
            const y4=y3-(b.x-a.x)*(h/delka);
            const x5=x3-(b.y-a.y)*(h/delka);
            const y5=y3+(b.x-a.x)*(h/delka);
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
                <text x={(a.x+b.x)/2} y={(a.y+b.y)/2} fill="red">{signaly}</text>
            </>
        }
        else{
            return<>
                <ellipse cx={a.x} cy={a.y-radius} rx={2*radius} ry={radius} stroke="black" stroke-width="2" fill="white"/>
                <polygon 
                    points={[
                        [a.x,a.y-2*radius+h],
                        [a.x,a.y-2*radius-h],
                        [a.x+h,a.y-2*radius]
                    ]} 
                    stroke= "black" strokeWidth="2" fill="black"
                />
                <text x={a.x-radius} y={a.y-2*radius} fill="red">{signaly}</text>
            </>
        }
    }
}
export default Edge