import { Injectable } from '@angular/core';
import { ipcRenderer, webFrame, remote } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  public ipcRenderer: typeof ipcRenderer = <any>{};
  public webFrame: typeof webFrame = <any>{};
  public remote: typeof remote = <any>{};
  public childProcess: typeof childProcess = <any>{};
  public fs: typeof fs = <any>{};
  public app: Electron.App = <any>{};
  public menu: Electron.Menu = <any>{};

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }

  constructor() {
    if (this.isElectron) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.webFrame = window.require('electron').webFrame;
      this.remote = window.require('electron').remote;
      this.childProcess = window.require('child_process');
      this.fs = window.require('fs');

      this.app = this.remote.app;
      this.menu = <Electron.Menu>this.app.applicationMenu;
    }
  }

  public setMenuIdListener(id: string, listener: Function): void {
    if (this.isElectron) {
      let item = this.menu.getMenuItemById(id);
      if (item) {
        item.click = listener;
        console.log('setMenuIdListener', id, item);
      }
    }
  }

  public getMenuItem(id: string): Electron.MenuItem {
    if (this.isElectron) {
      return <Electron.MenuItem>this.menu.getMenuItemById(id);
    }
    return <Electron.MenuItem>{};
  }
}
