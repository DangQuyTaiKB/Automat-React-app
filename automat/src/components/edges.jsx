import Edge from './edge'

const Edges=(props)=>{
    const edges=props.edges;
    return (
        <>
            {edges.map(edge =>(<Edge startPoint={edge[0]} endPoint={edge[1]}  signaly={edge[2]}/>))}
        </>
    );
}

export default Edges