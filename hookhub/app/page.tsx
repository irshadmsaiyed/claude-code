import hooksData from "@/data/hooks.json";
import type { Hook } from "@/types/hook";
import { SiteHeader } from "@/components/SiteHeader";
import { HookGrid } from "@/components/HookGrid";

export default function Home() {
  const hooks = hooksData as Hook[];
  return (
    <>
      <SiteHeader />
      <HookGrid hooks={hooks} />
    </>
  );
}
