import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private readonly _menuOpen = signal<boolean>(false);

  readonly menuOpen = this._menuOpen.asReadonly();

  setMenuOpen(open: boolean): void {
    this._menuOpen.set(open);
  }

  toggleMenu(): void {
    this._menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this._menuOpen.set(false);
  }

  openMenu(): void {
    this._menuOpen.set(true);
  }
}
