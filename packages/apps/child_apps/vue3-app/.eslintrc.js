module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/vue3-essential', '@vue/standard', '@vue/typescript/recommended'],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'indent': 0,
		'no-tabs': 0,
		'no-mixed-spaces-and-tabs': 0,
		'space-before-function-paren': 0,
		'@typescript-eslint/ban-ts-comment': 'off'
	}
}
