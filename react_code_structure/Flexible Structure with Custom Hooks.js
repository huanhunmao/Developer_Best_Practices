import React, { useState } from 'react';
import useGetAllMenuItems from './useGetAllMenuItems';
import useUUID from './useUUID';

const MenuComponent = ({ restaurant_id, tbl_id, limit }) => {
    // Custom hook that needs to precede certain state hooks
    const uuid = useUUID();

    // useState hooks, some of which depend on the custom hook's output
    const [searchQuery, setSearchQuery] = useState('');
    const [sortby, setSortby] = useState('rating');
    const [category, setCategory] = useState('');

    // Another custom hook that uses state and the output from useUUID
    const { data: menuItems, error } = useGetAllMenuItems(
        restaurant_id,
        uuid,
        tbl_id,
        limit,
        searchQuery,
        sortby,
        category,
    );

    // Component logic and JSX
    return (
        // JSX rendering using menuItems
    );
};

export default MenuComponent;
