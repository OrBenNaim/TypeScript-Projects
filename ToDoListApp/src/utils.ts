enum TaskId{
    A = "A",    // 'A' for Add task
    E = "E",    // 'E' for Edit task
    D = "D",    // 'D' for Delete task
    Q = "Q"     // 'Q' for Quit
}

export interface Task{
    id: TaskId;             
    title: string;
    description: string;
    completed: boolean;
}

export class TaskList{
    
    arrOfTasks: Array<Task>;        // This field describes an array of Task objects.
    displayTasksString: string;     // This field describes the format in which the Task List should be printed out.

    // Constructor with a default value
    constructor(arrOfTasks = []){
        this.arrOfTasks = arrOfTasks;
        
    }

    displayList(): void{
        
        console.log()
    }

    addTask(task: Task): void{

        // If the task isn't already exists in the list, add it. 
        if(!this.arrOfTasks.includes(task)){
            this.arrOfTasks.push(task);
        }
    }

    isEmpty(): boolean{
        return (this.arrOfTasks);
    }

}