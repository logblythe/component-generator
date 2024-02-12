import {useNode} from "@craftjs/core";
import {Box, Flex} from "@radix-ui/themes";

import {SettingItem} from "../settings";

export const Settings = () => {
    const {
        actions: {setProp},
        props,
    } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <Flex gap="4" direction="column">
            <Box>
                <SettingItem propKey="flexDirection" type="radio" label="Flex-Direction" defaultValue={'row'}
                             options={[
                                 {value: 'row', label: 'row'},
                                 {value: 'column', label: 'column'},
                                 {value: 'row-reverse', label: 'row-reverse'},
                                 {value: 'column-reverse', label: 'column-reverse'}
                             ]}/>

                <SettingItem propKey="alignItems" type="radio" label="Align-items"
                             options={[
                                 {value: 'flex-start', label: 'flex-start'},
                                 {value: 'flex-end', label: 'flex-end'},
                                 {value: 'center', label: 'center'},
                                 {value: 'stretch', label: 'stretch'},
                                 {value: 'baseline', label: 'baseline'},
                             ]}/>

                <SettingItem propKey="justifyContent" type="radio" label="Justify-Content"
                             options={[
                                 {value: 'flex-start', label: 'flex-start'},
                                 {value: 'flex-end', label: 'flex-end'},
                                 {value: 'center', label: 'center'},
                                 {value: 'space-between', label: 'space-between'},
                                 {value: 'space-around', label: 'space-around'},
                                 {value: 'space-evenly', label: 'space-evenly'},
                                 {value: 'baseline', label: 'baseline'},
                             ]}/>

            </Box>
        </Flex>
    );
};
