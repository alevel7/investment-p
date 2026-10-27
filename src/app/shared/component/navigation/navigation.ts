import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [MatIconModule, RouterOutlet],
  selector: 'app-navigation',
  styles: ``,
  templateUrl: './navigation.html',
})
export class Navigation {}
