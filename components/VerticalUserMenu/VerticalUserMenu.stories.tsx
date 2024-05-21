import { Meta, StoryObj } from "@storybook/react";
import { VerticalUserMenu } from ".";

const meta = {
  title: "VerticalUserMenu",
  component: VerticalUserMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof VerticalUserMenu>;

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
    backgroundColor: "orange",
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
