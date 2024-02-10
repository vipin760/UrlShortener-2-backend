"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var conf_1 = require("./config/conf");
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var port = process.env.Port || 3000;
dotenv_1.default.config();
(0, conf_1.dbConnect)();
var whitelist = ['https://url-shortener-2-frontend-git-master-vipins-projects-f115abc8.vercel.app'];
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
app.use((0, cors_1.default)(corsOptions));
var url_routes_1 = __importDefault(require("../src/routes/url.routes"));
app.use(express_1.default.json());
app.use('/api/url', url_routes_1.default);
app.listen(port, function () {
    console.log("running port ".concat(port));
});
exports.default = app;
//# sourceMappingURL=index.js.map