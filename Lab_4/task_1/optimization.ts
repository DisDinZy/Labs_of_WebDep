import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
    selector:'app-user',
    template: `

    <div class = "image-container">
        <img ngSrc  = "www.example.com/image.png" fill />
    </div>
    <li> Static image:
        <img ngSrc  = "/logo.svg" alt = "angular logo" width="32" height ="32"/>
    </li>
     <li>
      Dynamic Image:
      <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
    </li>
    <img ngSrc="www.example.com/image.png" height="600" width="800" priority />
    `,
    imports:[NgOptimizedImage],
})

export class User{
    logoUrl = '/logo.svg';
    logoAlt = 'Angular logo';
    username = 'youngTech';
}