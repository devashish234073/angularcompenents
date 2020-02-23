import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'tabbedpanel',
  templateUrl: './tabbedpanel.component.html',
  styleUrls: ['./tabbedpanel.component.css']
})
export class TabbedpanelComponent implements OnInit {
  @Input() meta: string;
  @Input() bgColor: string = "khaki";
  @Input() width: string = "300px";
  @Input() height: string = "300px";
  @Input() border: string = "1px solid green";
  @Input() padding: string = "5px";
  @Input() activePanelColor: string = "orange";
  @Input() inactivePanelColor: string = "#aeaeae";

  tabs = [];

  metaJSON: object;
  panelsArr: string[] = [];
  constructor(elm: ElementRef) {
    console.log(elm.nativeElement);
  }

  ngOnInit(): void {
    this.metaJSON = JSON.parse(this.meta.split("'").join("\""));
    for(let k in this.metaJSON) {
      if(this.panelsArr.indexOf(k)==-1){
        this.panelsArr.push(k);
      }
      document.querySelector(this.metaJSON[k]).style.backgroundColor=this.bgColor;
      document.querySelector(this.metaJSON[k]).style.width=this.width;
      document.querySelector(this.metaJSON[k]).style.height=this.height;
      document.querySelector(this.metaJSON[k]).style.border=this.border;
      document.querySelector(this.metaJSON[k]).style.padding=this.padding;
    }
    if(this.panelsArr.length>0) {
      this.displayPanel(this.panelsArr[0],null);
    }

  }

  displayPanel(panelname:string,$event) {
    console.log(this.tabs.length);
    for(let i=0;i<this.tabs.length;i++) {
      this.tabs[i].style.backgroundColor = this.inactivePanelColor;
    }
    if($event!=null){
      $event.target.style.backgroundColor = this.activePanelColor;
      if(this.tabs.indexOf($event.target)==-1) {
        this.tabs.push($event.target);
      }
    }
    if(this.panelsArr.indexOf(panelname)>-1) {
      for(let k in this.metaJSON) {
        let elm = document.querySelector(this.metaJSON[k]);
        elm.style.display = "none";
      }
      document.querySelector(this.metaJSON[panelname]).style.display="block";
    }
  }

}
