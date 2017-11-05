import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionsService } from '../../providers/questions.service';
import { Question } from '../../models/Question';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../core/auth.service';


@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit, OnDestroy {
questions: Question[];
private subscription: Subscription;
  constructor(public questionsService: QuestionsService, public auth: AuthService) {}

  ngOnInit() {
    this.subscription = this.questionsService.getQuestions().subscribe(questions => {
      this.questions = questions;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
