import React, {Component} from "react";
import "./ItemTask.scss"

class ItemTask extends Component{
	task = this.props.itemTask;
	
	
render(){
	
	const dataChange ={}
	const changeTittle = (e) =>{
		dataChange.title= e.target.value
	}
	const changeDescription = (e) =>{
		dataChange.description = e.target.value
	}

	return(
		<li className="render__task-wraper">
				<div className="task">
					<button 
						type="button" 
						data-action="done" 
						className="task__btn"
						id="btn-cossout" 
						onClick={()=> {this.props.onCheck(this.task)}} >
						<i style={{display: this.task.isCheck ? "block": "none" }}className="check-true bi bi-check2-circle" ></i>
						<i style={{display: this.task.isCheck ? "none" : "block"}}className="check-false display bi bi-check-circle"></i>
					</button>
					<input 
						type="text" 
						placeholder="Task #1" 
						className="task-title" 
						defaultValue = {this.task.title} 
						style={{
							opacity: this.task.isCheck ? 0.5 : 1, textDecoration: this.task.isCheck ? "line-through" : "none", pointerEvents: this.task.editForm ?  "auto" : "none"
						}}
						onChange={changeTittle}
					 />
					<button 
						type="button" 
						data-action="edit"
						className="task__btn"
						onClick={()=> {this.props.onEdit(this.task , dataChange)}} 
					 >
						<i className="pencil bi bi-pencil"></i>
					</button>
					<button
						type="button"
						className="task__btn"
						onClick={()=> this.props.onDelete(this.task)} 
					  >
						<i className="bin bi bi-trash3 lg" ></i>
					</button>
				</div>
				<textarea 
					className="task-description" 
					defaultValue = {this.task.description} 
					style={{opacity: this.task.isCheck ? 0.5 : 1, textDecoration: this.task.isCheck ? "line-through" : "none", pointerEvents: this.task.editForm ?  "auto" : "none"}}
					onChange={changeDescription}
				></textarea>
		</li>
	)
	}
}

export default ItemTask
// 