import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GuestBook from "./GuestBook";
import GuestBookForm from "./GuestBookForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GuestBook />
  </StrictMode>
);
