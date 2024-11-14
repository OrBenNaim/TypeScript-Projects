import {ListApp} from './utils';
import * as readline from 'readline';
function main(){
    
    // Creating a new ListApp object
    const app = new ListApp();
    app.run();

    
}

// Call the main function
main();


// // Interface representing a Task
// interface Task {
//     id: number;
//     title: string;
//     description: string;
//     completed: boolean;
// }

// // Class that manages a list of tasks
// class TaskList {
//     private tasks: Task[] = [];

//     // Method to add a new task
//     addTask(title: string, description: string): void {
//         const newTask: Task = {
//             id: this.tasks.length + 1,
//             title,
//             description,
//             completed: false
//         };
//         this.tasks.push(newTask);
//         console.log(`Task "${title}" added successfully.`);
//     }

//     // Method to display the list of tasks
//     displayTasks(): void {
//         console.log("\nTasks:");
//         if (this.tasks.length === 0) {
//             console.log("No tasks available.");
//             return;
//         }
//         this.tasks.forEach(task => {
//             console.log(`- [${task.completed ? 'X' : ' '}] ${task.id}: ${task.title} - ${task.description}`);
//         });
//     }

//     // Method to edit a task
//     editTask(id: number, title?: string, description?: string): void {
//         const task = this.tasks.find(task => task.id === id);
//         if (task) {
//             if (title) task.title = title;
//             if (description) task.description = description;
//             console.log(`Task ID ${id} updated successfully.`);
//         } else {
//             console.log(`Task ID ${id} not found.`);
//         }
//     }

//     // Method to delete a task
//     deleteTask(id: number): void {
//         const index = this.tasks.findIndex(task => task.id === id);
//         if (index !== -1) {
//             const removedTask = this.tasks.splice(index, 1)[0];
//             console.log(`Task "${removedTask.title}" deleted successfully.`);
//         } else {
//             console.log(`Task ID ${id} not found.`);
//         }
//     }

//     // Method to toggle task completion status
//     toggleTaskStatus(id: number): void {
//         const task = this.tasks.find(task => task.id === id);
//         if (task) {
//             task.completed = !task.completed;
//             console.log(`Task ID ${id} marked as ${task.completed ? 'completed' : 'incomplete'}.`);
//         } else {
//             console.log(`Task ID ${id} not found.`);
//         }
//     }
// }

// // Main function to run the app
// function main(): void {
//     const taskList = new TaskList();
//     const readline = require('readline').createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     function showMenu(): void {
//         console.log("\nTo-Do List App");
//         console.log("Enter a command:");
//         console.log("(A)dd task, (E)dit task, (D)elete task, (T)oggle task status, (L)ist tasks, (Q)uit");

//         readline.question('Command: ', (command: string) => {
//             switch (command.toUpperCase()) {
//                 case 'A':
//                     readline.question('Enter task title: ', (title: string) => {
//                         readline.question('Enter task description: ', (description: string) => {
//                             taskList.addTask(title, description);
//                             showMenu();
//                         });
//                     });
//                     break;
//                 case 'E':
//                     readline.question('Enter task ID to edit: ', (id: string) => {
//                         const taskId = parseInt(id);
//                         readline.question('Enter new title (or press Enter to skip): ', (title: string) => {
//                             readline.question('Enter new description (or press Enter to skip): ', (description: string) => {
//                                 taskList.editTask(taskId, title || undefined, description || undefined);
//                                 showMenu();
//                             });
//                         });
//                     });
//                     break;
//                 case 'D':
//                     readline.question('Enter task ID to delete: ', (id: string) => {
//                         const taskId = parseInt(id);
//                         taskList.deleteTask(taskId);
//                         showMenu();
//                     });
//                     break;
//                 case 'T':
//                     readline.question('Enter task ID to toggle status: ', (id: string) => {
//                         const taskId = parseInt(id);
//                         taskList.toggleTaskStatus(taskId);
//                         showMenu();
//                     });
//                     break;
//                 case 'L':
//                     taskList.displayTasks();
//                     showMenu();
//                     break;
//                 case 'Q':
//                     console.log("Goodbye!");
//                     readline.close();
//                     break;
//                 default:
//                     console.log("Invalid command. Please try again.");
//                     showMenu();
//                     break;
//             }
//         });
//     }

//     showMenu();
// }

// // Start the application
// main();
