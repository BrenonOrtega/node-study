import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <p>My First Angular Component</p>
    <br>
    <product-list></product-list>
  </div>
`
})
export class AppComponent {
  pageTitle: string = "Awarean Product Management";
}
