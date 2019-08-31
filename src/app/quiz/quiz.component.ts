import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  username: string;
  questions: any[];
  score: number;
  userResult: object;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.getQuestions().subscribe(response => {
      this.questions = response;
    });
  }

  submitForm(form: NgForm) {
    this.userResult = this.quizService.calculateScore(
      form.value,
      this.questions,
      form.value.username
    );
    console.log(this.userResult);
    this.quizService.postScores(this.userResult);

    this.quizService.showResults();
  }
}
