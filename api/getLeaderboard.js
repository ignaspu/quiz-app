import { MongoClient } from 'mongodb';

export default async (req, res) => {
  const uri = process.env.REACT_APP_MONGODB_URI;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('quiz');
    const leaderboard = await db.collection('score')
      .find()
      .sort({ score: -1 })
      .limit(10)
      .toArray();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    res.status(200).json(leaderboard);
  } catch (error) {
    console.error('Database error:', error);
  } finally {
    await client.close();
  }
};
