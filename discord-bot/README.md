## Discord importer bot

This bot fetches messages and avatars (optional) from discord ,saves to a sqlite db and sends into specified yukicord server, to a guild.

## Quickstart

```bash
git clone https://github.com/yukicord/yukicord
cd discord-bot
make setup
make run
```

## Configure env variables

Move .env.example to .env

### MAIN_GUILD_ID_DC
Discord guild ID to pull messages and avatars from

### MAIN_GUILD_ID_LC
Yukicord guild ID to send messages to2

### OWNER_ID
Discord id of bots owner, is used for authenticating admin commands.

### GUILD_IDS
Comma-separated list of Discord guild IDs to listen for messages (for real-time forwarding) Example: 916548790662623282,1333583191449014376

### IS_SAVING
Whether to save messages (true or false)

### IS_SAVING_AVATARS
Whether to save user avatars (true or false)

### LC_BOT_TOKEN
Your yukicord bot token(Configured on backend server via AppSettings BotToken enviroment var)

### SAVE_LIMIT_PER_CHANNEL
Save limit of messages per channel.
Defaults to 1000

### BULK_SAVE_THRESHOLD
Batch count to save messages in one go.
Defaults to 1000

### FORWARD_URL
Url of yukicord api to send messages at.

### DC_TOKEN
Your discord bot token for running the bot.


### To-Do

- [✅] Fetch messages from discord and save/forward to yukicord
- [ ] Download avatars from discord 
- [ ] Upload avatars to yukicord