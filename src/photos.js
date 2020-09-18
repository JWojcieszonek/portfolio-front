import React from 'react';
import {List, NumberField, Datagrid, TextField, ImageField} from 'react-admin';


export const PhotoList = props=> (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id"  />
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="path" />
            <TextField source="filename" />
            <ImageField source="webpath"/>
        </Datagrid>
    </List>
);