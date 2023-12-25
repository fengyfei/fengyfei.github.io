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
          text: "新手入门",
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
          text: "新手入门",
          icon: "emojione-monotone:monkey",
          prefix: "foundation/",
          link: "foundation/",
          children: "structure",
        },
        {
          text: "SDK",
          icon: "noto-v1:dagger",
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
          text: "新手入门",
          icon: "noto-v1:snake",
          prefix: "foundation/",
          link: "foundation/",
          children: "structure",
        },
      ],
    },
  ],
});
