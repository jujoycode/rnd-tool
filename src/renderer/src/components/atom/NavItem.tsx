import NavItemStyle from '@styles/NavItem.module.css'
import { NavLink } from '@mantine/core'
import Icon from '@atom/Icon'
import type { NavItemProps } from '@interfaces/atom'

export default function NavItem({ index, label, isActive, iconName, onItemClick }: NavItemProps): JSX.Element {
  const handleClick = () => {
    onItemClick(index)
  }

  const NavIcon = (
    <Icon
      name={iconName}
      size={18}
      strokeWidth={1}
      className={isActive ? NavItemStyle.activeIcon : NavItemStyle.defaultIcon}
    />
  )

  return (
    <NavLink
      className={isActive ? NavItemStyle.activeItem : NavItemStyle.defaultItem}
      leftSection={NavIcon}
      label={label}
      onClick={() => handleClick()}
      active={isActive}
    />
  )
}
