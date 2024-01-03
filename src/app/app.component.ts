import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RepoService } from '../services/repo.service';
import { LogoComponent } from './logo/logo.component';
import { RepoCardComponent } from './repo-card/repo-card.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, LogoComponent, RepoCardComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'intersystems-dach.github.io';

	getRepos() {
		return RepoService.getRepos();
	}
}
