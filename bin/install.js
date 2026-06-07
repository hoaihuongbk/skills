#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.join(__dirname, '..', 'skills');

const args = process.argv.slice(2);
const isGlobal = args.includes('--global') || args.includes('-g');
const scope = isGlobal ? 'user' : 'workspace';

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
    try {
      execSync(`gemini skills install "${skillPath}" --scope ${scope}`, { stdio: 'inherit' });
    } catch (error) {
      console.error(`Failed to install skill: ${skill}`);
    }
  }

  console.log('\nInstallation complete!');
  console.log('IMPORTANT: You MUST run "/skills reload" in your interactive Gemini CLI session to enable the new skills.');
}

installSkills();
