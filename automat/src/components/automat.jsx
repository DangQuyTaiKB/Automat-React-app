import React, {useState} from 'react';

import Edges from './edges'
import Points from './points'
import HandlePoints from './handlingOfPoints'
import HandleEdges from './handlingOfEdges'

function Automat(){
            //listy incialnich pozici vrcholu
    const [pointData, setPointData]= useState( 
            [
                //pozice 1 vrcholu
                [{x: 300, y: 400}], //[{x: 300, y: 400}]
                //pozice 2 vrcholu
                [{x: 300, y: 400},{x: 600, y: 400}],
                //pozice 3 vrcholu: rovnostrany trojuhelnik
                [{x: 300, y: 400},{x: 600, y: 400},{x: 450, y: 140}],
                //pozice 4 vrcholu: ctverec
                [{x: 300, y: 400},{x: 600, y: 400},{x: 600, y: 100},{x: 300, y: 100}],
                //pozice 5 vrcholu:
                [{x: 300, y: 400},{x: 600, y: 400},{x: 650, y: 200},{x: 450, y: 50},{x: 250, y: 200}],
                //pozice 6 vrcholu:
                [{x: 300, y: 400},{x: 600, y: 400},{x: 700, y: 250},{x: 600, y: 100},{x: 300, y: 100},{x: 200, y: 250}]
            ]
    );
    const [numberOfPoints, setNumberOfPoints]= useState(4);
    const [listOfEdgeInf, setListOfEdgeInf]= useState([]);
    const [numberOfEdges, setNumberOfEdges]= useState(1);
    const [numberOfChange, setnumberOfChange]= useState(1);
    
    const HandlePointChange=(event)=>{
        //index vrcholu 
        let index=(event.target.value.split(" ")[0]!=="")?Number(event.target.value.split(" ")[0]):-1;
        //pozice vrcholu
        let px=(event.target.value.split(" ")[1]!=="")?Number(event.target.value.split(" ")[1]):-1;
        let py=(event.target.value.split(" ")[2]!=="")?Number(event.target.value.split(" ")[2]):-1;
        if(index>=0 && px>=0 && py>=0 && index<numberOfPoints && px<900 && py<500){
            // Replace tento pozice
            pointData[numberOfPoints-1][index]={x:px,y:py};
            setPointData(pointData);
        }
    }
    const HandleEdgeChange=(e)=>{
        //phai loai truong hop "" vi Number("") la 0
        let startPointIndex= (e.target.value.split(" ")[0]!=="")?Number(e.target.value.split(" ")[0]):-1;
        let endPointIndex= (e.target.value.split(" ")[1]!=="")?Number(e.target.value.split(" ")[1]):-1;
        if(startPointIndex>=0&&endPointIndex>=0){
            //Push inf Nove hrany do listInformaceHran
            listOfEdgeInf.push(e.target.value);
            setListOfEdgeInf(listOfEdgeInf);
        }
    }
    const IncreaseNumberOfPoints=()=>{
        if(numberOfPoints<6){
            setNumberOfPoints(numberOfPoints+1);
        }
    }
    const DecreasenumberOfPoints=()=>{
        if(numberOfPoints>1){
            setNumberOfPoints(numberOfPoints-1);
        }
    }
    const AddNewEdge=()=>{
        setNumberOfEdges(numberOfEdges+1);
    }
    const AddChange=()=>{
        setnumberOfChange(numberOfChange+1);
    }
    //Get list pozice vrcholu podle zvolene promenne pocetVrcholu
    const points=pointData[numberOfPoints-1];
    //Get list hran od listInformaceHran
    const checkedListInf=listOfEdgeInf.filter(inf=>{
        return Number(inf.split(" ")[0])<numberOfPoints&&Number(inf.split(" ")[1])<numberOfPoints
    });
    const edges= checkedListInf.map(inf=>{
        return [points[Number(inf.split(" ")[0])],points[Number(inf.split(" ")[1])], inf.split(" ")[2]];
    });
   

    return(
        <>
            <div className="container-fluid p-2 bg-primary text-white">
                <h1 className="text-center">My Automat Graph Editor</h1>
            </div>
            <div className ="row">
                <div className="col">
                    <br/>
                    <p>Pocet vrcholu:
                        <button onClick= {()=>DecreasenumberOfPoints()} className="btn btn-primary btn-sm">-</button> 
                        {numberOfPoints} 
                        <button onClick ={()=> IncreaseNumberOfPoints()} className="btn btn-primary btn-sm">+</button>
                    </p>
                    <HandlePoints 
                        points={points} 
                        handlePointChange={HandlePointChange}
                        numberOfChange={numberOfChange}
                        addChange={AddChange}
                    />
                    <br/>
                    <b>Tvoreni nove hrany.</b>
                    <HandleEdges 
                        handleEdgeChange={HandleEdgeChange} 
                        numberOfEdges={numberOfEdges}  
                        addNewEdge={AddNewEdge}
                    />
                </div>
                <div className="col">
                    <br/>
                    <svg width="900" height="500">
                        <polyline points="0,0 900,0 900,500 0,500 0,0" fill= "white" stroke="black" strokeWidth="10"/>
                        <Edges edges={edges}/>
                        <Points points={points}/>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default Automat;