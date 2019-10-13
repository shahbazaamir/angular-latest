import { Component, OnInit } from '@angular/core';
import {QuizService} from '../quiz.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(quizService : QuizService) { }

  ngOnInit() {
  }

}