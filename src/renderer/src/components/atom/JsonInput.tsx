import CodeMirror from '@uiw/react-codemirror'
import { json } from '@codemirror/lang-json'
import { linter, lintGutter } from '@codemirror/lint'
import { xcodeLight } from '@uiw/codemirror-theme-xcode'
import type { JsonInputProps } from '@interfaces/atom'

export default function JsonInput({ value, onChange }: JsonInputProps) {
  const jsonLinter = linter((view) => {
    try {
      JSON.parse(view.state.doc.toString())
      return []
    } catch (e) {
      return [
        {
          from: 0,
          to: view.state.doc.length,
          severity: 'error',
          message: e instanceof Error ? e.message : 'Invalid JSON'
        }
      ]
    }
  })

  return (
    <CodeMirror
      style={{ fontSize: '12px' }}
      height="220px"
      value={value}
      onChange={onChange}
      extensions={[json(), lintGutter(), jsonLinter]}
      theme={xcodeLight}
    />
  )
}
