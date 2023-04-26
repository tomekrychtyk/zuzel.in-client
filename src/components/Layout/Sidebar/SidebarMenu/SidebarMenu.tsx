import { ListSubheader, alpha, Box, List, styled } from '@mui/material';
import { useLocation, matchPath } from 'react-router-dom';
import SidebarMenuItem from './SidebarMenuItem';
import menuItems, { MenuItem } from './items';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {
      padding: ${theme.spacing(1)};
  
      & > .MuiList-root {
        padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
      }
    }
  
    .MuiListSubheader-root {
        text-transform: uppercase;
        font-weight: bold;
        font-size: ${theme.typography.pxToRem(12)};
        color: ${theme.colors.alpha.trueWhite[50]};
        padding: ${theme.spacing(0, 2.5)};
        line-height: 1.4;
    }
  `
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
      .MuiList-root {
  
        .MuiListItem-root {
          padding: 1px 0;
  
          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(3.2)};
  
            .MuiBadge-standard {
              background: ${theme.colors.primary.main};
              font-size: ${theme.typography.pxToRem(10)};
              font-weight: bold;
              text-transform: uppercase;
              color: ${theme.palette.primary.contrastText};
            }
          }
      
          .MuiButton-root {
            display: flex;
            color: ${theme.colors.alpha.trueWhite[70]};
            background-color: transparent;
            width: 100%;
            justify-content: flex-start;
            padding: ${theme.spacing(1.2, 3)};
  
            .MuiButton-startIcon,
            .MuiButton-endIcon {
              transition: ${theme.transitions.create(['color'])};
  
              .MuiSvgIcon-root {
                font-size: inherit;
                transition: none;
              }
            }
  
            .MuiButton-startIcon {
              color: ${theme.colors.alpha.trueWhite[30]};
              font-size: ${theme.typography.pxToRem(20)};
              margin-right: ${theme.spacing(1)};
            }
            
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[50]};
              margin-left: auto;
              opacity: .8;
              font-size: ${theme.typography.pxToRem(20)};
            }
  
            &.active,
            &:hover {
              background-color: ${alpha(
                theme.colors.alpha.trueWhite[100],
                0.06
              )};
              color: ${theme.colors.alpha.trueWhite[100]};
  
              .MuiButton-startIcon,
              .MuiButton-endIcon {
                color: ${theme.colors.alpha.trueWhite[100]};
              }
            }
          }
  
          &.Mui-children {
            flex-direction: column;
  
            .MuiBadge-root {
              position: absolute;
              right: ${theme.spacing(7)};
            }
          }
  
          .MuiCollapse-root {
            width: 100%;
  
            .MuiList-root {
              padding: ${theme.spacing(1, 0)};
            }
  
            .MuiListItem-root {
              padding: 1px 0;
  
              .MuiButton-root {
                padding: ${theme.spacing(0.8, 3)};
  
                .MuiBadge-root {
                  right: ${theme.spacing(3.2)};
                }
  
                &:before {
                  content: ' ';
                  background: ${theme.colors.alpha.trueWhite[100]};
                  opacity: 0;
                  transition: ${theme.transitions.create([
                    'transform',
                    'opacity'
                  ])};
                  width: 6px;
                  height: 6px;
                  transform: scale(0);
                  transform-origin: center;
                  border-radius: 20px;
                  margin-right: ${theme.spacing(1.8)};
                }
  
                &.active,
                &:hover {
  
                  &:before {
                    transform: scale(1);
                    opacity: 1;
                  }
                }
              }
            }
          }
        }
      }
  `
);

const renderItems = (items: MenuItem[], path: string) => {
  return (
    <SubMenuWrapper>
      <List component="div">
        {items.map((item) => {
          const partialMatch = item.link
            ? !!matchPath(
                {
                  path: item.link,
                  end: false
                },
                path
              )
            : false;
          return (
            <SidebarMenuItem
              open={partialMatch}
              active={partialMatch}
              key={item.name}
              name={item.name}
              icon={item.icon}
            >
              {item.items ? (
                <SubMenuWrapper>
                  {item.items.map((subItem) => {
                    const exactMatch = subItem.link
                      ? !!matchPath(
                          {
                            path: subItem.link,
                            end: true
                          },
                          path
                        )
                      : false;
                    return (
                      <SidebarMenuItem
                        active={exactMatch}
                        name={subItem.name}
                        key={subItem.name}
                        icon={subItem.icon}
                      />
                    );
                  })}
                </SubMenuWrapper>
              ) : null}
            </SidebarMenuItem>
          );
        })}
      </List>
    </SubMenuWrapper>
  );
};

export default function SidebarMenu() {
  const location = useLocation();
  return (
    <>
      {menuItems.map((section) => {
        return (
          <MenuWrapper key={section.heading}>
            <List
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  {section.heading}
                </ListSubheader>
              }
            >
              {renderItems(section.items, location.pathname)}
            </List>
          </MenuWrapper>
        );
      })}
    </>
  );
}
