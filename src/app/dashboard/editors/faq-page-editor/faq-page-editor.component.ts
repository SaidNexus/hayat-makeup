import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, GripVertical, Plus, Trash2, Edit2, Check, X, Eye, EyeOff } from 'lucide-angular';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-faq-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './faq-page-editor.component.html',
  styleUrls: ['./faq-page-editor.component.css']
})
export class FaqPageEditorComponent {
  GripVertical = GripVertical;
  Plus = Plus;
  Trash2 = Trash2;
  Edit2 = Edit2;
  Check = Check;
  X = X;
  Eye = Eye;
  EyeOff = EyeOff;

  editingId = signal<string | null>(null);
  editQuestion = signal<string>('');
  editAnswer = signal<string>('');

  constructor(private configService: DashboardConfigService) {}

  get config() {
    return this.configService.faqPageConfig();
  }

  handleChange(key: string, value: any) {
    this.configService.faqPageConfig.update(prev => ({ ...prev, [key]: value }));
  }

  handleToggleVisibility(id: string) {
    this.configService.faqPageConfig.update(prev => ({
      ...prev,
      faqs: prev.faqs.map((faq: any) => faq.id === id ? { ...faq, visible: !faq.visible } : faq)
    }));
  }

  handleDeleteFaq(id: string) {
    this.configService.faqPageConfig.update(prev => ({
      ...prev,
      faqs: prev.faqs.filter((faq: any) => faq.id !== id)
    }));
  }

  handleMoveFaq(index: number, direction: number) {
    if (
      (direction === -1 && index === 0) || 
      (direction === 1 && index === this.config.faqs.length - 1)
    ) return;
    
    const newFaqs = [...this.config.faqs];
    const temp = newFaqs[index];
    newFaqs[index] = newFaqs[index + direction];
    newFaqs[index + direction] = temp;
    
    this.configService.faqPageConfig.update(prev => ({ ...prev, faqs: newFaqs }));
  }

  handleAddFaq() {
    const newFaq = {
      id: `f-${Date.now()}`,
      question: "سؤال جديد",
      answer: "إجابة السؤال الجديد",
      visible: true
    };
    this.configService.faqPageConfig.update(prev => ({
      ...prev,
      faqs: [newFaq, ...prev.faqs]
    }));
    this.startEditing(newFaq);
  }

  startEditing(faq: any) {
    this.editingId.set(faq.id);
    this.editQuestion.set(faq.question);
    this.editAnswer.set(faq.answer);
  }

  saveEditing() {
    this.configService.faqPageConfig.update(prev => ({
      ...prev,
      faqs: prev.faqs.map((faq: any) => 
        faq.id === this.editingId() 
          ? { ...faq, question: this.editQuestion(), answer: this.editAnswer() } 
          : faq
      )
    }));
    this.editingId.set(null);
  }

  cancelEditing() {
    this.editingId.set(null);
  }
}
