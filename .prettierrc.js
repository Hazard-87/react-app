module.exports = {
	tabWidth: 2,
	semi: false,
	trailingComma: 'none',
	singleQuote: true,
	printWidth: 80,
	overrides: [
		{
			files: '*.json',
			options: {
				printWidth: 200
			}
		}
	]
}