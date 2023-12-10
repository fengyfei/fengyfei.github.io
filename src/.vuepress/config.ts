import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Programming Journal",
  description: "关于工作、学习、投资的日常记录",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
