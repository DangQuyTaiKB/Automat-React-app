import React, {Component} from 'react';
import './automat.css';
import VratHranu from './hrana'

class Automat extends Component{
    constructor(){
        super();
        this.state ={
            pocetVrcholu:5,
            listDvojciIndexu: [],
            listSignalu:["a","b","c"]
        };
        this.HandleChange=this.HandleChange.bind(this);
        this.HandleSubmit=this.HandleSubmit.bind(this);
    }
    VratVrcholy(p_listVrcholu){
        return p_listVrcholu.map((vrchol,index)=>{
            return <> 
                <circle cx= {vrchol[0]} cy={vrchol[1]} r="10" stroke="black" strokeWidth="2" fill="white"></circle>
                <text x={vrchol[0]-5} y={vrchol[1]+5} fill="red">{index}</text>
            </>
        });
    }
    VratHrany(p_listHran){
        return p_listHran.map(hrana =>{
            return VratHranu(hrana);
        });
    }
    HandleChange(e){
        //phai loai truong hop "" vi Number("") la 0
        let pocatecni= (e.target.value.split(" ")[0]!=="")?Number(e.target.value.split(" ")[0]):-1;
        let koncovy= (e.target.value.split(" ")[1]!=="")?Number(e.target.value.split(" ")[1]):-1;
        if(pocatecni>=0&&koncovy>=0&&pocatecni<this.state.pocetVrcholu&&koncovy<this.state.pocetVrcholu){
            this.state.listDvojciIndexu.push(e.target.value);
            this.setState({
                listDvojciIndexu:this.state.listDvojciIndexu
            });
        }
    }
    HandleSubmit(e){
        alert(`Jedna hrana[${this.state.listDvojciIndexu[this.state.listDvojciIndexu.length-1]}] byla tvorena`);
        e.preventDefault();
    }
    DecrePocetVrcholu(){
        if(this.state.pocetVrcholu>1) this.setState({pocetVrcholu: this.state.pocetVrcholu-1});
    }
    IncrePocetVrcholu(){
        if(this.state.pocetVrcholu<5) this.setState({pocetVrcholu: this.state.pocetVrcholu+1});
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
                {/* <input type="submit" value="Submit"/> */}
            </form>                
        </>
    }
    VratRadek(){
        return <tr>
                {this.state.listSignalu.map(signal=>{
                    return <td>
                        {this.VratForm()}
                    </td>
                })}
        </tr>
    }
    VratRadky(){
        return this.state.pocetVrcholu.map(vrchol=>{
            return this.VratRadek();
        });
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
        let listHran= this.state.listDvojciIndexu.map(dvojiceIndexu=>
            (Number(dvojiceIndexu.split(" ")[0])<this.state.pocetVrcholu&&Number(dvojiceIndexu.split(" ")[1])<this.state.pocetVrcholu)
            ?[listVrcholu[Number(dvojiceIndexu.split(" ")[0])],listVrcholu[Number(dvojiceIndexu.split(" ")[1])]]
            :[NaN,NaN]
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
                    {this.VratForm()}
                    {/* <table>
                        <tr>
                            <td></td>
                            {this.state.listSignalu.map(
                                signal=>{
                                    return <th>{signal}</th>
                                }
                            )}
                        </tr>
                        {this.VratRadky()}
                    </table> */}
                </div>
                <div className="divRight">
                    <br/>
                    <br/>
                    <svg width="900" height="600">
                        <polyline points="0,0 900,0 900,600 0,600 0,0" fill= "white" stroke="black" strokeWidth="10"/>
                        {this.VratVrcholy(listVrcholu)}
                        {this.VratHrany(listHran)}
                    </svg>
                </div>
            </div>
        );
    }
}

export default Automat;