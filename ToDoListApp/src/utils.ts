enum CommandOpstions{
    A = "A",    // 'A' for Add task
    E = "E",    // 'E' for Edit task
    D = "D",    // 'D' for Delete task
    Q = "Q"     // 'Q' for Quit
}

export interface Task{
    id: number;             
    title: string;
    description: string;
    completed: boolean;
}

export class TaskList{
    
    private arrOfTasks: Array<Task>;        // This field describes an array of Task objects.

    // Constructor with a default value
    constructor(arrOfTasks = []){
        this.arrOfTasks = arrOfTasks;
    }

    displayList(): void{
        console.log("To-DO List App\n\nTasks:");
        this.arrOfTasks.forEach((element, index, array) => 
            console.log(`\t${array[index].id}. ${array[index].title}\n`));
    }

    addTask(taskTitle: string): void{        
        const task = {
            id: this.arrOfTasks.length + 1,
            title: taskTitle,
            description: "",
            completed: false                // Initially mark the task as incomplete.
        };  

        // If the task isn't already exists in the list, add it. 
        for(let i = 0; i < this.arrOfTasks.length; i++)
        {
            if(this.arrOfTasks[i].title === taskTitle) return;  
        }
        this.arrOfTasks.push(task);
    }

    doTask(task: Task): void{
        task.completed = true;
    }

    isEmpty(): boolean{
        return this.arrOfTasks.length === 0 ? true : false;
    }

}