import type { ReactNode } from 'react';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  badgeTooltip?: string;

  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: 'Rozgrywki ligowe',
    items: [
      {
        name: 'PGE Ekstraliga',
        link: '/polish-extra-league'
      }
    ]
  }
];

export default menuItems;
