import { createTheme, MantineTheme, type MantineColorsTuple } from "@mantine/core";

export const themeColor: MantineColorsTuple = [
  "#eff8f0",
  "#e3ece4",
  "#c6d6c8",
  "#a7bfaa",
  "#8cab90",
  "#7b9f7f",
  "#719976",
  "#5f8564",
  "#537757",
  "#436749",
];

export const myTheme = createTheme({
  colors: {
    themeColor,
  },
  focusRing: "auto",
}) as MantineTheme;