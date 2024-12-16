const axios = require('axios');

// The URL of your bot on Glitch
const BOT_URL = 'https://reservreminderv2.glitch.me/';

// Interval to ping the bot (in milliseconds)
const PING_INTERVAL = 5 * 60 * 1000; // Every 5 minutes

// Function to ping the bot
const pingBot = async () => {
  try {
    const response = await axios.get(BOT_URL);
    console.log(`[${new Date().toISOString()}] Ping successful: ${response.status}`);
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Ping failed:`, error.message);
  }
};

// Start pinging
console.log('Starting monitoring script...');
setInterval(pingBot, PING_INTERVAL);

// Send a first ping immediately
pingBot();
