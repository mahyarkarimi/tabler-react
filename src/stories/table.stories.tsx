import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LoremIpsum } from "lorem-ipsum";

import { Table } from "../";

const lorem = new LoremIpsum();
export default {
    title: "Components/Table",
    component: Table
} as ComponentMeta<typeof Table>;

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

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Simple = () => {

    const data = [
        { name: 'Bob', family: 'Williams', age: 26 },
        { name: 'Alice', family: 'Jones', age: 30 },
        { name: 'Tom', family: 'Anderson', age: 26 },
    ]
    return (
        <Table columns={cols} dataSource={data} responsive='md' />
    )
}


export const WithPagination = () => {

    const data = lorem.generateWords(31).split(' ').map(w => ({
        name: w, family: w.split('').reverse().join(''), age: Math.random()*10+10
    }));
    return (
        <Table columns={cols} dataSource={data} responsive='md' paginator={{ pageSize: 5, total: data.length }} paginatorPosition="bottomCenter" />
    )
}
