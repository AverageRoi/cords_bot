const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("ping").setDescription("Test Commmand: replies with 'pong!'"),
    async execute(interaction) {
        await interaction.reply("Pong!");
    },
};