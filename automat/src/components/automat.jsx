import React, {useState} from 'react';
//npm install file-saver
import {saveAs} from 'file-saver';

import Graph from './graph'
import HandlePoints from './handlingOfPoints'
import HandleEdges from './handlingOfEdges'

function Automat(){
    const initialData={
        'points':[
            {'id':0,'x':300,'y':400, 'state':'A'},
            {'id':1,'x':600,'y':400, 'state':'B'},
            {'id':2,'x':600,'y':100, 'state':'C'},
            {'id':3,'x':300,'y':100, 'state':'D'},
        ],
        'edges':[
            {'id': 0,'startId':0,'endId':1,'symbols':'a'},
            {'id':1,'startId':1,'endId':2,'symbols':'b'},
            {'id':2,'startId':2,'endId':1,'symbols':'b'},
            {'id':3,'startId':3,'endId':3,'symbols':'b'}
        ]
    };
    const [graphData,setGraphData]=useState(initialData);
    // const [textSVG, setTextSVG]=useState("");
    const [files,setFiles]= useState("");

    const OnRemovePoint= (removedId)=>{
        const newGraph={
            'points': graphData.points.filter(point=>(point.id!==removedId)),
            'edges': graphData.edges.filter(edge=>((edge.startId!==removedId)&&(edge.endId!==removedId)))
        }
        setGraphData(newGraph);
    }
    const HandleNewPoint=()=>{
        const id=graphData.points[graphData.points.length-1].id+1;
        const px=200;
        const py=200;
        const newPoint={'id':id,'x':px,'y':py,'state':""};
        const newGraph={
            'points':[...graphData.points,newPoint],
            'edges':[...graphData.edges]
        };
        setGraphData(newGraph);
    }
    const HandlePointChange=(pointId, input)=>{
        const px=(input.split(" ")[0]!=="")?Number(input.split(" ")[0]):NaN;
        const py=(input.split(" ")[1]!=="")?Number(input.split(" ")[1]):NaN;
        if(!isNaN(px)&&!isNaN(py)){
            const state=input.split(" ")[2];
            const newPoint={'id':pointId,'x':px,'y':py,'state':state};
            const newGraph={
                'points':[...graphData.points],
                'edges':[...graphData.edges]
            };
            for(let i=0;i<newGraph.points.length;i++){
                if(pointId===newGraph.points[i].id){
                    newGraph.points[i]=newPoint;
                }
            }
            setGraphData(newGraph);
        }
    }
    
    const OnRemoveEdge=(removedId)=>{
        const newGraph={
            'points':[...graphData.points],
            'edges':graphData.edges.filter(edge=>((edge.id!==removedId)))
        }
        setGraphData(newGraph);
    }
    const HandleNewEdge=(input)=>{
        const id=(input.split(" ")[0]!=="")?Number(input.split(" ")[0]):NaN;
        const startIndex= (input.split(" ")[1]!=="")?Number(input.split(" ")[1]):NaN;
        const endIndex= (input.split(" ")[2]!=="")?Number(input.split(" ")[2]):NaN;
        const symbols=(input.split(" ")[3]!=="")?input.split(" ")[3]:undefined;
        
        if(!isNaN(id)&&!isNaN(startIndex)&&!isNaN(endIndex)&& symbols!==undefined
        &&graphData.points.filter(point=>(point.id===startIndex)).length>0
        &&graphData.points.filter(point=>(point.id===endIndex)).length>0
        ){
            const newEdge={'id':id,'startId': startIndex,'endId':endIndex,'symbols':symbols};
            const newGraph={
                'points':[...graphData.points],
                'edges':[...graphData.edges]
            };
            if((graphData.edges.filter(edge=>(edge.id===id)).length>0)
            ||(graphData.edges.filter(edge=>(edge.startId===startIndex&&edge.endId===endIndex)).length>0)){
                for(let i=0;i<newGraph.edges.length;i++){
                    if(id===newGraph.edges[i].id){
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
    const HandleEdgeChange=(edgeId, input)=>{
        const startIndex= (input.split(" ")[0]!=="")?Number(input.split(" ")[0]):NaN;
        const endIndex= (input.split(" ")[1]!=="")?Number(input.split(" ")[1]):NaN;
        
        if(!isNaN(startIndex)&&!isNaN(endIndex)
        &&graphData.points.filter(point=>(point.id===startIndex)).length>0
        &&graphData.points.filter(point=>(point.id===endIndex)).length>0){
            const symbols=input.split(" ")[2];
            const newEdge={'id':edgeId,'startId': startIndex,'endId':endIndex,'symbols':symbols};
            const newGraph={
                'points':[...graphData.points],
                'edges':[...graphData.edges]
            };
            for(let i=0;i<newGraph.edges.length;i++){
                if(edgeId===newGraph.edges[i].id){ 
                    newGraph.edges[i]=newEdge;
                }
            }
            setGraphData(newGraph);
        }
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
            <div className="container-fluid p-2 bg-primary text-white">
                <h1 className="text-center">My Automat Graph Editor</h1>
            </div>
            <div className ="row">
                <div className="col">
                    <br/>
                    <b>Vrcholy:</b>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>[x, y]</th>
                            <th >Stav</th>
                            <th>Zmenit</th>
                            <th>Vymaz</th>
                        </tr>
                    </table>
                    <HandlePoints 
                        points={graphData.points} 
                        handlePointChange={HandlePointChange}
                        onRemovePoint={OnRemovePoint}
                        handleNewPoint={HandleNewPoint}
                    />
                    <br/>
                    <b>Hrany:</b>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>[S,E]</th>
                            <th>Znaky</th>
                            <th>Zmenit</th>
                            <th>Vymaz</th>
                        </tr>
                    </table>
                    <HandleEdges 
                        edges= {graphData.edges}
                        handleEdgeChange={HandleEdgeChange} 
                        onRemoveEdge={OnRemoveEdge}
                        handleNewEdge={HandleNewEdge}
                    />
                    <br />
                    <button className='btn btn-primary btn-sm' onClick={()=>Download(document.getElementById("svg").innerHTML)}>Download</button>
                    <br />
                    <br />
                    <div>Import .json file: 
                        <input type="file" accept=".json" onChange={ImportData}/>
                    </div>
                </div>
                <div className="col" id ="svg">
                    <Graph graphData={graphData}/>
                </div>
                {/* <button onClick={exportSVG}>Export svg</button>
                <textarea name="" id="text-svg" cols="30" rows="10" value={textSVG} onChange={e => {setTextSVG(e.target.value)}}></textarea> */}
            </div>
        </>
    );
}

export default Automat