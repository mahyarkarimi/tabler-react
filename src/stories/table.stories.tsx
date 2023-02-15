import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Table } from "../";

export default {
    title: "Components/Table",
    component: Table
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;
export const Simple = () => {
    const cols = [
        {
            key: 'name',
            title: 'name',
            dataIndex: 'name',
        },
        {
            key: 'family',
            title: 'family',
            dataIndex: 'family',
        },
        {
            key: 'age',
            title: 'age',
            dataIndex: 'age',
        }
    ]
    const data = [
        { name: 'Bob', family: 'Williams', age: 26 },
        { name: 'Alice', family: 'Jones', age: 30 },
        { name: 'Tom', family: 'Anderson', age: 26 },
    ]
    return (
        <Table columns={cols} dataSource={data} responsive='md' />
    )
}
