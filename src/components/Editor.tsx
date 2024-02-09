import { ChangeEvent, useEffect, useRef } from "react";
import { Header } from "./Header";
import { useDataStore } from "../store/data";

export const Editor = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const setMarkdown = useDataStore().setMarkdown;

  const defaultMarkdown =
    "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.value = defaultMarkdown;
      setMarkdown(defaultMarkdown);
    }
  }, []);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  const clear = () => {
    if (textareaRef.current) {
      textareaRef.current.value = "";
      setMarkdown("");
    }
  };

  return (
    <div className="flex h-full w-full flex-col gap-2 rounded-xl bg-gradient-to-r  from-slate-400 to-slate-600 p-2">
      <div className="flex items-center justify-between">
        <Header title="Editor" />
        <button
          className="rounded-lg bg-red-500 px-4 py-1 text-sm text-white shadow-lg"
          onClick={clear}
        >
          Clear
        </button>
      </div>
      <textarea
        ref={textareaRef}
        name="editor"
        id="editor"
        className="h-full w-full resize-none rounded-lg bg-white bg-opacity-70 p-4 text-black shadow-lg outline-none"
        onChange={handleChange}
      />
    </div>
  );
};
