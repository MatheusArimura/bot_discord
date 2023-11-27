const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("catatau")
        .setDescription("Mostra o estado de espirito do Catatau"),

    async execute(interaction) {
        await interaction.reply('https://imgur.com/Uj42h4F')
    }
}
