import React from 'react';


import Checklist from "./components/Checklist.jsx";
import ChecklistBar from "./components/ChecklistBar.jsx";
import {
    CheckoutPageWrapper,
    ChecklistWrapper,
    ChecklistBarWrapper,
} from "./Checkout.js";


const Checkout = function () {

    const checklist = [
        {
            id: 0,
            name: '鱼香肉丝',
            price: 15,
            amount: 10,
            summary: 150,
        }, {
            id: 1,
            name: '鱼香肉丝',
            price: 15,
            amount: 10,
            summary: 150,
        }, {
            id: 2,
            name: '鱼香肉丝',
            price: 15,
            amount: 10,
            summary: 150,
        }, {
            id: 3,
            name: '鱼香肉丝',
            price: 15,
            amount: 10,
            summary: 150,
        }, {
            id: 4,
            name: '鱼香肉丝',
            price: 15,
            amount: 10,
            summary: 150,
        }, {
            id: 5,
            name: '鱼香肉丝',
            price: 15,
            amount: 10,
            summary: 150,
        }, {
            id: 6,
            name: '鱼香肉丝',
            price: 15,
            amount: 10,
            summary: 150,
        }, {
            id: 7,
            name: '鱼香肉丝',
            price: 15,
            amount: 10,
            summary: 150,
        }, {
            id: 8,
            name: '鱼香肉丝',
            price: 15,
            amount: 10,
            summary: 150,
        }, {
            id: 9,
            name: '鱼香肉丝',
            price: 15,
            amount: 10,
            summary: 150,
        }, {
            id: 10,
            name: '鱼香肉丝',
            price: 15,
            amount: 10,
            summary: 150,
        }, {
            id: 11,
            name: '鱼香肉丝',
            price: 15,
            amount: 10,
            summary: 150,
        }, {
            id: 12,
            name: '鱼香肉丝',
            price: 15,
            amount: 10,
            summary: 150,
        }, {
            id: 13,
            name: '鱼香肉丝',
            price: 15,
            amount: 10,
            summary: 150,
        }, {
            id: 14,
            name: '鱼香肉丝',
            price: 15,
            amount: 10,
            summary: 150,
        }, {
            id: 15,
            name: '鱼香肉丝',
            price: 15,
            amount: 10,
            summary: 150,
        }, {
            id: 16,
            name: '鱼香肉丝',
            price: 15,
            amount: 10,
            summary: 150,
        }

    ]

    return (
        <CheckoutPageWrapper>

            <ChecklistWrapper>
                <Checklist checklist={checklist}/>
            </ChecklistWrapper>

            <ChecklistBarWrapper>
                <ChecklistBar/>
            </ChecklistBarWrapper>
        </CheckoutPageWrapper>
    )
};

Checkout.propTypes = {};

export default Checkout;