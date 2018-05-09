import { Component } from '@angular/core';


@Component({
    selector: 'projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {

    isCollapsed: boolean[] = [false, true];

    constructor() { }


    projectCollapse(index: number): void {
        this.isCollapsed[index] = (this.isCollapsed[index])? false: true;
    }
}