import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  apiUrl = "https://danteallievi-finalboss.herokuapp.com/user/login";

  constructor(private http: HttpClient) {}

  loginUserService(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { email, password });
  }
}
