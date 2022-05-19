const HandleEdges=(props)=>{
    const dataOfEdges=props.dataOfEdges;
    return(
        <>
            {dataOfEdges.map(dataOfEdge=>(
                <p>Hrana [{dataOfEdge.startId},{dataOfEdge.endId}] signaly:{dataOfEdge.signaly}
                <button className="btn btn-primary btn-sm" onClick={()=>props.onRemoveEdge(dataOfEdge.startId,dataOfEdge.endId)}>-</button>
                </p>
            ))}
            {/* <form>
                <label>Pridana Hrana:
                    <input 
                        type="text" 
                        onChange={props.handleEdgeChange}
                    />
                </label>
            </form> */}
        </>
    );
}
export default HandleEdges