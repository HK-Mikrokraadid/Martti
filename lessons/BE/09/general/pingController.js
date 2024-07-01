const ping = (req, res) => res.status(200).json({
  success: true,
  message: 'Pong',
});

module.exports = ping;
