export interface RouteProps {
  redirectTo: string;
  component: React.JSX.Element;
}

export interface IconClass {
  className: string;
}

export type InputNames = "name" | "email" | "message";
