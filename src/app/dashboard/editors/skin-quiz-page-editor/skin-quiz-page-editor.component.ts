import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-skin-quiz-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skin-quiz-page-editor.component.html',
  styleUrl: './skin-quiz-page-editor.component.css'
})
export class SkinQuizPageEditorComponent {
  private configService = inject(DashboardConfigService);

  get config() {
    return this.configService.skinQuizPageConfig();
  }

  updateConfig(updates: any) {
    this.configService.skinQuizPageConfig.update(c => ({ ...c, ...updates }));
  }
}
