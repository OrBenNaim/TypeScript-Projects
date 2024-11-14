import {TaskList} from './utils';


function main(){
    const myList = new TaskList();
    
    myList.addTask("Walk the dog");
    myList.addTask("Do homework");
    myList.displayList();
}

// Call the main function
main();