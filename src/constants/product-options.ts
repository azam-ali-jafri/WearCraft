// bg-green-950 border-green-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950
// bg-white border-white

export const PRODUCT_COLORS = [
  {
    label: "White",
    value: "white",
    tw: "white",
  },
  { label: "Black", value: "black", tw: "zinc-900" },
  { label: "Green", value: "green", tw: "green-950" },
  { label: "Red", value: "red", tw: "rose-950" },
] as const;

export const PRODUCT_TYPE = [
  {
    label: "T-Shirt",
    value: "tshirt",
    price: 5_00,
  },
  { label: "Hoodie", value: "hoodie", price: 10_00 },
] as const;

export const PRODUCT_SIZE = [
  {
    label: "Extra Small",
    value: "xs",
  },
  {
    label: "Small",
    value: "sm",
  },
  {
    label: "Medium",
    value: "md",
  },
  {
    label: "Large",
    value: "lg",
  },
  {
    label: "Extra Large",
    value: "xl",
  },
  {
    label: "Double Extra Large",
    value: "xxl",
  },
] as const;

export const BASE_PRICE = 5_00;
