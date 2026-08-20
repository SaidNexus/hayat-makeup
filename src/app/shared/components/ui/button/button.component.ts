import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() to?: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'outline' = 'primary';
  @Input() className = '';
  @Input() disabled = false;

  get buttonClasses(): string {
    const base =
      'inline-flex items-center justify-center rounded-full font-bold transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants: Record<string, string> = {
      primary: 'bg-[#D4146A] text-white hover:bg-[#B01058]',
      outline: 'border border-[#D4146A] text-[#D4146A] bg-white hover:bg-[#FFF1F6]',
    };

    return `${base} ${variants[this.variant] || variants['primary']} ${this.className}`;
  }
}
