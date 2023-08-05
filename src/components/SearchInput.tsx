import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          bgGradient="linear(to-r, gray.800, yellow.500, gray.800)"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
