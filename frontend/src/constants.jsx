import check1 from "./assets/features/check1.svg";
import check2 from "./assets/features/check2.svg";
import check3 from "./assets/features/check3.svg";
import credit from "./assets/banner/credit.svg";
import email from "./assets/banner/mail.svg";
import number from "./assets/banner/number.svg";
import passcode from "./assets/banner/pass.svg";
import password from "./assets/banner/password.svg";
import user from "./assets/banner/user.svg";
import { useTranslation } from "react-i18next";

// Footer
import facebook from "./assets/footer/facebook.svg";
import instagram from "./assets/footer/instagram.svg";
import telegram from "./assets/footer/telegram.svg";
import twitter from "./assets/footer/twitter.svg";

const icons = [user, number, email, credit, password, passcode];

export const useGrid = () => {
  const { t } = useTranslation();

  const items = t("features.section2.items", { returnObjects: true });

  return items.map((item, index) => ({
    id: index + 1,
    src: icons[index],
    title: item.title,
    point: item.point,
  }));
};
// Navbar
export const navs = [
  { id: 1, name: "nav.services", href: "/" },
  { id: 2, name: "nav.features", href: "/" },
  { id: 3, name: "nav.pricing", href: "/" },
  { id: 4, name: "nav.partners", href: "/" },
  { id: 5, name: "nav.about", href: "/" },
];

// for features
export const personalInfo = [
  {
    id: 1,
    src: check1,
    point:
      "The first step involves identifying all places where your personal information might be present.",
  },
  {
    id: 2,
    src: check1,
    point:
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform.",
  },
  {
    id: 3,
    src: check1,
    point:
      "Removing personal information is not a one-time task but requires ongoing vigilance..",
  },
  {
    id: 4,
    src: check1,
    point:
      "There are professional services and tools available that specialise in personal information removal.",
  },
];

export const detail = [
  {
    id: 1,
    src: check2,
    point:
      "The first step involves identifying all places where your personal information might be present.",
  },
  {
    id: 2,
    src: check2,
    point:
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform.",
  },
  {
    id: 3,
    src: check2,
    point:
      "Removing personal information is not a one-time task but requires ongoing vigilance..",
  },
  {
    id: 4,
    src: check2,
    point:
      "There are professional services and tools available that specialise in personal information removal.",
  },
];

export const security = [
  {
    id: 1,
    src: check3,
    point:
      "The first step involves identifying all places where your personal information might be present.",
  },
  {
    id: 2,
    src: check3,
    point:
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform.",
  },
  {
    id: 3,
    src: check3,
    point:
      "Removing personal information is not a one-time task but requires ongoing vigilance..",
  },
  {
    id: 4,
    src: check3,
    point:
      "There are professional services and tools available that specialise in personal information removal.",
  },
];

export const grid = [
  {
    id: 1,
    src: user,
    title: "Username",
    point: "+1 (456) 453-3456",
  },
  {
    id: 2,
    src: number,
    title: "Phone numbers",
    point: "+1 (456) 453-3456",
  },
  {
    id: 3,
    src: email,
    title: "Email address",
    point: "+1 (456) 453-3456",
  },
  {
    id: 4,
    src: credit,
    title: "Credit card",
    point: "+1 (456) 453-3456",
  },
  {
    id: 5,
    src: password,
    title: "Password",
    point: "Kas3345-r32",
  },
  {
    id: 6,
    src: passcode,
    title: "One-time passcode",
    point: "Kas3345-r32",
  },
];

// Footer

export const socialIcons = [
  {
    src: twitter,
    alt: "twitter",
  },
  {
    src: instagram,
    alt: "instagram",
  },
  {
    src: telegram,
    alt: "telegram",
  },
  {
    src: facebook,
    alt: "facebook",
  },
];

export const footerLinks = ["FEATURES", "SERVICES", "PRICING", "HOW TO USE"];
