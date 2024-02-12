import {Box} from "@radix-ui/themes";
import {SettingItem} from "../settings";

export const Settings = () => {

    return (
        <Box>
            <SettingItem propKey="fontSize" type="slider" label="Font Size" defaultValue={16}/>
            <SettingItem propKey="textColor" type="color" label="Text Color"/>
            <SettingItem propKey="padding" type="numbers" label="Padding" defaultValue={["0", "0", "0", "0"]}/>
            <SettingItem propKey="margin" type="numbers" label="Margin" defaultValue={["0", "0", "0", "0"]}/>
            <SettingItem propKey="fontWeight" type="radio" label="Font Weight" defaultValue={400}
                         options={[
                             {value: 400, label: 'Default'},
                             {value: 500, label: 'Medium'},
                             {value: 600, label: 'Bold'}
                         ]}/>
        </Box>
    );
};
