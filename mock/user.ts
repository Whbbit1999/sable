import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/getUserInfo",
    method: "get",
    response: ({}) => {
      return {
        code: 200,
        data: {
          name: "sable",
        },
        message: "success",
      };
    },
  },
  {
    url: "/api/post",
    method: "post",
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: "vben",
      },
    },
  },
] as MockMethod[];
