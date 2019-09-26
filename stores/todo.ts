import { observable, action } from "mobx";

interface TodoItem {
  // id: string;
  // text: string;
  // completed: boolean;
  id: number;
  completed: boolean;
  title: string;
  userId: number;
}

export default class TodoStore {
  @observable 
  list: TodoItem[] = [];

  constructor(public root: any) {
    this.root = root;
  }

  @action
  add = (item: TodoItem) => {
    this.list.push(item)
  }

  @action
  getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => { 
      this.list.push(data); 
    });
  }
}

