import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proberty-binding',
  template: `
    <p>
      {{name}}    
    </p>
  `,
  styles: []
})
export class ProbertyBindingComponent{

  @Input('nameData') name: string;

}
