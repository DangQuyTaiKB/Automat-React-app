export const Hrana=({a,b,signaly})=>{
    const polomerVrcholu=20;
    const h=10; //vyska trojuhelnik sipky
    const delka=Math.sqrt((a[0]-b[0])**2+(a[1]-b[1])**2);
    if(delka!==0){
        const x4=(a[0]-b[0])*(polomerVrcholu/delka);
        const y4=(a[1]-b[1])*(polomerVrcholu/delka);
        const x5=(a[0]-b[0])*((polomerVrcholu+h)/delka);
        const y5=(a[1]-b[1])*((polomerVrcholu+h)/delka);
        const x3=b[0]+x5;
        const y3=b[1]+y5;
        const x6=x3+h*Math.abs(b[1]-a[1])/delka;
        const y6=y3+h*Math.abs(b[0]-a[0])/delka;
        const x7=x3-h*Math.abs(b[1]-a[1])/delka;
        const y7=y3-h*Math.abs(b[0]-a[0])/delka;
        return <svg width="900" height="600">
            <line x1={a[0]-x4} y1={a[1]-y4} x2={b[0]+x4} y2={b[1]+y4} stroke="black" strokeWidth="2"/>
            <polygon 
                points={[
                    [b[0]+x4,b[1]+y4],
                    [x6,y6],
                    [x7,y7]
                ]}
                stroke="black" fill="black" strokeWidth="2"
            />
            <text x={(a[0]+b[0])/2} y={(a[1]+b[1])/2} fill="red">{signaly}</text>
        </svg>
    }
    else{
        return<svg width="900" height="600">
            <ellipse cx={a[0]} cy={a[1]-polomerVrcholu} rx={2*polomerVrcholu} ry={polomerVrcholu} stroke="black" stroke-width="2" fill="white"/>
            <polygon 
                points={[
                    [a[0],a[1]-2*polomerVrcholu+h],
                    [a[0],a[1]-2*polomerVrcholu-h],
                    [a[0]+h,a[1]-2*polomerVrcholu]
                ]} 
                stroke= "black" strokeWidth="2" fill="black"
            />
            <text x={a[0]-polomerVrcholu} y={a[1]-2*polomerVrcholu} fill="red">{signaly}</text>
        </svg>
    }
};

