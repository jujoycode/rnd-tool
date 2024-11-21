interface NavbarHeaderProps {
  title: string
  version: boolean
}

interface NavbarFooterProps {
  username: string
  usermail: string
  //ENHANCE: imgSrc: 이미지를 넣고싶으면 여기에 넘기기
}

export type { NavbarHeaderProps, NavbarFooterProps }
