import React, {useState} from 'react';

import VratHranu from './hrana'
import VratVrchol from'./vrchol'

// samostane komponentu tady
const SingleVrchol = (props) => <pre>Vrchol {props.index}: [{props.x}, {props.y}]</pre>;

const VratPoziceVrcholu=({p_listVrcholu})=>{
    /*
        Todo: Vratit list pozice vrcholu ve kartach <pre>
        Args: List pozice vrcholu
    */
    return (<>
        //{p_listVrcholu.map((vrchol,index)=> (<pre key={index}>       Vrchol {index}: [{vrchol.x},{vrchol.y}]</pre>)) }
        {p_listVrcholu.map((vrchol,index)=> (<SingleVrchol index={index} {...vrchol} />)) }
        </>);
}
//// <VratPoziceVrcholu p_listVrcholu={[]}/>

function Automat(){
            //listy incialnich pozici vrcholu
    const [listsVrcholu, setListsVrcholu]= useState( 
            [
                //pozice 1 vrcholu
                [[300,400]], //[{x: 300, y: 400}]
                // dictionary tady 


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
            ]
    );
    const [pocetVrcholu, setPocetVrcholu]= useState(4);
    const [pocetZmenVrcholu, setPocetZmenVrcholu]= useState(1);
    const [listInformaceHran, setListInformaceHran]= useState([]);
    const [pocetHran, setPocetHran]= useState(1);
    
    const IncreasePocetVrcholu=()=>{
        if(pocetVrcholu<6){
            setPocetVrcholu(pocetVrcholu+1);
        }
    }
    const DecreasePocetVrcholu=()=>{
        if(pocetVrcholu>1){
            setPocetVrcholu(pocetVrcholu-1);
        }
    }

    // samostane komponentu tady
    const VratPoziceVrcholu=(p_listVrcholu)=>{
        /*
            Todo: Vratit list pozice vrcholu ve kartach <pre>
            Args: List pozice vrcholu
        */
        return p_listVrcholu.map((vrchol,index)=>{
            return <pre>       Vrchol {index}: [{vrchol[0]},{vrchol[1]}]</pre>
        });
    }


    const VratVrcholy=(p_listVrcholu)=>{
        /*
            Todo: Vratit list vrcholu ve tvaru - funkcni komponent VratVrchol
            Args: List pozice vrcholu
        */
        return p_listVrcholu.map((vrchol,index)=>{
            return VratVrchol(vrchol,index);
        });
    }
    const VratHrany=(p_listHran)=>{
        /*
            Todo: Vratit list hran ve tvaru - funkcni komponent VratHranu
            Args: List hran, tj list trojice pozice pocatecniho, pozice koncoveho a hranovy signal
        */
        return p_listHran.map(infHrany =>{
            return VratHranu(infHrany[0],infHrany[1]);
        });
    }
    const VratFormVrcholu=()=>{
        /*
            Todo: Vratit form ukolem je zmenit pozice vrcholu
            Args: No
        */
        return<>
            <form >
                <label>Vrchol:
                    <input 
                        type="text" 
                        onChange={HandleChangeVrchol}
                    />
                </label>
            </form> 
        </>
    }
    const VratFormyVrcholu=()=>{
        /*
           Todo: Vratit formy ukolem je zmenit pozice vrcholu, pocet formu je roven pocetZmenVrcholu
           Args: No
       */
       let formy=[];
       for(let i=0;i<pocetZmenVrcholu;i++){
           formy.push(1);
       }
       return formy.map(form=>{
           return VratFormVrcholu()
       });
   }
    const VratFormHran=()=>{
         /*
            Todo: Vratit form ukolem je tvorit novou hranu
            Args: No
        */
        return<>
            <form>
                <label>Hrana:
                    <input 
                        type="text" 
                        onChange={HandleChangeHran}
                    />
                </label>
            </form>                
        </>
    }
    const VratFormyHran=()=>{
         /*
            Todo: Vratit formy ukolem je tvorit novou hranu, pocet formu je roven pocetHran
            Args: No
        */
        let formy=[];
        for(let i=0;i<pocetHran;i++){
            formy.push(1);
        }
        return formy.map(form=>{
            return VratFormHran()
        });
    }

    const HandleChangeVrchol=(e)=>{
        //index vrcholu
        let index=(e.target.value.split(" ")[0]!=="")?Number(e.target.value.split(" ")[0]):-1;
        //pozice vrcholu
        let x=(e.target.value.split(" ")[1]!=="")?Number(e.target.value.split(" ")[1]):-1;
        let y=(e.target.value.split(" ")[2]!=="")?Number(e.target.value.split(" ")[2]):-1;
        if(index>=0 && x>=0 && y>=0 && index<pocetVrcholu && x<900 && y<500){
            // Replace tento pozice
            listsVrcholu[pocetVrcholu-1][index]=[x,y];
            setListsVrcholu(listsVrcholu);
            console.log('%d %d %d',index,x,y);
        }
    }
    const HandleChangeHran=(e)=>{
        //phai loai truong hop "" vi Number("") la 0
        let pocatecni= (e.target.value.split(" ")[0]!=="")?Number(e.target.value.split(" ")[0]):-1;
        let koncovy= (e.target.value.split(" ")[1]!=="")?Number(e.target.value.split(" ")[1]):-1;
        if(pocatecni>=0&&koncovy>=0&&pocatecni<pocetVrcholu&&koncovy<pocetVrcholu){
            //Push inf Nove hrany do listInformaceHran
            listInformaceHran.push(e.target.value);
            setListInformaceHran(listInformaceHran);
        }
    }

    //Get list pozice vrcholu podle zvolene promenne pocetVrcholu
    let listVrcholu=listsVrcholu[pocetVrcholu-1];
    //Get list hran od listInformaceHran
    let listHran= listInformaceHran.map(inf=>
            [[listVrcholu[Number(inf.split(" ")[0])],listVrcholu[Number(inf.split(" ")[1])]], inf.split(" ")[2]]
    );

    return(
        <>
            <div className="container-fluid p-2 bg-primary text-white">
                <h1 className="text-center">My Automat Graph Editor</h1>
            </div>
            <div className ="row">
                <div className="col">
                    <br/>
                    <p>Pocet vrcholu:
                        <button onClick= {()=>DecreasePocetVrcholu()} className="btn btn-primary btn-sm">-</button> 
                        {pocetVrcholu} 
                        <button onClick ={()=> IncreasePocetVrcholu()} className="btn btn-primary btn-sm">+</button>
                    </p>
                    {VratPoziceVrcholu(listVrcholu)}
                    <b>Zmena pozice vrcholu.</b>
                    <p> Vrozec: Index X Y</p>
                    {VratFormyVrcholu()}
                    <button onClick= {()=> setPocetZmenVrcholu(pocetZmenVrcholu+1)} className="btn btn-primary btn-sm">Zmen pozice vrcholu</button>
                    <br/>
                    <b>Tvoreni nove hrany.</b>
                    <p>Vrozec: pocatecni koncovy signaly</p>
                    {VratFormyHran()}
                    <button onClick= {()=>setPocetHran(pocetHran+1)} className="btn btn-primary btn-sm">Tvor novou hranu</button>
                </div>
                <div className="col">
                    <br/>
                    <svg width="900" height="500">
                        <polyline points="0,0 900,0 900,500 0,500 0,0" fill= "white" stroke="black" strokeWidth="10"/>
                        {VratHrany(listHran)}
                        {VratVrcholy(listVrcholu)}
                    </svg>
                </div>
            </div>
        </>
    );
}

export default Automat;