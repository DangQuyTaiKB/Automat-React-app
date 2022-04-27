function VratVrchol(position,index){
    const polomerVrcholu= 20;
    const h=10;
    if(index===0){
        return <> 
            <line x1={position[0]-3*polomerVrcholu} y1={position[1]} x2={position[0]-polomerVrcholu} y2={position[1]} stroke="black" strokeWidth="2"/>
            <polygon 
                points={[
                    [position[0]-polomerVrcholu,position[1]],
                    [position[0]-polomerVrcholu-h,position[1]+h],
                    [position[0]-polomerVrcholu-h,position[1]-h]
                ]}
                stroke="black" fill="black" strokeWidth="2"
            />
            <circle cx= {position[0]} cy={position[1]} r={polomerVrcholu} stroke="black" strokeWidth="2" fill="white"></circle>
            <circle cx= {position[0]} cy={position[1]} r={polomerVrcholu-5} stroke="black" strokeWidth="2" fill="white"></circle>
            <text x={position[0]-5} y={position[1]+5} fill="red">{index}</text>
        </>
    }
    else{
        return <> 
            <circle cx= {position[0]} cy={position[1]} r={polomerVrcholu} stroke="black" strokeWidth="2" fill="white"></circle>
            <text x={position[0]-5} y={position[1]+5} fill="red">{index}</text>
        </>
    }
}

export default VratVrchol
