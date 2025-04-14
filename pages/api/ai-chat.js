export default async function handler(req, res) {
  const { messages, scenarioId } = req.body;
  // Mock AI response
  res.status(200).json({ reply: "This is a mock AI reply for scenario " + scenarioId });
}
