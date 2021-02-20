import { AngularWebWorker, bootstrapWorker, OnWorkerInit } from 'angular-web-worker';
/// <reference lib="webworker" />

@AngularWebWorker()
export class AppWorker implements OnWorkerInit {

    constructor() {}

    onWorkerInit() {
        console.log("on app worker");
    }

}
bootstrapWorker(AppWorker);
