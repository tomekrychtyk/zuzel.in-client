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
        items: [
          {
            name: 'Terminarz',
            link: '/polish-extra-league/fixtures'
          },
          {
            name: 'Tabela',
            link: '/polish-extra-league/standings'
          },
          {
            name: 'Drużyny',
            link: '/polish-extra-league/teams'
          },
          {
            name: 'Klasyfikacja medalowa',
            link: '/polish-extra-league/classification'
          }
        ]
      },
      {
        name: 'eWinner 1. Liga',
        icon: AnalyticsTwoToneIcon,
        items: [
          {
            name: 'Tabela',
            link: '/polish-first-league/standings'
          }
        ]
      }
    ]
  },
  {
    heading: 'Inne rozgrywki w Polsce',
    items: [
      {
        icon: AnalyticsTwoToneIcon,
        name: 'IMP',
        items: [
          {
            name: 'Terminarz',
            link: '/imp/fixtures'
          },
          {
            name: 'Klasyfikacja medalowa',
            link: '/imp/classification'
          }
        ]
      }
    ]
  }
];

export default menuItems;
