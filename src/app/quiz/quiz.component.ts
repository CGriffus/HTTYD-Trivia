import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questions: any[];
  userScore: object;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.getQuestions().subscribe(response => {
      this.questions = response;
    });
  }

  submitForm(form: NgForm) {
    this.userScore = this.quizService.calculateScore(
      form.value,
      this.questions,
      form.value.username
    );

    // this.quizService.postScores(this.userScore);

    this.quizService.getResults(this.questions);

    this.quizService.showResults();
  }
}
