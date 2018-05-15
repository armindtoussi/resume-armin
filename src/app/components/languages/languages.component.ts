import { Component } from '@angular/core';
import { fadeInOneSecond }    from '../../animations';

@Component({
    selector: 'languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.css'],
    animations: [
        fadeInOneSecond
    ]
})

export class LanguagesComponent {
    

    constructor() { }
}
