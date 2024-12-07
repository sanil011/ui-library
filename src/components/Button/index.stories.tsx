import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";


const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout:'centered'
    },
    tags: ["autodocs"],
    argTypes: {},
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Click me"
    }
}

export const Solid: Story = {
    args: {
        children: "Button",
        variant: 'solid',
    }
}

export const Outline: Story = {
    args: {
        children: "Button",
        variant: 'outline',
    }
}

export const Ghost: Story = {
    args: {
        children: "Button",
        variant: 'ghost',
    }
}