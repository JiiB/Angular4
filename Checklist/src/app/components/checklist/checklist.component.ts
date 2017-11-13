import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionsService } from '../../providers/questions.service';
import { Question } from '../../models/Question';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../core/auth.service';
import { Category } from '../../models/Category';


@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit, OnDestroy {
questions: Question[];
categories: Category[];
private subscription: Subscription[] = [];
  constructor(public questionsService: QuestionsService, public auth: AuthService) {}

  ngOnInit() {
    this.subscription.push(this.questionsService.getQuestions().subscribe(questions => {
      this.questions = questions;
    }));
    this.subscription.push(this.questionsService.getCategorys().subscribe(categories => {
      this.categories = categories;
    }));
  }


  checkbox(id) {
    console.log(`Clicked: ${id}`);
  }
  ngOnDestroy() {
    this.subscription.forEach(sub => {
      sub.unsubscribe();
    });
  }

}
