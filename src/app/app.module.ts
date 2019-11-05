import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second.component';
import { ColorComponent } from './color/color.component';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailComponent } from './cv/detail/detail.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { WordComponent } from './directives/word/word.component';
import { AmpouleComponent } from './directives/ampoule/ampoule.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from '../assets/images/default-image.pipe';
import {LoggerService} from './services/logger.service';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    CardComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    NgStyleComponent,
    WordComponent,
    AmpouleComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
