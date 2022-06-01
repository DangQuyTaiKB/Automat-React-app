const HandleSymbols=(props)=>{
    const symbols=props.symbols;
    return (
        <>
            <b>Znaky (signaly):</b>
            <table  className="table table-primary table-hover table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Znak</th>
                        <th>Vyznam</th>
                        <th>Zmenit</th>
                        <th>Vymaz</th>
                    </tr>
                </thead>
                <tbody>
                    {symbols.map(symbol=>(
                        <tr>
                            <td>{symbol.id}</td>
                            <td>{symbol.name}</td>
                            <td>{symbol.label}</td>
                            <td><input type="search" placeholder ="Znak Vyznam" onChange={(e)=>props.handleSymbolChange(symbol.id,e.target.value)}/> </td>
                            <td><button className="btn btn-primary btn-sm" onClick={()=>props.onRemoveSymbol(symbol.id)}> - </button></td>
                        </tr>       
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary btn-sm" onClick={()=>props.handleNewSymbol()}>Novy Znak</button>
        </>
    );

}
export default HandleSymbols