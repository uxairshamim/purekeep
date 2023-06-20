import {React} from 'react';
import Navigation from './Navigation';

const leftNavMenus = [
    {
      title: "How It Works",
      isDropDown: false,
      link: "",
      isActive: "",
      items: ""
    },
    {
      title: "Future",
      isDropDown: true,
      link: "",
      isActive: "",
      items: ["For entrepreneurs", "For students", "For hobbyists"]
    },
    {
      title: "Pure",
      isDropDown: false,
      link: "",
      isActive: "",
      items: ""
    },
    {
        title: "Pricing",
        isDropDown: false,
        link: "",
        isActive: "",
        items: ""
    },
    {
        title: "Download",
        isDropDown: false,
        link: "",
        isActive: "",
        items: ""
    }
];


const leftNavMenusRight = [
    {
        title: "Help",
        isDropDown: false,
        link: "",
        isActive: "",
        items: ""
    },
    {
        title: "Blog",
        isDropDown: false,
        link: "",
        isActive: "",
        items: ""
    },
    {
        title: "EN",
        isDropDown: false,
        link: "",
        isActive: "",
        items: ""
    }
];

const Header = () => {
    
    const header = {
        backgroundColor: "#35D6C7",
    } 

    return(
        <div style={header}>
            <Navigation listMenuLeft={leftNavMenus} listMenuRight={leftNavMenusRight} />
        </div>
    )
}

export default Header;