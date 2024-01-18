import {useNode} from "@craftjs/core";
import {Box, Text, TextField} from "@radix-ui/themes";
import {useState} from "react";

export type IProps = {
    type: string;
    label?: string;
    placeholder?: string;
    onChange?: (value: any) => void;
    value?: any;
};
export const TextInput= ({type, label, placeholder, onChange, value} : IProps) => {
    const [internalValue, setInternalValue] = useState(value);

    return (
        <Box>
            <Text>{label}</Text>
            <TextField.Root>
                <TextField.Input type={type} placeholder={placeholder ?? ""} value={internalValue}
                                 onChange={(e) => {
                                     const value = e.target.value;
                                     setInternalValue(e.target.value);
                                 }}
                />
            </TextField.Root>
        </Box>
    );
};
