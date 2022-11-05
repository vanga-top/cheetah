import '../common/error'
import { createApp } from 'vue'
import App from './App'

import {rendererSend, rendererInvoke, NAMES } from '@common/ipc'


rendererInvoke(NAMES.mainWindow.get_setting).then(( setting, version ) => {
    global.appSetting = setting
    // Set language automatically
  if (!window.i18n.availableLocales.includes(setting.langId)) {
    let langId = null
    let locale = window.navigator.language.toLocaleLowerCase()
    if (window.i18n.availableLocales.includes(locale)) {
      langId = locale
    } else {
      for (const lang of langList) {
        if (lang.alternate == locale) {
          langId = lang.locale
          break
        }
      }
      if (langId == null) langId = 'en-us'
    }
    setting.langId = langId
    rendererSend(NAMES.mainWindow.set_app_setting, setting)
    console.log('Set lang', setting.langId)
  }

  createApp({
    data() {
      return {
        count: 0
      }
    }
  }).mount('#root')
  
//   const app = createApp(App)
  console.log("create vue app success....start mount #root")
//   app.mount('#root')
})