import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  score: number = 0;
  username: string;

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any> {
    return this.http.get("http://localhost:4000/questions");
  }

  getScores(): Observable<any> {
    return this.http.get("http://localhost:4000/scores");
  }

  postScores(newScore: object): Observable<any> {
    return this.http.post("http://localhost:4000/scores", newScore);
  }

  calculateScore(form: object, questions: any, username: string): any {
    this.username = username;

    for (let i = 0; i < questions.length; i++) {
      if (form[i] === questions[i].answer) {
        this.score++;
      }
    }

    console.log(this.score);
  }
}
