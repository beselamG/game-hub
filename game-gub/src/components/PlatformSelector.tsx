import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChevronBarDown } from "react-icons/bs";
import { usePlatforms } from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  handlePlatform: (platfrom: string) => void;
}

export const PlatformSelector = ({ handlePlatform }: Props) => {
  const { error, isLoading, platforms } = usePlatforms();
  const [selectedPlatform, setSelectedPlatform] = useState("");
 

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatform ? selectedPlatform : "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => { 
              setSelectedPlatform(platform.name);
              handlePlatform(platform.name);
             
            }}
          >
            {" "}
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
