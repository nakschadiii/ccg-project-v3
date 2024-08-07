const io = require("./config/socket.io.js");
const httpServer = require("./config/httpServer.js");
const { addData, getData } = require("./functions/data.js");

io.on("connection", socket => {
    socket.onAny(r => console.log('signal entrant : ' + r));
    socket.on('newsletter:signup', (email, cb) => {
        console.log('email : ' + email);
        const data = getData('newsletter');
        addData('newsletter', email);
        cb();
    });
});

const PORT = 80;
const PORT2 = 443;
httpServer.http.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});
httpServer.https.listen(PORT2, () => {
    console.log('Listening on port ' + PORT2);
});

/*
import io from "./ccg-project-client/config/socket.io.js";
import httpServer from "./ccg-project-client/config/httpServer.js";
import { addData, getData } from "./ccg-project-client/functions/data.js";

io.on("connection", socket => {
    socket.onAny(r => console.log('signal entrant : ' + r));
    socket.on('newsletter:signup', (email, cb) => {
        console.log('email : ' + email);
        const data = getData('newsletter');
        addData('newsletter', email);
        cb();
    })
});


httpServer.listen(80, "0.0.0.0", () => {
    console.log('Listening on port 80');
});
*/