import { BaseService } from './../../services/base.service';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {

  public show = false;
  public selectedItem: Number = 1;

  public wrapper = true;
  constructor(private baseService: BaseService) { }

  ngOnInit() {
this.baseService.clickBehaviourSubject.subscribe(res => {
  if (res) {
    this.wrapper = !this.wrapper;
  }
});
  }
  toggleactiveMenu(i) {
    this.selectedItem = i;
  }


}
