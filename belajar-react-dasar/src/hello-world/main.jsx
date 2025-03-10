import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import Container from "./Container.jsx";
import TodoList from "./todolist/TodoList.jsx";
import Table from "./table/Table.jsx";
import AlertButton from "../button/AlertButton.jsx";
import MyButton from "../button/MyButton.jsx";
import Toolbar from "../button/Toolbar.jsx";
import SearchForm from "../form/SearchForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <Table />
      <AlertButton text="Click Me" message="You click me" />

      <MyButton text="Smash Me" onSmash={() => alert("You smash me")} />
      <MyButton text="Hit Me" onSmash={() => alert("You hit me")} />

      <Toolbar
        onClick={(e) => {
          e.stopPropagation();
          alert("You click toolbar");
        }}
      />

      <SearchForm />
    </Container>
  </StrictMode>
);
