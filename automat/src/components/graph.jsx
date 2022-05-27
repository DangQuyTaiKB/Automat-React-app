import Edges from './edges'
import Points from './points'

const Graph=(props)=>{
    const graphData=props.graphData;
    return(
        <svg width="1000" height="600">
            <polyline points="0,0 1000,0 1000,600 0,600 0,0" fill= "white" stroke="black" strokeWidth="10"/>
            <Edges 
                edges={graphData.edges}
                points={graphData.points}
            />
            <Points 
                points={graphData.points}
            />
        </svg>
    );
}

export default Graph