import { Injectable } from '@angular/core';

import * as PouchAdapterIdb from 'pouchdb-adapter-idb';
import {
  createRxDatabase,
  addRxPlugin,
  RxDatabase
} from 'rxdb/plugins/core';

addRxPlugin(PouchAdapterIdb);

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private db: RxDatabase = <any>{};

  constructor() { }
  
  public async connect() {
    this.db = await createRxDatabase({
      name: 'db',
      adapter: 'idb',
      ignoreDuplicate: true,
      multiInstance: true,
      eventReduce: false
    });
  }
}
