import React, {Component} from 'react';
import './automat.css';


class Automat extends Component{
    constructor(){
        super();
        this.state ={
            pocetVrcholu:4,
            listDvojciIndexu: [['0','1']]
        };
    }
    VratVrcholy(p_listPoziciVrcholu){
        return p_listPoziciVrcholu.map((vrchol,index)=>{
            return <> 
                <circle cx= {vrchol[0]} cy={vrchol[1]} r="10" stroke="black" stroke-width="2" fill="white"></circle>
                <text x={vrchol[0]-5} y={vrchol[1]+5} fill="red">{index}</text>
            </>
        });
    }
    VratHranu([a,b], znackaSignalu){
        const polomerVrcholu=10;
        const h=10; //vyska trojuhelnik sipky
        const delka=Math.sqrt((a[0]-b[0])**2+(a[1]-b[1])**2);
        const x4=(a[0]-b[0])*(polomerVrcholu/delka);
        const y4=(a[1]-b[1])*(polomerVrcholu/delka);
        const x5=(a[0]-b[0])*((polomerVrcholu+h)/delka);
        const y5=(a[1]-b[1])*((polomerVrcholu+h)/delka);
        const x3=b[0]+x5;
        const y3=b[1]+y5;
        const x6=x3+h*Math.abs(b[1]-a[1])/delka;
        const y6=y3+h*Math.abs(b[0]-a[0])/delka;
        const x7=x3-h*Math.abs(b[1]-a[1])/delka;
        const y7=y3-h*Math.abs(b[0]-a[0])/delka;

        return <>
            <line x1={a[0]-x4} y1={a[1]-y4} x2={b[0]+x4} y2={b[1]+y4} stroke="black" stroke-width="2"/>
            <polygon 
                points={[
                    [b[0]+x4,b[1]+y4],
                    [x6,y6],
                    [x7,y7]
                ]}
                stroke="black" fill="black" stroke-width="2"
            />
            <text x={(a[0]+b[0])/2} y={(a[1]+b[1])/2} fill="red">{znackaSignalu}</text>
        </>
    }
    VratHrany(p_listPoziciHran){
        return p_listPoziciHran.map((dvojce,index) =>{
            return this.VratHranu(dvojce);
        });
    }
    DecrePocetVrcholu(){
        if(this.state.pocetVrcholu>1) this.setState({pocetVrcholu: this.state.pocetVrcholu-1});
    }
    IncrePocetVrcholu(){
        if(this.state.pocetVrcholu<5) this.setState({pocetVrcholu: this.state.pocetVrcholu+1});
    }

    render(){
        const listsPoziciVrcholu=[
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
        let listPoziciVrcholu= listsPoziciVrcholu[this.state.pocetVrcholu-1];
        //tao list vi tri bang list dvojci indexu
        let listPoziciHran= this.state.listDvojciIndexu.map(
            dvojceIndexu=>[listPoziciVrcholu[Number(dvojceIndexu[0])],listPoziciVrcholu[Number(dvojceIndexu[1])]]
        );
        return(
            <div>
                <div className="divLeft">
                    <h1>Hello world</h1>
                    <pre>                                                                </pre>
                    <p>Pocet vrcholu: 
                        <button onClick= {()=>this.DecrePocetVrcholu()}>-</button> 
                        {this.state.pocetVrcholu} 
                        <button onClick ={()=> this.IncrePocetVrcholu()}>+</button></p>
                </div>
                <div className="divRight">
                   
                    <svg width="900" height="600">
                        <polyline points="0,0 900,0 900,600 0,600 0,0" fill= "white" stroke="black" stroke-width="2"/>
                        {this.VratVrcholy(listPoziciVrcholu)}
                        {this.VratHrany(listPoziciHran)}
                    </svg>
                </div>
            </div>
        );
    }
}

export default Automat;