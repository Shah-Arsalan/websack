#!/usr/bin/env node

const {execSync} = require('child_process');

const runCommand= command => {
    try{
        execSync(`${command}`, {stdio:'inherit'});
    }catch(e){
        console.error(`Failed to execute ${command}`,e);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/shah-arsalan/websack ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the reporsitory with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(code,-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(code,-1);

console.log("Congratulations! You are ready. Follow the following commands to start");
console.log(`cd ${repoName} && npm start`);

