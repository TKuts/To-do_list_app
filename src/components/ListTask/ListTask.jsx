import React, {Component} from "react";
import "./ListTask.scss";
import ItemTask from "../ItemTask";


class ListTask extends Component{

render(){
// Sort
	if (this.props.state.length > 0)
		return(
		<ul className="render__task"> 
			{this.props.state.map((el)=> (
				
				<ItemTask
					key={el.id} 
					itemTask={el} 
					onDelete={this.props.onDelete} 
					onEdit={this.props.onEdit} 
					onCheck={this.props.onCheck}
				
				 />
			))}
		</ul>)	
	else
		return (<ul className="render__task">
					<h3 className="render__task-title">All tasks are completed</h3>
				</ul>
		)
}
}

export default ListTask;