import { create } from "zustand";

type DataType = {
  markdown: string;
  setMarkdown: (value: string) => void;
};

export const useDataStore = create<DataType>()((set) => ({
  markdown: "",
  setMarkdown: (value) => set({ markdown: value }),
}));
