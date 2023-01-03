import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab as MuiTab } from "@mui/material";
import React from "react";

export type TabItemType = {
  label: string;
  value: string;
  component: React.ReactNode;
};

interface ITab {
  items: TabItemType[];
  defaultValue: string;
}

const Tab: React.FC<ITab> = ({ defaultValue, items }) => {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="drink-tabs"
          >
            {items.map((item) => (
              <MuiTab
                key={`tab-item-${item.value}`}
                label={item.label}
                value={item.value}
              />
            ))}
          </TabList>
        </Box>
        {items.map((item) => (
          <TabPanel key={`tab-panel-${item.value}`} value={item.value}>
            {item.component}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default Tab;
