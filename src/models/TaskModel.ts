export class TaskModel {
  name: string;
  completed: boolean;

  constructor (name: string) {
    this.name = name
    this.completed = false
  }
}

export default TaskModel
