import { Component }             from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {

    isCollapsed: boolean[] = [false, true, true, true, true, true];

    private fragment: string;

    constructor(private router: Router) { }

    ngOnInit() {
        //This code allows click and scroll navigation on same page. 
        this.router.events.subscribe(s => {
            if(s instanceof NavigationEnd) {
                const tree = this.router.parseUrl(this.router.url);
                if(tree.fragment) {
                    const element = document.querySelector("#" + tree.fragment);
                    if(element) { 
                        element.scrollIntoView();
                    }
                }
            }
        });
    }

    projectCollapse(index: number): void {
        this.isCollapsed[index] = (this.isCollapsed[index])? false: true;
    }
}