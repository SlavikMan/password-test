import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-strength-test',
  templateUrl: './strength-test.component.html',
  styleUrls: ['./strength-test.component.scss'],
})
export class StrengthTestComponent implements OnChanges {
  @Input() strength: string = '';
  colors: string[] = ['gray', 'gray', 'gray'];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['strength']) {
      this.updateColors();
    }
  }

  updateColors() {
    switch (this.strength) {
      case 'strong':
        this.colors = ['green', 'green', 'green'];
        break;
      case 'medium':
        this.colors = ['yellow', 'yellow', 'gray'];
        break;
      case 'easy':
        this.colors = ['red', 'gray', 'gray'];
        break;
      case 'short':
        this.colors = ['red', 'red', 'red'];
        break;
      default:
        this.colors = ['gray', 'gray', 'gray'];
    }
  }
}
