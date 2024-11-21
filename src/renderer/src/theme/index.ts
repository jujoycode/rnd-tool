import { createTheme, MantineColorsTuple, MantineTheme } from '@mantine/core'

const myColor: MantineColorsTuple = [
  '#f1f8ef',
  '#e4ece2',
  '#c9d7c5',
  '#abc1a4',
  '#91af89',
  '#81a377',
  '#789e6d',
  '#65895b',
  '#597a4f',
  '#4a6a41'
]

const toolTheme = createTheme({
  primaryColor: 'myColor',
  defaultRadius: 'md',
  colors: {
    myColor
  }
}) as MantineTheme

export default toolTheme
