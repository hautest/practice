import { atom, selector } from "recoil";

interface todoListArrayAtomInterface {
  todoValue: string;
  id: number;
  checked: boolean;
}

export const todoListArrayAtom = atom<todoListArrayAtomInterface[] | []>({
  key: "todoListArrayAtom",
  default: [],
});

export const checkTodoItem = selector({
  key: "checkTodoItem",
  get: ({ get }) => {
    const todoListArr = get(todoListArrayAtom);
    const unresolvedTodoLen = todoListArr.filter(
      (todoItem) => todoItem.checked === false
    ).length;
    return `남은 할것들 ${unresolvedTodoLen}개 `;
  },
});
