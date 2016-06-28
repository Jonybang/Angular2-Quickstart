import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    template: `
							<hero-detail [hero]="selectedHero"></hero-detail>
							<ul>
								<li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="selectedHero.id === hero.id">
									{{hero.name}}
								</li>
							</ul>`,
		styles: [`
			.selected {
				font-weight: bold;
			}
		`],
		directives: [HeroDetailComponent],
		providers: [HeroService]
})
export class AppComponent implements OnInit {

	title = 'lala';
	heroes: Hero[];
	selectedHero: Hero;

	constructor(private heroService: HeroService) { }

	ngOnInit() {
		var self = this;
		this.heroService.getHeroes().then(function(heroes) {
			self.heroes = heroes;
			self.selectedHero = heroes[0];
		});
  }

	onSelect(hero: Hero) { this.selectedHero = hero; }
}
