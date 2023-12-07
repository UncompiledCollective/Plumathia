import { Component, Input } from '@angular/core';
import { PictureHolderComponent } from '../../toolbar-components/picture-holder/picture-holder.component';
import { MiscTextFieldComponent } from '../misc-text-field/misc-text-field.component';
import { NgFor, NgIf } from '@angular/common';
import { Source } from '../interfaces';

@Component({
  selector: 'app-grid-container',
  standalone: true,
  imports: [PictureHolderComponent, MiscTextFieldComponent, NgIf, NgFor],
  templateUrl: './grid-container.component.html',
  styleUrl: './grid-container.component.scss'
})
export class GridContainerComponent {
  @Input() className: string = "";
  @Input() theme: string = "light";
  @Input() textArray: string[][] = [];
  @Input() imageArray: Array<Source> = [];
  @Input() exceptionArray: number[][] = [];
  blindIdiot: Array<Source> = [];
  constructor() {
    this.blindIdiot.push(new Source(0, "", 0));
    this.blindIdiot.push(new Source(0, "", 0));
    this.blindIdiot.push(new Source(0, "", 0));
  }
}
