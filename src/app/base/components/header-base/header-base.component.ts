import { BaseService } from './../../services/base.service';
import { Component, Input, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-base',
  templateUrl: './header-base.component.html',
  styleUrls: ['./header-base.component.scss']
})
export class HeaderBaseComponent implements OnInit {
  public show = false;

  constructor(private baseService: BaseService) {}

  ngOnInit() {}

  onClick() {
    this.baseService.collapse(true);
  }
}
