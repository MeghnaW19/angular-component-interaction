import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-scenerio6-child2",
  templateUrl: "./scenerio6-child2.component.html",
  styleUrls: ["./scenerio6-child2.component.css"]
})
export class Scenerio6Child2Component implements OnInit {
  data: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.sharedData.subscribe(data => (this.data = data));
  }
}
