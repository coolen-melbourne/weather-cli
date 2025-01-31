import chalk from 'chalk';
import dedent from 'dedent-js';
export const printError = (error) => {
    console.log(chalk.red('ERROR: ') + error);
};

export const printSuccess = (message) => {
    console.log(chalk.green('SUCCESS: ') + message);
};

export const printHelp = ()=>{
    console.log(dedent`
    ${chalk.bgCyan('Help')}
    -s[city] for install city
    -h for help
    -t [API_KEY] for saving token
    `);
    
}
