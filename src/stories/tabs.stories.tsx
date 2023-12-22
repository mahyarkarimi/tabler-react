import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import image from '../assets/avatar.png';
import { LoremIpsum } from "lorem-ipsum";
import { Tabs, Card, Page, Container } from "../";

const lorem = new LoremIpsum();

export default {
    title: "Components/Tabs",
    component: Tabs
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

const SamplePage = ({ children }) => (
    <Page>
        <Container>{children}</Container>
    </Page>
)
export const Simple = Template.bind({});
Simple.args = { 
    tabs: [
        { id: 'tab-1', title: 'Tab 1', content: <SamplePage>{lorem.generateParagraphs(2)}</SamplePage>},
        { id: 'tab-2', title: 'Tab 2', content: <SamplePage>{lorem.generateParagraphs(2)}</SamplePage>},
        { id: 'tab-3', title: 'Tab 3', content: <SamplePage>{lorem.generateParagraphs(2)}</SamplePage>},
    ]
}

export const CustomContent = Template.bind({});
CustomContent.args = { 
    tabs: [
        { id: 'tab-1', title: 'Card 1', content: <Card header="Sample Card" >{lorem.generateParagraphs(2)}</Card>},
        { id: 'tab-2', title: 'Card 2', content: <Card header="Sample Card" >{lorem.generateParagraphs(2)}</Card>},
        { id: 'tab-3', title: 'Card 3', content: <Card header="Sample Card" >{lorem.generateParagraphs(2)}</Card>},
    ]
}

export const CardStyleContent = Template.bind({});
CardStyleContent.args = { 
    ...CustomContent.args,
    card: true,
}

export const CapitalTitle = Template.bind({});
CapitalTitle.args = { 
    ...CustomContent.args,
    card: true,
    allCaps: true,
}

export const RightAlignTab = Template.bind({});
RightAlignTab.args = { 
    tabs: [
        { id: 'tab-1', title: 'Card 1', content: <Card header="Sample Card" >{lorem.generateParagraphs(2)}</Card>},
        { id: 'tab-2', title: 'Card 2', content: <Card header="Sample Card" >{lorem.generateParagraphs(2)}</Card>},
        { id: 'tab-3', title: 'Card 3', content: <Card header="Sample Card" >{lorem.generateParagraphs(2)}</Card>, alignEnd: true},
    ],
    card: true,
    allCaps: true,
}

export const WithDropDown = Template.bind({});
WithDropDown.args = { 
    tabs: [
        { id: 'tab-1', title: 'Card 1', content: <Card header="Sample Card" >{lorem.generateParagraphs(2)}</Card>},
        { id: 'tab-2', title: 'Card 2', dropDown: ['Action 1', 'Action 2']},
        { id: 'tab-3', title: 'Card 3', content: <Card header="Sample Card" >{lorem.generateParagraphs(2)}</Card>},
    ],
    card: true,
    allCaps: true,
}

export const FullWidth = Template.bind({});
FullWidth.args = { 
    tabs: [
        { id: 'tab-1', title: 'Card 1', content: <Card header="Sample Card" >{lorem.generateParagraphs(2)}</Card>},
        { id: 'tab-2', title: 'Card 2', dropDown: ['Action 1', 'Action 2']},
        { id: 'tab-3', title: 'Card 3', content: <Card header="Sample Card" >{lorem.generateParagraphs(2)}</Card>},
    ],
    card: true,
    fullWidth: true
}