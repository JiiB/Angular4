import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { QuestionsService } from '../../providers/questions.service';
import { Question } from '../../models/Question';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../core/auth.service';
import { Category } from '../../models/Category';
import { ChecklistService } from '../../providers/checklist.service';
import { CustomersService } from '../../providers/customers.service';
import { Customer } from '../../models/Customer';


@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit, OnDestroy {
questions: Question[];
categories: Category[];
public checklist: any;
private params: Params;
public customer: Customer;
private subscription: Subscription[] = [];
  constructor(
    public questionsService: QuestionsService,
    public auth: AuthService,
    public cls: ChecklistService,
    public customerService: CustomersService,
    public route: ActivatedRoute) {
      this.route.children[0].params.subscribe((params: Params) => {
        this.params = params;
      });
      this.customerService.getCustomer(this.params.id).subscribe((res) => {
        this.customer = res;
        // console.log(res);
      });
  }

  ngOnInit() {
    this.subscription.push(this.questionsService.getQuestions().subscribe(questions => {
      this.questions = questions;
    }));
    this.subscription.push(this.questionsService.getCategorys().subscribe(categories => {
      this.categories = categories;
    }));
    // add empty obj to current customer
  }


  checkbox(id) {
    console.log(`Clicked: ${id}`);
    console.log(this.questions);

  }
  ngOnDestroy() {
    this.subscription.forEach(sub => {
      sub.unsubscribe();
    });
  }

}
