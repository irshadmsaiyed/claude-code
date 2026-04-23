import type { Hook } from "@/types/hook";
import { HookCard } from "./HookCard";

export function HookGrid({ hooks }: { hooks: Hook[] }) {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hooks.map((hook) => (
          <HookCard key={hook.id} hook={hook} />
        ))}
      </div>
    </main>
  );
}
