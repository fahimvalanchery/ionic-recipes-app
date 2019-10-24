import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipiesService } from '../recipies.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.page.html',
  styleUrls: ['./recipie-detail.page.scss']
})
export class RecipieDetailPage implements OnInit {
  loadedRecipie: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipieService: RecipiesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipieId')) {
        return;
      }
      const recipieId = paramMap.get('recipieId');
      this.loadedRecipie = this.recipieService.getRecipie(recipieId);
    });
  }
}
