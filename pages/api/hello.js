// req = HTTP incoming message, res = HTTP server response
export default async function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
}