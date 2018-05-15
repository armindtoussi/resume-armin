import { Component }       from '@angular/core';
import { fadeInOneSecond } from '../../animations';


@Component({
    selector: 'projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    animations: [
        fadeInOneSecond
    ]
})

export class ProjectsComponent {

    isCollapsed: boolean[] = [false, true, true, true, true, true];

    constructor() { }


    projectCollapse(index: number): void {
        this.isCollapsed[index] = (this.isCollapsed[index])? false: true;
    }
}