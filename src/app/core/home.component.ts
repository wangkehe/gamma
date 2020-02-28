import {Component, OnInit} from '@angular/core';
import {TreeMenu} from './treeMenu';
import {TreeMenuService} from './treeMenu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  userImagePath = 'assets/images/001.jpg';

  menus: TreeMenu[];

  constructor(private treeMenuSerivce: TreeMenuService) {}

  getMenus(): void {
    this.treeMenuSerivce.getMenus().subscribe(menus => this.menus = menus);
    // .then(      menus => this.menus = menus    );
  }

  ngOnInit(): void {
    this.getMenus();
  }
}
