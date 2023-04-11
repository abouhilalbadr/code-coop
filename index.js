#!/usr/bin/env node

import cfonts from 'cfonts';
import chalk from 'chalk';
import inquirer from 'inquirer';
import * as fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import createDirectoryContents from './createDirectoryContents.js';
const CURR_DIR = process.cwd();
const __dirname = dirname(fileURLToPath(import.meta.url));

const CHOICES = fs.readdirSync(`${__dirname}/templates`);
let projectName;
let projectChoice;
const QUESTIONS = [
    {
        name: 'project-choice',
        type: 'list',
        message: 'What project template would you like to generate ?',
        choices: CHOICES,
    },
    {
        name: 'project-name',
        type: 'input',
        message: 'Project name:',
        validate: function (input) {
            if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;
            else
                return 'Project name may only include letters, numbers, underscores and hashes.';
        },
    },
];
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

const welcome = async () => {
    cfonts.say('Code Coop CLI', {
        font: 'block', // define the font face
        align: 'left', // define text alignment
        colors: ['system'], // define all colors
        background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
        letterSpacing: 1, // define letter spacing
        lineHeight: 1, // define the line height
        space: true, // define if the output text should have empty lines on top and on the bottom
        maxLength: '0', // define how many character can be on one line
        gradient: false, // define your two gradient colors
        independentGradient: false, // define if you want to recalculate the gradient for each new line
        transitionGradient: false, // define if this is a transition between colors directly
        env: 'node', // define the environment cfonts is being executed in
    });
    await sleep();
    console.log(`
        HOW TO USE THIS CLI:
        > choose your favorite stack.
        > name your project.
        > wait for the magic to happen.
    `);
};

const run = async () => {
    const answers = await inquirer.prompt(QUESTIONS);
    projectChoice = answers['project-choice'];
    projectName = answers['project-name'];
    const templatePath = `${__dirname}/templates/${projectChoice}`;

    fs.mkdirSync(`${CURR_DIR}/${projectName}`);

    createDirectoryContents(templatePath, projectName);
};

const finish = () => {
    console.clear();
    cfonts.say('Success!', {
        font: 'block', // define the font face
        align: 'left', // define text alignment
        colors: ['green', 'white'], // define all colors
        background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
        letterSpacing: 2, // define letter spacing
        lineHeight: 1, // define the line height
        space: true, // define if the output text should have empty lines on top and on the bottom
        maxLength: '0', // define how many character can be on one line
        gradient: false, // define your two gradient colors
        independentGradient: false, // define if you want to recalculate the gradient for each new line
        transitionGradient: false, // define if this is a transition between colors directly
        env: 'node', // define the environment cfonts is being executed in
    });
    const startMsg = projectChoice.includes('Native')
        ? `Start development with ${chalk.green(
              'npm run expo start',
          )} or ${chalk.green('yarn expo start')}`
        : projectChoice.includes('Tauri')
        ? `Start development with ${chalk.green(
              'npm run tauri dev',
          )} or ${chalk.green('yarn tauri dev')}`
        : `Start development with ${chalk.green(
              'npm run dev',
          )} or ${chalk.green('yarn dev')}`;
    console.log(
        `${projectName} is ready. You can now run the following commands:\n\n` +
            `> cd ${projectName}\n` +
            `> Install dependencies with ${chalk.green(
                'npm install',
            )} or ${chalk.green('yarn install')}\n` +
            `> ${startMsg}\n` +
            `${
                projectChoice.includes('Chrome')
                    ? `> Drag your ${chalk.green(
                          'dist',
                      )} folder into the Extensions Dashboard to install it. Your extension icon will be in the top bar. The icon will be the first letter of the extension's name.\n`
                    : ''
            }` +
            `> ${chalk.green('Happy Coding!')}\n`,
    );
    process.exit(0);
};

console.clear();
await welcome();
await sleep();
await run();
finish();
