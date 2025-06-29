import { useState, useEffect, ChangeEvent } from "react";
// import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { Button, Group, Checkbox } from "./components";

import "./App.scss";

const App = () => {
  const [file, setFile] = useState<File | null>(null);
  const [parsedText, setParsedText] = useState<Document | null>(null);

  const handleonChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] || null);
  };

  const getXMLNode = (xml: XMLDocument, nodeName: string): XMLDocument => {
    const nodes = xml.getElementsByTagName(nodeName);
    if (nodes.length > 0) {
      return nodes[0];
    }
    return null;
  };

  // Effect to read file and parse XML
  useEffect(() => {
    if (!file) {
      setParsedText(null);
      return;
    }

    const reader = new FileReader();
    let isCancelled = false;

    reader.onloadend = (e) => {
      if (isCancelled) return;

      const content = e.target?.result as string;

      if (content) {
        const parser = new DOMParser();
        const parsed = parser.parseFromString(content, "text/xml");
        setParsedText(parsed);

        //Get Audio Outputs
        console.log(
          getXMLNode(getXMLNode(parsed, "AudioMapping"), "AudioOutputs")
        );
        console.log(
          getXMLNode(getXMLNode(parsed, "AudioMapping"), "AudioSources")
        );
      }
    };

    reader.readAsText(file);

    // Cleanup function
    return () => {
      isCancelled = true;
      if (reader.readyState === FileReader.LOADING) {
        reader.abort();
      }
    };
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
