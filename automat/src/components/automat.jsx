import React, {Component} from 'react';
import './automat.css';
import VratHranu from './hrana'
import VratVrchol from'./vrchol'

class Automat extends Component{
    constructor(){
        super();
        this.state ={
            pocetVrcholu:5,
            listInformaceHran: [],
            listForm1 : []
        };
        this.HandleChange=this.HandleChange.bind(this);
        this.HandleSubmit=this.HandleSubmit.bind(this);
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
    VratForm(){
        return<>
            <form onSubmit={this.HandleSubmit}>
                <label>Hrana:
                    <input 
                            type="text" 
                            onChange={this.HandleChange}
                    />
                </label>
                <input type="submit" value="Submit" className="btn btn-primary btn-sm"/>
            </form>                
        </>
    }
    VratFormy(){
        return this.state.listForm1.map(form=>{
            return this.VratForm()
        });
    }
    TvoritNovyForm(){
        this.state.listForm1.push(1);
        let newList=this.state.listForm1;
        this.setState({listForm1: newList});
    }
    HandleChange(e){
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
    HandleSubmit(e){
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
        const listsVrcholu=[
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
        ];
        //tao list pozi
        let listVrcholu= listsVrcholu[this.state.pocetVrcholu-1];
        //phan tach dvojce bang split()
        //Number() de chuyen index thanh so
        //dua vao index do lay pozice bang listVrcholu
        //map vao tao ra listHran
        let listHran= this.state.listInformaceHran.map(inf=>
            [[listVrcholu[Number(inf.split(" ")[0])],listVrcholu[Number(inf.split(" ")[1])]], inf.split(" ")[2]]
        );
        return(
            <div>
                <div className="divLeft">
                    <h1>Hello user!</h1>
                    <pre>                                                                         </pre>
                    <p>Pocet vrcholu:
                        <button onClick= {()=>this.DecrePocetVrcholu()} className="btn btn-primary btn-sm">-</button> 
                        {this.state.pocetVrcholu} 
                        <button onClick ={()=> this.IncrePocetVrcholu()} className="btn btn-primary btn-sm">+</button>
                    </p>
                    {this.VratFormy()}
                    <button onClick= {()=>this.TvoritNovyForm()} className="btn btn-primary btn-sm">Nova hrana</button>
                </div>
                <div className="divRight">
                    <br/>
                    <br/>
                    <svg width="900" height="600">
                        <polyline points="0,0 900,0 900,600 0,600 0,0" fill= "white" stroke="black" strokeWidth="10"/>
                        {this.VratHrany(listHran)}
                        {this.VratVrcholy(listVrcholu)}
                    </svg>
                </div>
            </div>
        );
    }
}

export default Automat;