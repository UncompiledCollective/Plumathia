import { Component, HostBinding, Input } from '@angular/core';
import { ToolbarBoxComponent } from '../toolbar-box/toolbar-box.component';
import { NgFor, NgIf } from '@angular/common';
import { PictureHolderComponent } from '../picture-holder/picture-holder.component';
import { IfcSourceInterface } from '../../SharedModules/interfaces';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ToolbarBoxComponent, NgFor, PictureHolderComponent, NgIf],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Input() className: string = "";
  @Input() theme: string = "light";
  @Input() textArray: Array<string> = [];
  @Input() sourceArray: IfcSourceInterface = { numbers: [], sources: [] };
  constructor() {
  }
  method = () => {
    console.log(this.sourceArray, '\n', this.sourceArray.numbers, '\n', this.sourceArray.sources);
  }
}
