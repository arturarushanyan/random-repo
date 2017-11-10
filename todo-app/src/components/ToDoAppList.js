import React,{Component} from 'react';

export default class ToDoAppList extends Component{
    constructor(){
        super();
        console.log(this.props);
    }
    render(){
        let items = this.props.tasks.map((task,key) => {
            return (
                <li key = {key}>{task}</li>
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