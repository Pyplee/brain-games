[To install the project, clone rep and enter in console "make install". To start playing enter in console "make brain-name" game.]: #

install:
	npm ci

brain-games:
	node bin/brain-games.js

publish: 
	npm publish --dry-run

lint:
	npx eslint

fix:
	npx eslint --fix

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js