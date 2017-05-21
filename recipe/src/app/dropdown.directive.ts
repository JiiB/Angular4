import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

@HostListener('click') toggle(){
 this.isOpen = !this.isOpen;
}
@HostBinding('class.open') isOpen = false;
  constructor() { }

}
