#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';

let paragraph: {
    text: string
} = await inquirer.prompt([
    {
        type: "string",
        name: "text",
        message: "Enter a paragraph: "
    }
])
console.log(paragraph);

const words = paragraph.text.trim().split(" ")
const wordsLength = words.length
console.log(`The word count of your entered paragraph is ${chalk.blueBright(wordsLength)}.`);

