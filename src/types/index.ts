export interface HeaderTypes {
  openMobileNav: () => void;
}

export interface MobileNavTypes {
  isMobileNavOpen: boolean;
  closeMobileNav: () => void;
}

export interface IconClass {
  className: string;
}

export type InputNames = "name" | "email" | "message";
