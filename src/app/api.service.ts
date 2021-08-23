import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_API_URL = 'https://localhost:5000/api/';
  private username: string = 'demo';
  private password: string = 'airteliq';
  constructor(private httpClient: HttpClient) {}

  public createRoom() {
    return this.httpClient.post(
      this.BASE_API_URL + 'create-room/',
      {},
      {
        headers: new HttpHeaders({
          Authorization: 'Basic ' + btoa(this.username + ':' + this.password)
        })
      }
    );
  }

  public getAuthToken({ tokenData }) {
    return this.httpClient.post(this.BASE_API_URL + 'create-token/', tokenData, {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa(this.username + ':' + this.password)
      })
    });
  }

  public getRoomData({ roomId }) {
    return this.httpClient.get(this.BASE_API_URL + `get-room/${roomId}`, {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa(this.username + ':' + this.password)
      })
    });
  }
}
