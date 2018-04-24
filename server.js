const resolve = require('path').resolve,
	express = require('express'),
	app = express();

app.use('/assets', express.static('assets'));
app.use(express.static('dist'));

app.get('*', (req, res) => {
	res.sendFile(resolve(__dirname, 'dist', "index.html"));
});

app.listen(process.env.PORT || 8080);
