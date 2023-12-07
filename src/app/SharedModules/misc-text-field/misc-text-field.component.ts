import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Source } from '../interfaces';
import { PictureHolderComponent } from '../../toolbar-components/picture-holder/picture-holder.component';

@Component({
  selector: 'app-misc-text-field',
  standalone: true,
  imports: [NgFor, PictureHolderComponent, NgIf],
  templateUrl: './misc-text-field.component.html',
  styleUrl: './misc-text-field.component.scss'
})
export class MiscTextFieldComponent {
  @Input() className: string = "";
  @Input() theme: string = "";
  @Input() textObject: Array<string> = [];
  @Input() imageArray: Source = new Source(0, "", 0);
  @Input() exceptionArray: Array<number> = [];
  constructor() {
    console.log(this.textObject);
  }
}
