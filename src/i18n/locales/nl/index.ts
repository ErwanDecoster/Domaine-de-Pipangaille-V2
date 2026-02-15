import { accommodations } from "./accommodations";
import { common } from "./common";
import { contact } from "./contact";
import { counter } from "./counter";
import { generalConditions } from "./generalConditions";
import { home } from "./home";
import { legalNotices } from "./legalNotices";
import { navigation } from "./navigation";
import { notfound } from "./notfound";
import { place } from "./place";
import { privacyPolicy } from "./privacyPolicy";
import { seo } from "./seo";
import { surroundings } from "./surroundings";

export const nl = {
  ...navigation,
  ...seo,
  ...home,
  ...accommodations,
  ...surroundings,
  ...contact,
  ...common,
  ...place,
  ...counter,
  ...legalNotices,
  ...privacyPolicy,
  ...generalConditions,
  ...notfound,
};
