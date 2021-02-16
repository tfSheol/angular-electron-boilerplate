import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const fs = (<any>window).require("fs");

// import { Titlebar, Color } from 'custom-electron-titlebar'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// window.addEventListener('DOMContentLoaded', () => {
//   new Titlebar({
//     backgroundColor: Color.fromHex('#2f3241'),
//     shadow: true,
//     icon: `file://${__dirname}/assets/rocket.png`
//   });

//   const replaceText = (selector: any, text: any) => {
//     const element = document.getElementById(selector)
//     if (element) element.innerText = text
//   }

//   for (const type of ['chrome', 'node', 'electron']) {
//     replaceText(`${type}-version`, (<any>process).versions[type])
//   }
// })