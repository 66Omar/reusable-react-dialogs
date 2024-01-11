export type toDo = {
    id: number,
    userId: number,
    todo: string,
    completed: boolean,
}


export type toDoItemProps = {
  toDo: toDo;
  onDelete: (toDoId: number) => void;
};
