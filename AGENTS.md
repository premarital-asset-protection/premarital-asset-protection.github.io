# premarital-asset-protection.github.io

Work on `main`. Do not rebase, stash, or reset. Resolve conflicts semantically.

Astro static marketing site. Never React/JSX. App: https://app.pmap.pro API: https://api.pmap.pro

- GitHub: https://github.com/premarital-asset-protection/premarital-asset-protection.github.io
- Linear: https://linear.app/denman/project/githubcompremarital-asset-protection-082501c371c6

## Repository-local Git worktrees

- Create or use a Git worktree only when the human operator explicitly authorizes it for the current task. Concurrency or a dirty checkout is not permission by itself.
- Put every authorized worktree at `<repository-root>/tmp/worktrees/<name>`; from the repository root, use `./tmp/worktrees/<name>`. Never place worktrees beside repositories or organization directories.
- Keep `tmp`, `temp`, `tmp/worktrees`, and `temp/worktrees` ignored in the repository-root `.gitignore`. Do not commit files from those directories.
- Relocate or remove a worktree only when the operator explicitly requests it. Before removal, preserve and publish intended changes, verify its commit is represented on the target branch, and confirm there are no tracked, untracked, ignored-sensitive, or in-use files that must survive. Remove it with `git worktree remove <path>` without `--force`; never delete a worktree directory with `rm`.
