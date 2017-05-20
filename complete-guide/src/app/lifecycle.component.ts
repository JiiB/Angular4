import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
<div>
  {{name}}
</div>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  // AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

    @Input() name: string;

  constructor() {

  }

   ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    console.log("OnInit");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  // AfterContentChecked() {
  //   console.log("ngDoCheck");
  // }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }



}
