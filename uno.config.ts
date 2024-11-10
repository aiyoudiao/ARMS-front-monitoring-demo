import { defineConfig } from '@unocss/vite';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import presetUno from '@unocss/preset-uno';
import type { Theme } from '@unocss/preset-uno';
import { presetSoybeanAdmin } from '@sa/uno-preset';
import { themeVars } from './src/theme/vars';

export default defineConfig<Theme>({
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist']
    }
  },
  theme: {
    ...themeVars,
    fontSize: {
      'icon-xs': '0.875rem',
      'icon-small': '1rem',
      icon: '1.125rem',
      'icon-large': '1.5rem',
      'icon-xl': '2rem'
    }
  },
  rules: [
    [
      /^h-calc\((.*)\)$/, // 匹配 h-clac(xxx) 的正则表达式
      ([, d]) => ({ height: `calc(${d})px` }) // 生成对应的 CSS 样式
    ]
  ],
  shortcuts: {
    'card-wrapper': 'rd-8px shadow-sm'
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [presetUno({ dark: 'class' }), presetSoybeanAdmin()]
});