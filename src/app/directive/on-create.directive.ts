import {Directive, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appOnCreate]'
})
export class OnCreateDirective {

  constructor() { }
  @Output() appOnCreate: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(){
      this.appOnCreate.emit(null);
  }

}
