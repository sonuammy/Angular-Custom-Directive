import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycolorDirective } from './custom-attr-directive/mycolor.directive';
import { BgcolorDirective } from './custom-attr-directive/bgcolor.directive';
import { CustomThemeDirective } from './custom-attr-directive/custom-theme.directive';
import { MouseActionDirective } from './custom-attr-directive/mouse-action.directive';
import { DynamicColorDirective } from './custom-attr-directive/dynamic-color.directive';
import { CpIfDirective } from './custom-str-directive/cp-if.directive';
import { CpLoopDirective } from './custom-str-directive/cp-loop.directive';
import { CpDelayDirective } from './custom-str-directive/cp-delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    MycolorDirective,
    BgcolorDirective,
    CustomThemeDirective,
    MouseActionDirective,
    DynamicColorDirective,
    CpIfDirective,
    CpLoopDirective,
    CpDelayDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
