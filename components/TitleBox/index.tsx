import { AddEventTitles } from "./styles";

export const TitleBox = ({ title }: any): JSX.Element => {
  return <AddEventTitles data-testid="titlebox">{title}</AddEventTitles>;
};
