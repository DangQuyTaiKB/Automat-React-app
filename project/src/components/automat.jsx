import React, {Component} from 'react';


class Automat extends Component{
    constructor(){
        super();
        this.state ={pocetVrcholu:3};
    }
    
    render(){
        const pozice_3vcholy=[[500,400],[800,400],[650,140]];
        return(
            <div>
                <h1>Hello world</h1>
                
                <p>Pocet vrcholu: <button className='btn btn-primary btn-sm'>-</button> {this.state.pocetVrcholu} <button className='btn btn-primary btn-sm'>+</button></p>
                <svg width="1200" height="500">
                    {pozice_3vcholy.map((value,index)=>{
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