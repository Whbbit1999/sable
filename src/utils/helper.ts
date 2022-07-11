import { cloneDeep } from "lodash";
class Helper {
  public env = {} as ViteEnv;

  constructor() {
    this.env = this.getEnvs();
  }

  private getEnvs(): ImportMetaEnv {
    const envs: any = cloneDeep(import.meta.env);
    Object.entries(envs as Record<string, any>).forEach(([key, value]) => {
      if (value === "true") envs[key] = true;
      else if (value === "false") envs[key] = false;
      else if (value === "undefined") envs[key] = undefined;
      else if (value === "null") envs[key] = null;
      else if (/^\d+$/.test(value)) envs[key] = Number(value);
      else envs[key] = value;
    });
    return envs;
  }
}
const helper = new Helper();
const env = helper.env;

export default helper;
export { env };
