import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "C++",
      icon: "teenyicons:cplusplus-outline",
      prefix: "cplusplus/",
      link: "cplusplus/",
      children: [
        {
          text: "基础知识",
          icon: "fluent-emoji:spider",
          prefix: "foundation/",
          link: "foundation/",
          children: "structure",
        },
      ],
    },
    {
      text: "Javascript",
      icon: "teenyicons:javascript-outline",
      prefix: "javascript/",
      link: "javascript/",
      children: [
        {
          text: "基础知识",
          icon: "emojione-monotone:monkey",
          prefix: "foundation/",
          link: "foundation/",
          children: "structure",
        },
        {
          text: "SDK",
          icon: "arcticons:activitylauncher",
          prefix: "sdk/",
          link: "sdk/",
          children: "structure",
        },
      ],
    },
    {
      text: "Python",
      icon: "teenyicons:python-outline",
      prefix: "python/",
      link: "python/",
      children: [
        {
          text: "基础知识",
          icon: "noto-v1:snake",
          prefix: "foundation/",
          link: "foundation/",
          children: "structure",
        },
      ],
    },
  ],
});
