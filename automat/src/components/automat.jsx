import React, {useState} from 'react';
import Edges from './edges'
import Points from './points'
import HandlePoints from './handlingOfPoints'
import HandleEdges from './handlingOfEdges'

function Automat(){
    const originalGraph={
        'points':[
            {'id':0,'x':300,'y':400, 'state':'A'},
            {'id':1,'x':600,'y':400, 'state':'B'},
            {'id':2,'x':600,'y':100, 'state':'C'},
            {'id':3,'x':300,'y':100, 'state':'D'},
        ],
        'dataOfEdges':[
            {'startId':0,'endId':1,'signaly':'a'},
            {'startId':1,'endId':2,'signaly':'b'}
        ]
    };
    const [graph,setGraph]=useState(originalGraph);
    
    const OnRemovePoint= (removedId)=>{
        const newGraph={
            'points': graph.points.filter(point=>(point.id!==removedId)),
            'dataOfEdges': graph.dataOfEdges.filter(dataOfEdge=>((dataOfEdge.startId!==removedId)&&(dataOfEdge.endId!==removedId)))
        }
        setGraph(newGraph);
    }
    const OnRemoveEdge=(startId,endId)=>{
        const newGraph={
            'points':[...graph.points],
            'dataOfEdges':graph.dataOfEdges.filter(dataOfEdge=>((dataOfEdge.startId!==startId)||(dataOfEdge.endId!==endId)))
        }
        setGraph(newGraph);
    }
    // const HandlePointChange=(event)=>{
    //     //index vrcholu 
    //     const index=(event.target.value.split(" ")[0]!=="")?Number(event.target.value.split(" ")[0]):-1;
    //     //pozice vrcholu
    //     const px=(event.target.value.split(" ")[1]!=="")?Number(event.target.value.split(" ")[1]):-1;
    //     const py=(event.target.value.split(" ")[2]!=="")?Number(event.target.value.split(" ")[2]):-1;
    //     const state=event.target.value.split(" ")[3];

    //     let isExistedPoint=false;
    //     for(let existedPoint in graph.points){
    //         if(index===existedPoint.id){
    //             isExistedPoint=true;
    //         }
    //     }

    //     if(index>=0 && px>=0 && py>=0&& px<900 && py<500){
    //         // Novy graph
    //         const newPoint={'id':index,'x':px,'y':py,'state':state};
    //         if(isExistedPoint){
    //             const newGraph={
    //                 'points': graph.points.filter(point=>(point.id!==index)).push(newPoint),
    //                 'edges':[...graph.edges]
    //             };
    //             setGraph(newGraph);
    //         }
    //         else{
    //             const newGraph={
    //                 'points': [...graph.points,newPoint],
    //                 'edges':[...graph.edges]
    //             };
    //             setGraph(newGraph);
    //         }
    //     }
    // }
    // const HandleEdgeChange=(e)=>{
    //     //phai loai truong hop "" vi Number("") la 0
    //     let startPointIndex= (e.target.value.split(" ")[0]!=="")?Number(e.target.value.split(" ")[0]):-1;
    //     let endPointIndex= (e.target.value.split(" ")[1]!=="")?Number(e.target.value.split(" ")[1]):-1;
    //     let signaly=e.target.value.split(" ")[2];
    //     if(startPointIndex>=0&&endPointIndex>=0){
    //         //Novy graph
    //         const newEdge={'startPoint': startPointIndex,'endPoint':endPointIndex,'signaly':signaly};
    //         const newGraph={
    //             'points': [...graph.points],
    //             'edges':[...graph.edges,newEdge]
    //         };
    //         setGraph(newGraph);
    //     }
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
                        points={graph.points} 
                        //handlePointChange={HandlePointChange}
                        onRemovePoint={OnRemovePoint}
                    />
                    <br/>
                    <b>Hrany:</b>
                    <HandleEdges 
                        dataOfEdges= {graph.dataOfEdges}
                        //handleEdgeChange={HandleEdgeChange} 
                        onRemoveEdge={OnRemoveEdge}
                    />
                </div>
                <div className="col">
                    <br/>
                    <svg width="900" height="500">
                        <polyline points="0,0 900,0 900,500 0,500 0,0" fill= "white" stroke="black" strokeWidth="10"/>
                        <Edges 
                            dataOfEdges={graph.dataOfEdges}
                            points={graph.points}
                        />
                        <Points 
                            points={graph.points}
                        />
                    </svg>
                </div>
            </div>
        </>
    );
}

export default Automat