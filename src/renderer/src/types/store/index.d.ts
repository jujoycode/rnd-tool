import { OperationType, SourceType } from "../features/source";

export type GlobalStore = {
  menuIndex: number;

  setMenuIndex: (index: number) => void;
};

export type WorkStore = {
  progress: number;
  eventLogs: EventLog[];

  setProgress: (progress: number) => void;
  setEventLogs: (eventLogs: EventLog[]) => void;
}

export type SourceStore = {
  operation: OperationType | null;
  source: SourceType | null;
  drawerOpened: boolean;
  sourceConfig: {
    [K in SourceType]: Record<string, any>;
  };

  setOperation: (operation: OperationType | null) => void;
  setSource: (source: SourceType | null) => void;
  setDrawerOpened: (isOpen: boolean) => void;
  updateSourceConfig: (sourceType: SourceType, config: Record<string, any>) => void;
  resetSourceConfig: (sourceType: SourceType) => void;
};