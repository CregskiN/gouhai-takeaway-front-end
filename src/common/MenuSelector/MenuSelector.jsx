import React from 'react';
import PropTypes from 'prop-types';

const MenuSelector = function (props){
    const {
        MenuList,
        hidden = true
    } = props;

    return (
        <div>
            这是菜单选择器
        </div>
    )
};

MenuSelector.propTypes = {
    MenuList: PropTypes.array.isRequired,
    hidden: PropTypes.bool,
};

export default MenuSelector;