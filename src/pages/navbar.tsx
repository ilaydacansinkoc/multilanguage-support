import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import Text from "~/common/Text";
import Emoji from "~/icons/Emoji";

interface INavbarProps {
  setSelectedLanguage: (language: string) => void;
}

const Navbar = ({ setSelectedLanguage }: INavbarProps) => {
  // const [language, setLanguage] = useState("en");
  const [openLanguageList, setOpenLanguageList] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    switch (selectedIndex) {
      case 0:
        setSelectedLanguage("en");
        break;
      case 1:
        setSelectedLanguage("de");
        break;
      case 2:
        setSelectedLanguage("tr");
        break;
      default:
        break;
    }
  }, [selectedIndex, setSelectedLanguage]);

  const getLanguageIcons = (selectedIndex: number) => {
    switch (selectedIndex) {
      case 0:
        return <Emoji symbol="🇬🇧" label="en" />;
      case 1:
        return <Emoji symbol="🇩🇪" label="de" />;
      case 2:
        return <Emoji symbol="🇹🇷" label="tr" />;
      default:
        break;
    }
  };

  return (
    <div className="absolute top-0 flex h-14 w-screen items-center justify-end bg-slate-100">
      <Text id="WELCOME" extraClasses="mr-3" />
      <IconButton
        color="primary"
        aria-label="change language"
        className="relative inline-flex"
        onClick={() => setOpenLanguageList(!openLanguageList)}
      >
        {getLanguageIcons(selectedIndex)}
      </IconButton>
      {openLanguageList && (
        <div className="absolute top-14 bg-slate-200">
          <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => {
                handleListItemClick(event, 0);
                setOpenLanguageList(false);
              }}
            >
              <ListItemText primary="English" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => {
                handleListItemClick(event, 1);
                setOpenLanguageList(false);
              }}
            >
              <ListItemText primary="German" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => {
                handleListItemClick(event, 2);
                setOpenLanguageList(false);
              }}
            >
              <ListItemText primary="Turkish" />
            </ListItemButton>
          </List>
        </div>
      )}
    </div>
  );
};

export default Navbar;
