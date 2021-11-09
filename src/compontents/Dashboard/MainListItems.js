import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink , useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const MainListItems = ()=>{
    const location = useLocation();
    const {language} = useSelector((state)=>({language:state.languageReducer.lang}))
    return(
        <div>
        <ListItem component={NavLink} to="/" selected={location.pathname === '/'}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={language === 'en' ? 'Dashboard' : 'لوحة التحكم'} />
        </ListItem>
        <ListItem component={NavLink} to="/new-shipment" selected={location.pathname === '/new-shipment'}>
          <ListItemIcon>
            <LocalShippingIcon />
          </ListItemIcon>
          <ListItemText primary={language === 'en' ? 'New Shipment' : 'شحنة جديدة'}  />
        </ListItem>
        <ListItem component={NavLink} to="/inquery" selected={location.pathname === '/inquery'}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary={language === 'en' ? 'Inquery' : 'استعلام تفصيلي'} />
        </ListItem>
      </div>
    )
} 
export default  MainListItems;