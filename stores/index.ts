import CounterStore from "./counter";
import TodoStore from "./todo";

export default class RootStore {
  public counter: CounterStore;
  public todo: TodoStore;

  constructor() {
    this.counter = new CounterStore(this);
    this.todo = new TodoStore(this);
  }
}