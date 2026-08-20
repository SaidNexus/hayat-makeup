import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('Hayat-makeup-main-angular');
}
