const CustomElectronTitlebar = require('custom-electron-titlebar');

window.addEventListener('DOMContentLoaded', () => {
    new CustomElectronTitlebar.Titlebar({
      backgroundColor: CustomElectronTitlebar.Color.fromHex('#2f3241'),
      shadow: true,
      icon: 'assets/rocket.png'
    });

    const replaceText = (selector: any, text: any) => {
      const element = document.getElementById(selector);
      if (element) element.innerText = text;
    }

    for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, (<any>process).versions[type]);
    }
});