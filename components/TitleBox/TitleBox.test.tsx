import { render } from "@testing-library/react";
import { TitleBox } from "./index";

test("it should render a TitleBox component", () => {
  const component = render(<TitleBox title="titlebox text" />);
  expect(component).toBeTruthy();
});
