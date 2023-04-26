import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

export interface MenuItem {
  link?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
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
        icon: AnalyticsTwoToneIcon,
        link: '',
        items: [
          {
            name: 'Terminarz',
            link: '/fixtures'
          },
          {
            name: 'Tabela',
            link: '/standings'
          }
        ]
      }
    ]
  },
  {
    heading: 'Inne rozgrywki w Polsce',
    items: [
      {
        name: 'IMP',
        link: '/imp'
      }
    ]
  }
];

export default menuItems;
