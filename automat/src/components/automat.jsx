import React, {useState} from 'react';

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
            {'id':1,'startId':1,'endId':2,'symbols':'b'}
        ]
    };
    const [graphData,setGraphData]=useState(initialData);
    const [textSVG, setTextSVG]=useState();

    const OnRemovePoint= (removedId)=>{
        const newGraph={
            'points': graphData.points.filter(point=>(point.id!==removedId)),
            'edges': graphData.edges.filter(edge=>((edge.startId!==removedId)&&(edge.endId!==removedId)))
        }
        setGraphData(newGraph);
    }
    const HandleNewPoint=()=>{
        const id=(graphData.points.length!==0)?graphData.points[graphData.points.length-1].id+1 :0;
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
        //Pripadu, ze index,py,px udavajici prazdnych retezcu, neprijimame
        const px=(input.split(" ")[0]!=="")?Number(input.split(" ")[0]):-1;
        const py=(input.split(" ")[1]!=="")?Number(input.split(" ")[1]):-1;
        //Pokud jeste neexistuji-li druhy a treti prvek po rozdeleni(split)
        //pak, ze tyto udavajici undefined, potom vrati NaN (z duvodu Number())
        //Nasledujici podminky resi vsechny tyto problemy
        if(px>=0 && py>=0 && px<1000 && py<600){
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
    
    const OnRemoveEdge=(startId,endId)=>{
        const newGraph={
            'points':[...graphData.points],
            'edges':graphData.edges.filter(edge=>((edge.startId!==startId)||(edge.endId!==endId)))
        }
        setGraphData(newGraph);
    }
    const HandleNewEdge=(input)=>{
        const id=(input.split(" ")[0]!=="")?Number(input.split(" ")[0]):NaN;
        const startPointIndex= (input.split(" ")[1]!=="")?Number(input.split(" ")[1]):-1;
        const endPointIndex= (input.split(" ")[2]!=="")?Number(input.split(" ")[2]):-1;
        //i known it. When 2nd, 3rd,... part of input does not exist, it returns 
        const symbols=(input.split(" ")[3]!=="")?input.split(" ")[3]:undefined;
        console.log(symbols);
        if(!isNaN(id)&&startPointIndex>=0&&endPointIndex>=0&& symbols!==undefined){
            let isExistedEdge=false;
            //const symbols=input.split(" ")[3];
            for(let i=0;i<graphData.edges.length;i++){
                if(id===graphData.edges[i].id){
                    isExistedEdge=true;
                }
                if(startPointIndex===graphData.edges[i].startId&&endPointIndex===graphData.edges[i].endId){
                    isExistedEdge=true;
                }
            }
            if(!isExistedEdge){
                const newEdge={'id':id,'startId': startPointIndex,'endId':endPointIndex,'symbols':symbols};
                const newGraph={
                    'points':[...graphData.points],
                    'dataOfEdges':[...graphData.edges,newEdge]
                };
                setGraphData(newGraph);
            }
        }
    }
    const HandleEdgeChange=(edgeId, input)=>{
        const startPointIndex= (input.split(" ")[0]!=="")?Number(input.split(" ")[0]):-1;
        const endPointIndex= (input.split(" ")[1]!=="")?Number(input.split(" ")[1]):-1;
        
        if(startPointIndex>=0&&endPointIndex>=0){
            const symbols=input.split(" ")[2];
            const newEdge={'id':edgeId,'startId': startPointIndex,'endId':endPointIndex,'symbols':symbols};
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

    function exportSVG(e){
        console.log(document.getElementById("svg"));
        setTextSVG(document.getElementById("svg").innerHTML)
    }

    function importSVG(){
        // document.getElementById("svg").innerHTML = document.getElementById("text-svg").value;
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
                    <HandlePoints 
                        points={graphData.points} 
                        handlePointChange={HandlePointChange}
                        onRemovePoint={OnRemovePoint}
                        handleNewPoint={HandleNewPoint}
                    />
                    <br/>
                    <b>Hrany:</b>
                    <HandleEdges 
                        edges= {graphData.edges}
                        handleEdgeChange={HandleEdgeChange} 
                        onRemoveEdge={OnRemoveEdge}
                        handleNewEdge={HandleNewEdge}
                    />
                </div>
                <div className="col" id ="svg">
                    <Graph id="automat" graphData={graphData}/>
                </div>
                <button onClick={exportSVG}>Export svg</button>
                <button onClick={importSVG}>Import svg</button>
                <textarea name="" id="text-svg" cols="30" rows="10" value={textSVG} onChange={e => {setTextSVG(e.target.value)}}></textarea>
            </div>
        </>
    );
}

export default Automat