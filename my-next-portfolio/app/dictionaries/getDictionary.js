import { ko } from './ko';
import { en } from './en';
import { ja } from './ja';

const dictionaries = {
    ko,
    en,
    ja,
};

export const getDictionary = (lang) => dictionaries[lang] || dictionaries.ko;
