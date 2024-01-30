export interface HeaderTypes {
  openMobileNav: () => void;
}

export interface MobileNavTypes {
  isMobileNavOpen: boolean;
  closeMobileNav: () => void;
}

export interface RoutesTypes {
  redirectTo: string;
  component: React.JSX.Element;
}

export interface IconClass {
  className: string;
}

export type InputNames = "name" | "email" | "message";
