import React, {useState} from 'react';
//npm install file-saver
import {saveAs} from 'file-saver';

import Graph from '../components/automat/graph'
import WordTest from '../components/automat/wordTest';
import StateTransitionTable from '../components/automat/stateTransitionTable';
import Handle from '../components/automat/handling';


function Automat(){
    const initialData={
        'points':[
            {'id':0,'x':300,'y':400, 'state':'q0', 'label':'initialState', 'meaning':'meaning of q0'},
            {'id':1,'x':600,'y':400, 'state':'q1', 'label':'finalState','meaning':'meaning of q1'},
        ],
        'edges':[
            {'id':0,'startId':0,'endId':1, 'symbols':'a'}
        ],
        "graphInf":{
            "name": "Example",
            "symbols":[
                {'id':0,'name':'a','label':'meaning of a'}
            ]
        }
    };
    const [graphData,setGraphData]=useState(initialData);
    // const [textSVG, setTextSVG]=useState("");
    const [files,setFiles]= useState("");

    const OnRemovePoint= (removedId)=>{
        const newGraph={
            'points': graphData.points.filter(point=>(point.id!==removedId)),
            'edges': graphData.edges.filter(edge=>((edge.startId!==removedId)&&(edge.endId!==removedId))),
            'graphInf':{...graphData.graphInf}
        }
        setGraphData(newGraph);
    }
    const OnRemoveEdge=(removedId)=>{
        const newGraph={
            'points':[...graphData.points],
            'edges':graphData.edges.filter(edge=>(edge.id!==removedId)),
            'graphInf':{...graphData.graphInf}
        }
        setGraphData(newGraph);
    }
    const OnRemoveSymbol=(removedId)=>{
        const newGraph={
            'points':[...graphData.points],
            'edges':[...graphData.edges],
            'graphInf':{
                "name":graphData.graphInf.name,
                "symbols":graphData.graphInf.symbols.filter(symbol=>(symbol.id!==removedId))
            }
        }
        setGraphData(newGraph);
    }
   
    const HandlePointChange=(p_point, input)=>{
        const px=Number(input.split(" ")[0]);
        const py=Number(input.split(" ")[1]);
        if(!isNaN(px)&&!isNaN(py)&&px!==""&&py!==""){
            const state=input.split(" ")[2];
            const meaning=input.split(" ")[3];
            const newPoint={'id':p_point.id,'x':px,'y':py,'state':state,'label':p_point.label,'meaning':meaning};
            const newGraph={
                'points':[...graphData.points],
                'edges':[...graphData.edges],
                'graphInf':{...graphData.graphInf}
            };
            for(let i=0;i<newGraph.points.length;i++){
                if(p_point.id===newGraph.points[i].id){
                    newGraph.points[i]=newPoint;
                }
            }
            setGraphData(newGraph);
        }
    }
    const HandleEdgeChange=(edgeId, input)=>{
        const startId= Number(input.split(" ")[0]);
        const endId= Number(input.split(" ")[1]);
        const symbols=input.split(" ")[2];
        if(!isNaN(startId)&&!isNaN(endId)&& symbols!==undefined
        &&startId!==""&&endId!==""&&symbols!==""
        &&graphData.points.filter(point=>(point.id===startId)).length>0
        &&graphData.points.filter(point=>(point.id===endId)).length>0
        ){
            const newEdge={'id':edgeId,'startId': startId,'endId':endId,'symbols':symbols};
            const newGraph={
                'points':[...graphData.points],
                'edges':[...graphData.edges],
                'graphInf':{...graphData.graphInf}
            };
            //Pokud změníme hranu, kde již existuje dvojice čísel [S, E], změna nejde.
            if(graphData.edges.filter(edge=>(edge.startId===startId&&edge.endId===endId)).length===0){
                for(let i=0;i<newGraph.edges.length;i++){
                    if(edgeId===newGraph.edges[i].id){ 
                        newGraph.edges[i]=newEdge;
                    }
                }
                setGraphData(newGraph);
            }
        }
    }
    const HandleSymbolChange=(symbolId,input)=>{
        const symbolName=input.split(" ")[0];
        if(symbolName!==undefined&&symbolName!==""){
            const label=input.split(" ")[1];
            const newSymbol={"id":symbolId,"name":symbolName,"label":label};
            const newGraph={
                'points':[...graphData.points],
                'edges':[...graphData.edges],
                'graphInf':{...graphData.graphInf}
            };
            //I cant use include, indexOf with list of dictionary
            const otherSymbols=newGraph.graphInf.symbols.filter(symbol=>(symbol.id!==symbolId));
            //Pokud změníme symbol, jehož název již existuje, změna nejde.
            if(otherSymbols.filter(symbol=>(symbol.name===symbolName)).length===0){
                for(let i=0;i<newGraph.graphInf.symbols.length;i++){
                    if(symbolId===newGraph.graphInf.symbols[i].id){
                        newGraph.graphInf.symbols[i]=newSymbol;
                    }
                }
            }
            setGraphData(newGraph);
        }
    }

    const HandleNewPoint=(label)=>{
        let id=0;
        if(graphData.points.length!==0){
            id=graphData.points[graphData.points.length-1].id+1;
        }
        const px=200;
        const py=200;
        const newPoint={'id':id,'x':px,'y':py,'state':"",'label':label,'meaning':''};
        const newGraph={
            'points':[...graphData.points], //nefunguje [...gr,newPoint]
            'edges':[...graphData.edges],
            'graphInf':{...graphData.graphInf}
        };
        newGraph.points.push(newPoint);
        setGraphData(newGraph);
    }
    const HandleNewEdge=(input)=>{
        let id=0;
        if(graphData.edges.length!==0){
            id=graphData.edges[graphData.edges.length-1].id+1;
        }
        const startId= Number(input.split(" ")[0]);
        const endId= Number(input.split(" ")[1]);
        const symbols=input.split(" ")[2];
        
        if(!isNaN(startId)&&!isNaN(endId)&& symbols!==undefined
        &&startId!==""&&endId!==""&&symbols!==""
        //Hran je neplatna, kdyz startId nebo endId neexistuje.
        &&graphData.points.filter(point=>(point.id===startId)).length>0
        &&graphData.points.filter(point=>(point.id===endId)).length>0
        ){
            const newEdge={'id':id,'startId': startId,'endId':endId,'symbols':symbols};
            const newGraph={
                'points':[...graphData.points],
                'edges':[...graphData.edges],
                'graphInf':{...graphData.graphInf}
            };
            //Pokud vytvoříte hranu, která [S, E] odpovídá stávající hraně, nahradí starou hranu.
            if(graphData.edges.filter(edge=>(edge.startId===startId&&edge.endId===endId)).length>0){
                for(let i=0;i<newGraph.edges.length;i++){
                    if(startId===newGraph.edges[i].startId&&endId===newGraph.edges[i].endId){
                        newGraph.edges[i]=newEdge;
                        break;
                    }
                }
                setGraphData(newGraph);
            }
            else{
                newGraph.edges.push(newEdge);
                setGraphData(newGraph);
            }
        }
    }
    const HandleNewSymbol=()=>{
        let id=0;
        if(graphData.graphInf.symbols.length!==0){
            id=graphData.graphInf.symbols[graphData.graphInf.symbols.length-1].id+1;
        }
        const nameOfLastSymbol=graphData.graphInf.symbols[graphData.graphInf.symbols.length-1].name
        const name=String.fromCharCode(nameOfLastSymbol.charCodeAt(0)+1);
        const newSymbol={'id':id,"name":name,'label':''};
        const newGraph={
            'points':[...graphData.points], 
            'edges':[...graphData.edges],
            'graphInf':{...graphData.graphInf}
        };
        newGraph.graphInf.symbols.push(newSymbol);
        setGraphData(newGraph);
    }
    
    const Download=(content)=>{
        const a= new Blob([content],{type:'text/plain;charset=utf-8' });
        saveAs(a,'image.html'); 
    }
    // const exportSVG=(e)=>{
    //     console.log(document.getElementById("svg")); 
    //     setTextSVG(document.getElementById("svg").innerHTML) 
    // } 
    const ImportData=(e)=>{
        const fileReader= new FileReader();
        fileReader.readAsText(e.target.files[0],"UTF-8");
        fileReader.onload = e=>{
            setFiles(e.target.result);
            // console.log(e.target.result);
            const newGraph=JSON.parse(e.target.result);
            setGraphData(newGraph);
        };
    }

    return(
        <>
            <div className ="row">
                <div className="col">
                    <br />
                    <Handle
                        graphData={graphData}

                        onRemovePoint={OnRemovePoint}
                        onRemoveEdge={OnRemoveEdge}
                        onRemoveSymbol={OnRemoveSymbol}

                        handlePointChange={HandlePointChange}
                        handleEdgeChange={HandleEdgeChange}
                        handleSymbolChange={HandleSymbolChange}

                        handleNewPoint={HandleNewPoint}
                        handleNewEdge={HandleNewEdge}
                        handleNewSymbol={HandleNewSymbol}
                    />
                </div>
                <div className="col" >
                    <br/>
                    <div id ="svg">
                        <Graph graphData={graphData}/>
                    </div>
                    <br/>
                    <WordTest graphData={graphData}/>
                    <br/>
                    <StateTransitionTable graphData={graphData}/>
                    <button className='btn btn-primary btn-lg' onClick={()=>Download(document.getElementById("svg").innerHTML)}>Download</button>
                    <br />
                    <br/>
                    <label>Import file.json: 
                        <input type="file" accept=".json" onChange={ImportData}/>
                    </label>
                </div>
                {/* <button onClick={exportSVG}>Export svg</button>
                <textarea name="" id="text-svg" cols="30" rows="10" value={textSVG} onChange={e => {setTextSVG(e.target.value)}}></textarea> */}
            </div>
        </>
    );
}

export default Automat;


