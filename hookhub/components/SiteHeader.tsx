export function SiteHeader() {
  return (
    <header className="border-b border-black/[.08] dark:border-white/[.08]">
      <div className="mx-auto max-w-6xl px-6 py-5">
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">HookHub</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Discover community-built Claude Code hooks
          </p>
        </div>
      </div>
    </header>
  );
}
