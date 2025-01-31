import { error, log } from 'console'
import os from 'os'
import path from 'path';
import fs from 'fs'// fayllarni create qiliwda yordam beradi.
import { json } from 'stream/consumers';


const filePath = path.join(os.homedir(), 'weather-data.json');

const Token_Dictionary = {
    token: 'token',
    city: 'city'
};

const saveKeyValue = async (key, value) => {
    let data = {};
    if (await isExist(filePath)) {
        const file = await fs.promises.readFile(filePath);
        data = JSON.parse(file);
    }
    data[key] = value;
    await fs.promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
    if (await isExist(filePath)) {
        const file = await fs.promises.readFile(filePath);
        const data = JSON.parse(file);
        return data[key];
    }
    return undefined;
};

const isExist = async (path) => {
    try {
        await fs.promises.stat(path);
        return true;
    } catch {
        return false;
    }
};

// ❌ Eskirgan noto'g'ri eksportni o'chiring va faqat bitta eksport qiling:
export { saveKeyValue, getKeyValue, Token_Dictionary };
