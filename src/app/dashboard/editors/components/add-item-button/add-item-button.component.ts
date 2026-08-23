import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Plus } from 'lucide-angular';

@Component({
  selector: 'app-add-item-button',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './add-item-button.component.html',
  styleUrls: ['./add-item-button.component.css']
})
export class AddItemButtonComponent {
  @Input() label: string = '';
  @Output() onClick = new EventEmitter<void>();

  Plus = Plus;
}
