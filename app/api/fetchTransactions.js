import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    // Get the path to the JSON file
    const filePath = path.join(process.cwd(), 'public', 'transactions.json');
    
    // Read the JSON file
    const data = fs.readFileSync(filePath, 'utf-8');
    
    // Parse the JSON data and send it as a response
    res.status(200).json(JSON.parse(data));
}
