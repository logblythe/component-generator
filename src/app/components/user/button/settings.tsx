import {useNode} from "@craftjs/core";
import {Box, Text, TextField, RadioGroup, Flex, Select, Slider} from "@radix-ui/themes";

import {PropTypes} from "./index";
import {SettingItem} from "@/app/components/user/settings";

export const Settings = () => {
    const {
        actions: {setProp},
        props,
    } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <Box>
            <SettingItem propKey="fontSize" type="slider" label="Font Size" defaultValue={16}/>
            <SettingItem propKey="borderRadius" type="number" label="Border Radius"/>
            <SettingItem propKey="textColor" type="color" label="Text color"/>
            <SettingItem propKey="backgroundColor" type="color" label="Background Color"/>
            <SettingItem propKey="borderColor" type="color" label="Border Color"/>
            <SettingItem propKey="paddingX" type="number" label="Padding X-axis"/>
            <SettingItem propKey="paddingY" type="number" label="Padding Y-axis"/>
            <SettingItem propKey="fontWeight" type="select" label="Font Weight" defaultValue={400}
                         options={[
                             {value: 400, label: 'Default'},
                             {value: 500, label: 'Medium'},
                             {value: 600, label: 'Bold'}
                         ]}/>
        </Box>
    );
};
