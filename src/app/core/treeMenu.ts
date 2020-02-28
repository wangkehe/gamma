/**
 * Created by WKH on 2018-1-19.
 */
export class TreeMenu {
  id: number;
  title: string;
  icon: string;
  isOpen: boolean;
  items: MenuItem[];
  selected: boolean;
}

class MenuItem {
  id: number;
  selected: boolean;
  title: string;
  icon: string;
  url: string;
}
