import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Programming Journal",
  description: "工作、学习的日常记录",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
