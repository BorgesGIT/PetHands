import { SubCardProps } from "./subs-card";

export const plans: SubCardProps[] = [
  {
    planType: "Free",
    description: "Free plan",
    price: 0,
    features: ["1 pet", "feature 1"],
    checkoutUrl: "/#",
  },
  {
    planType: "Pet owner",
    description: "Pet owner plan",
    price: 3,
    features: ["3 pet", "feature 1", "feature 2"],
    checkoutUrl: "/#",
  },
  {
    planType: "Kennel owner",
    description: "Kennel owner plan",
    price: 15,
    features: [
      "5 pet",
      "feature 1",
      "feature 2",
      "feature 3",
      "Additionnal pet 2$",
    ],
    checkoutUrl: "/#",
  },
  {
    planType: "Farmer",
    description: "Farmer plan",
    price: 50,
    features: [
      "50 pet",
      "feature 1",
      "feature 2",
      "feature 3",
      "feature 4",
      "feature 5",
      "Additionnal pet 2$",
    ],
    checkoutUrl: "/#",
  },
];
