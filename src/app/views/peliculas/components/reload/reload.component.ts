import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.scss']
})
export class ReloadComponent {
  @Input() message: string = '';
  @Input() isloading: boolean = false;
}
