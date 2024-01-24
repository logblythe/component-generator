import {useNode} from "@craftjs/core";
import {Box, Flex, RadioGroup, Select, Slider,Text, TextField} from "@radix-ui/themes";

import {SettingItem} from "../settings";
import {PropTypes} from "./index";

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
            <SettingItem propKey="textColor" type="color" label="Text Color"/>
            <SettingItem propKey="marginTop" type="number" label="Margin Top"/>
            <SettingItem propKey="marginRight" type="number" label="Margin Right"/>
            <SettingItem propKey="marginBottom" type="number" label="Margin Bottom"/>
            <SettingItem propKey="marginLeft" type="number" label="Margin Left"/>
            <SettingItem propKey="fontWeight" type="select" label="Font Weight" defaultValue={400}
                         options={[
                             {value: 400, label: 'Default'},
                             {value: 500, label: 'Medium'},
                             {value: 600, label: 'Bold'}
                         ]}/>
        </Box>
    );
};
