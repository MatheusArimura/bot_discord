const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const comandos = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Comandos disponíveis:')
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: '/commands', value: 'Exibe todos os comandos disponíveis', inline: true },
		{ name: '/git', value: 'Exibe alguns comandos úteis do GitHub', inline: true },
		{ name: '/ping', value: 'Comando apenas para testar se o BOT está disponível', inline: true },
		{ name: '/playlist', value: 'Exibe uma playlist do Spotify', inline: true },
		{ name: '/catatau', value: 'Mostra o estado de espirito do Catatau', inline: true },
		{ name: '/enzo', value: 'Mostra o estado de espirito do Enzo', inline: true },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("comandos")
        .setDescription("Exibe todos os comandos disponíveis."),

    async execute(interaction) {
        await interaction.reply({ embeds: [comandos] })
    }
}
