import { Header } from "./Header";
import { useDataStore } from "../store/data";
import Markdown from "marked-react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

SyntaxHighlighter.registerLanguage("jsx", jsx);

export const Preview = () => {
  const markdown = useDataStore().markdown;
  const renderer = {
    code(snippet: string) {
      return (
        <SyntaxHighlighter key={snippet} language="jsx" style={prism}>
          {snippet}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <div className="flex h-full w-full flex-col gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 p-2">
      <Header title="Preview" />
      <div
        id="preview"
        className="parent h-full w-full overflow-auto rounded-lg bg-white bg-opacity-70 p-4 text-black"
      >
        <Markdown
          value={markdown}
          renderer={renderer}
          breaks={true}
          gfm={true}
        />
      </div>
    </div>
  );
};
