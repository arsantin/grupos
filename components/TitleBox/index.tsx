import { AddEventTitles } from "./styles";

export const TitleBox = ({ title }): JSX.Element => {
  return <AddEventTitles data-testid="titlebox">{title}</AddEventTitles>;
};
