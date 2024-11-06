import { ActionsGrid } from "@renderer/components/ActionGrid";
import type { ActionItem } from "@renderer/interface";

export function Deploy(): JSX.Element {
  const actionItems: ActionItem[] = [
    {
      title: "Application",
      icon: "AppWindowMac",
    },
    {
      title: "Studio",
      icon: "WandSparkles",
    },
    {
      title: "Lambda Map",
      icon: "Map",
    },
  ];

  return (
    <>
      <ActionsGrid ActionItems={actionItems} />
    </>
  );
}
