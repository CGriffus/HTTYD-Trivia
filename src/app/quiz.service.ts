import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  score: number = 0;
  username: string;
  userResult: object;

  constructor(private http: HttpClient, private router: Router) {}

  getQuestions(): Observable<any> {
    return this.http.get("http://localhost:4000/questions");
  }

  getScores(): Observable<any> {
    return this.http.get("http://localhost:4000/scores");
  }

  postScores(newScore: object): any {
    return this.http
      .post("http://localhost:4000/scores", newScore)
      .subscribe(response => {
        this.userResult = response;
      });
  }

  calculateScore(form: object, questions: any, username: string): any {
    this.username = username;

    for (let i = 0; i < questions.length; i++) {
      if (form[i] === questions[i].answer) {
        this.score++;
      }
    }
    return (this.userResult = {
      username: this.username,
      score: this.score
    });
  }

  showResults() {
    this.router.navigate(["results"]);
  }
}
