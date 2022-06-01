const StateTransitionTable=(props)=>{
    const graphData=props.graphData;
    const EndPoint=(startId,symbol)=>{
        let result="";
        let isExisted=false;
        for(let i=0;i<graphData.edges.length;++i){
            if(graphData.edges[i].startId===startId&&graphData.edges[i].symbols.split(",").includes(symbol)){
                result= result+graphData.points.filter(point=>(point.id===graphData.edges[i].endId))[0].state+",";
                isExisted=true;
            }
        }
        if(!isExisted){
            result="Prazdna mnozina";
        }
        return result;
    }
    const State=(point)=>{
        if(point.label==='initialState'){
            return "->"+point.state;
        }
        if(point.label==='finalState'){
            return "<-"+point.state;
        }
        if(point.label==='commonState'){
            return point.state;
        }
    }
    return(
        <>
            <b>Prechodova Tabulka</b>
            <table className="table table-info table-bordered">
                <thead>
                    <tr>
                        <th>Stavy\Znaky</th>
                        {graphData.graphInf.symbols.map(symbol=>(
                            <th>{symbol.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {graphData.points.map(point=>(
                        <tr>
                            <td>{State(point)}</td>
                            {graphData.graphInf.symbols.map(symbol=>(
                                <td>{EndPoint(point.id,symbol.name)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default StateTransitionTable