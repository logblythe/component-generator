import {useNode} from "@craftjs/core";
import {Box, Flex, Select, Slider, Text, TextField} from "@radix-ui/themes";
import React, {useState} from "react";

import {PropTypes} from "@/app/components/user/text";

export type IProps = {
    propKey: string;
    type: string;
    label?: string;
    defaultValue?: any;
    options?: any[];
    prefix?: string;
    index?: number;
    children?: React.ReactNode;
    onChange?: (value: any) => any;
};
export const SettingItem = ({
                                propKey,
                                label,
                                type,
                                defaultValue,
                                options,
                                onChange,
                                index,
                                ...props
                            }: IProps) => {

    const {
        actions: {setProp},
        propValue,
    } = useNode((node) => ({
        propValue: node.data.props,
    }));

    const [initialValue, setInitialValue] = useState(defaultValue);

    return (
        <Box>
            <Text>{label}</Text>

            {['text', 'color', 'bg', 'number'].includes(type) ? (
                <TextField.Root>
                    <TextField.Input type={type} placeholder={label ?? ""} value={initialValue ?? ""}
                                     onChange={(e) => {
                                         const value = e.target.value;
                                         setInitialValue(value)
                                         // @ts-ignore
                                         setProp((props: PropTypes) => (props[propKey] = value));
                                     }}
                    />
                </TextField.Root>
            ) : type === 'slider' ? (
                <Flex direction="column" style={{height: 15}}>
                    <Slider defaultValue={[initialValue ?? 18]}
                            onValueChange={(value) => setProp((props: any) => (props[propKey] = String(value[0])))}
                    />
                </Flex>
            ) : type === 'select' ? (
                <Select.Root defaultValue={initialValue} onValueChange={(value) => {
                    setProp((props: any) => (props[propKey] = value));
                }}>
                    <Select.Trigger/>
                    <Select.Content>
                        <Select.Group>
                            {options?.map(item => (
                                <Select.Item key={item.value} value={item.value}>
                                    {item.label}
                                </Select.Item>
                            ))}
                        </Select.Group>
                    </Select.Content>
                </Select.Root>
            ) : null}
        </Box>
    );
};
