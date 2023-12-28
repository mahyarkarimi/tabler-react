import React from "react";
import { PropsWithChildren, createContext } from "react";

import '@tabler/core/';

import '@tabler/core/dist/css/demo.min.css'
import '@tabler/core/dist/css/tabler.min.css'
import '@tabler/core/dist/css/tabler-vendors.min.css'

import '@tabler/icons-webfont/tabler-icons.min.css'
import './styles/default.css';
import 'animate.css';
export const TablerContext = createContext({});

export const TablerProvider = ({ children }: PropsWithChildren) => {
    return (
        <TablerContext.Provider value={{}}>
            {children}
        </TablerContext.Provider>
    )
}
