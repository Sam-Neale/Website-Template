import express from 'express';
import rateLimit from 'express-rate-limit';
import path from 'path';

const app = express();
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});

app.use('/public', express.static(path.join(__dirname, '/../public')));
app.use(limiter);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/../views'));

// Add your app.get routes for individual pages here
app.get("/", (req, res) => {
    res.render('index', {
        
    });
});

app.get("*", (req, res) => {
    res.redirect("/");
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});