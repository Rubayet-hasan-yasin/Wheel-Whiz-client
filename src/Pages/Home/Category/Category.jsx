import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import TabContent from "./TabContent/TabContent";


const Category = () => {
    const [selectedTab, setSelectedTab] = useState('Die-Cast Vehicles');


    const handleTabSelect = (index) => {
        const tabName = index === 0 ? 'Die-Cast Vehicles' : index === 1 ? 'Track Sets' : 'Premium';
        setSelectedTab(tabName);
    };
    return (
        <Tabs onSelect={handleTabSelect}>
            <TabList >
                <Tab>Die-Cast Vehicles</Tab>
                <Tab>Track Sets</Tab>
                <Tab>Premium</Tab>
            </TabList>

            <TabPanel>
                <TabContent selectedTab={selectedTab}/>
            </TabPanel>
            <TabPanel>
                <TabContent selectedTab={selectedTab}/>
            </TabPanel>
            <TabPanel>
                <TabContent selectedTab={selectedTab}/>
            </TabPanel>
        </Tabs>
    );
};

export default Category;