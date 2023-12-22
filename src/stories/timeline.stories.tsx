import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Timeline, Avatar, AvatarList, Card } from "../";

export default {
    title: "Components/Timeline",
    component: Timeline
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args) => <Timeline {...args} />;

const items = [
    {color: 'azure', icon: <i className="ti ti-brand-twitter white" />, title: '+1150 Followers', description: 'You’re getting more and more followers, keep it up!', time: '10 hrs ago'},
    {color: 'red', icon: <i className="ti ti-briefcase white" /> , title: '+3 New Products were added!', description: 'Congratulations', time: '2 hrs ago'},
    {color: 'success', icon: <i className="ti ti-check white" /> , title: 'Database backup completed!', description: 'Download the <a href="#">latest backup</a>', time: '1 day ago'},
    {color: 'facebook', icon: <i className="ti ti-brand-facebook white" /> , title: '+290 Page Likes', description: 'This is great, keep it up!', time: '1 day ago'},
    {color: 'teal', icon: <i className="ti ti-user-plus white" /> , title: '+3 Friend Requests', description: <AvatarList><Avatar /><Avatar /></AvatarList>, time: '2 days ago'},
]

export const Default = () => {
    return (
        <Card header="Timeline">
            <Timeline items={items} />
        </Card>
    )
}

export const Simple = () => {
    return (
        <Card header="Simple Timeline">
            <Timeline items={items} simple />
        </Card>
    )
}