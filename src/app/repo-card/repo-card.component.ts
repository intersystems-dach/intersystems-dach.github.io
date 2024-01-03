import { Component, Input } from '@angular/core';
import Repo from '../../types/Repo';

@Component({
	selector: 'app-repo-card',
	standalone: true,
	imports: [],
	templateUrl: './repo-card.component.html',
	styleUrl: './repo-card.component.scss',
})
export class RepoCardComponent {
	@Input() repo!: Repo;
}
