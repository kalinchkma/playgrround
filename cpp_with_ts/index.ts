import { DecorateObjects } from "addon.js";

const input = [
  {
    dealer_id: 1,
    dealer_name_first: "test",
  },
  {
    dealer_id: 1,
    dealer_name_first: "test",
    address_id: 3,
    address_city: "hudai",
    address_zip_code: "342",
    hudai_name_test: "example",
  },

  {
    dealer_id: 1,
    dealer_name_first: "test",
    address_id: 3,
    address_city: "hudai",
    address_zip_code: "342",
    hudai_name_test: "example",
    medusa_name: "medusa",
    medusa_country_id: 12,
    medusa_city: 'china',
    medusa_city_id: 100
  },
];

console.log(DecorateObjects(input));

export { DecorateObjects };
