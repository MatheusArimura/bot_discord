const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("enzo")
        .setDescription("Mostra o estado de espirito do Enzo"),

    async execute(interaction) {
        await interaction.reply('https://images2.memedroid.com/images/UPLOADED73/53baf9897e532.jpeg')
    }
}
