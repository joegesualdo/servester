#!/usr/bin/env node

var fs = require('fs');
var spawn = require('child_process').spawn;
var chalk = require('chalk');
var ncp = require('ncp').ncp;
ncp.limit = 16;
var pathExists = require(__dirname + '/../helpers').pathExists
var getDirectories = require(__dirname + '/../helpers').getDirectories

var applicationType = process.argv[2];
var applicationName = process.argv[3];
var structuresPath = __dirname + "/../structures"
var availableApplicationTypes = getDirectories(structuresPath)
var applicationTypeStructurePath = __dirname + "/../structures/" + applicationType;

// Check cli options
if (applicationType === undefined) {
  console.log(chalk.red("Error  ") + "Application type must be provided.")
  console.log("Available application types:");
  availableApplicationTypes.forEach(function(type) {
    console.log("  - " + type);
  });
  console.log("Example: servester react my-react-app")
  process.exit()
}
if (applicationName === undefined) {
  console.log(chalk.red("Error  ") + "Application name must be provided.")
  console.log("Example:\n  $ servester react my-react-app")
  process.exit()
}

function createApplication(name, path) {
  console.log(chalk.yellow("Creating application..."));
  ncp(path, process.cwd() + "/" + name, function (err) {
    if (err) {
      console.log(chalk.red("Error  ") + "Something went wrong when attempting to create the application.")
      console.log(err)
      process.exit()
    } else {
      console.log(chalk.green('  Created: ') + "  " + process.cwd() + "/" + name);
      console.log(chalk.yellow("Installing dependencies..."));
      // {stdio: 'inherit'} will print the colorized output of the npm install
      var npm = spawn('npm', ['install'], { cwd: process.cwd() + "/" + name, stdio: "inherit"});
      npm.on('exit', function (code) {
        process.exit()
      });
    }
  });
}


try {
  pathExists(applicationTypeStructurePath, function(err, pathExists) {
    if (!pathExists) {
      console.log(chalk.red("Error  ") + "'" + applicationType + "' is not a valid application type.")
      console.log("Available application types:");
      availableApplicationTypes.forEach(function(type) {
        console.log("  - " + type);
      });
      process.exit()
    } else {
      createApplication(applicationName, applicationTypeStructurePath)
    }
  })
} catch (e) {
  console.log(chalk.red("Error  ") + "There was an error.\n" + e)
}


