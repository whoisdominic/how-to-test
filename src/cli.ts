import chalk from 'chalk';
import { Command } from 'commander';
export function cli() {
  // Sets up command instance
  const program = new Command();

  const log = console.log;

  // Welcome message
  log(
    chalk.blue(
      "🤖: Welcome to Dominic's toolkit 🚀\n    This is an open source and free to use tool.\n    With it I will be providing some usefull scripts\n    and code generation for various uses in Typescript\n    You may select from the list of available commands...\n",
    ),
  );

  // Start cli setup
  program
    .name("dominic's-toolkit")
    .description("dominic's personal toolkit")
    .version('0.8.0');

  program
    .command('split')
    .description('Split a string into substrings and display as an array')
    .argument('<string>', 'string to split')
    .option('--first', 'display just the first substring')
    .option('-s, --separator <char>', 'separator character', ',')
    .action((str, options) => {
      const limit = options.first ? 1 : undefined;
      console.log(str.split(options.separator, limit));
    });

  // Gen command
  program
    .command('gen')
    .description('generates a template')
    .argument('<string>', 'template choice')
    .action((arg) => {
      console.log('arg', arg);
      switch (arg) {
        case 'http':
          console.warn('http');
          break;
        default:
          console.error('no template found');
          break;
      }
    });

  program.parse();
}
