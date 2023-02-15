import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story, ComponentMeta, ComponentStory } from "@storybook/react";

import { Alert, AlertTitle } from "../";

export default {
    title: "Components/Alert",
    component: Alert
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;


export const InfoAlert = Template.bind({});
InfoAlert.args = { mode: 'info', children: 'sample alert', display: 'inline', margin: '55px', "aria-atomic":'true' };

export const DangerAlert = Template.bind({});
DangerAlert.args = { mode: 'danger', children: 'sample alert' };

export const WarningAlert = Template.bind({}); 
WarningAlert.args = { mode: 'warning', children: 'sample alert' };

export const SuccessAlert = Template.bind({});
SuccessAlert.args = { mode: 'success', children: 'sample alert' };

export const WithTitle = Template.bind({});
WithTitle.args = { mode: 'info', children: <AlertTitle>Title</AlertTitle> };

export const Important = Template.bind({});
Important.args = { mode: 'info', important: true, children: 'sample alert' };

export const Dismissible = Template.bind({});
Dismissible.args = { mode: 'info', dismissible: true, children: 'sample alert' };
