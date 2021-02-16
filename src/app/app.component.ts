import { Component, HostListener, OnInit } from '@angular/core';
import { Titlebar, Color } from 'custom-electron-titlebar';
import { ElectronService } from './core/services/electron/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'electron-boilerplate';

  constructor(private electronService: ElectronService) { }

  @HostListener('window:DOMContentLoaded', [])
  onKeyUp() {
    if (this.electronService.isElectron) {
      // new Titlebar({
      //   backgroundColor: Color.fromHex('#2f3241'),
      //   shadow: true,
      //   icon: `file://${__dirname}/assets/rocket.png`
      // });

      // const replaceText = (selector: any, text: any) => {
      //   const element = document.getElementById(selector);
      //   if (element) element.innerText = text;
      // }

      // for (const type of ['chrome', 'node', 'electron']) {
      //   replaceText(`${type}-version`, (<any>process).versions[type]);
      // }
    }
  }

  ngOnInit() {

  }
}
