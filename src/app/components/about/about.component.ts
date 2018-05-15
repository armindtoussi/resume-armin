import { Component } from '@angular/core';
import { fadeInOneSecond }      from '../../animations';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    animations: [
        fadeInOneSecond
    ]
})
export class AboutComponent {

    constructor() { }
}