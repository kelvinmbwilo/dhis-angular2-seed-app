import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import {Constants} from '../shared/costants';
import {DhisMenuService} from './dhis-menu-service.service';

@Component({
  selector: 'app-dhis-menu',
  templateUrl: './dhis-menu.component.html'
})
export class DhisMenuComponent implements OnInit, AfterViewInit {

  // holder for the application title
  application_title: string;

  // holder for the starting module
  start_module: string;
  application_style: string;
  constructor(private elementRef: ElementRef, private dhisUrl: Constants, private menuService: DhisMenuService) { }

  ngOnInit() {
    this.menuService.getData()
        .subscribe(
            (data: any) => {

              this.start_module = data.startModule;
              this.application_title = data.applicationTitle;
              this.application_style = ('currentStyle' in data) ? data.currentStyle : data.keyStyle;

                this.menuService.getUserData()
                    .subscribe(
                        (userData: any) => {
                            this.application_style = ('keyStyle' in userData) ? userData.keyStyle : this.application_style;
                            const element = document.createElement('link');
                            element.setAttribute('rel', 'stylesheet');
                            element.setAttribute('type', 'text/css');
                            element.setAttribute('href', this.dhisUrl.root_dir + 'dhis-web-commons/css/' + this.application_style );
                            document.getElementsByTagName('head')[0].appendChild(element);
                        }
                    );
            }
        );
  }

  /**
   * This function helps to solve the parse error to redirect to main page
   */
  redirecAction () {
    window.location.href = this.dhisUrl.root_dir + this.start_module + '/index.action';
  }

  ngAfterViewInit() {

    // adding nessesary script tags for the menu
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = this.dhisUrl.root_dir + 'dhis-web-commons/javascripts/jQuery/jquery.min.js';
    this.elementRef.nativeElement.appendChild(s);
    const k = document.createElement('script');
    k.type = 'text/javascript';
    k.src = this.dhisUrl.root_dir + 'dhis-web-commons/javascripts/dhis2/dhis2.translate.js';
    this.elementRef.nativeElement.appendChild(k);
    const j = document.createElement('script');
    j.type = 'text/javascript';
    j.src = this.dhisUrl.root_dir + 'dhis-web-commons/javascripts/dhis2/dhis2.menu.js';
    this.elementRef.nativeElement.appendChild(j);
    const g = document.createElement('script');
    g.type = 'text/javascript';
    g.src = this.dhisUrl.root_dir + 'dhis-web-commons/javascripts/dhis2/dhis2.menu.ui.js';
    this.elementRef.nativeElement.appendChild(g);

  }


}
