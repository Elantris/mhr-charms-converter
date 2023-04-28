import i18n, { InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './assets/en.json'
import jp from './assets/jp.json'
import kr from './assets/kr.json'
import zh_hans from './assets/zh_hans.json'
import zh_hant from './assets/zh_hant.json'

export const languages: {
  name: string
  code: string
  file: Record<string, Record<string, string>>
}[] = [
  {
    name: '正體中文',
    code: 'zh_hant',
    file: zh_hant,
  },
  {
    name: '日本語',
    code: 'jp',
    file: jp,
  },
  {
    name: 'English',
    code: 'en',
    file: en,
  },
  {
    name: '한국말',
    code: 'kr',
    file: kr,
  },
  {
    name: '简中',
    code: 'zh_hans',
    file: zh_hans,
  },
]

const resources: InitOptions['resources'] = Object.fromEntries(
  languages.map(language => [language.code, { translation: language.file }]),
)

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('i18n-language') || 'zh_hant',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
