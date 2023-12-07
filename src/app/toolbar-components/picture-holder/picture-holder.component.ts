import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-holder',
  standalone: true,
  imports: [NgIf],
  templateUrl: './picture-holder.component.html',
  styleUrl: './picture-holder.component.scss'
})
export class PictureHolderComponent {
  @Input() className: string = "";
  @Input() theme: string = "light";
  @Input() source: string = "";
}
