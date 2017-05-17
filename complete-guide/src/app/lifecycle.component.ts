import { Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit, 
  AfterViewChecked,
  OnDestroy 
        } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `

  `,
  styles: []
})
export class LifecycleComponent implements OnInit,
//  OnChanges,
 DoCheck,
 AfterContentInit,
//  AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy {

  constructor() { }

  // ngOnChanges(changes: SimpleChanges){
  //   console.log("ngOnChanges");
  // }

  ngOnInit() {
    console.log("OnInit");
  }

  ngDoCheck(){
    console.log("ngDoCheck");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }

  // AfterContentChecked(){
  //   console.log("ngDoCheck");
  // }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }

  

}
