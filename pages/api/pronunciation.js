export default async function handler(req, res) {
  // Mock pronunciation scoring
  res.status(200).json({ pronunciationScore: Math.floor(Math.random() * 100) + 1 });
}
