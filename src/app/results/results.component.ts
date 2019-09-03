import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  questions: any[] = [];
  userScore: object[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.questions = this.quizService.sendQuestions();
    this.userScore.push(this.quizService.sendScore());
    console.log(this.questions);
  }

  showScores() {
    this.quizService.showScores();
  }
}
