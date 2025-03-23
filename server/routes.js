var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { createServer } from "http";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
export function registerRoutes(app) {
    return __awaiter(this, void 0, void 0, function () {
        var httpServer;
        var _this = this;
        return __generator(this, function (_a) {
            // API endpoint to handle contact form submission
            app.post('/api/contact', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var _a, name_1, email, subject, message;
                return __generator(this, function (_b) {
                    try {
                        _a = req.body, name_1 = _a.name, email = _a.email, subject = _a.subject, message = _a.message;
                        // Validate input
                        if (!name_1 || !email || !subject || !message) {
                            return [2 /*return*/, res.status(400).json({ message: 'All fields are required' })];
                        }
                        // In a real application, this would save to a database or send an email
                        // For now, just return a success response
                        res.status(200).json({ message: 'Message received successfully' });
                    }
                    catch (error) {
                        console.error('Error handling contact form:', error);
                        res.status(500).json({ message: 'Server error' });
                    }
                    return [2 /*return*/];
                });
            }); });
            // API endpoint to download resume
            app.get('/api/resume', function (req, res) {
                var resumePath = path.join(__dirname, '../attached_assets/vedansh_resume.pdf');
                // Check if file exists
                if (fs.existsSync(resumePath)) {
                    res.setHeader('Content-Type', 'application/pdf');
                    res.setHeader('Content-Disposition', 'attachment; filename=vedansh_resume.pdf');
                    // Stream the file
                    var fileStream = fs.createReadStream(resumePath);
                    fileStream.pipe(res);
                }
                else {
                    res.status(404).json({ message: 'Resume not found' });
                }
            });
            httpServer = createServer(app);
            return [2 /*return*/, httpServer];
        });
    });
}
