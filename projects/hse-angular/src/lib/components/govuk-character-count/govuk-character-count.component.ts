import { Component, Input, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'govuk-character-count',
  templateUrl: './govuk-character-count.component.html'
})
export class GovukCharacterCountComponent {

  @Input() public enableCharacterCount?: boolean = false; 
  @Input() public numCharactersRemaining!: number;

}

@Pipe({name: 'absoluteValue'})
export class AbsoluteValuePipe implements PipeTransform {
  transform(value: number, ...args: any[]) {
    return Math.abs(value);
  }
}
