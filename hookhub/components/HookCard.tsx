import type { Hook } from "@/types/hook";

const categoryColors: Record<Hook["category"], string> = {
  "Formatting & Linting": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "Testing":              "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  "Git & VCS":            "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  "Notifications":        "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  "Security & Policy":    "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  "Observability":        "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  "Productivity":         "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
  "Other":                "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
};

export function HookCard({ hook }: { hook: Hook }) {
  return (
    <a
      href={hook.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-xl border border-black/[.08] dark:border-white/[.08] bg-white dark:bg-zinc-900 p-5 transition-all hover:border-black/[.16] dark:hover:border-white/[.16] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
    >
      <span
        className={`self-start rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[hook.category]}`}
      >
        {hook.category}
      </span>

      <h3 className="font-semibold text-foreground leading-snug">
        {hook.name}
      </h3>

      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">
        {hook.description}
      </p>

      <div className="flex items-center justify-between pt-1">
        {hook.author ? (
          <span className="text-xs text-zinc-400 dark:text-zinc-500">@{hook.author}</span>
        ) : (
          <span />
        )}
        <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500 group-hover:text-foreground transition-colors">
          View on GitHub →
        </span>
      </div>
    </a>
  );
}
