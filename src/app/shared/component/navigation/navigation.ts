import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  imports: [MatIconModule, RouterOutlet, RouterLink,RouterLinkActive],
  selector: 'app-navigation',
  styles: ``,
  templateUrl: './navigation.html',
})
export class Navigation {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  private _pageTitle = signal<string>('');
  page = this._pageTitle.asReadonly();

  // destroyRef = inject(DestroyRef);

  constructor() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      takeUntilDestroyed()
    ).subscribe(() => {
      const currentRoute = this.activatedRoute.snapshot.firstChild;
      if (currentRoute) {
        const title = currentRoute.data['title'] || currentRoute.title;
        if (title) {
          this._pageTitle.set(title);
        }
      }
    });
  }
}
