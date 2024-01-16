// import path from 'path';
// import express from 'express';
// import {engine} from 'express-handlebars';

// const appFolder = `${path.resolve()}/hoodstock.rocks`;
// const hoodstockApp = express();

// const hsPages = new Set(['info', 'kids', 'bands', 'food']);

// // CSP
// hoodstockApp.use(function (req, res, next) {
// 	res.setHeader('Content-Security-Policy', 'script-src \'self\' \'unsafe-eval\'');
// 	return next();
// });

// hoodstockApp.engine('hbs', engine({
// 	extname: 'hbs',
// }));
// hoodstockApp.set('views', `${appFolder}/views`);
// hoodstockApp.set('view engine', 'hbs');
// hoodstockApp.use(express.static(`${appFolder}/public`));

// hoodstockApp.get('/', (req, res) => {
// 	res.render('index', {
// 		layout: 'main',
// 		currPage: 'home',
// 	});
// });

// // hoodstockApp.get('/', (req, res) => {
// // 	res.render('splash', {
// // 		layout: 'splash',
// // 	});
// // });

// hoodstockApp.get('/:page?', (req, res) => {
// 	const page = req.params.page;

// 	if (hsPages.has(page)) {
// 		res.render(page, {
// 			layout: 'main',
// 			currPage: page,
// 		});
// 	}
// });

// export {hoodstockApp};
