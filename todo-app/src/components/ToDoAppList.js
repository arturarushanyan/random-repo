import React,{Component} from 'react';

export default class ToDoAppList extends Component{
    constructor(){
        super();
        console.log(this.props);
        this.remove = this.remove.bind(this);
    }

    remove(elem){
        let value = elem.target.parentNode.querySelector('span').innerText;
        this.props.remove(value);
    }

    render(){
        let items = this.props.tasks.map((task,key) => {
            return (
                <li key = {key}>
                    <span>{task}</span>
                    <button onClick={this.remove}>x</button>
                </li>
            )
        });
        console.log(items);
        return (
            <ul>
                {items}
            </ul>
        )
    }
}