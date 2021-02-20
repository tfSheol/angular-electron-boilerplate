import { createTestClient, WorkerTestingClient } from 'angular-web-worker/testing';
import { AppWorker } from './app.worker';

describe('AppWorker', () => {

    // decorated methods/properties should always be tested through the WorkerTestingClient to mock the serialization behaviour
    let client: WorkerTestingClient<AppWorker>;

    beforeEach(() => {
        client = createTestClient(AppWorker);
    });

    it('Some test', async () => {

        // this will call the onWorkerInit hook and allow the decorated methods/properties to be called/accessed through the client
        await client.connect();

        // get access to the underlying worker class
        // client.workerInstance
    });

});
