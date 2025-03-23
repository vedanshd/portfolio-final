var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { useState, useRef, useEffect } from 'react';
import SectionTitle from '@/components/ui/section-title';
import { useAnimation, useInView, motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import GradientBorder from '@/components/ui/gradient-border';
import { Linkedin, FileDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
var Contact = function () {
    var _a = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    }), formData = _a[0], setFormData = _a[1];
    var _b = useState(false), isSubmitting = _b[0], setIsSubmitting = _b[1];
    var toast = useToast().toast;
    var controls = useAnimation();
    var sectionRef = useRef(null);
    var isInView = useInView(sectionRef, {
        once: true,
        margin: '-100px 0px',
    });
    useEffect(function () {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setIsSubmitting(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    // In a real app, we would send data to a server endpoint
                    // For now, we'll simulate a response after 1 second
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                case 2:
                    // In a real app, we would send data to a server endpoint
                    // For now, we'll simulate a response after 1 second
                    _a.sent();
                    // Clear form
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    });
                    toast({
                        title: "Message sent",
                        description: "Thank you for your message. I'll get back to you soon!",
                    });
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    toast({
                        title: "Error",
                        description: "There was an error sending your message. Please try again.",
                        variant: "destructive",
                    });
                    return [3 /*break*/, 5];
                case 4:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleDownloadResume = function () {
        // Create a link to download the resume
        var link = document.createElement('a');
        link.href = '/vedansh_resume.pdf';
        link.download = 'Vedansh_Dhawan_Resume.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast({
            title: "Download started",
            description: "Your resume is being downloaded.",
        });
    };
    return (<section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle number="07" title="Contact Me"/>
        
        <div className="text-center mb-12">
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a question or want to work together? Feel free to reach out to me using the form below or connect with me on LinkedIn.
          </p>
        </div>
        
        <motion.div ref={sectionRef} initial="hidden" animate={controls} variants={fadeIn} className="max-w-2xl mx-auto">
          <GradientBorder>
            <div className="p-6 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                      Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 bg-muted border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                      Email
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 bg-muted border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"/>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 bg-muted border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"/>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 bg-muted border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"/>
                </div>
                
                <div className="flex justify-between items-center">
                  <button type="submit" disabled={isSubmitting} className="px-6 py-3 bg-accent text-primary font-medium rounded-md hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/vedansh-dhawan-50a860323/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-foreground transition-colors duration-300" aria-label="LinkedIn">
                      <Linkedin className="h-6 w-6"/>
                    </a>
                    <button onClick={handleDownloadResume} className="text-accent hover:text-foreground transition-colors duration-300" aria-label="Download Resume">
                      <FileDown className="h-6 w-6"/>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </GradientBorder>
        </motion.div>
      </div>
    </section>);
};
export default Contact;
