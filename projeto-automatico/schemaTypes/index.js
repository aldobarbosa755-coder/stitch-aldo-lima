export const schemaTypes = [
  {
    name: 'site_patris',
    title: 'Gerenciar Site Patris',
    type: 'document',
    fields: [
      {
        name: 'hero_titulo',
        title: 'Título Principal (A frase que impacta)',
        type: 'string',
      },
      {
        name: 'hero_subtitulo',
        title: 'Subtítulo (A descrição curta abaixo do título)',
        type: 'text', // Usei 'text' para ele ter mais espaço para escrever
      },
      {
        name: 'link_whatsapp',
        title: 'Link Completo do WhatsApp',
        type: 'url',
      },
      {
        name: 'foto_perfil',
        title: 'Foto do Profissional (Médico/Advogado)',
        type: 'image',
        options: { hotspot: true } // Isso permite que o cliente corte a foto no painel
      }
    ]
  }
]