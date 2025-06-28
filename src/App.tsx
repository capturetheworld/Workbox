import { useState, useMemo } from "react";
// import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { Button, Group, Checkbox } from "./components";

import "./App.scss";

const App = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] || null);
  };

  //Memoize parser
  const parsedText = useMemo(() => {
    if (file === undefined || !file) return null;
    const reader = new FileReader();
    let readerResult = "";

    reader.readAsText(file);

    reader.onloadend = (e) => {
      readerResult = e.target?.result as string;
    };

    const parser = new DOMParser();

    console.log("reader result is", readerResult);
    return parser.parseFromString(readerResult, "text/xml");
  }, [file]);

  console.log("Parsed XML:", parsedText);

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
        <input
          onChange={handleonChange}
          type="file"
          id="xml"
          name="xml"
          accept="text/xml"
        />
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
