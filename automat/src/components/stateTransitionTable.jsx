const StateTransitionTable=(props)=>{
    const graphData=props.graphData;
    const EndPoint=(startId,symbol)=>{
        let result="";
        let isExisted=false;
        for(let i=0;i<graphData.edges.length;++i){
            if(graphData.edges[i].startId===startId&&graphData.edges[i].symbols.split(",").includes(symbol)){
                result= result+graphData.edges[i].endId+",";
                isExisted=true;
            }
        }
        if(!isExisted){
            result=NaN;
        }
        return result;
    }
    const PointId=(point)=>{
        if(point.label==='initialState'){
            return "->"+point.id;
        }
        if(point.label==='finalState'){
            return "<-"+point.id;
        }
        if(point.label==='commonState'){
            return point.id;
        }
    }
    return(
        <>
            <b>Prechodova Tabulka</b>
            <table className="table table-primary">
                <tr>
                    <th>Stavy\Znaky</th>
                    {graphData.graphInf.symbols.map(symbol=>(
                        <th>{symbol.name}</th>
                    ))}
                </tr>
                {graphData.points.map(point=>(
                    <tr>
                        <td>{PointId(point)}</td>
                        {graphData.graphInf.symbols.map(symbol=>(
                            <td>{EndPoint(point.id,symbol.name)}</td>
                        ))}
                    </tr>
                ))}
            </table>
        </>
    );
}

export default StateTransitionTable