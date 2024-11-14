import * as readline from 'readline';

enum CommandOpstions {
    A = "A",    // 'A' for Add task
    E = "E",    // 'E' for Edit task
    D = "D",    // 'D' for Delete task
    Q = "Q"     // 'Q' for Quit
}


interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}


class TaskList {
    // Constructor with a default values
    constructor(
        private arrOfTasks: Array<Task> = [],                   // This field describes an array of Task objects.
        private commandMenu: string = `Enter a command:\n       
        (A)dd task\n
        (E)dit task\n
        (D)elete task\n
        (Q)uit\n`        
    ) {}


    // Display list and the command menu
    displayList(): void {
        console.log("\nTo-DO List App\n\nTasks:");
        
        // Display the tasks:
        this.arrOfTasks.forEach((element, index, array) =>
            console.log(`\t${array[index].id}. ${array[index].title}\n`));

        console.log(`\n${this.commandMenu}`);
    }


    addTask(taskTitle: string, taskDescription: string): void {
        const task = {
            id: this.arrOfTasks.length + 1,
            title: taskTitle,
            description: taskDescription,
            completed: false    // Initially mark the task as incomplete.
        };

        // Check if this task already exists:
        for (let i = 0; i < this.arrOfTasks.length; i++) {
            if (this.arrOfTasks[i].title === taskTitle) return;
        }
        this.arrOfTasks.push(task);      // If the task isn't exists in the list, add it.
    }


    doTask(task: Task): void {
        task.completed = true;
    }


    isEmpty(): boolean {
        return this.arrOfTasks.length === 0 ? true : false;
    }
}

// This class will handle the CLI.
export class ListApp{
    
    constructor(
        private toDoList: TaskList = new TaskList()
    ){}

    
    question(readLine: readline.Interface, query: string): Promise<string> {
        return new Promise((resolve) => {
            readLine.question(query, (answer) => {
                resolve(answer);
            });
        });
    }
    
    
    async run(){
        // Importing 'readline' to handle user input from the console
        const readLine = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });

        while(true){
            this.toDoList.displayList();
            const command = await this.question(readLine, 'Command: ');

                switch(command){
                    case 'A':
                        const title = await this.question(readLine, 'Enter task title (or press Enter to skip): ');
                        const description = await this.question(readLine, 'Enter task description (or press Enter to skip): ');
                        this.toDoList.addTask(title, description);
                        console.log("Task added!");
                    break;

                case 'E':
                    console.log("Edit functionality not yet implemented.");
                    break;

                case 'D':
                    console.log("Delete functionality not yet implemented.");
                    break;

                case 'Q':
                    console.log("Goodbye!");
                    readLine.close();
                    return;

                default:
                    console.log("Invalid command. Please try again.");
                    break;
            }
        }
    }
        
    
}