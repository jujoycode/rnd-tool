import type { IconName } from './atom'

interface NavbarHeaderProps {
  title: string
  version: boolean
}

interface NavbarFooterProps {
  username: string
  usermail: string
  //ENHANCE: imgSrc: 이미지를 넣고싶으면 여기에 넘기기
}

interface ItemCardProps {
  label: string
  iconName: IconName
  resource: {
    label: string
    color: string
  }[]
  nextPath?: string
  children?: React.ReactNode
}

export type { NavbarHeaderProps, NavbarFooterProps, ItemCardProps }
