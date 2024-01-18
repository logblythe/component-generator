import {useNode} from "@craftjs/core";
import {Box, Flex, Slider} from "@radix-ui/themes";
import React from "react";

import {TextInput} from "@/app/components/user/settings/TextInput";
import {PropTypes} from "@/app/components/user/text";

export type IProps = {
    prefix?: string;
    label?: string;
    propKey: string;
    index?: number;
    children?: React.ReactNode;
    type: string;
    onChange?: (value: any) => any;
};
export const SettingItem = ({
                                propKey,
                                label,
                                type,
                                onChange,
                                index,
                                ...props
                            }: IProps) => {

    const {
        actions: {setProp},
        propValue,
    } = useNode((node) => ({
        propValue: node.data.props[propKey]
    }));

    return (
        <Box>
            {['text', 'color', 'bg', 'number'].includes(type) ? (
                <TextInput
                    {...props}
                    label={label}
                    type={type}
                    value={propValue}
                    onChange={(value) => {
                        setProp((props: any) => {
                            // @ts-ignore
                            props[propKey] = value;
                        }, 500);
                    }}
                />
            ) : type === 'slider' ? (
                <Flex direction="column" style={{height: 15}}>
                    <Slider defaultValue={[18]}
                            onChange={(value) => {
                                setProp((props: any) => {
                                    // @ts-ignore
                                    props[propKey] = String(value[0]);
                                }, 500);
                            }}
                    />
                </Flex>
            ) : null}
        </Box>
    );
};
