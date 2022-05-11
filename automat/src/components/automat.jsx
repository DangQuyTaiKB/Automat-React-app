import React, {Component} from 'react';

import VratHranu from './hrana'
import VratVrchol from'./vrchol'

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
    
    render(){
        //Get list pozice vrcholu podle zvolene promenne pocetVrcholu
        let listVrcholu= this.state.listsVrcholu[this.state.pocetVrcholu-1];
        //Get list hran od listInformaceHran
        let listHran= this.state.listInformaceHran.map(inf=>
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
                            <button onClick= {()=>this.DecrePocetVrcholu()} className="btn btn-primary btn-sm">-</button> 
                            {this.state.pocetVrcholu} 
                            <button onClick ={()=> this.IncrePocetVrcholu()} className="btn btn-primary btn-sm">+</button>
                        </p>
                        {this.VratPoziceVrcholu(listVrcholu)}
                        <b>Zmena pozice vrcholu.</b>
                        <p> Vrozec: Index X Y</p>
                        {this.VratFormyVrcholu()}
                        <button onClick= {()=>this.IncrePocetZmenVrcholu()} className="btn btn-primary btn-sm">Zmen pozice vrcholu</button>
                        <br/>
                        <b>Tvoreni nove hrany.</b>
                        <p>Vrozec: pocatecni koncovy signaly</p>
                        {this.VratFormyHran()}
                        <button onClick= {()=>this.IncrePocetHran()} className="btn btn-primary btn-sm">Tvor novou hranu</button>
                    </div>
                    <div className="col">
                        <br/>
                        <svg width="900" height="500">
                            <polyline points="0,0 900,0 900,500 0,500 0,0" fill= "white" stroke="black" strokeWidth="10"/>
                            {this.VratHrany(listHran)}
                            {this.VratVrcholy(listVrcholu)}
                        </svg>
                    </div>
                </div>
            </>
        );
    }
}

export default Automat;