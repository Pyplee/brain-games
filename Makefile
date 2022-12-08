install:
		npm ci

brain-games:
		node games/brain-games.js

publish:
		npm publish --dry-run

lint:
		npx eslint .
