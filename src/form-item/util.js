import React from 'react';
import {
    Cascader,
    Checkbox,
    DatePicker,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TimePicker,
    Transfer,
    TreeSelect,
} from 'antd';

import MessageCode from '../message-code';
import ImageCode from '../image-code';

export const formElementTypes = [
    {
        type: 'image-code',
        Component: ImageCode,
        isInputLike: true,
        componentName: 'ImageCode',
    },
    {
        type: 'message-code',
        Component: MessageCode,
        isInputLike: true,
        componentName: 'MessageCode',
    },
    {
        type: 'input',
        Component: Input,
        isInputLike: true,
        componentName: 'Input',
    },
    {
        type: 'hidden',
        Component: Input,
        isInputLike: true,
    },
    {
        type: 'number',
        Component: InputNumber,
        isInputLike: true,
        componentName: 'InputNumber',
    },
    {
        type: 'textarea',
        Component: Input.TextArea,
        isInputLike: true,
        componentName: 'Input.TextArea',
    },
    {
        type: 'password',
        Component: Input.Password,
        isInputLike: true,
        componentName: 'Input.Password',
    },
    {
        type: 'mobile',
        Component: Input,
        isInputLike: true,
        componentName: 'Input',
    },
    {
        type: 'email',
        Component: Input,
        isInputLike: true,
        componentName: 'Input',
    },
    {
        type: 'select',
        Component: Select,
        componentName: 'Select',
        getComponent: ({ commonProps, props }) => {
            return (
                <Select optionFilterProp="label" {...commonProps} {...props}/>
            );
        },
    },
    {
        type: 'select-tree',
        getComponent: ({ commonProps, props }) => {
            return (
                <TreeSelect treeNodeFilterProp="title" {...commonProps} {...props} treeData={props.treeData || props.options}/>
            );
        },
        componentName: 'TreeSelect',
    },
    {
        type: 'checkbox',
        Component: Checkbox,
        componentName: 'Checkbox',
    },
    {
        type: 'checkbox-group',
        Component: Checkbox.Group,
        componentName: 'Checkbox.Group',
    },
    {
        type: 'radio',
        Component: Radio,
        componentName: 'Radio',
    },
    {
        type: 'radio-button',
        getComponent: ({ commonProps, props }) => {
            const { options = [], ...others } = props;
            return (
                <Radio.Group buttonStyle="solid" {...commonProps} {...others}>
                    {options.map(opt => <Radio.Button key={opt.value} {...opt}>{opt.label}</Radio.Button>)}
                </Radio.Group>
            );
        },
        componentName: 'Radio.Group',
    },
    {
        type: 'radio-group',
        Component: Radio.Group,
        componentName: 'Radio.Group',
    },
    {
        type: 'switch',
        Component: Switch,
        componentName: 'Switch',
    },
    {
        type: 'date',
        Component: DatePicker,
        componentName: 'DatePicker',
    },
    {
        type: 'week',
        getComponent: ({ commonProps, props }) => {
            return <DatePicker {...commonProps} picker="week" {...props}/>;
        },
        componentName: 'DatePicker',
    },
    {
        type: 'month',
        getComponent: ({ commonProps, props }) => {
            return <DatePicker {...commonProps} picker="month" {...props}/>;
        },
        componentName: 'DatePicker',
    },
    {
        type: 'quarter',
        getComponent: ({ commonProps, props }) => {
            return <DatePicker {...commonProps} picker="quarter" {...props}/>;
        },
        componentName: 'DatePicker',
    },
    {
        type: 'year',
        getComponent: ({ commonProps, props }) => {
            return <DatePicker {...commonProps} picker="year" {...props}/>;
        },
        componentName: 'DatePicker',
    },
    {
        type: 'date-range',
        Component: DatePicker.RangePicker,
        componentName: 'DatePicker.RangePicker',
    },
    {
        type: 'week-range',
        getComponent: ({ commonProps, props }) => {
            return <DatePicker.RangePicker {...commonProps} picker="week" {...props}/>;
        },
        componentName: 'DatePicker.RangePicker',
    },
    {
        type: 'month-range',
        getComponent: ({ commonProps, props }) => {
            return <DatePicker.RangePicker {...commonProps} picker="month" {...props}/>;
        },
        componentName: 'DatePicker.RangePicker',
    },
    {
        type: 'quarter-range',
        getComponent: ({ commonProps, props }) => {
            return <DatePicker.RangePicker {...commonProps} picker="quarter" {...props}/>;
        },
        componentName: 'DatePicker.RangePicker',
    },
    {
        type: 'year-range',
        getComponent: ({ commonProps, props }) => {
            return <DatePicker.RangePicker {...commonProps} picker="year" {...props}/>;
        },
        componentName: 'DatePicker.RangePicker',
    },
    {
        type: 'time',
        Component: TimePicker,
        componentName: 'TimePicker',
    },
    {
        type: 'time-range',
        Component: TimePicker.RangePicker,
        componentName: 'TimePicker',
    },
    {
        type: 'date-time',
        getComponent: ({ commonProps, props }) => {
            return <DatePicker {...commonProps} showTime {...props}/>;
        },
        componentName: 'DatePicker',
    },
    {
        type: 'date-time-range',
        getComponent: ({ commonProps, props }) => {
            return <DatePicker.RangePicker {...commonProps} showTime {...props}/>;
        },
        componentName: 'DatePicker.RangePicker',
    },
    {
        type: 'cascader',
        Component: Cascader,
        componentName: 'Cascader',
    },
    {
        type: 'transfer',
        Component: Transfer,
        componentName: 'Transfer',
    },
];

// type markdown table
// console.log(formElementTypes.sort((a, b) => a.type > b.type ? 1 : -1).map(item => `| ${item.type} | ${item.componentName} |`).join('\n'));

/**
 * ?????? input ??????
 * @param type
 * @returns {boolean}
 */
export function isInputLikeElement(type) {
    const types = formElementTypes.filter(item => item.isInputLike).map(item => item.type);

    return types.includes(type);
}

export function getPlaceholder({ type, placeholder, label }) {
    if (placeholder !== undefined) return placeholder;

    if (type === 'time-range') return [ '????????????', '????????????' ];

    if (type && type.endsWith('-range')) return undefined;

    if (isInputLikeElement(type)) return `?????????${label}`;
    return `?????????${label}`;
}

export function getRules(options) {
    let {
        type,
        noSpace,
        rules,
        required,
        placeholder,
        maxLength,
        minLength,
    } = options;
    if (!rules) rules = [];

    if (required && !rules.some(item => typeof item === 'object' && 'required' in item)) {
        rules.push({ required: true, message: `${placeholder}???` });
    }

    if (noSpace && isInputLikeElement(type)) {
        rules.push({
            validator: (rule, value) => {
                if (value && (typeof value === 'string') && value.includes(' ')) return Promise.reject(Error('????????????????????????'));

                return Promise.resolve();
            },
        });
    }

    if (maxLength !== undefined && !rules.find(item => 'max' in item)) {
        rules.push({ type: 'string', max: maxLength, message: `???????????????????????? ${maxLength} ????????????` });
    }

    if (minLength !== undefined && !rules.find(item => 'min' in item)) {
        rules.push({ type: 'string', min: minLength, message: `???????????????????????? ${minLength} ????????????` });
    }

    return rules;
}
