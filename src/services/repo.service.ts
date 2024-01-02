import { Injectable } from '@angular/core';
import Repo from '../types/Repo';

@Injectable({
	providedIn: 'root',
})
export class RepoService {
	static isInit = false;
	static repos: Repo[] = [];

	static init() {
		if (RepoService.isInit) {
			return;
		}
		fetch('https://api.github.com/orgs/intersystems-dach/repos').then(
			(response) => {
				response.json().then((json) => {
					RepoService.repos = json.map(
						(repo: any) =>
							new Repo(
								repo.name,
								repo.description,
								repo.html_url,
								repo.topics
							)
					);
				});
			}
		);
		this.isInit = true;
	}

	static getRepos(): Repo[] {
		this.init();
		return RepoService.repos;
	}
}
