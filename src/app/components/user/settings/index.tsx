import {useNode} from "@craftjs/core";
import {Box, Flex, Grid, Select, Slider, Text, TextField, RadioGroup} from "@radix-ui/themes";
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
                <TextField.Root className="mb-3">
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
                <Flex direction="column" className="mb-3" style={{height: 15}}>
                    <Slider defaultValue={[initialValue ?? 18]} title={initialValue}
                            onValueChange={(value) => {
                                const updatedValue = String(value[0]);
                                setInitialValue(updatedValue)
                                setProp((props: any) => (props[propKey] = updatedValue))
                            }}
                    />
                </Flex>
            ) : type === 'select' ? (
                <Box className="mb-3" style={{width: "100%"}}>
                    <Select.Root defaultValue={initialValue} onValueChange={(value) => {
                        setInitialValue(value)
                        setProp((props: any) => (props[propKey] = value));
                    }}>
                        <Select.Trigger/>
                        <Select.Content style={{width: "100%"}}>
                            <Select.Group style={{width: "100%"}}>
                                {options?.map(item => (
                                    <Select.Item key={item.value} value={item.value}>
                                        {item.label}
                                    </Select.Item>
                                ))}
                            </Select.Group>
                        </Select.Content>
                    </Select.Root>
                </Box>
            ) : type === 'radio' ? (
                <RadioGroup.Root
                    defaultValue={initialValue}
                    onValueChange={(value) => {
                        setInitialValue(value)
                        setProp((props: any) => (props[propKey] = value));
                    }}
                >
                    <Grid gap="2" columns="2">
                        {options?.map(item => (
                            <Text as="label" size="2">
                                <Flex gap="2">
                                    <RadioGroup.Item value={item.value}/> {item.label}
                                </Flex>
                            </Text>
                        ))}
                    </Grid>
                </RadioGroup.Root>
            ) : null}
        </Box>
    );
};