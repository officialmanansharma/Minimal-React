import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import LockIcon from '@mui/icons-material/Lock';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import { PrimaryAppBar } from './PrimaryAppBar';
import { Dashboard } from '../components/Dashboard/Dashboard';
import { Users } from '../components/Users';
import { DynamicForm } from '../components/DynamicForm';

const drawerWidth = 280;

export default function PermanentDrawer() {

  const theme = useTheme();

  const [optionValue, setOptionValue] = useState('Dashboard');
  const menuOptions1 = [<DashboardIcon/>, <PersonIcon />, <NoteAltIcon />, <ShoppingCartIcon />, <SpeakerNotesIcon />, <LockIcon />, <DoNotDisturbAltIcon />];
  const menuOptions = ['Dashboard', 'User', 'Dynamic Form', 'Product', 'Blog', 'Login', 'Not Found'];
  const pages = [<Dashboard />, <Users />, <DynamicForm />]

  const handleOptionChange = (event, newValue) => {
    setOptionValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <TabContext value={optionValue}>
        <CssBaseline />
        <PrimaryAppBar drawerWidth={drawerWidth} theme={theme} />
        <Drawer 
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              padding: '0 20px',
              backgroundColor: theme.palette.grey[100]
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Typography 
          variant='h4'
          sx={{
            margin: '25px 0',
            color: 'blueviolet',
            fontWeight: '600'
          }}>
            MUI
          </Typography>
          <Card sx={{
            padding: '16px 20px',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'left',
            backgroundColor: '#919eab1f',
            boxShadow: 'none'
          }}>
            <Avatar 
              sx={{
                marginRight: '10px',
                backgroundColor: theme.palette.primary.main,
              }}>
                MS
            </Avatar>
            <Typography 
              variant='subtitle1' 
              sx={{
                fontWeight: '600'
              }}
            >
              {`Manan Sharma`}
            </Typography>
          </Card>
          <TabList
            orientation='vertical'
            onChange={handleOptionChange}
            aria-label="lab API tabs example"
            sx={{
              margin: '20px 0',
              '& .css-rihmke-MuiButtonBase-root-MuiTab-root': {
                alignItems: 'start'
              },
              '& .css-oby1sq-MuiTabs-indicator': {
                backgroundColor: 'rgba(24, 119, 242, 0.08)',
                width: '100%',
                borderRadius: '10px'
              },
            }}
          >
            {menuOptions.map((menuOption, index) => (
              <Tab 
                key={menuOption} 
                label={
                  <Box 
                    sx={{
                      display: 'flex', 
                      alignItems: 'center'
                    }}
                    >
                    {menuOptions1[index]} &nbsp; {menuOption}
                  </Box>
                } 
                value={menuOption}
                sx={{
                  textAlign: 'left',
                  margin: '2px 0',
                  color: theme.palette.grey[600],
                  fontWeight: '500',
                  borderRadius: '10px'
                }}
              />
            ))}
          </TabList>
        </Drawer>
        {pages.map((page, index) => (
          <TabPanel 
            key={`page_${index}`}
            value={menuOptions[index]}
            sx={{
              width: '100%',
              marginTop: '50px'
            }}
          >
            {page}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}

