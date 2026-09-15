import { Pipe, PipeTransform, inject } from '@angular/core';
import { LangService } from '../../core/services/lang.service';

@Pipe({
  name: 'localize',
  standalone: true,
  pure: false
})
export class LocalizeFieldPipe implements PipeTransform {
  private langService = inject(LangService);

  transform(defaultText: string | any, textAr?: string, textEn?: string): string {
    const lang = this.langService.effectiveLang();
    
    if (lang === 'en' && textEn) {
      return textEn;
    }
    
    if (lang === 'ar' && textAr) {
      return textAr;
    }

    // Fallback logic
    if (lang === 'en') {
      return textEn || defaultText || textAr || '';
    }
    return textAr || defaultText || textEn || '';
  }
}
