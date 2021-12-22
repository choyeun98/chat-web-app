import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { Provider } from "react-redux";
import store from "../store"; 
import userEvent from '@testing-library/user-event';

test("'chat' button 을 눌렀을 경우 path가 '/chats' 로 변경되어야 한다.", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );

  global.window = { location: { pathname: null } };

  const button = screen.getByRole('button', { name: "chat" });

  userEvent.click(button);

  expect(global.window.location.pathname).toEqual('/chats');
});
