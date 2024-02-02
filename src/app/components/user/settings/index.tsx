import {useNode} from "@craftjs/core";
import {Box, Flex, Grid, Select, Slider, Text, TextField, RadioGroup} from "@radix-ui/themes";
import React, {useState} from "react";

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

    const [initialValue, setInitialValue] = useState(defaultValue ?? ((options && options.length) ? options[0].value : ''));

    return (
        <Box className="mb-3">

            {type === 'color' ? (
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Text>{label}</Text>
                    <TextField.Root>
                        <TextField.Input className="color-picker" type="color" size="1" radius="none"
                                         style={{width: 20}}
                                         value={initialValue ?? ""}
                                         onChange={(e) => {
                                             const value = e.target.value;
                                             setInitialValue(value)
                                             // @ts-ignore
                                             setProp((props: PropTypes) => (props[propKey] = value));
                                         }}/>
                    </TextField.Root>
                </div>
            ) : (
                <>
                    <Text>{label}</Text>

                    {['text', 'number'].includes(type) ? (
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
                    ) : type === 'numbers' ? (
                        <TextField.Root>
                            <TextField.Input type="number" className="px-2 input-border" placeholder="T"
                                             value={initialValue[0]}
                                             onChange={(e) => {
                                                 let newValue = [...initialValue];
                                                 newValue[0] = e.target.value;
                                                 setInitialValue(newValue)
                                                 // @ts-ignore
                                                 setProp((props: PropTypes) => (props[propKey] = newValue));
                                             }}/>
                            <TextField.Input type="number" className="px-2 input-border" placeholder="L"
                                             value={initialValue[1]}
                                             onChange={(e) => {
                                                 let newValue = [...initialValue];
                                                 newValue[1] = e.target.value;
                                                 setInitialValue(newValue)
                                                 // @ts-ignore
                                                 setProp((props: PropTypes) => (props[propKey] = newValue));
                                             }}/>
                            <TextField.Input type="number" className="px-2 input-border" placeholder="B"
                                             value={initialValue[2]}
                                             onChange={(e) => {
                                                 let newValue = [...initialValue];
                                                 newValue[2] = e.target.value
                                                 setInitialValue(newValue)
                                                 // @ts-ignore
                                                 setProp((props: PropTypes) => (props[propKey] = newValue));
                                             }}/>
                            <TextField.Input type="number" className="px-2 input-border" placeholder="R"
                                             value={initialValue[3]}
                                             onChange={(e) => {
                                                 let newValue = [...initialValue];
                                                 newValue[3] = e.target.value
                                                 setInitialValue(newValue)
                                                 // @ts-ignore
                                                 setProp((props: PropTypes) => (props[propKey] = newValue));
                                             }}/>
                        </TextField.Root>
                    ) : type === 'slider' ? (
                        <Flex direction="column" className="mt-1" style={{height: 15}}>
                            <Slider defaultValue={[initialValue ?? 18]} title={initialValue}
                                    onValueChange={(value) => {
                                        const updatedValue = String(value[0]);
                                        setInitialValue(updatedValue)
                                        setProp((props: any) => (props[propKey] = updatedValue))
                                    }}
                            />
                        </Flex>
                    ) : type === 'select' ? (
                        <Box style={{width: "100%"}}>
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
                                    <Text as="label" size="2" key={item.value}>
                                        <Flex gap="2">
                                            <RadioGroup.Item value={item.value}/> {item.label}
                                        </Flex>
                                    </Text>
                                ))}
                            </Grid>
                        </RadioGroup.Root>
                    ) : null}
                </>
            )}

        </Box>
    );
};