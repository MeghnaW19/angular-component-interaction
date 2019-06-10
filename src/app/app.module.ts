import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Scenerio1Component } from "./scenerio1/scenerio1.component";
import { FormsModule } from "@angular/forms";
import { Scenerio2Component } from "./scenerio2/scenerio2.component";
import { Scenerio3ParentComponent } from "./scenerio3/scenerio3-parent/scenerio3-parent.component";
import { Scenerio3ChildComponent } from "../app/scenerio3/scenerio3-child/scenerio3-child.component";
import { Scenerio4ChildComponent } from "./scenerio4/scenerio4-child/scenerio4-child.component";
import { Scenerio4ParentComponent } from "./scenerio4/scenerio4-parent/scenerio4-parent.component";
import { Scenerio5ParentComponent } from "./scenerio5/scenerio5-parent/scenerio5-parent.component";
import { Scenerio5ChildComponent } from "./scenerio5/scenerio5-child/scenerio5-child.component";
import { Scenerio5GrandparentComponent } from "./scenerio5/scenerio5-grandparent/scenerio5-grandparent.component";
import { Scenerio6Child1Component } from "./scenerio6/scenerio6-child1/scenerio6-child1.component";
import { Scenerio6Child2Component } from "./scenerio6/scenerio6-child2/scenerio6-child2.component";

@NgModule({
  declarations: [
    AppComponent,
    Scenerio1Component,
    Scenerio2Component,
    Scenerio3ParentComponent,
    Scenerio3ChildComponent,
    Scenerio4ChildComponent,
    Scenerio4ParentComponent,
    Scenerio5ParentComponent,
    Scenerio5ChildComponent,
    Scenerio5GrandparentComponent,
    Scenerio6Child1Component,
    Scenerio6Child2Component
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
