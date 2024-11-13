export declare namespace Source {
  type OperationType = "download" | "update"
  type SourceType = "lambda" | "ecs" | "framework" | "application" | "studio"

  type EventLog = { id: string; message: string; timestamp: string }
}
