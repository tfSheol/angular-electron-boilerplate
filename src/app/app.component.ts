import { Component, OnInit } from '@angular/core';
import { ElectronService } from './core/services/electron/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'electron-boilerplate';

  constructor(private electronService: ElectronService) { }

  ngOnInit() {

  }
}
