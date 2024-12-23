import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        type: 'text',
        placeholder: 'Placeholder',
    }
}

export const Password: Story = {
    args: {
        type: 'password',
        placeholder: 'Placeholder',
    }
}

export const Number: Story = {
    args: {
        type: 'number',
        placeholder: 'Number',
    }
}
export const Date: Story = {
    args: {
        type: 'date',
        placeholder: 'Date',
    }
}

