# 🧠 Custom AI Skills for Engineers & Bloggers

This repository contains a collection of specialized AI skills designed for the **Gemini CLI**, focusing on data engineering, AI research, and high-impact blogging.

## 🚀 Skills Included

### 📝 Blogger Skill
A comprehensive writing companion that helps you craft engaging content for LinkedIn, technical blogs, and deep-dive research.
- **Personal Narrative**: Story-first frameworks for human-centric posts.
- **Technical Engineering**: Evidence-led templates for solving concrete problems.
- **Research Deep Dives**: Detailed methodology and comparative frameworks for complex technical investigations.

## 📦 Installation

You can install all skills in this repository directly using `npx`:

```bash
npx @hoaihuongbk/skills
```

*Note: This will install the skills into your current workspace scope. To enable them, run `/skills reload` in your interactive Gemini session.*

### Global Installation (User Home)
To install the skills at the user level (available in all your projects), use the `--global` flag:

```bash
npx @hoaihuongbk/skills --global
```

*Note: This will install the skills into your `~/.gemini/skills` directory.*

### Manual Installation
If you prefer to install a specific skill manually:

```bash
# Workspace level
gemini skills install ./skills/blogger --scope workspace

# User level (Global)
gemini skills install ./skills/blogger --scope user
```

## 🛠 Usage in Gemini CLI

Once installed, the skills will automatically trigger when your request matches their description. You can also explicitly invoke them if needed.

Example prompts:
- "Help me write a technical blog post about Spark Connect."
- "I want to share a personal story about a mentor I met today."
- "Write a deep-dive research paper comparing Iceberg and Hudi change queries."

## 🤖 Cross-Agent Usage

While this repository is optimized for the **Gemini CLI**, the instructions are highly portable. Here is how to use these skills in other agents:

### 🎭 Claude (Claude.ai Projects)
1. Create a new **Project** in Claude.ai.
2. Upload the `skills/blogger/SKILL.md` and `skills/blogger/references/*.md` files to the **Project Knowledge**.
3. Claude will automatically use these frameworks as context for your writing tasks within that project.

### 💻 GitHub Copilot / Codex / VS Code
1. Ensure the skills are in your open workspace.
2. In **Copilot Chat**, use the `#file` or `#codebase` variable to reference the specific writing style:
   - *"Help me write a post using the rules in #personal_writing.md"*
3. For project-wide rules, you can copy the content of the `.md` files into a `.github/copilot-instructions.md` file.

### 🚀 Cursor
1. This repo includes a `.cursor/rules` directory.
2. Cursor will automatically detect these rules if you open this folder.
3. You can also copy the `.md` files into your own project's `.cursorrules` or `.cursor/rules/` folder.

## 📦 Installation


Feel free to open issues or PRs to add new skills or improve existing ones.

---
Created by [Huong Vuong](https://github.com/huongvuong)
