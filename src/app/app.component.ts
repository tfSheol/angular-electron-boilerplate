import { Component, OnInit } from '@angular/core';
import { WorkerClient, WorkerManager } from 'angular-web-worker/angular';
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

  constructor(private electronService: ElectronService, private workerManager: WorkerManager) { }

  ngOnInit() {
    if (this.workerManager.isBrowserCompatible) {
      this.client = this.workerManager.createClient(AppWorker);
    } else {
      // if code won't block UI else implement other fallback behaviour
      this.client = this.workerManager.createClient(AppWorker, true);
    }

    this.client.connect();
  }
}
