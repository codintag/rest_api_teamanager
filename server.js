const express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
bdd = require('./models/setup'),
app = express(),
port = process.env.PORT || 3051;


// Templating setup
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
// Parse application data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// cross origin setup
app.use(cors({origin: '*'}));


// Routing
const teamRoutes = require('./routes/team').init(bdd.models);

app.route('/')
.get((req, res) => {
    res.render('index.html');
})

app.use('/teams', teamRoutes);


// Starting app
bdd.sequelize.sync({ alter: true })
    .then(() => {
        app.listen(port, function() {
            console.log('started on port:' + port);
        })
    });
