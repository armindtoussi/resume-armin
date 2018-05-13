import { Component }             from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css']
})

export class EducationComponent { 

    private fragment: string;

    constructor(private router: Router) { }

    ngOnInit() {

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
}