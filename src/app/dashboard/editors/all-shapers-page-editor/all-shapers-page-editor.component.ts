import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { SectionCardComponent } from '../components/section-card/section-card.component';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-all-shapers-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, SectionCardComponent],
  templateUrl: './all-shapers-page-editor.component.html',
  styleUrl: './all-shapers-page-editor.component.css'
})
export class AllShapersPageEditorComponent {
  private configService = inject(DashboardConfigService);
  
  get config() {
    return this.configService.allShapersPageConfig();
  }

  updateConfig(updates: Partial<any>) {
    this.configService.allShapersPageConfig.update(config => ({ ...config, ...updates }));
  }

  noop() {}
}
