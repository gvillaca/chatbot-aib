import { Component, OnInit } from "@angular/core";
import { discardPeriodicTasks } from "@angular/core/testing";

@Component({
  selector: "app-chat-widget",
  templateUrl: "./chat-widget.component.html",
  styleUrls: ["./chat-widget.component.css"],
})
export class ChatWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  conversa: any[] = [];

  inputMsg: string;

  submit() {
    if (!this.inputMsg) {
      return;
    }
    let m = { id: 1, msg: this.inputMsg, user: "Gustavo", data: Date.now() };
    this.conversa.push(m);

    this.respostaBot(m);

    this.inputMsg = "";
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async respostaBot(m) {
    await this.delay(500);
    if (m.msg == "Olá") {
      this.conversa.push({
        id: 2,
        msg: "Olá, como vai você?",
        user: "Robô",
        data: Date.now(),
      });
      return;
    }
    if (m.msg == "Qual o seu nome?") {
      this.conversa.push({
        id: 2,
        msg: "Eu sou a Inteligencia Artificial AIB",
        user: "BIA",
        data: Date.now(),
      });
      return;
    }
  }
}
