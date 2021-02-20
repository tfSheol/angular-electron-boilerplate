import { Component, OnInit } from '@angular/core';
import { WorkerClient, WorkerManager } from 'angular-web-worker/angular';
import { DbService } from './core/services/db/db.service';
import { ElectronService } from './core/services/electron/electron.service';
import { AppWorker } from './worker/app.worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'electron-boilerplate';

  private client: WorkerClient<AppWorker> = <WorkerClient<AppWorker>>{};

  constructor(
    private electronService: ElectronService,
    private dbService: DbService,
    private workerManager: WorkerManager
  ) { }

  ngOnInit() {
    if (this.workerManager.isBrowserCompatible) {
      console.log('The browser supports web workers.');
      this.client = this.workerManager.createClient(AppWorker);
    } else {
      // if code won't block UI else implement other fallback behaviour
      console.log('The browser doesn\'t supports web workers.');
      this.client = this.workerManager.createClient(AppWorker, true);
    }

    this.client.connect();
    this.dbService.connect();

    this.electronService.setMenuIdListener('test:sub:1', () => {
      console.log('test menu item custom listener test:sub:1');
    });

    this.electronService.setMenuIdListener('test:sub:2', () => {
      console.log('click on test:sub:2');
    });
  }
}
