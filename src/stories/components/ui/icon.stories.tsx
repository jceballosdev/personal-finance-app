import Icon, { IconProps } from '@/components/ui/icon';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Finance/Components/UI/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The Icon component displays an SVG icon based on the name prop',
      },
    },
  },
  argTypes: {
    name: {
      control: {
        type: 'select',
      },
      description: 'The name of the icon to display',
      options: [
        'bill-due',
        'bill-paid',
        'caret-down',
        'caret-left',
        'caret-right',
        'close-modal',
        'ellipsis',
        'filter-mobile',
        'hide-password',
        'minimize-menu',
        'nav-budgets',
        'nav-overview',
        'nav-pots',
        'nav-recurring-bills',
        'nav-transactions',
        'pot',
        'recurring-bills',
        'search',
        'selected',
        'show-password',
        'sort-mobile',
      ],
    },
    size: {
      control: {
        type: 'number',
        min: 16,
        max: 128,
        step: 8,
      },
      description: 'The size of the icon',
    },
  },
} as Meta<typeof Icon>;

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

export const BillDue = Template.bind({});
BillDue.args = {
  name: 'bill-due',
  size: 24,
};

export const BillPaid = Template.bind({});
BillPaid.args = {
  name: 'bill-paid',
  size: 24,
};

export const CaretDown = Template.bind({});
CaretDown.args = {
  name: 'caret-down',
  size: 24,
};

export const CaretLeft = Template.bind({});
CaretLeft.args = {
  name: 'caret-left',
  size: 24,
};

export const CaretRight = Template.bind({});
CaretRight.args = {
  name: 'caret-right',
  size: 24,
};

export const CloseModal = Template.bind({});
CloseModal.args = {
  name: 'close-modal',
  size: 24,
};

export const Ellipsis = Template.bind({});
Ellipsis.args = {
  name: 'ellipsis',
  size: 24,
};

export const FilterMobile = Template.bind({});
FilterMobile.args = {
  name: 'filter-mobile',
  size: 24,
};

export const HidePassword = Template.bind({});
HidePassword.args = {
  name: 'hide-password',
  size: 24,
};

export const MinimizeMenu = Template.bind({});
MinimizeMenu.args = {
  name: 'minimize-menu',
  size: 24,
};

export const NavBudgets = Template.bind({});
NavBudgets.args = {
  name: 'nav-budgets',
  size: 24,
};

export const NavOverview = Template.bind({});
NavOverview.args = {
  name: 'nav-overview',
  size: 24,
};

export const NavPots = Template.bind({});
NavPots.args = {
  name: 'nav-pots',
  size: 24,
};

export const NavRecurringBills = Template.bind({});
NavRecurringBills.args = {
  name: 'nav-recurring-bills',
  size: 24,
};

export const NavTransactions = Template.bind({});
NavTransactions.args = {
  name: 'nav-transactions',
  size: 24,
};

export const Pot = Template.bind({});
Pot.args = {
  name: 'pot',
  size: 24,
};

export const RecurringBills = Template.bind({});
RecurringBills.args = {
  name: 'recurring-bills',
  size: 24,
};

export const Search = Template.bind({});
Search.args = {
  name: 'search',
  size: 24,
};

export const Selected = Template.bind({});
Selected.args = {
  name: 'selected',
  size: 24,
};

export const ShowPassword = Template.bind({});
ShowPassword.args = {
  name: 'show-password',
  size: 24,
};

export const SortMobile = Template.bind({});
SortMobile.args = {
  name: 'sort-mobile',
  size: 24,
};
