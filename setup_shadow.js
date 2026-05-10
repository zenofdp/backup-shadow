const { Client, GatewayIntentBits, PermissionFlagsBits, ChannelType } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const TOKEN = 'MTUwMzA1MDU2NDI4MjM1NTc0Mg.GVrfPw.Zp2MFSxC1wp0aU_cexunmxGy_pHdGxk-tMrR3Y';
const GUILD_ID = '1503049395200065576';

// ============================================================
// CONFIGURATION DES RÔLES
// ============================================================
const ROLES = [
  // Rôles de base (créés en premier)
  { name: 'Random', color: 0x808080, hoist: false, position: 1 },
  { name: 'Amis', color: 0xFF0000, hoist: true, position: 2 },
  { name: 'Famous', color: 0xFFFFFF, hoist: true, position: 3 },
  { name: 'Légende de Discord', color: 0xFFD700, hoist: true, position: 4 },
  { name: 'Protection Chat', color: 0x808080, hoist: true, position: 5 },
  { name: 'Princesse Shadow', color: 0xFF69B4, hoist: true, position: 6 },
  { name: 'Shooter Shadow', color: 0xFF4500, hoist: true, position: 7 },
  { name: 'Finisseur Shadow', color: 0xFF0000, hoist: true, position: 8 },
  { name: 'Gérant Shadow', color: 0x8B0000, hoist: true, position: 9 },
  { name: 'Co Créateur Shadow', color: 0xDC143C, hoist: true, position: 10 },
  { name: 'Créateur Shadow', color: 0xFFD700, hoist: true, position: 11 },
  // Rôles Admin/Owner
  { name: 'Admin', color: 0xFF0000, hoist: true, position: 12, permissions: [PermissionFlagsBits.Administrator] },
  { name: 'Owner', color: 0xFFD700, hoist: true, position: 13, permissions: [PermissionFlagsBits.Administrator] },
];

// ============================================================
// CONFIGURATION DES CATÉGORIES ET SALONS
// ============================================================
const CATEGORIES = [
  // ── ADMIN ──────────────────────────────────────────────
  {
    name: '[ ⭐ ] → Admin',
    private: true,
    channels: [
      { name: 'annonce-important', type: ChannelType.GuildText, emoji: '⭐' },
      { name: 'annonce-admin',     type: ChannelType.GuildText, emoji: '⭐' },
      { name: 'chat-admin',        type: ChannelType.GuildText, emoji: '⭐' },
      { name: 'cmds-admin',        type: ChannelType.GuildText, emoji: '⭐' },
      { name: 'vote-own',          type: ChannelType.GuildText, emoji: '⭐' },
      { name: 'automod',           type: ChannelType.GuildText, emoji: '⭐' },
      { name: 'prefix',            type: ChannelType.GuildText, emoji: '⭐' },
      { name: 'serveur-decale',    type: ChannelType.GuildText, emoji: '⭐' },
      { name: 'pub',               type: ChannelType.GuildText, emoji: '⭐' },
    ]
  },

  // ── OWNER ──────────────────────────────────────────────
  {
    name: '[ 👑 ] → Owner',
    private: true,
    channels: [
      { name: 'Table central',   type: ChannelType.GuildText, emoji: '🏰' },
      { name: 'Axo & +15',       type: ChannelType.GuildText, emoji: '👑' },
      { name: 'Azrak & Koro',    type: ChannelType.GuildText, emoji: '👑' },
      { name: 'Tasko & Zlada',   type: ChannelType.GuildText, emoji: '👑' },
      { name: 'Scared & Noday',  type: ChannelType.GuildText, emoji: '👑' },
      { name: 'Corazon & Jeaguer', type: ChannelType.GuildText, emoji: '👑' },
    ]
  },

  // ── INFORMATIONS ───────────────────────────────────────
  {
    name: '[ 🔔 ] → Informations',
    private: false,
    channels: [
      { name: 'règlements',        type: ChannelType.GuildText, emoji: '📋' },
      { name: 'annonce-important', type: ChannelType.GuildText, emoji: '⚠️' },
      { name: 'annonce',           type: ChannelType.GuildText, emoji: '🔔' },
      { name: 'invitations',       type: ChannelType.GuildText, emoji: '➕' },
      { name: 'boost',             type: ChannelType.GuildText, emoji: '💎' },
      { name: 'ficha',             type: ChannelType.GuildText, emoji: '🐷' },
      { name: 'wanted',            type: ChannelType.GuildText, emoji: '💀' },
    ]
  },

  // ── UFC FIGHT ──────────────────────────────────────────
  {
    name: '[ 🥊 ] → UFCFight',
    private: false,
    channels: [
      { name: 'annonce',    type: ChannelType.GuildText, emoji: '🔔' },
      { name: 'votes',      type: ChannelType.GuildText, emoji: '🔔' },
      { name: 'chat-event', type: ChannelType.GuildText, emoji: '🩸' },
    ]
  },

  // ── GIVEAWAY ───────────────────────────────────────────
  {
    name: '[ 🎊 ] → Giveaway',
    private: false,
    channels: [
      { name: 'giveaway', type: ChannelType.GuildText, emoji: '🎁' },
      { name: 'preuves',  type: ChannelType.GuildText, emoji: '🎊' },
    ]
  },

  // ── TEXTUEL ────────────────────────────────────────────
  {
    name: '[ 💬 ] → Textuel',
    private: false,
    channels: [
      { name: 'chat',   type: ChannelType.GuildText, emoji: '💬' },
      { name: 'média',  type: ChannelType.GuildText, emoji: '📷' },
      { name: 'cmds',   type: ChannelType.GuildText, emoji: '💻' },
      { name: 'spam',   type: ChannelType.GuildText, emoji: '🔥' },
    ]
  },

  // ── VOCAUX ─────────────────────────────────────────────
  {
    name: '[ 🔊 ] → Vocaux',
    private: false,
    channels: [
      { name: '──────[PUBLIC]──────', type: ChannelType.GuildVoice },
      { name: 'SHADOW',              type: ChannelType.GuildVoice, emoji: '🎃' },
      { name: 'CIRCUS',              type: ChannelType.GuildVoice, emoji: '🐷' },
      { name: 'MAISON HANTÉ',        type: ChannelType.GuildVoice, emoji: '👻' },
      { name: 'FANTOME',             type: ChannelType.GuildVoice, emoji: '🚀' },
      { name: 'DB SACOCHE',          type: ChannelType.GuildVoice, emoji: '🌍' },
      { name: 'RIPCORD',             type: ChannelType.GuildVoice, emoji: '🏛️' },
      { name: 'MONSTRE',             type: ChannelType.GuildVoice, emoji: '👾' },
      { name: 'SONG',                type: ChannelType.GuildVoice, emoji: '🎵' },
    ]
  },
];

