import {Box} from "@radix-ui/themes";
import {SettingItem} from "../settings";

export const Settings = () => {

    return (
        <Box>
            <SettingItem propKey="fontSize" type="slider" label="Font Size" defaultValue={16}/>
            <SettingItem propKey="borderRadius" type="number" label="Border Radius"/>
            <SettingItem propKey="lineHeight" type="number" label="Line Height"/>
            <SettingItem propKey="textColor" type="color" label="Text color"/>
            <SettingItem propKey="backgroundColor" type="color" label="Background Color"/>
            <SettingItem propKey="borderColor" type="color" label="Border Color"/>
            <SettingItem propKey="padding" type="numbers" label="Padding" defaultValue={["0", "10", "0", "10"]}/>
            <SettingItem propKey="margin" type="numbers" label="Margin" defaultValue={["5", "0", "5", "0"]}/>
            <SettingItem propKey="fontWeight" type="radio" label="Font Weight" defaultValue={400}
                         options={[
                             {value: 400, label: 'Default'},
                             {value: 500, label: 'Medium'},
                             {value: 600, label: 'Bold'}
                         ]}/>
        </Box>
    );
};
