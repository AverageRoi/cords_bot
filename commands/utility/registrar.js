const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("registrar")
    .setDescription("Introduce las coordenadas para registrar'")
    .addStringOption((option) => 
        option
            .setName("coordenadas")
            .setDescription("X, Y, Z or X, Z")
            .setRequired(true)
            .setMaxLength(26), // Lo que he contado como las coordenadas más alejadas del World Border en caracteres
        )
        // Creo que Str es lo mejor aunque sea un int, ya que es fácil liarnos y podemos dividirlo y hacer typecasting después
    .addStringOption((option) => 
        option
            .setName("Dimensión")
            .setDescription("La dimensión de las coordenadas")
            .setRequired(true)
            .setChoices(
                { name: "Overworld", value: "overworld_dimension" },
                { name: "Nether", value: "nether_dimension" },
                { name: "End", value: "end_dimension" }
            ),
        ),

    async execute(interaction) {
        const coordinates = interaction.options.getString("coordenadas");
        const dimension = interaction.options.getString("Dimensión");

        // Aquí iría la conexión con el prisma.js y todas esas cosiñas
        
        
        await interaction.reply("Pong!");
    },
};