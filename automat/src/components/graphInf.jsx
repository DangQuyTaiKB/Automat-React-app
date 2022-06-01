const GraphInf=(props)=>{
    const points=props.points;
    const graphInf=props.graphInf;
    const x=800;
    let y=50;
    const distance=20;
    return (
        <>
            <text x={x} y={y} fill="red">Automat: {graphInf.name}</text>
            {points.map(point=>{
                y+=distance;
                return <text x={x} y={y} fill="red">{point.label} {point.id}: {point.state}</text>
            })}
            {graphInf.symbols.map(symbol=>{
                y+=distance;
                return <text x={x} y={y} fill="red">Symbol {symbol.name}: {symbol.label}</text>
            })}
        </>
    );
}
export default GraphInf