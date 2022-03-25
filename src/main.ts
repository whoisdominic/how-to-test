import chalk from 'chalk';
import figlet from 'figlet';

const log = console.log;

// Welcome message
figlet("Dominic's Toolkit", function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});
log(
  chalk.blue(
    "🤖: Welcome to Dominic's toolkit 🚀\n    This is an open source and free to use tool.\n    With it I will be providing some usefull scripts\n    and code generation for various uses in Typescript\n    You may select from the list of available commands... ",
  ),
);
