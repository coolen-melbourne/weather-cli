import {printSuccess,printError, printHelp} from './services/log.service.js'
import getArgs from './helpers/arg.js'
import { saveKeyValue } from './services/storage.service.js'
import { Token_Dictionary } from './services/storage.service.js';
import { getWeather } from './services/api.service.js';

const saveToken = async (token) => {
    if (!token.length) {
        printError('Token doesn\'t exist');
        return;
    }
    try {
        await saveKeyValue(Token_Dictionary.token, token);
        printSuccess('Token was saved');
    } catch (error) {
        printError(error.message);
    }
};

const startCLI = ()=>{
    const args = getArgs(process.argv)
    

    
    if (args.h){
        printHelp()
        //help
    }
    if(args.s){
        //save city
    }
    if (args.t){
        return saveToken(args.t)
        //save token
    }
    getWeather('uzbekistan')
    //result

}

startCLI()
