export type HookCategory =
  | "Formatting & Linting"
  | "Testing"
  | "Git & VCS"
  | "Notifications"
  | "Security & Policy"
  | "Observability"
  | "Productivity"
  | "Other";

export type Hook = {
  id: string;
  name: string;
  category: HookCategory;
  description: string;
  repoUrl: string;
  author?: string;
};
