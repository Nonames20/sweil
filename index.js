const keepAlive = require('./keepAlive');
keepAlive(); // chạy web server "ngụy trang"
require('dotenv').config();
const { Client, GatewayIntentBits, ChannelType, PermissionsBitField } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

client.once('ready', () => {
  console.log(`✅ Bot đã sẵn sàng với username: ${client.user.tag}`);
});

client.on('messageCreate', async message => {
  if (message.content === '.comi') {
    if (!message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) {
      return message.reply('❌ Bạn cần quyền "Manage Channels" để dùng lệnh này!');
    }

    const guild = message.guild;
    const members = await guild.members.fetch();

    const userCount = members.filter(m => !m.user.bot).size;
    const botCount = members.filter(m => m.user.bot).size;

    try {
      // Tạo category trước (nếu cần)
      const category = await guild.channels.create({
        name: '📊 THỐNG KÊ',
        type: ChannelType.GuildCategory
      });

      // Channel thống kê người dùng
      await guild.channels.create({
        name: `👤 Thành viên: ${userCount}`,
        type: ChannelType.GuildVoice,
        parent: category,
        permissionOverwrites: [
          {
            id: guild.roles.everyone,
            deny: [PermissionsBitField.Flags.Connect]
          }
        ]
      });

      // Channel thống kê bot
      await guild.channels.create({
        name: `🤖 Bot: ${botCount}`,
        type: ChannelType.GuildVoice,
        parent: category,
        permissionOverwrites: [
          {
            id: guild.roles.everyone,
            deny: [PermissionsBitField.Flags.Connect]
          }
        ]
      });

      message.reply('✅ Đã tạo các channel thống kê thành công!');
    } catch (err) {
      console.error(err);
      message.reply('⚠️ Đã xảy ra lỗi khi tạo channel.');
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
// Hàm cập nhật thống kê
async function updateStats(guild) {
  const members = await guild.members.fetch();
  const userCount = members.filter(m => !m.user.bot).size;
  const botCount = members.filter(m => m.user.bot).size;

  const voiceChannels = guild.channels.cache.filter(
    ch => ch.type === ChannelType.GuildVoice && ch.parent && ch.parent.name === '📊 THỐNG KÊ'
  );

  for (const channel of voiceChannels.values()) {
    if (channel.name.startsWith('👤 Thành viên:')) {
      await channel.setName(`👤 Thành viên: ${userCount}`);
    } else if (channel.name.startsWith('🤖 Bot:')) {
      await channel.setName(`🤖 Bot: ${botCount}`);
    }
  }
}

// Khi có người vào
client.on('guildMemberAdd', async member => {
  await updateStats(member.guild);
});

// Khi có người rời
client.on('guildMemberRemove', async member => {
  await updateStats(member.guild);
});
const { joinVoiceChannel } = require('@discordjs/voice');

client.once('ready', () => {
  console.log(`✅ Bot đã sẵn sàng với username: ${client.user.tag}`);

  // 🎶 Lời bài hát
  const lyrics = [
    "They say that life is always easier",
    "After you let yourself come on down",
    "They say they'll give you all that you want",
    "And I'm waiting in the shadow of the sun",
    "She's in doubt but always been before",
    "Close the curtains, what you're waiting for",
    "And now we're keeping secrets",
    "Til I'm in the ground",
    "Changing color makes you waste away",
    "Just spin your eyes with a vivid mind",
    "Now we're seeing once behind the light",
    "And I'll be waiting in the shadow of the sun",
    "Finding treasure that's been on demise",
    "Building mountains in disguise",
    "Now we're keeping secrets",
    "Til I'm in the ground",
    "I'm in the shadow of the shadow of the sun",
    "Where I belong, there's something coming on",
    "I'm in the shadow of the shadow of the sun",
    "Oh and I need you",
    "I'm in the shadow of the shadow of the sun",
    "No more waiting, time are changing",
    "And there's something coming on",
    "I'm in the shadow of the shadow of the sun"
  ];

  

  let i = 0;

  setInterval(() => {
    const currentLyric = lyrics[i % lyrics.length];

    client.user.setPresence({
      status: 'idle',
      activities: [{
        name: currentLyric,
        type: 1
      }]
    });

    i++;
  }, 1000);

  // 💤 Tự join vào voice để treo
  const guild = client.guilds.cache.get('1305827273034829895');
  const channel = guild.channels.cache.get('1384005367238885386');

  if (guild && channel && channel.type === ChannelType.GuildVoice) {
    joinVoiceChannel({
      channelId: channel.id,
      guildId: guild.id,
      adapterCreator: guild.voiceAdapterCreator,
      selfDeaf: true // Tắt mic bot
    });

    console.log(`🎧 Đã join voice channel: ${channel.name}`);
  } else {
    console.log('⚠️ Không tìm thấy kênh voice để join!');
  }
});
