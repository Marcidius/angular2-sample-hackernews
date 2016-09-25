import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HackerNewsAPIService } from '../hackernews-api.service';



@Component({
    selector: 'app-stories',
    templateUrl: './stories.component.html',
    styleUrls: ['./stories.component.scss']
})

export class StoriesComponent implements OnInit {
    items;

    constructor(private _hackerNewsAPIService: HackerNewsAPIService) {
        this.items = Array(30).fill(30).map((x, i) => i);
    }

    ngOnInit() {
        this._hackerNewsAPIService.fetchStories()
            .subscribe(
                items => this.items = items,
                error => console.log('Error fetching Stories.')
            );
    }
}