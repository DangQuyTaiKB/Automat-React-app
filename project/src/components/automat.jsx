import React, {Component} from 'react';


class Automat extends Component{
    constructor(){
        super();
        this.state ={pocetVrcholu:1};
    }
    VratVrcholy(p_listsPoziciVrcholu, p_pocetVrcholu){
        return p_listsPoziciVrcholu[p_pocetVrcholu-1].map((vrchol,index)=>{
            return <> 
                <circle cx= {vrchol[0]} cy={vrchol[1]} r="10" stroke="black" stroke-width="2" fill="white"></circle>
                <text x={vrchol[0]-5} y={vrchol[1]+5} fill="red">{index}</text>
            </>
        });
    }
    VratHranu([a,b], jmenoSignalu){
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
            <text x={(a[0]+b[0])/2} y={(a[1]+b[1])/2} fill="red">{jmenoSignalu}</text>
        </>
    }
    VratHrany(p_listPoziciHran){
        return p_listPoziciHran.map((dvojce,index) =>{
            return this.VratHranu(dvojce,"s"+index);
        });
    }
    DecrePocetVrcholu(){
        this.setState({pocetVrcholu: this.state.pocetVrcholu-1});
    }
    IncrePocetVrcholu(){
        this.setState({pocetVrcholu: this.state.pocetVrcholu+1});
    }

    render(){
        const listsPoziciVrcholu=[
            //pozice 1 vrcholu
            [[600,400]],
            //pozice 2 vrcholu
            [[600,400],[900,400]],
            //pozice 3 vrcholu: rovnostrany trojuhelnik
            [[600,400],[900,400],[750,140]],
            //pozice 4 vrcholu: ctverec
            [[600,400],[900,400],[900,100],[600,100]],
            //pozice 5 vrcholu:
            [[600,400],[900,400],[950,200],[750,50],[550,200]]
        ];
        const listPoziciHran=[
            [[600,400], [900,400]],
            [[900,400], [900,100]],
            [[900,100], [600,100]]
        ];
        return(
            <div>
                <h1>Hello world</h1>
                <p>Pocet vrcholu: 
                    <button onClick= {()=>this.DecrePocetVrcholu()} className='btn btn-primary btn-sm'>-</button> 
                    {this.state.pocetVrcholu} 
                    <button onClick ={()=> this.IncrePocetVrcholu()} className='btn btn-primary btn-sm'>+</button></p>
                <svg width="1200" height="800">
                    {this.VratVrcholy(listsPoziciVrcholu,this.state.pocetVrcholu)}
                    {this.VratHrany(listPoziciHran)}
                </svg>
            </div>
        );
    }
}

export default Automat;