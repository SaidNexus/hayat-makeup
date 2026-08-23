import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Eye, EyeOff } from 'lucide-angular';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-offers-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './offers-page-editor.component.html',
  styleUrls: ['./offers-page-editor.component.css']
})
export class OffersPageEditorComponent {
  Eye = Eye;
  EyeOff = EyeOff;

  constructor(private configService: DashboardConfigService) {}

  get config() {
    return this.configService.offersPageConfig();
  }

  handleChange(key: string, value: any) {
    this.configService.offersPageConfig.update(prev => ({ ...prev, [key]: value }));
  }
}
