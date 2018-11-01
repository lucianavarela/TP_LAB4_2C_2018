import { Component, OnInit, ViewChild } from '@angular/core';
import { LogService } from '../../services/log/log.service';
import { Log } from '../../classes/log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs: Array<Log>;
  message: string = '';

  constructor(public log_service: LogService) {
    this.logs = new Array<Log>();
  }

  ngOnInit() {
    this.updateList();
  }

  updateList() {
    this.log_service.traerLogs()
      .then(data => {
        this.logs = Log.toLog(data);
      })
      .catch(e => {
        console.info(e);
      });
  }

  triggerPopup(message: string) {
    this.message = message;
  }
}
