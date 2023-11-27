const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, Component } = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhuma linguagem selecionada")
            .addOptions(
                {
                    label: "JavaScript",
                    description: "Veja a documentação do JavaScript",
                    value: "JavaScript"
                },
                {
                    label: "Python",
                    description: "Veja a documentação do Python",
                    value: "Python"
                },
                {
                    label: "C#",
                    description: "Veja a documentação do C#",
                    value: "C#"
                },
                {
                    label: "PHP",
                    description: "Veja a documentação do PHP",
                    value: "PHP"
                },
                {
                    label: "Discord.JS",
                    description: "Veja a documentação do Discord.JS",
                    value: "Discord.JS"
                },
            )
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Acesse a documentação da tecnologia que quiser"),

    async execute(interaction) {
        await interaction.reply({content: "Selecione uma das tecnologias abaixo:", components: [row]})
    }
}

