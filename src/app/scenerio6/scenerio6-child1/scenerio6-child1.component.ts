import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";

@Component({
  selector: "app-scenerio6-child1",
  templateUrl: "./scenerio6-child1.component.html",
  styleUrls: ["./scenerio6-child1.component.css"]
})
export class Scenerio6Child1Component implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}

  myMethod(data) {
    this.dataService.sharedData.next(data);
  }
}
