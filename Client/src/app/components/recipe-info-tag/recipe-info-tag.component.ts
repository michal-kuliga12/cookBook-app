import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-info-tag',
  templateUrl: './recipe-info-tag.component.html',
  styleUrls: ['./recipe-info-tag.component.scss'],
})
export class RecipeInfoTagComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('value') value: string = '';
  @Input('difficulty') difficulty!: number | undefined;

  ngOnInit(): void {
    console.log(this.difficulty);
  }
}
