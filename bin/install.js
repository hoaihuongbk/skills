#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILLS_DIR = path.join(__dirname, '..', 'skills');
const HOME = os.homedir();

const args = process.argv.slice(2);
const isGlobal = args.includes('--global') || args.includes('-g');
const scope = isGlobal ? 'user' : 'workspace';

/**
 * Updates a global markdown file for other agents (Claude, Codex).
 * @param {string} filePath Absolute path to the config file.
 * @param {string} skillName Name of the skill.
 * @param {string} description Brief description or instruction block.
 */
function updateOtherAgentConfig(filePath, skillName, description) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let content = '';
  if (fs.existsSync(filePath)) {
    content = fs.readFileSync(filePath, 'utf8');
  }

  const markerStart = `<!-- START SKILL: ${skillName} -->`;
  const markerEnd = `<!-- END SKILL: ${skillName} -->`;
  const skillBlock = `${markerStart}\n${description}\n${markerEnd}`;

  if (content.includes(markerStart)) {
    // Update existing block
    const regex = new RegExp(`${markerStart}[\\s\\S]*?${markerEnd}`, 'g');
    content = content.replace(regex, skillBlock);
  } else {
    // Append new block
    content += `\n\n${skillBlock}`;
  }

  fs.writeFileSync(filePath, content.trim() + '\n');
  console.log(`  - Updated agent config: ${filePath}`);
}

function installSkills() {
  if (!fs.existsSync(SKILLS_DIR)) {
    console.error('Skills directory not found.');
    process.exit(1);
  }

  const skills = fs.readdirSync(SKILLS_DIR).filter(file => {
    return fs.statSync(path.join(SKILLS_DIR, file)).isDirectory();
  });

  if (skills.length === 0) {
    console.log('No skills found to install.');
    return;
  }

  console.log(`Found ${skills.length} skill(s): ${skills.join(', ')}`);
  console.log(`Target Scope: ${scope}\n`);

  for (const skill of skills) {
    const skillPath = path.join(SKILLS_DIR, skill);
    console.log(`Installing skill: ${skill}...`);
    
    // 1. Gemini CLI Installation
    try {
      execSync(`gemini skills install "${skillPath}" --scope ${scope}`, { stdio: 'inherit' });
    } catch (error) {
      console.error(`  - Failed to install for Gemini CLI`);
    }

    // 2. Global Agent Installation (Claude, Codex) if global scope requested
    if (isGlobal) {
      const skillFile = path.join(skillPath, 'SKILL.md');
      if (fs.existsSync(skillFile)) {
        const skillContent = fs.readFileSync(skillFile, 'utf8');
        // Simple extraction of the body for other agents
        const body = skillContent.split('---').pop().trim();
        
        // Claude Code: ~/.claude/CLAUDE.md
        updateOtherAgentConfig(path.join(HOME, '.claude', 'CLAUDE.md'), skill, body);
        
        // Codex: ~/.codex/AGENTS.md
        updateOtherAgentConfig(path.join(HOME, '.codex', 'AGENTS.md'), skill, body);
      }
    }
  }

  console.log('\nInstallation complete!');
  console.log('IMPORTANT: Run "/skills reload" in Gemini CLI to enable new skills.');
}

installSkills();
