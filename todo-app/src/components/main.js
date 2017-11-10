import React,{Component} from 'react';
import AddNewTask from './AddNewTask';
import ToDoAppList from './ToDoAppList';

export default class Todo extends Component{
    constructor(props){
        super(props);
        console.log(this.props)
    }
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>ToDo App</h1>
                <AddNewTask />
                <ToDoAppList tasks = {this.props.tasks}/>
            </div>
        )
    }
}