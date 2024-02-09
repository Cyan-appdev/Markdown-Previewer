import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-800 p-1 ">
      <div className="flex h-full w-full max-w-[2560px] flex-col gap-4 p-4">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-end">
          <h1 className="text-3xl text-white">Markdown Previewer App</h1>
          <p className="text-sm text-cyan-500">Designed and coded by CyanDev</p>
        </div>

        <div className="flex h-[calc(100%-100px)] w-full flex-col justify-center gap-4  md:h-[calc(100%-50px)] md:flex-row">
          <div className="h-1/2 w-full md:h-full md:w-1/2">
            <Editor />
          </div>
          <div className="h-1/2 w-full md:h-full md:w-1/2">
            <Preview />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
