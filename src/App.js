import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import './App.css';

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

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      flexGrow: 1,
    },
  }));
  
  const classes = useStyles();
  
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} 
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="simple tabs example">
          <Tab label="Полупроводники" {...allyProps(0)} />
          <Tab label="Установочные из-я" {...allyProps(1)} />
          <Tab label="ТДКС" {...allyProps(2)} />
          <Tab label="Телефоны" {...allyProps(3)} />
          <Tab label="Резисторы" {...allyProps(4)} />
          <Tab label="Провода, гнёзда" {...allyProps(5)} />
          <Tab label="Платы" {...allyProps(6)} />
          <Tab label="Микросхемы" {...allyProps(6)} />
          <Tab label="Механика" {...allyProps(6)} />
          <Tab label="Лампы, радиолампы" {...allyProps(6)} />
          <Tab label="Конденсаторы" {...allyProps(6)} />
          <Tab label="Двигатели" {...allyProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}

export default App;
