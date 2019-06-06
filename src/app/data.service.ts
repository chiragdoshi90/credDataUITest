import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getInvitationData() {
    return this.http.get('assets/invitations.json');
  }

  getUpdatedInvitationData() {
    return this.http.get('assets/invitations_update.json');
  }
}
