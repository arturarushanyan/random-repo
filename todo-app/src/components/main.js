import React,{Component} from 'react';
import AddNewTask from './AddNewTask';
import ToDoAppList from './ToDoAppList';

export default class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: props.tasks
        };
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    updateList(text){
        let updatedTasks = this.state.tasks;
        updatedTasks.push(text);
        this.setState({
            tasks: updatedTasks
        })
    }

    removeTask(text){
        let updatedTasks = this.state.tasks;
        updatedTasks.splice(updatedTasks.indexOf(text),1);
        this.setState({
            tasks: updatedTasks
        })
    }

    render(){
        console.log(this.props);
        return (
            <div>
                <h1>ToDo App</h1>
                <AddNewTask updateList = {this.updateList} />
                <ToDoAppList tasks = {this.state.tasks} remove = {this.removeTask} />
            </div>
        )
    }
}