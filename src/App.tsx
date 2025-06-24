// import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { Button, Group, Checkbox } from "./components";

import "./App.scss";

const App = () => {
  return (
    <MantineProvider>
      <div>
        <h1>Workbox</h1>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>

      <Group>
        <Button variant="primary" buttonText="Hello" />
        <Button variant="secondary" buttonText="Secondary" />
        <Checkbox label="Show" />
      </Group>
    </MantineProvider>
  );
};

export default App;

// {
/* <a href="https://electron-vite.github.io" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */
// }
