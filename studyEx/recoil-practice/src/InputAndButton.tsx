import { useState, ChangeEvent, FormEvent } from "react";
import { useSetRecoilState } from "recoil";

import { todoListArrayAtom } from "./store";

export function InputAndButton() {
  const [inputValue, setInputValue] = useState("");
  const setTodoListArray = useSetRecoilState(todoListArrayAtom);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoListArray((prevTodoListArray) => [
      ...prevTodoListArray,
      { todoValue: inputValue, id: getId(), checked: false },
    ]);
    setInputValue("");
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <input value={inputValue} onChange={handleOnChange} />
      <button>추가</button>
    </form>
  );
}
let todoItemid = 0;
const getId = () => {
  return todoItemid++;
};
