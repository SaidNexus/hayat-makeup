import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, GripVertical, Trash2, Copy, ArrowUp, ArrowDown } from 'lucide-angular';
import { AddItemButtonComponent } from '../add-item-button/add-item-button.component';

@Component({
  selector: 'app-section-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, AddItemButtonComponent],
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.css']
})
export class SectionCardComponent {
  @Input() title: string = '';
  @Input() index: number = 0;
  @Input() enabled: boolean = true;
  @Input() isFirst: boolean = false;
  @Input() isLast: boolean = false;
  @Input() addAction: { label: string; onClick: () => void } | null = null;

  @Output() onToggle = new EventEmitter<boolean>();
  @Output() onDuplicate = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();
  @Output() onMoveUp = new EventEmitter<void>();
  @Output() onMoveDown = new EventEmitter<void>();
  
  @Output() onDragStart = new EventEmitter<DragEvent>();
  @Output() onDragEnd = new EventEmitter<DragEvent>();
  @Output() onDragOver = new EventEmitter<DragEvent>();
  @Output() onDrop = new EventEmitter<DragEvent>();

  GripVertical = GripVertical;
  Trash2 = Trash2;
  Copy = Copy;
  ArrowUp = ArrowUp;
  ArrowDown = ArrowDown;

  handleToggle(event: any) {
    this.onToggle.emit(event.target.checked);
  }

  handleAddActionClick() {
    if (this.addAction && this.addAction.onClick) {
      this.addAction.onClick();
    }
  }
}
