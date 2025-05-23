import { MongoClient } from 'mongodb';

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, score } = req.body;

  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('quiz');
    await db.collection('score').insertOne({
      name,
      score,
      date: new Date()
    });
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).json({ error: 'Database error' });
  } finally {
    await client.close();
  }
};
