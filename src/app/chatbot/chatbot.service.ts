import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

let msg = {
  lang: "pt-br",
  query: "",
  sessionId: "12345",
};

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: "Bearer e228c76aa6a54ce9b14a33b0980aacdf",
  }),
};

@Injectable({
  providedIn: "root",
})
export class ChatbotService {
  constructor(private http: HttpClient) {}

  talk(inputMsg: string) {
    msg.query = inputMsg;
    
    return this.http.post(
      "https://api.dialogflow.com/v1/query?v=20150910",
      msg,
      httpOptions
    );
  }
}
