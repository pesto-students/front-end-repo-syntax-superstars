import React from 'react';
import { Tabs as MuiTabs } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';

const Tabs = ({ tabsData }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <MuiTabs value={value} onChange={handleChange} aria-label="icon-tab">
        {tabsData.map((tab) => (
          <Tab icon={tab.icon} label={tab.label} iconPosition="start" sx={{ minHeight: '55px' }} />
        ))}
      </MuiTabs>
    </Box>
  );
}

export default Tabs;