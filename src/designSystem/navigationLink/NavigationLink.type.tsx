export interface INavigationLink
  extends React.HTMLAttributes<HTMLAnchorElement> {
  name: string;
  destination: string;
  dataTestId: string;
}
