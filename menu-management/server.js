const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/menu-management'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/menu-management/index.html'));
});
app.listen(process.env.PORT || 8080);