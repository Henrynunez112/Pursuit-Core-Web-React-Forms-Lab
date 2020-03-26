import React from 'react'

class Forms extends React.Component{
    constructor(){
        super();
        this.state = {
            numArr: []
        }
    }
    handleInputChange = (el) =>{
        let arr = el.target.value;
        const newInputArr = arr.split(',').map(el => {return el});
        this.setState({
            numArr: newInputArr
        })
    }
    render(){
        return (
            <div>
    
            <input 
            type='text'
            onChange={this.handleInputChange}
            ></input>
                
            </div>
        )
    }
}

export default Forms
