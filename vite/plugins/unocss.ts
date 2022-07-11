import Unocss from "unocss/vite";
import presetWind from "@unocss/preset-wind";

export default function setupUnocssPlugin() {
  return Unocss({
    presets: [presetWind()],
  });
}
