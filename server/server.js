import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
const app = express();

app.use('/api', createProxyMiddleware({
    target: 'https://api.sheetmonkey.io',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // Remove '/api' do caminho
    },
}));

app.listen(3000, () => {
    console.log('Proxy running on port 3000');
});