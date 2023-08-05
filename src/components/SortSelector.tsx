import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import SearchInput from "./SearchInput";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

interface Props {
  onSearch: (searchText: string) => void;
}
const SortSelector = ({ onSelectSortOrder, sortOrder, onSearch }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metcritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} marginTop="10px">
          Order by: {currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => onSelectSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <Box marginTop="10px" marginLeft={"15px"} width={"500px"}>
        <SearchInput onSearch={onSearch} />
      </Box>
    </>
  );
};

export default SortSelector;
