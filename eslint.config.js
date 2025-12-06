import js from "@eslint/js";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";

const baseGlobals = {
  console: "readonly",
  process: "readonly",
  Buffer: "readonly",
  __dirname: "readonly",
  __filename: "readonly",
  global: "readonly",
  module: "readonly",
  require: "readonly",
  exports: "readonly",
};

const workerGlobals = {
  addEventListener: "readonly",
  atob: "readonly",
  btoa: "readonly",
  caches: "readonly",
  Cache: "readonly",
  CacheStorage: "readonly",
  clearInterval: "readonly",
  clearTimeout: "readonly",
  crypto: "readonly",
  Env: "readonly",
  ExportedHandler: "readonly",
  fetch: "readonly",
  File: "readonly",
  FormData: "readonly",
  Headers: "readonly",
  queueMicrotask: "readonly",
  ReadableStream: "readonly",
  Request: "readonly",
  Response: "readonly",
  setInterval: "readonly",
  setTimeout: "readonly",
  structuredClone: "readonly",
  TextDecoder: "readonly",
  TextEncoder: "readonly",
  TransformStream: "readonly",
  URL: "readonly",
  URLSearchParams: "readonly",
  WritableStream: "readonly",
};

const baseLanguageOptions = {
  parser: typescriptParser,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: baseGlobals,
};

const basePlugins = {
  "@typescript-eslint": typescriptPlugin,
  react: reactPlugin,
  "react-hooks": reactHooksPlugin,
};

const baseRules = {
  ...typescriptPlugin.configs.recommended.rules,
  ...reactPlugin.configs.recommended.rules,
  ...reactHooksPlugin.configs.recommended.rules,

  // TypeScript specific rules
  "@typescript-eslint/no-unused-vars": "warn",
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/no-explicit-any": "warn",

  // React specific rules
  "react/react-in-jsx-scope": "off", // React 17+では不要
  "react/prop-types": "off", // TypeScriptを使用する場合は不要

  // General rules
  "no-console": "warn",
  "no-unused-vars": "off", // TypeScript版を使用
  "prefer-const": "error",
  "no-var": "error",
};

const baseSettings = {
  react: {
    version: "detect",
  },
};

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: baseLanguageOptions,
    plugins: basePlugins,
    rules: baseRules,
    settings: baseSettings,
  },
  {
    files: ["server/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ...baseLanguageOptions,
      globals: {
        ...baseLanguageOptions.globals,
        ...workerGlobals,
      },
    },
    plugins: basePlugins,
    rules: baseRules,
    settings: baseSettings,
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ...prettierConfig,
  },
  {
    ignores: [
      "node_modules/",
      "*/node_modules/",
      "**/node_modules/",
      "dist/",
      "build/",
      "lib/",
      ".next/",
      ".react-router/",
      "coverage/",
    ],
  },
];
