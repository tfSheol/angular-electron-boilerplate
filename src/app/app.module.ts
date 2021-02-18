import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WorkerModule } from 'angular-web-worker/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppWorker } from './worker/app.worker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    WorkerModule.forWorkers([
      { worker: AppWorker, initFn: () => new Worker('./worker/app.worker.ts', { type: 'module' }) },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
