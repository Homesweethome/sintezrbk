import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Semiconductors from "./components/semiconductors";

function allyProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}


let theme = createMuiTheme({
  palette: {
    type: "light",
  }
});

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} 
            variant="fullWidth">
          <Tab label="Полупроводники" {...allyProps(0)} />
          <Tab label="Установочные из-я" {...allyProps(1)} />
          <Tab label="ТДКС" {...allyProps(2)} />
          <Tab label="Телефоны" {...allyProps(3)} />
          <Tab label="Резисторы" {...allyProps(4)} />
          <Tab label="Провода, гнёзда" {...allyProps(5)} />
          <Tab label="Платы" {...allyProps(6)} />
          <Tab label="Микросхемы" {...allyProps(7)} />
          <Tab label="Механика" {...allyProps(8)} />
          <Tab label="Лампы, радиолампы" {...allyProps(9)} />
          <Tab label="Конденсаторы" {...allyProps(10)} />
          <Tab label="Двигатели" {...allyProps(11)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Semiconductors />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </ThemeProvider>
  );
}

export default App;
