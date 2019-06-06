import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crestDataNotification';

  dataSrc;

  constructor(private dataService: DataService, private toastr: ToastrService) {}

  ngOnInit () {
    this.dataService.getInvitationData().subscribe((data: any) => {
      this.dataSrc = data.invites;
    });

    setTimeout(() => {
      this.dataService.getUpdatedInvitationData().subscribe((data: any) => {
        this.dataSrc.map((element, index, obj) => {
          data.invites.forEach((newData, i, db) => {
            if (element.invite_id === newData.invite_id) {
              obj.splice(index, 1, newData);
              db.splice(i, 1);
            }
          });
        });
        this.dataSrc = [...this.dataSrc, ...data.invites];
        this.toastr.success('Invitation Updated!');
      });
    }, 3000);

  }
}
