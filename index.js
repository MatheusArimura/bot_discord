const { Client, Events, GatewayIntentBits, Collection } = require('discord.js')

// Dotenv
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

// Importação dos comandos, pega o caminho dos comandos
const fs = require("node:fs")
const path = require("node:path")
const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const client = new Client({ intents: [GatewayIntentBits.Guilds] })
client.commands = new Collection()

// Laço for para passar de comando em comando e criar eles
for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    
    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command)
    } else {
        console.log(`Esse comando em ${filePath} está com "data" ou "execução" ausentes.`)
    }
}

// Realiza a conexão
client.once(Events.ClientReady, c => {
	console.log(`Pronto! Login realizado como ${c.user.tag}.`)
})

client.login(TOKEN)

// Listener de interações com o bot
client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isStringSelectMenu()) {
        const selected = interaction.value[0]
        if (selected == "JavaScript") {
            await interaction.reply("Documentação do JavaScript: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript")
        }
        else if (selected == "Python") {
            await interaction.reply("Documentação do Python: https://docs.python.org/3/")
        }
        else if (selected == "C#") {
            await interaction.reply("Documentação do C#: https://learn.microsoft.com/pt-br/dotnet/csharp/")
        }
        else if (selected == "PHP") {
            await interaction.reply("Documentação do PHP: https://www.php.net/docs.php")
        }
        else if (selected == "Discord.JS") {
            await interaction.reply("Documentação do Discord.JS: https://discordjs.guide/#before-you-begin")
        }
    }

    if (!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    if (!command) {
        console.error("Comando não encontrado!")
        return
    }
    try {
        await command.execute(interaction)
    } 
    catch(error) {
        console.error(error)
        await interaction.reply("Houve um erro ao executar esse comando!")
    }
})