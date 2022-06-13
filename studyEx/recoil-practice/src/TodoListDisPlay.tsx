import { MouseEvent } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import { checkTodoItem } from "./store";
import { todoListArrayAtom } from "./store";

export function TodoListDisPlay() {
  const [todoListArray, setTodoListArray] = useRecoilState(todoListArrayAtom);
  const checkTodo = useRecoilValue(checkTodoItem);

  const handleDeleteOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target;
    if (target instanceof Element) {
      setTodoListArray((todoListArr) =>
        todoListArr.filter((todoItem) => todoItem.id !== parseInt(target.id))
      );
    }
  };
  const handleCheckOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target;
    if (target instanceof Element) {
      setTodoListArray((todoListArr) =>
        todoListArr.map((todoItem) =>
          todoItem.id !== parseInt(target.id)
            ? todoItem
            : { ...todoItem, checked: !todoItem.checked }
        )
      );
    }
  };

  return (
    <>
      <div>{checkTodo}</div>
      {todoListArray.map((todoListItem) => (
        <div key={todoListItem.id}>
          {todoListItem.checked ? (
            <CheckedSpan
              onClick={handleCheckOnClick}
              id={String(todoListItem.id)}
            >
              {todoListItem.todoValue}
            </CheckedSpan>
          ) : (
            <span onClick={handleCheckOnClick} id={String(todoListItem.id)}>
              {todoListItem.todoValue}
            </span>
          )}
          <button id={String(todoListItem.id)} onClick={handleDeleteOnClick}>
            삭제
          </button>
        </div>
      ))}
    </>
  );
}

const CheckedSpan = styled.span`
  text-decoration: line-through;
`;
