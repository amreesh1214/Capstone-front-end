import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Badge,
} from "@chakra-ui/react";
import BasicMenu from "../Menu/Menu";
import { manageProductsTableOption } from "../../constants";
import { useNavigate } from "react-router-dom";

export default function BasicTable({ data = [] }) {
  const navigate = useNavigate();
  const handleOptions = (value, id = "") => {
    if (value === 0) {
      navigate(`/createProduct?productId=${id}&&mode=update`);
    } else if (value === 1) {
    }
  };

  const renderFoodType = (type = "") => {
    return (
      <Stack direction="row">
        {type === "0" ? (
          <Badge colorScheme="green">Veg</Badge>
        ) : (
          <Badge colorScheme="red">Non-Veg</Badge>
        )}
      </Stack>
    );
  };

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Food that we cook</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Food Type</Th>
            <Th isNumeric>Price</Th>
            <Th isNumeric>Discount</Th>
            <Th>Discount Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((d, i) => (
            <Tr>
              <Td>{d.name}</Td>
              <Td>{renderFoodType(d.foodType)}</Td>
              <Td isNumeric>{d.price}</Td>
              <Td isNumeric>{d.discount}</Td>
              <Td>{d.discountType}</Td>
              <Td>
                <BasicMenu
                  data={d}
                  options={manageProductsTableOption}
                  handleOptions={handleOptions}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  );
}