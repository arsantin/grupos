import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Enviar",
    btnFunction: () => {},
  },
};

export const ComFundoDiferente: Story = {
  args: {
    title: "Enviar",
    backgroundColor: {
      options: ["orange", "red"],
      control: { type: "radio" },
    },
    btnFunction: () => {},
  },
};

export const ComHoverDiferente: Story = {
  args: {
    title: "Editar",
    hoverColor: "purple",
    btnFunction: () => {},
  },
};
