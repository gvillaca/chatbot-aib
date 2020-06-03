import { Component, OnInit } from "@angular/core";
import { SecurityService } from './security/services/security.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  canShow: boolean;

  constructor(private service: SecurityService) {}

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.canShow = true;
    } else {
      this.service.LoggedIn.subscribe(
        (canShow: boolean) => {
          this.canShow = canShow;
        }
      );
    }
  }
}
