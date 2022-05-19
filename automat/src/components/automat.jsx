import React, {useState} from 'react';

import Edges from './edges'
import Points from './points'
import HandlePoints from './handlingOfPoints'
import HandleEdges from './handlingOfEdges'

<<<<<<< HEAD


class Automat extends Component{
    constructor(){
        super();
        this.state ={
            //listy incialnich pozici vrcholu
            listsVrcholu: 
            [
                //pozice 1 vrcholu
                [[300,400]],
                //pozice 2 vrcholu
                [[300,400],[600,400]],
                //pozice 3 vrcholu: rovnostrany trojuhelnik
                [[300,400],[600,400],[450,140]],
                //pozice 4 vrcholu: ctverec
                [[300,400],[600,400],[600,100],[300,100]],
                //pozice 5 vrcholu:
                [[300,400],[600,400],[650,200],[450,50],[250,200]],
                //pozice 6 vrcholu:
                [[300,400],[600,400],[700,250],[600,100],[300,100],[200,250]]
            ],
            pocetVrcholu:4,
            pocetZmenVrcholu:0,
            listInformaceHran: [],
            pocetHran: 0
        };
        this.HandleChangeHran=this.HandleChangeHran.bind(this);
        this.HandleSubmitHran=this.HandleSubmitHran.bind(this);
        this.HandleChangeVrchol= this.HandleChangeVrchol.bind(this);
    }
    DecrePocetVrcholu(){
        if(this.state.pocetVrcholu>1) this.setState({pocetVrcholu: this.state.pocetVrcholu-1});
    }
    IncrePocetVrcholu(){
        if(this.state.pocetVrcholu<6) this.setState({pocetVrcholu: this.state.pocetVrcholu+1});
    }
    VratPoziceVrcholu(p_listVrcholu){
        /*
            Todo: Vratit list pozice vrcholu ve kartach <pre>
            Args: List pozice vrcholu
        */
        return p_listVrcholu.map((vrchol,index)=>{
            return <pre>       Vrchol {index}: [{vrchol[0]},{vrchol[1]}]</pre>
        });
    }
    VratVrcholy(p_listVrcholu){
        /*
            Todo: Vratit list vrcholu ve tvaru - funkcni komponent VratVrchol
            Args: List pozice vrcholu
        */
        return p_listVrcholu.map((vrchol,index)=>{
            return VratVrchol(vrchol,index);
        });
    }
    VratHrany(p_listHran){
        /*
            Todo: Vratit list hran ve tvaru - funkcni komponent VratHranu
            Args: List hran, tj list trojice pozice pocatecniho, pozice koncoveho a hranovy signal
        */
        return p_listHran.map(infHrany =>{
            return VratHranu(infHrany[0],infHrany[1]);
        });
    }
    VratFormVrcholu(){
        /*
            Todo: Vratit form ukolem je zmenit pozice vrcholu
            Args: No
        */
        return<>
            <form >
                <label>Vrchol:
                    <input 
                        type="text" 
                        onChange={this.HandleChangeVrchol}
                    />
                </label>
            </form> 
        </>
    }
    VratFormyVrcholu(){
        /*
           Todo: Vratit form ukolem je zmenit pozice vrcholu, pocet formu je roven pocetZmenVrcholu
           Args: No
       */
       let formy=[];
       for(let i=0;i<this.state.pocetZmenVrcholu;i++){
           formy.push(1);
       }
       return formy.map(form=>{
           return this.VratFormVrcholu()
       });
   }
    IncrePocetZmenVrcholu(){
    /*
        Todo: Zvysit promennou pocetZmenVrcholu o 1, aby se pocet formu (ukolem je zmenit pozice vrcholu ) zvysil
        Args: No
    */
        this.setState({pocetZmenVrcholu: this.state.pocetZmenVrcholu+1})
    }

    VratFormHran(){
         /*
            Todo: Vratit form ukolem je tvorit novou hranu
            Args: No
        */
        return<>
            <form onSubmit={this.HandleSubmitHran}>
                <label>Hrana:
                    <input 
                        type="text" 
                        onChange={this.HandleChangeHran}
                    />
                </label>
                <input type="submit" value="Submit" className="btn btn-primary btn-sm"/>
            </form>                
        </>
    }
    VratFormyHran(){
         /*
            Todo: Vratit formy ukolem je tvorit novou hranu, pocet formu je roven pocetHran
            Args: No
        */
        let formy=[];
        for(let i=0;i<this.state.pocetHran;i++){
            formy.push(1);
        }
        return formy.map(form=>{
            return this.VratFormHran()
        });
    }
    IncrePocetHran(){
        /*
            Todo: Zvysit promennou pocetHran o 1, aby se pocet formu (ukolem je zmenit pozice vrcholu ) zvysil
            Args: No
        */
        this.setState({pocetHran: this.state.pocetHran+1});
    }

    HandleChangeVrchol(e){
        //index vrcholu
        let index=(e.target.value.split(" ")[0]!=="")?Number(e.target.value.split(" ")[0]):-1;
        //pozice vrcholu
        let x=(e.target.value.split(" ")[1]!=="")?Number(e.target.value.split(" ")[1]):-1;
        let y=(e.target.value.split(" ")[2]!=="")?Number(e.target.value.split(" ")[2]):-1;
        if(index>=0 && x>=0 && y>=0 && index<this.state.pocetVrcholu && x<900 && y<500){
            // Replace tento pozice
            this.state.listsVrcholu[this.state.pocetVrcholu-1][index]=[x,y];
            this.setState({
                listsVrcholu: this.state.listsVrcholu
            });
        }
    }
    HandleChangeHran(e){
        //phai loai truong hop "" vi Number("") la 0
        let pocatecni= (e.target.value.split(" ")[0]!=="")?Number(e.target.value.split(" ")[0]):-1;
        let koncovy= (e.target.value.split(" ")[1]!=="")?Number(e.target.value.split(" ")[1]):-1;
        if(pocatecni>=0&&koncovy>=0&&pocatecni<this.state.pocetVrcholu&&koncovy<this.state.pocetVrcholu){
            //Push inf Nove hrany do listInformaceHran
            this.state.listInformaceHran.push(e.target.value);
            this.setState({
                listInformaceHran:this.state.listInformaceHran
            });
        }
    }
    HandleSubmitHran(e){
        alert(`Jedna hrana[${this.state.listInformaceHran[this.state.listInformaceHran.length-1]}] byla tvorena`);
        e.preventDefault();
    }
=======
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
>>>>>>> 7ab520a91596214ac96a28a36a85c9f6806695e5
    
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