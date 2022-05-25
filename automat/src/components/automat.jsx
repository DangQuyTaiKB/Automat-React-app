import React, {useState} from 'react';
import {saveAs} from 'file-saver';
//import * as svg from 'save-svg-as-png'


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
        'dataOfEdges':[
            {'startId':0,'endId':1,'symbols':'a'},
            {'startId':1,'endId':2,'symbols':'b'}
        ]
    };
    const [graphData,setGraphData]=useState(initialData);
    
    const OnRemovePoint= (removedId)=>{
        const newGraph={
            'points': graphData.points.filter(point=>(point.id!==removedId)),
            'dataOfEdges': graphData.dataOfEdges.filter(dataOfEdge=>((dataOfEdge.startId!==removedId)&&(dataOfEdge.endId!==removedId)))
        }
        setGraphData(newGraph);
    }
    const OnRemoveEdge=(startId,endId)=>{
        const newGraph={
            'points':[...graphData.points],
            'dataOfEdges':graphData.dataOfEdges.filter(dataOfEdge=>((dataOfEdge.startId!==startId)||(dataOfEdge.endId!==endId)))
        }
        setGraphData(newGraph);
    }
    const HandlePointChange=(event)=>{
        //Pripadu, ze index,py,px udavajici prazdnych retezcu, neprijimame
        const index=(event.target.value.split(" ")[0]!=="")?Number(event.target.value.split(" ")[0]):-1;
        const px=(event.target.value.split(" ")[1]!=="")?Number(event.target.value.split(" ")[1]):-1;
        const py=(event.target.value.split(" ")[2]!=="")?Number(event.target.value.split(" ")[2]):-1;
        //tady jsou index,py,py. 
        //Pokud jeste neexistuje-li druhy, treti prvek po split
        //pak, ze px,py udavajici NaN
        //Nasledujici podminky resi vsechny tyto problemy
        if(index>=0 && px>=0 && py>=0 && px<1200 && py<600){
            const state=event.target.value.split(" ")[3];
            const newPoint={'id':index,'x':px,'y':py,'state':state};
            //nefunguje ? newGraph=graph;
            const newGraph={
                'points':[...graphData.points],
                'dataOfEdges':[...graphData.dataOfEdges]
            };
            
            let isExistedPoint=false;
            //nefunguje for(let point in newGraph.point)
            for(let i=0;i<newGraph.points.length;i++){
                if(index===newGraph.points[i].id){
                    newGraph.points[i]=newPoint;
                    isExistedPoint=true;
                }
            }
            if(!isExistedPoint){
                newGraph.points.push(newPoint);
            }
            setGraphData(newGraph);
        }
    }
    const HandleEdgeChange=(e)=>{
        const startPointIndex= (e.target.value.split(" ")[0]!=="")?Number(e.target.value.split(" ")[0]):-1;
        const endPointIndex= (e.target.value.split(" ")[1]!=="")?Number(e.target.value.split(" ")[1]):-1;
        
        if(startPointIndex>=0&&endPointIndex>=0){
            const signaly=e.target.value.split(" ")[2];
            const newEdge={'startId': startPointIndex,'endId':endPointIndex,'symbols':signaly};
            const newGraph={
                'points':[...graphData.points],
                'dataOfEdges':[...graphData.dataOfEdges,newEdge]
            };
            console.log(newGraph.dataOfEdges);
            setGraphData(newGraph);
        }
    }
    const Download=(content)=>{
        // const name='image.svg';
        // const file= new Blob([content],{type:'image/svg+xml;charset=utf-8'});
        // saveAs(file,name);
        const a= new Blob(["Hello"],{type:'text/plain;charset=utf-8' });
        saveAs(a,'hello.txt');
    }
    // const SaveSvgAsPng=()=>{
    //     console.log('a');
    //     svg.saveSvgAsPng(document.getElementById("automat"),"diagram.png");
    // }
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
                    />
                    <br/>
                    <b>Hrany:</b>
                    <HandleEdges 
                        dataOfEdges= {graphData.dataOfEdges}
                        handleEdgeChange={HandleEdgeChange} 
                        onRemoveEdge={OnRemoveEdge}
                    />
                    <button className='btn btn-primary btn-sm' onClick={()=>Download(<Graph id="automat" graphData={graphData}/>)}>Download</button>
                </div>
                <div className="col">
                <br/>
                    <Graph id="automat" graphData={graphData}/>
                </div>
            </div>
        </>
    );
}

export default Automat