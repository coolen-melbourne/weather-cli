import https from 'https'
import { getKeyValue, Token_Dictionary } from './storage.service.js';

const getWeather = async (city) => {
    const token = await getKeyValue(Token_Dictionary.token); // `await` qo'shildi

    if (!token) {
        throw new Error('This API key doesn\'t exist. Use -t [API_KEY] to save the token.');
    }

    const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    url.searchParams.append('q', city);
    url.searchParams.append('appid', token);
    url.searchParams.append('lang', 'en');
    url.searchParams.append('units', 'metric');
    //append umumiy holda malumotlarni birlashtirib beradi!

    https.get(url, (response) => {
        let res = ''; 
        response.on('data', (chunk) => {
            res += chunk;
        });
        response.on('end', () => {
            console.log(res);
        });
    });
};

export { getWeather };
