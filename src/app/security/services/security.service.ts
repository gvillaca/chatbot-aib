import { UserModel } from "./../model/user-model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SecurityService {
  constructor(private http: HttpClient) {}

  LoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(this.checkToken());

  public checkLogin(user: UserModel) {
    return this.http.get(
      "http://localhost:4000/security?username=" +
        user.usuario +
        "&senha=" +
        user.senha
    );
  }

  checkToken(): boolean {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  }
  
}
