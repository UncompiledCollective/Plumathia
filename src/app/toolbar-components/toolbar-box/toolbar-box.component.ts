import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-box',
  standalone: true,
  imports: [],
  templateUrl: './toolbar-box.component.html',
  styleUrl: './toolbar-box.component.scss'
})
export class ToolbarBoxComponent {
  @Input() className: string = "";
  @Input() text: string = "empty";
  @Input() theme: string = "light";
}
