import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar-components/toolbar/toolbar.component';
import { IfcSourceInterface, IfcSourceInterfaceSimpler, Source } from './SharedModules/interfaces';
import { Text } from './SharedModules/Text';
import { GridContainerComponent } from './SharedModules/grid-container/grid-container.component';
const logoFinal = '../assets/images/plumathia complete.svg';
const logoFinalWhite  = '../assets/images/plumathia complete white.svg';
const signet = '../assets/images/flower color square.svg';
const signetWhite = '../assets/images/flower color square white.svg';
const logotype = '../assets/images/logotype final smaller.svg';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToolbarComponent, GridContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  sourceObject: IfcSourceInterface = { numbers: [2], sources: [logotype] }
  theme: string = "light";
  title: string = 'Plumathia';
  toobarArray: Array<string> = ["Przeglądaj", "Ogłoszenia", "Nowości", "Pomoc"];
  textArray: string[][] = [[], [],[]];
  sourceArray: Array<Source> = [];
  addToArray(array: string[][], value: string, index: number = 0) {
    array[index].push(value);
  }
  exceptionArray: number[][] = [[],[Text.pl.boast.length-1],[]];
  constructor() {
    this.addToArray(this.textArray, Text.pl.life_they_need, 0);
    this.addToArray(this.textArray, "", 2);
    Text.pl.boast.forEach((x) => {
      this.addToArray(this.textArray, x, 1);
    })
    this.sourceArray.push(new Source(0, logoFinalWhite, 0));
    this.sourceArray.push(new Source(1, "", 0));
    this.sourceArray.push(new Source(2, signetWhite, 0));
  }
}
