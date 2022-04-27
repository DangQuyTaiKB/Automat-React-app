import React, {Component} from 'react';
import './automat.css';
import VratHranu from './hrana'
import VratVrchol from'./vrchol'

class Automat extends Component{
    constructor(){
        super();
        this.state ={
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
                [[300,400],[600,400],[650,200],[450,50],[250,200]]
            ],
            pocetVrcholu:5,
            pocetZmenVrcholu:0,
            listInformaceHran: [],
            pocetHran: 0
        };
        this.HandleChangeHran=this.HandleChangeHran.bind(this);
        this.HandleSubmitHran=this.HandleSubmitHran.bind(this);
        this.HandleChangeVrchol= this.HandleChangeVrchol.bind(this);
    }
    VratPoziceVrcholu(){
        let p_listVrcholu=this.state.listsVrcholu[this.state.pocetVrcholu-1];
        return p_listVrcholu.map((vrchol,index)=>{
            return <pre>       Vrchol {index}: [{vrchol[0]},{vrchol[1]}]</pre>
        });
    }
    VratVrcholy(p_listVrcholu){
        return p_listVrcholu.map((vrchol,index)=>{
            return VratVrchol(vrchol,index);
        });
    }
    VratHrany(p_listHran){
        return p_listHran.map(infHrany =>{
            return VratHranu(infHrany[0],infHrany[1]);
        });
    }
    VratFormVrcholu(){
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
    VratFormHran(){
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
        let formy=[];
        for(let i=0;i<this.state.pocetHran;i++){
            formy.push(1);
        }
        return formy.map(form=>{
            return this.VratFormHran()
        });
    }
    VratFormyVrcholu(){
        let formy=[];
        for(let i=0;i<this.state.pocetZmenVrcholu;i++){
            formy.push(1);
        }
        return formy.map(form=>{
            return this.VratFormVrcholu()
        });
    }
    IncrePocetZmenVrcholu(){
        this.setState({pocetZmenVrcholu: this.state.pocetZmenVrcholu+1})
    }
    IncrePocetHran(){
        this.setState({pocetHran: this.state.pocetHran+1});
    }
    HandleChangeVrchol(e){
        let index=(e.target.value.split(" ")[0]!=="")?Number(e.target.value.split(" ")[0]):-1;
        let x=(e.target.value.split(" ")[1]!=="")?Number(e.target.value.split(" ")[1]):-1;
        let y=(e.target.value.split(" ")[2]!=="")?Number(e.target.value.split(" ")[2]):-1;
        if(index>=0 && x>=0 && y>=0 && index<this.state.pocetVrcholu && x<900 && y<500){
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
    DecrePocetVrcholu(){
        if(this.state.pocetVrcholu>1) this.setState({pocetVrcholu: this.state.pocetVrcholu-1});
    }
    IncrePocetVrcholu(){
        if(this.state.pocetVrcholu<5) this.setState({pocetVrcholu: this.state.pocetVrcholu+1});
    }
    render(){
        
        //tao list pozi
        let listVrcholu= this.state.listsVrcholu[this.state.pocetVrcholu-1];
        //phan tach dvojce bang split()
        //Number() de chuyen index thanh so
        //dua vao index do lay pozice bang listVrcholu
        //map vao tao ra listHran
        let listHran= this.state.listInformaceHran.map(inf=>
            [[listVrcholu[Number(inf.split(" ")[0])],listVrcholu[Number(inf.split(" ")[1])]], inf.split(" ")[2]]
        );
        return(
            <>
                <div className="container-fluid p-2 bg-primary text-white">
                    <h1 className="text-center">My Automat Graph Editor</h1>
                </div>
                <div className="divLeft">
                    <pre>                                                        </pre>
                    <p>Pocet vrcholu:
                        <button onClick= {()=>this.DecrePocetVrcholu()} className="btn btn-primary btn-sm">-</button> 
                        {this.state.pocetVrcholu} 
                        <button onClick ={()=> this.IncrePocetVrcholu()} className="btn btn-primary btn-sm">+</button>
                    </p>
                    {this.VratPoziceVrcholu()}
                    <p>Zmena pozice vrcholu. Vrozec: Index X Y</p>
                    {this.VratFormyVrcholu()}
                    <button onClick= {()=>this.IncrePocetZmenVrcholu()} className="btn btn-primary btn-sm">Zmen pozice vrcholu</button>
                    
                    <p>Tvoreni nove hrany. Vrozec: pocatecni koncovy signaly</p>
                    {this.VratFormyHran()}
                    <button onClick= {()=>this.IncrePocetHran()} className="btn btn-primary btn-sm">Tvor novou hranu</button>
                </div>
                <div className="divRight">
                    <br/>
                    <svg width="900" height="500">
                        <polyline points="0,0 900,0 900,500 0,500 0,0" fill= "white" stroke="black" strokeWidth="10"/>
                        {this.VratHrany(listHran)}
                        {this.VratVrcholy(listVrcholu)}
                    </svg>
                </div>
            </>
        );
    }
}

export default Automat;