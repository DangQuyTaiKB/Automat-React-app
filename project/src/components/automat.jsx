import React, {Component} from 'react';


class Automat extends Component{
    constructor(){
        super();
        this.state ={pocetVrcholu:3};
    }
    
    render(){
        const pozice_3=[[50,50],[100,50],[150,50]];
        return(
            <div>
                <h1>Hello world</h1>
                <p>Pocet vrcholu:{this.state.pocetVrcholu}</p>
                <svg width="750" height="500">
                    {pozice_3.map((value,index)=>{
                        //lap lai circle va text 
                        return <> 
                            <circle cx= {value[0]} cy={value[1]} r="10" stroke="black" stroke-width="1" fill="white"></circle>
                            <text x={value[0]-5} y={value[1]+5} fill="red">{index}</text>
                        </>
                    })}
                </svg>
            </div>
        );
    }
}

export default Automat;