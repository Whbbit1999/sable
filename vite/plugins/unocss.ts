import Unocss from "unocss/vite";
import { Preset } from "@unocss/core";
import presetWind from "@unocss/preset-wind";
import transformerDirectives from "@unocss/transformer-directives";

export default function setupUnocssPlugin() {
  return Unocss({
    presets: [presetWind() as unknown as Preset<{}>],
    transformers: [transformerDirectives()],
  });
}
