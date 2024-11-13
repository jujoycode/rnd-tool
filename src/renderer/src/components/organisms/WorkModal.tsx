import { useState } from 'react'

import { LogViewer } from '@organisms/LogViewer'

import { ProjectUtil } from '@renderer/util'

import type { EventLog, WorkModalProps } from '@renderer/types'

export function WorkModal({ formData }: WorkModalProps) {
  const [progress, setProgress] = useState(0)
  const [logs, setLogs] = useState<EventLog[]>([])

  const putLog = (logMessage: string) => {
    setLogs((prev) => [
      ...prev,
      {
        id: ProjectUtil.getUUID(),
        message: logMessage,
        timestamp: ProjectUtil.getCurrentTime(),
      },
    ])
  }

  const downloadLambda = async () => {
    // TODO: Implement download logic
  }

  return <LogViewer progress={progress} eventLogs={logs} />
}