// ============================================================
// FONCTIONS UTILITAIRES
// ============================================================
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function createRoles(guild) {
  console.log('\n🎭 Création des rôles...');
  const createdRoles = {};

  for (const roleData of ROLES) {
    try {
      const role = await guild.roles.create({
        name: roleData.name,
        color: roleData.color || 0x000000,
        hoist: roleData.hoist || false,
        permissions: roleData.permissions || [],
        reason: 'Setup Shadow - création automatique',
      });
      createdRoles[roleData.name] = role;
      console.log(`  ✅ Rôle créé : ${role.name}`);
      await sleep(500);
    } catch (err) {
      console.error(`  ❌ Erreur rôle ${roleData.name} :`, err.message);
    }
  }
  return createdRoles;
}

async function createCategoriesAndChannels(guild, createdRoles) {
  console.log('\n📂 Création des catégories et salons...');

  const adminRole  = createdRoles['Admin'];
  const ownerRole  = createdRoles['Owner'];
  const everyoneRole = guild.roles.everyone;

  for (const catData of CATEGORIES) {
    try {
      // Permissions de la catégorie
      const permissionOverwrites = catData.private
        ? [
            { id: everyoneRole.id, deny: [PermissionFlagsBits.ViewChannel] },
            ...(adminRole ? [{ id: adminRole.id, allow: [PermissionFlagsBits.ViewChannel] }] : []),
            ...(ownerRole ? [{ id: ownerRole.id, allow: [PermissionFlagsBits.ViewChannel] }] : []),
          ]
        : [{ id: everyoneRole.id, allow: [PermissionFlagsBits.ViewChannel] }];

      const category = await guild.channels.create({
        name: catData.name,
        type: ChannelType.GuildCategory,
        permissionOverwrites,
        reason: 'Setup Shadow - création automatique',
      });
      console.log(`\n  📁 Catégorie : ${catData.name}`);
      await sleep(500);

      // Salons de la catégorie
      for (const chData of catData.channels) {
        try {
          const channelName = chData.emoji
            ? `${chData.emoji}・${chData.name}`
            : chData.name;

          await guild.channels.create({
            name: channelName,
            type: chData.type,
            parent: category.id,
            permissionOverwrites: catData.private ? permissionOverwrites : undefined,
            reason: 'Setup Shadow - création automatique',
          });
          const icon = chData.type === ChannelType.GuildVoice ? '🔊' : '#';
          console.log(`    ${icon} ${channelName}`);
          await sleep(400);
        } catch (err) {
          console.error(`    ❌ Erreur salon ${chData.name} :`, err.message);
        }
      }
    } catch (err) {
      console.error(`  ❌ Erreur catégorie ${catData.name} :`, err.message);
    }
  }
}

// ============================================================
// MAIN
// ============================================================
client.once('ready', async () => {
  console.log(`\n🤖 Connecté en tant que : ${client.user.tag}`);

  const guild = client.guilds.cache.get(GUILD_ID);
  if (!guild) {
    console.error('❌ Serveur introuvable ! Vérifie GUILD_ID.');
    process.exit(1);
  }
  console.log(`🖥️  Serveur trouvé : ${guild.name}`);

  // Créer les rôles
  const createdRoles = await createRoles(guild);

  // Créer les catégories et salons
  await createCategoriesAndChannels(guild, createdRoles);

  console.log('\n✅ SETUP TERMINÉ ! Tous les salons et rôles ont été créés.');
  console.log('⚠️  Pense à supprimer les anciens salons si nécessaire.');
  client.destroy();
});

client.login(TOKEN);
