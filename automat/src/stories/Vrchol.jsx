export const Vrchol =({position,index}) =>{
    const polomerVrcholu= 20;
    return <svg width="900" height="600"> 
        <circle cx= {position[0]} cy={position[1]} r={polomerVrcholu} stroke="black" strokeWidth="2" fill="white"></circle>
        <text x={position[0]-5} y={position[1]+5} fill="red">{index}</text>
    </svg>
};

