const HandleEdge=(props)=>{
    return(
        <>
            <form>
                <label>Hrana:
                    <input 
                        type="text" 
                        onChange={props.handleEdgeChange}
                    />
                </label>
            </form>                
        </>
    );
}

const HandleEdges=(props)=>{
    let formy=[];
    for(let i=0;i<props.numberOfEdges;i++){
        formy.push(1);
    }
    return(
        <>
            {formy.map(form=>(<HandleEdge handleEdgeChange={props.handleEdgeChange}/>))}
            {/*Nejde onClick jeli ={()=>props.addHranu}*/}
            <button className="btn btn-primary btn-sm" onClick={()=>props.addNewEdge()}>Novou Hranu</button>
        </>
    );
}
export default HandleEdges