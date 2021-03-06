import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  bntStyle: string;
  constructor() {}

  ngOnInit() {
    this.bntStyle = "openNav";
    let dropdown = document.getElementsByClassName("submenu");
    let i;
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  }

  toggle() {
    this.bntStyle = this.bntStyle === "closeNav" ? "openNav" : "closeNav";
  }
}
