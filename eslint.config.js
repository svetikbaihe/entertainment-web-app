import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
	{ ignores: ["dist"] },
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			eslintConfigPrettier,
		],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			"import/order": [
				"warn",
				{
					groups: [
						"builtin",
						"external",
						"internal",
						"parent",
						"sibling",
						"index",
						"unknown",
					],
					newlinesBetween: "always",
					alphabetize: {
						order: "asc",
						caseInsensitive: true,
						/* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */
						/* ignore case. Options: [true, false] */
					},
					pathGroups: [
						{
							pattern: "react",
							group: "external",
							position: "before",
						},
					],
					pathGroupsExcludedImportTypes: ["react"],
				},
			],
			"import/no-restricted-paths": [
				"error",
				{
					zones: [
						{
							/* Zone Layer of Elements */
							target: "src/elements/**",
							from: "src/app/**",
							message: "Layer of elements can't import layer of app",
						},
						{
							target: "src/elements/**",
							from: "src/pages/**",
							message: "Layer of elements can't import layer of pages",
						},
						{
							target: "src/elements/**",
							from: "src/modules/**",
							message: "Layer of elements can't import layer of modules",
						},
						{
							target: "src/elements/**",
							from: "src/components/**",
							message: "Layer of elements can't import layer of components",
						},
						{
							/* Zone Layer of Components */
							target: "src/components/**",
							from: "src/app/**",
							message: "Layer of components can't import layer of app",
						},
						{
							target: "src/components/**",
							from: "src/pages/**",
							message: "Layer of components can't import layer of pages",
						},
						{
							target: "src/components/**",
							from: "src/modules/**",
							message: "Layer of components can't import layer of modules",
						},
						{
							/* Zone Layer of Modules */
							target: "src/modules/**",
							from: "src/app/**",
							message: "Layer of modules can't import layer of app",
						},
						{
							target: "src/modules/**",
							from: "src/pages/**",
							message: "Layer of modules can't import layer of pages",
						},
						{
							/* Zone Layer of Pages */
							target: "src/pages/**",
							from: "src/app/**",
							message: "Layer of pages can't import layer of app",
						},
					],
				},
			],
		},
	}
);
