import React,{Component} from 'react';

export default class AddNewTask extends Component{
    constructor(){
        super();
        this.justSubmitted = this.justSubmitted.bind(this)
    }

    justSubmitted(event){
        event.preventDefault();
        let input = event.target.querySelector('input');
        let value = input.value;
        input.value = '';
        this.props.updateList(value);
    }

    render(){
        return (
            <form onSubmit={this.justSubmitted}>
                <input type="text"/>
            </form>
        )
    }
}