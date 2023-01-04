import React from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HiveTwoToneIcon from '@mui/icons-material/HiveTwoTone';
import SpaTwoToneIcon from '@mui/icons-material/SpaTwoTone';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';

function Navi({ handleClick }) {
  const [value, setValue] = React.useState(0);
  return (
    <div className="wholeNav">
      <Box className="navBar" sx={{ width: 500 }}>
        <BottomNavigation

          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
          className="bottomNav"
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction onClick={() => handleClick("Home")} label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction onClick={() => handleClick("Honey")} label="Honey" icon={<HiveTwoToneIcon />} />
          <BottomNavigationAction onClick={() => handleClick("Chapstick")} label="Chapstick" icon={<SpaTwoToneIcon />} />
          <BottomNavigationAction onClick={() => handleClick("Contact")} label="Contact" icon={<ContactPageIcon />} />
        </BottomNavigation>
      </Box>
    </div>

  );
}

export default Navi;