const TAXONOMIA_DADOS = {
"taxonomia_concursos": [
{
"id": "const",
"nivel_1": "Direito Constitucional",
"divisoes": [
{
"id": "const_teoria",
"nivel_2": "Teoria da Constituição",
"topicos": [
{
"id": "const_teoria_conceito",
"nivel_3": "Conceito, Classificações e Elementos",
"aliases": ["Sentidos da Constituição", "Tipologia"]
},
{
"id": "const_teoria_poder",
"nivel_3": "Poder Constituinte e Reforma Constitucional",
"aliases": ["Emendas", "Cláusulas Pétreas"]
},
{
"id": "const_teoria_normas",
"nivel_3": "Aplicabilidade e Interpretação das Normas",
"aliases": ["Eficácia", "Hermenêutica"]
}
]
},
{
"id": "const_direitos",
"nivel_2": "Direitos e Garantias Fundamentais",
"topicos": [
{
"id": "const_direitos_individuais",
"nivel_3": "Direitos Individuais e Coletivos",
"aliases": ["Art. 5º", "Igualdade", "Liberdade"]
},
{
"id": "const_direitos_sociais",
"nivel_3": "Direitos Sociais",
"aliases": ["Trabalhadores", "Direito de Greve"]
},
{
"id": "const_direitos_nacionalidade",
"nivel_3": "Nacionalidade, Direitos Políticos e Partidos",
"aliases": ["Cidadania", "Extradição"]
},
{
"id": "const_direitos_remedios",
"nivel_3": "Remédios Constitucionais e Ações",
"aliases": ["Habeas Corpus", "Mandado de Segurança"]
}
]
},
{
"id": "const_org_estado",
"nivel_2": "Organização do Estado",
"topicos": [
{
"id": "const_org_estado_comp",
"nivel_3": "Repartição de Competências e Entes Federados",
"aliases": ["União", "Estados", "Municípios"]
},
{
"id": "const_org_estado_interv",
"nivel_3": "Intervenção Federal e Estadual",
"aliases": ["Pressupostos de Intervenção"]
}
]
},
{
"id": "const_legislativo",
"nivel_2": "Poder Legislativo",
"topicos": [
{
"id": "const_legis_org",
"nivel_3": "Organização e Atribuições",
"aliases": ["Congresso", "Imunidades", "CPI"]
},
{
"id": "const_legis_processo",
"nivel_3": "Processo Legislativo e Fiscalização (TCU)",
"aliases": ["Leis Complementares", "Medidas Provisórias"]
}
]
},
{
"id": "const_executivo",
"nivel_2": "Poder Executivo",
"topicos": [
{
"id": "const_exec_atrib",
"nivel_3": "Atribuições e Responsabilidades do Chefe de Estado",
"aliases": ["Presidente", "Impeachment"]
}
]
},
{
"id": "const_judiciario",
"nivel_2": "Poder Judiciário",
"topicos": [
{
"id": "const_jud_org",
"nivel_3": "Organização, Atribuições e Estatuto (LOMAN/CNJ)",
"aliases": ["STF", "STJ", "Precatórios"]
}
]
},
{
"id": "const_funcoes",
"nivel_2": "Funções Essenciais à Justiça",
"topicos": [
{
"id": "const_func_mp",
"nivel_3": "Ministério Público, Advocacia e Defensoria",
"aliases": ["Autonomia", "Prerrogativas Institucionais"]
}
]
},
{
"id": "const_controle",
"nivel_2": "Controle de Constitucionalidade",
"topicos": [
{
"id": "const_controle_difuso",
"nivel_3": "Teoria Geral e Controle Difuso",
"aliases": ["Reserva de Plenário", "Súmula Vinculante"]
},
{
"id": "const_controle_concentrado",
"nivel_3": "Controle Concentrado (ADI, ADC, ADO, ADPF)",
"aliases": ["Ações Objetivas", "Modulação de Efeitos"]
}
]
},
{
"id": "const_defesa",
"nivel_2": "Defesa do Estado e Instituições",
"topicos": [
{
"id": "const_defesa_sitio",
"nivel_3": "Estado de Sítio, Defesa e Segurança Pública",
"aliases": ["Forças Armadas", "Polícias"]
}
]
},
{
"id": "const_ordem_social",
"nivel_2": "Ordem Social",
"topicos": [
{
"id": "const_ordem_seguridade",
"nivel_3": "Seguridade Social (Saúde, Prev. e Assistência)",
"aliases": ["SUS", "Financiamento"]
},
{
"id": "const_ordem_educacao",
"nivel_3": "Educação, Cultura, Desporto e Ciência",
"aliases": ["Ensino", "Patrimônio Cultural"]
},
{
"id": "const_ordem_familia",
"nivel_3": "Família, Criança, Idoso e Povos Indígenas",
"aliases": ["Terras Indígenas", "Proteção Especial"]
}
]
},
{
"id": "const_ordem_eco",
"nivel_2": "Ordem Econômica e Financeira",
"topicos": []
},
{
"id": "const_trib_orc",
"nivel_2": "Tributação e Orçamento",
"topicos": []
}
]
},
{
"id": "adm",
"nivel_1": "Direito Administrativo",
"divisoes": [
{
"id": "adm_regime",
"nivel_2": "Regime Jurídico e Princípios",
"topicos": [
{
"id": "adm_regime_princ",
"nivel_3": "Princípios Expressos, Implícitos e Fontes",
"aliases": ["LIMPE", "Supremacia do Interesse Público"]
}
]
},
{
"id": "adm_org",
"nivel_2": "Organização Administrativa",
"topicos": [
{
"id": "adm_org_direta",
"nivel_3": "Administração Direta e Órgãos Públicos",
"aliases": ["Desconcentração", "Teoria do Órgão"]
},
{
"id": "adm_org_indireta",
"nivel_3": "Administração Indireta (Autarquias, Fundações, Estatais)",
"aliases": ["Descentralização", "Agências Reguladoras"]
},
{
"id": "adm_org_terceiro",
"nivel_3": "Terceiro Setor (OS, OSCIP, Serviços Sociais Autônomos)",
"aliases": ["Sistema S", "Entidades de Apoio"]
}
]
},
{
"id": "adm_poderes",
"nivel_2": "Poderes da Administração",
"topicos": [
{
"id": "adm_poderes_policia",
"nivel_3": "Poder de Polícia (Ciclo, Delegação e Limites)",
"aliases": ["Consentimento", "Fiscalização", "Sanção"]
},
{
"id": "adm_poderes_outros",
"nivel_3": "Poderes Hierárquico, Disciplinar e Normativo",
"aliases": ["Delegação", "Avocação", "Regulamentar"]
}
]
},
{
"id": "adm_atos",
"nivel_2": "Atos Administrativos",
"topicos": [
{
"id": "adm_atos_teoria",
"nivel_3": "Conceito, Requisitos (Elementos) e Atributos",
"aliases": ["Competência", "Finalidade", "Presunção de Legitimidade"]
},
{
"id": "adm_atos_extincao",
"nivel_3": "Extinção (Anulação, Revogação, Cassação) e Convalidação",
"aliases": ["Desfazimento", "Caducidade"]
},
{
"id": "adm_atos_especies",
"nivel_3": "Classificação e Espécies",
"aliases": ["Atos Normativos", "Atos Punitivos"]
}
]
},
{
"id": "adm_licitacoes",
"nivel_2": "Licitações e Contratações",
"topicos": [
{
"id": "adm_licit_modalidades",
"nivel_3": "Princípios, Fases e Modalidades (Lei 14.133/21)",
"aliases": ["Pregão", "Concorrência", "Edital"]
},
{
"id": "adm_licit_direta",
"nivel_3": "Contratação Direta (Dispensa e Inexigibilidade)",
"aliases": ["Licitação Dispensável", "Licitação Frustrada"]
}
]
},
{
"id": "adm_contratos",
"nivel_2": "Contratos Administrativos",
"topicos": [
{
"id": "adm_contratos_teoria",
"nivel_3": "Teoria Geral, Alteração e Cláusulas Exorbitantes",
"aliases": ["Equilíbrio Econômico-Financeiro", "Reajuste"]
},
{
"id": "adm_contratos_ext",
"nivel_3": "Extinção, Sanções e Meios Alternativos de Resolução",
"aliases": ["Rescisão Unilateral", "Arbitragem"]
}
]
},
{
"id": "adm_servicos",
"nivel_2": "Serviços Públicos",
"topicos": [
{
"id": "adm_servicos_teoria",
"nivel_3": "Teoria Geral, Princípios e Direitos dos Usuários",
"aliases": ["Continuidade", "Modicidade"]
},
{
"id": "adm_servicos_delegação",
"nivel_3": "Concessões, Permissões (Lei 8.987) e PPPs (Lei 11.079)",
"aliases": ["Concessão Patrocinada", "Caducidade da Concessão"]
}
]
},
{
"id": "adm_agentes",
"nivel_2": "Agentes Públicos",
"topicos": [
{
"id": "adm_agentes_const",
"nivel_3": "Disposições Constitucionais (Acesso, Acumulação, Teto)",
"aliases": ["Concurso Público", "Greve"]
},
{
"id": "adm_agentes_estatuto",
"nivel_3": "Provimento, Vacância, Direitos e Vantagens (Estatutos)",
"aliases": ["Posse", "Estágio Probatório", "Aposentadoria"]
},
{
"id": "adm_agentes_pad",
"nivel_3": "Responsabilidade e Processo Administrativo Disciplinar (PAD)",
"aliases": ["Sindicância", "Demissão"]
}
]
},
{
"id": "adm_resp",
"nivel_2": "Responsabilidade Civil do Estado",
"topicos": [
{
"id": "adm_resp_teoria",
"nivel_3": "Evolução, Regra Constitucional e Ação de Regresso",
"aliases": ["Teoria do Risco Administrativo", "Responsabilidade Objetiva"]
},
{
"id": "adm_resp_excludentes",
"nivel_3": "Causas Excludentes e Atenuantes",
"aliases": ["Culpa Exclusiva da Vítima", "Força Maior"]
}
]
},
{
"id": "adm_controle",
"nivel_2": "Controle da Administração",
"topicos": [
{
"id": "adm_controle_adm_jud",
"nivel_3": "Controle Administrativo e Judicial",
"aliases": ["Autotutela", "Sindicabilidade", "LAI"]
},
{
"id": "adm_controle_legis",
"nivel_3": "Controle Legislativo e Tribunais de Contas",
"aliases": ["Sustação de Atos", "Julgamento de Contas"]
}
]
},
{
"id": "adm_improbidade",
"nivel_2": "Improbidade Administrativa",
"topicos": [
{
"id": "adm_improb_teoria",
"nivel_3": "Sujeitos, Elemento Subjetivo e Atos (Lei 8.429/92)",
"aliases": ["Dolo Específico", "Enriquecimento Ilícito"]
},
{
"id": "adm_improb_sancoes",
"nivel_3": "Sanções, Aspectos Processuais e Acordo (ANPC)",
"aliases": ["Indisponibilidade de Bens", "Prescrição Intercorrente"]
}
]
},
{
"id": "adm_intervencao",
"nivel_2": "Intervenção na Propriedade",
"topicos": [
{
"id": "adm_interv_desaprop",
"nivel_3": "Desapropriação (Comum e Sancionatória)",
"aliases": ["Tredestinação", "Retrocessão", "Indenização"]
},
{
"id": "adm_interv_outras",
"nivel_3": "Servidão, Tombamento, Requisição e Ocupação",
"aliases": ["Limitações Administrativas", "Restrições"]
}
]
},
{
"id": "adm_bens",
"nivel_2": "Bens Públicos",
"topicos": [
{
"id": "adm_bens_class",
"nivel_3": "Classificação, Características e Afetação/Desafetação",
"aliases": ["Impenhorabilidade", "Uso Comum do Povo"]
},
{
"id": "adm_bens_uso",
"nivel_3": "Aquisição, Alienação e Uso por Particulares",
"aliases": ["Autorização de Uso", "Concessão de Uso"]
}
]
}
]
},
{
"id": "eleitoral",
"nivel_1": "Direito Eleitoral",
"divisoes": [
{
"id": "ele_teoria",
"nivel_2": "Teoria Geral e Direitos Políticos",
"topicos": [
{
"id": "ele_teo_princ",
"nivel_3": "Princípios, Fontes e Alistamento Eleitoral",
"aliases": ["Princípio da Anualidade Eleitoral", "Domicílio Eleitoral", "Capacidade Eleitoral Ativa"]
},
{
"id": "ele_teo_direitos",
"nivel_3": "Direitos Políticos: Aquisição, Perda e Suspensão (Art. 15 da CF)",
"aliases": ["Revisão de Eleitorado", "Condenação Criminal Transitada em Julgado", "Improbidade Administrativa"]
},
{
"id": "ele_teo_ineleg",
"nivel_3": "Elegibilidade e Inelegibilidades (LC 64/90)",
"aliases": ["Inelegibilidade Inata", "Inelegibilidade Reflexa", "Desincompatibilização", "Inelegibilidade por Parentesco", "Prefeito Itinerante (Terceiro Mandato)", "Desincompatibilização de Militares"]
}
]
},
{
"id": "ele_justica",
"nivel_2": "Justiça Eleitoral e Partidos",
"topicos": [
{
"id": "ele_jus_org",
"nivel_3": "Organização e Competência (TSE, TREs, Juízes e Juntas)",
"aliases": ["Poder Normativo do TSE", "Composição dos Tribunais"]
},
{
"id": "ele_jus_mpe",
"nivel_3": "Ministério Público Eleitoral",
"aliases": ["Composição", "Atribuições", "Legitimidade"]
},
{
"id": "ele_jus_part",
"nivel_3": "Partidos Políticos (Lei 9.096/95 - Criação, Fusão e Fidelidade)",
"aliases": ["Autonomia Partidária", "Justa Causa para Desfiliação", "Filiação Partidária", "Propaganda Partidária"]
},
{
"id": "ele_jus_fin",
"nivel_3": "Financiamento Partidário e Fundo Especial",
"aliases": ["Fundo Partidário", "FEFC"]
}
]
},
{
"id": "ele_processo",
"nivel_2": "Processo Eleitoral (Lei 9.504/97)",
"topicos": [
{
"id": "ele_proc_cand",
"nivel_3": "Convenções, Coligações/Federações e Registro de Candidatura",
"aliases": ["Cotas de Gênero", "DRAP", "RRC", "Fraude à Cota de Gênero", "Substituição de Candidatos"]
},
{
"id": "ele_proc_prop",
"nivel_3": "Propaganda Eleitoral, Pesquisas e Direito de Resposta",
"aliases": ["Propaganda Antecipada", "Propaganda na Internet", "Imprensa", "Gravação Ambiental e Prova Ilícita no Processo Eleitoral"]
},
{
"id": "ele_proc_preparatorios",
"nivel_3": "Atos Preparatórios, Mesas Receptoras, Lugares de Votação e Fiscalização",
"aliases": ["Poder de Polícia na Votação", "Fiscais e Delegados de Partido", "Mesários"]
},
{
"id": "ele_proc_contas",
"nivel_3": "Arrecadação, Gastos e Prestação de Contas de Campanha",
"aliases": ["Limites de Gastos", "Doações de Pessoas Físicas", "Sobras de Campanha"]
},
{
"id": "ele_proc_vot",
"nivel_3": "Votação, Apuração, Totalização e Diplomação",
"aliases": ["Sistemas Eleitorais", "Quociente Eleitoral", "Quociente Partidário", "Nulidades da Votação", "Eleições Suplementares", "Reclamação contra a Totalização"]
}
]
},
{
"id": "ele_acoes",
"nivel_2": "Ações e Recursos Eleitorais",
"topicos": [
{
"id": "ele_ac_especies",
"nivel_3": "AIRC, AIJE, AIME e Representações Eleitorais",
"aliases": ["Ação de Impugnação de Mandato Eletivo", "Ação de Investigação Judicial Eleitoral", "Captação Ilícita de Sufrágio"]
},
{
"id": "ele_ac_recursos",
"nivel_3": "Recursos Eleitorais e Ações Autônomas (Teoria Geral e Espécies)",
"aliases": ["Recurso Inominado", "Recurso Especial Eleitoral", "Efeito Suspensivo", "Ação Rescisória Eleitoral", "Mandado de Segurança em Matéria Eleitoral"]
}
]
},
{
"id": "ele_ilicitos",
"nivel_2": "Ilícitos Eleitorais",
"topicos": [
{
"id": "ele_ili_crimes",
"nivel_3": "Crimes Eleitorais e Processo Penal Eleitoral",
"aliases": ["Boca de Urna", "Transporte Irregular de Eleitores", "Corrupção Eleitoral", "Falsidade Ideológica Eleitoral (Art. 350 do CE)", "Inscrição Fraudulenta de Eleitor", "Denunciação Caluniosa Eleitoral", "Calúnia, Difamação e Injúria Eleitoral"]
},
{
"id": "ele_ili_condutas",
"nivel_3": "Condutas Vedadas aos Agentes Públicos e Abuso de Poder",
"aliases": ["Abuso de Poder Econômico", "Abuso de Poder Político", "Uso da Máquina Pública"]
}
]
}
]
},
{
"id": "penal",
"nivel_1": "Direito Penal",
"divisoes": [
{
"id": "penal_lei",
"nivel_2": "Parte Geral: Teoria da Lei Penal",
"topicos": [
{
"id": "penal_lei_princ",
"nivel_3": "Princípios, Interpretação e Conflito de Normas",
"aliases": ["Legalidade", "Insignificância", "Especialidade"]
},
{
"id": "penal_lei_tempo",
"nivel_3": "Lei Penal no Tempo e no Espaço (Territorialidade)",
"aliases": ["Novatio Legis", "Extraterritorialidade"]
}
]
},
{
"id": "penal_crime",
"nivel_2": "Parte Geral: Teoria do Crime",
"topicos": [
{
"id": "penal_crime_fato",
"nivel_3": "Fato Típico: Conduta, Resultado, Nexo e Tipicidade",
"aliases": ["Dolo", "Culpa", "Omissão", "Imputação Objetiva"]
},
{
"id": "penal_crime_iter",
"nivel_3": "Iter Criminis: Consumação, Tentativa e Desistências",
"aliases": ["Arrependimento Eficaz", "Crime Impossível"]
},
{
"id": "penal_crime_ilicitude",
"nivel_3": "Ilicitude (Antijuridicidade) e Causas de Exclusão",
"aliases": ["Legítima Defesa", "Estado de Necessidade"]
},
{
"id": "penal_crime_culpabilidade",
"nivel_3": "Culpabilidade e Causas de Exclusão (Imputabilidade)",
"aliases": ["Potencial Consciência da Ilicitude", "Inexigibilidade de Conduta"]
},
{
"id": "penal_crime_erro",
"nivel_3": "Teoria do Erro (Erro de Tipo e Erro de Proibição)",
"aliases": ["Descriminantes Putativas", "Erro na Execução"]
},
{
"id": "penal_crime_concurso",
"nivel_3": "Concurso de Pessoas (Autoria e Participação)",
"aliases": ["Coautoria", "Domínio do Fato"]
}
]
},
{
"id": "penal_pena",
"nivel_2": "Parte Geral: Teoria da Pena",
"topicos": [
{
"id": "penal_pena_especies",
"nivel_3": "Penas em Espécie e Regimes de Cumprimento",
"aliases": ["PPL", "PRD", "Multa"]
},
{
"id": "penal_pena_dosimetria",
"nivel_3": "Dosimetria, Limites e Concurso de Crimes",
"aliases": ["Agravantes", "Concurso Material e Formal"]
},
{
"id": "penal_pena_sursis",
"nivel_3": "Suspensão (Sursis), Livramento e Efeitos da Condenação",
"aliases": ["Confisco", "Reabilitação"]
},
{
"id": "penal_pena_medida",
"nivel_3": "Medidas de Segurança",
"aliases": ["Internação", "Tratamento Ambulatorial"]
}
]
},
{
"id": "penal_punibilidade",
"nivel_2": "Parte Geral: Punibilidade",
"topicos": [
{
"id": "penal_pun_extincao",
"nivel_3": "Extinção da Punibilidade e Escusas Absolutórias",
"aliases": ["Anistia", "Graça", "Indulto", "Perdão"]
},
{
"id": "penal_pun_prescricao",
"nivel_3": "Prescrição e Decadência",
"aliases": ["Prescrição da Pretensão Punitiva", "Causas Interruptivas"]
}
]
},
{
"id": "penal_pe_pessoa",
"nivel_2": "Parte Especial: Crimes contra a Pessoa",
"topicos": [
{
"id": "penal_pe_vida",
"nivel_3": "Crimes contra a Vida (Homicídio, Aborto, Infanticídio)",
"aliases": ["Feminicídio", "Induzimento ao Suicídio"]
},
{
"id": "penal_pe_lesoes",
"nivel_3": "Lesões Corporais, Honra, Liberdade e Periclitação",
"aliases": ["Calúnia", "Sequestro", "Ameaça"]
}
]
},
{
"id": "penal_pe_patrimonio",
"nivel_2": "Parte Especial: Patrimônio e Propriedade Imaterial",
"topicos": [
{
"id": "penal_pe_pat_furto",
"nivel_3": "Furto, Roubo e Extorsão",
"aliases": ["Latrocínio", "Extorsão Mediante Sequestro"]
},
{
"id": "penal_pe_pat_estelionato",
"nivel_3": "Apropriação Indébita, Estelionato e Receptação",
"aliases": ["Dano", "Fraude"]
},
{
"id": "penal_pe_pat_imaterial",
"nivel_3": "Crimes contra a Propriedade Imaterial (Direitos Autorais)",
"aliases": ["Pirataria", "Patentes"]
}
]
},
{
"id": "penal_pe_dignidade",
"nivel_2": "Parte Especial: Dignidade Sexual e Família",
"topicos": [
{
"id": "penal_pe_dig_estupro",
"nivel_3": "Estupro, Assédio e Corrupção de Menores",
"aliases": ["Estupro de Vulnerável", "Importunação Sexual"]
},
{
"id": "penal_pe_dig_prost",
"nivel_3": "Favorecimento da Prostituição e Ultraje Público",
"aliases": ["Rufianismo", "Ato Obsceno"]
},
{
"id": "penal_pe_dig_familia",
"nivel_3": "Crimes contra a Família (Casamento, Filiação e Assistência)",
"aliases": ["Bigamia", "Abandono Material"]
}
]
},
{
"id": "penal_pe_adm_estado",
"nivel_2": "Parte Especial: Administração Pública e Estado Democrático",
"topicos": [
{
"id": "penal_pe_adm_func",
"nivel_3": "Crimes praticados por Funcionário Público",
"aliases": ["Peculato", "Corrupção Passiva", "Prevaricação"]
},
{
"id": "penal_pe_adm_part",
"nivel_3": "Crimes de Particular e contra a Administração da Justiça",
"aliases": ["Corrupção Ativa", "Falso Testemunho", "Desacato"]
},
{
"id": "penal_pe_adm_demo",
"nivel_3": "Crimes contra o Estado Democrático de Direito (Título XII)",
"aliases": ["Golpe de Estado", "Abolição Violenta"]
}
]
},
{
"id": "penal_pe_coletividade",
"nivel_2": "Parte Especial: Crimes contra a Coletividade",
"topicos": [
{
"id": "penal_pe_col_paz",
"nivel_3": "Incolumidade, Paz Pública e Sentimento Religioso",
"aliases": ["Incêndio", "Associação Criminosa", "Vilipêndio"]
},
{
"id": "penal_pe_col_fe",
"nivel_3": "Crimes contra a Fé Pública (Falsidades e Moeda Falsa)",
"aliases": ["Falsidade Ideológica", "Uso de Documento Falso"]
},
{
"id": "penal_pe_col_trab",
"nivel_3": "Crimes contra a Organização do Trabalho",
"aliases": ["Atentado contra Liberdade de Trabalho"]
}
]
},
{
"id": "penal_especial",
"nivel_2": "Legislação Penal Especial",
"topicos": [
{
"id": "penal_esp_drogas",
"nivel_3": "Lei de Drogas (Lei 11.343/06)",
"aliases": ["Tráfico", "Associação para o Tráfico"]
},
{
"id": "penal_esp_armas",
"nivel_3": "Desarmamento, Crimes Hediondos e Tortura",
"aliases": ["Estatuto do Desarmamento", "Lei 8.072/90"]
},
{
"id": "penal_esp_vulneraveis",
"nivel_3": "Crimes contra Grupos Vulneráveis (Maria da Penha, Idoso, Racismo, ECA, Henry Borel)",
"aliases": ["Lei 11.340/06", "Preconceito e Discriminação (Lei 7.716/89)", "Homofobia e Transfobia", "Estatuto do Idoso (Crimes)", "Lei Henry Borel (Lei 14.344/22)"]
},
{
"id": "penal_esp_contravencoes",
"nivel_3": "Contravenções Penais e Crimes de Responsabilidade",
"aliases": ["Lei das Contravenções Penais (DL 3.688/41)", "Crimes de Prefeitos (DL 201/67)", "Vias de Fato", "Perturbação do Sossego"]
},
{
"id": "penal_esp_org",
"nivel_3": "Organização Criminosa e Lavagem de Capitais",
"aliases": ["Lei 12.850/13", "Delação Premiada", "Ocultação de Bens"]
},
{
"id": "penal_esp_transito",
"nivel_3": "Trânsito, Ambiental e Crimes Econômicos/Tributários",
"aliases": ["CTB", "Crimes Ambientais", "Sonegação"]
},
{
"id": "penal_esp_abuso",
"nivel_3": "Abuso de Autoridade (Lei 13.869/19) e Licitações",
"aliases": ["Lei de Licitações"]
}
]
}
]
},
{
"id": "proc_penal",
"nivel_1": "Direito Processual Penal",
"divisoes": [
{
"id": "pp_teoria",
"nivel_2": "Princípios e Teoria da Lei Processual",
"topicos": [
{
"id": "pp_teoria_princ",
"nivel_3": "Princípios e Aplicação da Lei no Tempo e no Espaço",
"aliases": ["Sistemas Processuais", "Interpretação"]
}
]
},
{
"id": "pp_investigacao",
"nivel_2": "Investigação Criminal",
"topicos": [
{
"id": "pp_invest_ip",
"nivel_3": "Inquérito Policial, ANPP e Outros Procedimentos",
"aliases": ["Indiciamento", "Arquivamento", "PIC", "Identificação Criminal (Lei 12.037/09)", "Infrações de Repercussão Interestadual (Lei 10.446/02)"]
}
]
},
{
"id": "pp_acao",
"nivel_2": "Ação Penal e Ação Civil Ex Delicto",
"topicos": [
{
"id": "pp_acao_especies",
"nivel_3": "Ação Penal (Pública e Privada) e Reparação Civil",
"aliases": ["Denúncia", "Queixa-Crime", "Decadência", "Perempção", "Fixação de Valor Mínimo para Indenização", "Efeitos Civis da Sentença Penal Absolutória"]
}
]
},
{
"id": "pp_jurisdicao",
"nivel_2": "Jurisdição, Competência e Incidentes",
"topicos": [
{
"id": "pp_jurisdicao_comp",
"nivel_3": "Fixação, Modificação (Conexão/Continência) e Conflitos",
"aliases": ["Prevenção", "Foro por Prerrogativa"]
},
{
"id": "pp_jurisdicao_incid",
"nivel_3": "Exceções, Restituição de Coisas Apreendidas e Medidas Assecuratórias",
"aliases": ["Sequestro", "Arresto", "Incidente de Insanidade", "Questões Prejudiciais Homogêneas e Heterogêneas", "Incidente de Falsidade"]
}
]
},
{
"id": "pp_provas",
"nivel_2": "Provas",
"topicos": [
{
"id": "pp_provas_teoria",
"nivel_3": "Teoria Geral da Prova, Ônus e Cadeia de Custódia",
"aliases": ["Provas Ilícitas", "Sistemas de Valoração", "Standard Probatório (Além da Dúvida Razoável / Íntima Convicção)"]
},
{
"id": "pp_provas_meios",
"nivel_3": "Meios de Prova (Testemunhal, Pericial, Interrogatório)",
"aliases": ["Confissão", "Reconhecimento", "Corpo de Delito", "Programa de Proteção a Testemunhas (Lei 9.807/99)"]
},
{
"id": "pp_provas_obtencao",
"nivel_3": "Meios de Obtenção de Prova (Busca, Interceptação, Colaboração Premiada)",
"aliases": ["Quebra de Sigilo", "Infiltração Policial"]
}
]
},
{
"id": "pp_sujeitos",
"nivel_2": "Sujeitos do Processo",
"topicos": [
{
"id": "pp_sujeitos_atores",
"nivel_3": "Juiz, MP, Acusado, Defensor, Ofendido e Assistente",
"aliases": ["Impedimento", "Suspeição", "Atribuições", "Direitos do Ofendido (Art. 201 do CPP)", "Competências do Juiz das Garantias"]
}
]
},
{
"id": "pp_prisoes",
"nivel_2": "Prisões e Medidas Cautelares",
"topicos": [
{
"id": "pp_prisoes_prov",
"nivel_3": "Prisões Provisórias (Flagrante, Preventiva e Temporária)",
"aliases": ["Audiência de Custódia", "Requisitos", "Prisão Domiciliar", "Prisão Especial"]
},
{
"id": "pp_prisoes_cautelares",
"nivel_3": "Medidas Cautelares Diversas da Prisão e Liberdade Provisória",
"aliases": ["Fiança", "Tornozeleira Eletrônica", "Art. 319"]
}
]
},
{
"id": "pp_atos",
"nivel_2": "Atos, Prazos e Nulidades",
"topicos": [
{
"id": "pp_atos_comunic",
"nivel_3": "Comunicação dos Atos (Citação, Intimação) e Prazos",
"aliases": ["Citação por Edital", "Citação por Hora Certa", "Carta Rogatória", "Suspensão do Processo e da Prescrição (Art. 366)"]
},
{
"id": "pp_atos_sentenca",
"nivel_3": "Sentença, Coisa Julgada (Emendatio/Mutatio Libelli)",
"aliases": ["Absolvição", "Efeitos da Sentença"]
},
{
"id": "pp_atos_nulidades",
"nivel_3": "Teoria das Nulidades no Processo Penal",
"aliases": ["Nulidade Absoluta", "Nulidade Relativa", "Prejuízo"]
}
]
},
{
"id": "pp_procedimentos",
"nivel_2": "Procedimentos em Espécie",
"topicos": [
{
"id": "pp_proc_comum",
"nivel_3": "Procedimento Comum (Ordinário, Sumário e Sumaríssimo/JECRIM)",
"aliases": ["Transação Penal", "Suspensão Condicional do Processo", "Fase Postulatória", "Fase Instrutória"]
},
{
"id": "pp_proc_juri",
"nivel_3": "Procedimento do Tribunal do Júri",
"aliases": ["Pronúncia", "Impronúncia", "Plenário", "Quesitação"]
},
{
"id": "pp_proc_originaria",
"nivel_3": "Procedimentos de Competência Originária dos Tribunais",
"aliases": ["Lei 8.038/90", "Foro por Prerrogativa de Função", "Ação Penal Originária", "Súmula Vinculante 45"]
},
{
"id": "pp_proc_especiais",
"nivel_3": "Procedimentos Especiais (Drogas, Funcionário Público, Honra)",
"aliases": ["Ritos Especiais", "Propriedade Imaterial"]
}
]
},
{
"id": "pp_recursos",
"nivel_2": "Recursos e Ações de Impugnação",
"topicos": [
{
"id": "pp_rec_teoria",
"nivel_3": "Teoria Geral dos Recursos e Efeitos",
"aliases": ["Juízo de Admissibilidade", "Efeito Suspensivo", "Efeito Devolutivo"]
},
{
"id": "pp_rec_especie",
"nivel_3": "Recursos em Espécie (Apelação, RESE, Agravo, Embargos)",
"aliases": ["Embargos de Declaração", "Embargos Infringentes", "REsp", "RE"]
},
{
"id": "pp_rec_acoes",
"nivel_3": "Ações Autônomas (Habeas Corpus, Revisão Criminal, Mandado de Segurança)",
"aliases": ["Cabimento de HC", "Requisitos da Revisão"]
}
]
},
{
"id": "pp_execucao",
"nivel_2": "Execução Penal (Lei 7.210/84)",
"topicos": [
{
"id": "pp_exec_teoria",
"nivel_3": "Teoria Geral, Órgãos da Execução e Estabelecimentos Penais",
"aliases": ["Juízo da Execução", "Conselho Penitenciário"]
},
{
"id": "pp_exec_disc",
"nivel_3": "Direitos, Deveres e Disciplina (Faltas, RDD e Sanções)",
"aliases": ["Falta Grave", "Procedimento Disciplinar"]
},
{
"id": "pp_exec_incid",
"nivel_3": "Incidentes da Execução (Progressão, Regressão, Remição e Detração)",
"aliases": ["Agravo em Execução", "Cálculo de Pena", "Trabalho do Preso", "Execução de Medida de Segurança", "Exame de Cessação de Periculosidade", "Desinternação"]
},
{
"id": "pp_exec_saidas",
"nivel_3": "Saídas Antecipadas, Livramento Condicional e Anistia/Indulto",
"aliases": ["Permissão de Saída", "Saída Temporária", "Indulto Natalino"]
}
]
}
]
},
{
"id": "civil",
"nivel_1": "Direito Civil",
"divisoes": [
{
"id": "civil_lindb",
"nivel_2": "Introdução ao Direito Civil e LINDB",
"topicos": [
{
"id": "civil_lindb_intro",
"nivel_3": "Conceito, Princípios e Constitucionalização do Direito Civil",
"aliases": ["Eficácia Horizontal dos Direitos Fundamentais"]
},
{
"id": "civil_lindb_regras",
"nivel_3": "Vigência, Aplicação da Lei, Hermenêutica e Conflitos",
"aliases": ["Vacatio Legis", "Repristinação", "Lacunas", "Segurança Jurídica e Eficiência (Arts. 20 a 30 da LINDB)", "RJET (Lei 14.010/20)"]
}
]
},
{
"id": "civil_pessoas",
"nivel_2": "Parte Geral: Das Pessoas",
"topicos": [
{
"id": "civil_pes_naturais",
"nivel_3": "Pessoas Naturais (Personalidade, Capacidade e Nome)",
"aliases": ["Emancipação", "Nascituro"]
},
{
"id": "civil_pes_direitos",
"nivel_3": "Direitos da Personalidade e Ausência",
"aliases": ["Imagem", "Privacidade", "Sucessão Provisória"]
},
{
"id": "civil_pes_juridicas",
"nivel_3": "Pessoas Jurídicas e Desconsideração da Personalidade",
"aliases": ["Associações", "Fundações", "Desvio de Finalidade"]
}
]
},
{
"id": "civil_bens",
"nivel_2": "Parte Geral: Dos Bens",
"topicos": [
{
"id": "civil_bens_class",
"nivel_3": "Classificação e Bens Públicos vs. Privados",
"aliases": ["Bens Móveis", "Bens Imóveis", "Pertenças", "Benfeitorias"]
},
{
"id": "civil_bens_imateriais",
"nivel_3": "Bens Imateriais e Direitos Autorais (Lei 9.610/98)",
"aliases": ["Contrafação", "Direitos Patrimoniais e Morais do Autor", "Domínio Público"]
}
]
},
{
"id": "civil_fatos",
"nivel_2": "Parte Geral: Fatos Jurídicos",
"topicos": [
{
"id": "civil_fat_negocio",
"nivel_3": "Negócio Jurídico (Requisitos, Elementos Acidentais)",
"aliases": ["Condição", "Termo", "Encargo"]
},
{
"id": "civil_fat_defeitos",
"nivel_3": "Defeitos do Negócio Jurídico (Erro, Dolo, Coação, etc.)",
"aliases": ["Estado de Perigo", "Lesão", "Fraude contra Credores"]
},
{
"id": "civil_fat_invalidade",
"nivel_3": "Invalidade (Nulidade e Anulabilidade)",
"aliases": ["Nulidade Absoluta", "Simulação", "Convalidação"]
},
{
"id": "civil_fat_ilicitos",
"nivel_3": "Atos Ilícitos, Prescrição e Decadência",
"aliases": ["Prazos Prescricionais", "Causas Suspensivas"]
}
]
},
{
"id": "civil_obrigacoes",
"nivel_2": "Direito das Obrigações",
"topicos": [
{
"id": "civil_obrig_mod",
"nivel_3": "Modalidades das Obrigações (Dar, Fazer, Solidariedade)",
"aliases": ["Obrigações Alternativas", "Divisibilidade"]
},
{
"id": "civil_obrig_transm",
"nivel_3": "Transmissão (Cessão de Crédito e Assunção de Dívida)",
"aliases": ["Cessão de Posição Contratual"]
},
{
"id": "civil_obrig_adimp",
"nivel_3": "Adimplemento, Extinção, Pagamento e Mora",
"aliases": ["Lugar do Pagamento", "Dação", "Novação", "Compensação", "Pagamento com Sub-Rogação", "Imputação do Pagamento"]
},
{
"id": "civil_obrig_inadimp",
"nivel_3": "Inadimplemento, Cláusula Penal e Arras",
"aliases": ["Perdas e Danos", "Juros de Mora"]
}
]
},
{
"id": "civil_atos_unilaterais",
"nivel_2": "Atos Unilaterais",
"topicos": [
{
"id": "civil_au_especies",
"nivel_3": "Promessa de Recompensa, Gestão de Negócios, Pagamento Indevido e Enriquecimento Sem Causa",
"aliases": []
}
]
},
{
"id": "civil_contratos_geral",
"nivel_2": "Contratos em Geral",
"topicos": [
{
"id": "civil_cont_teoria",
"nivel_3": "Teoria Geral, Princípios, Formação e Extinção",
"aliases": ["Boa-fé Objetiva", "Função Social", "Resolução por Onerosidade", "Exceção do Contrato Não Cumprido"]
},
{
"id": "civil_cont_fase",
"nivel_3": "Fase Pré-Contratual e Contrato Preliminar",
"aliases": []
},
{
"id": "civil_cont_efeitos",
"nivel_3": "Efeitos dos Contratos e Relatividade",
"aliases": ["Estipulação em Favor de Terceiro", "Promessa de Fato de Terceiro", "Contrato com Pessoa a Declarar"]
},
{
"id": "civil_cont_vicios",
"nivel_3": "Vícios Redibitórios e Evicção",
"aliases": ["Garantias Contratuais"]
}
]
},
{
"id": "civil_contratos_especie",
"nivel_2": "Contratos em Espécie",
"topicos": [
{
"id": "civil_esp_venda",
"nivel_3": "Compra e Venda, Doação, Empréstimo (Mútuo/Comodato)",
"aliases": ["Troca", "Pacto de Retrovenda", "Venda a Contento"]
},
{
"id": "civil_esp_servicos",
"nivel_3": "Locação, Prestação de Serviços, Empreitada e Fiança",
"aliases": ["Mandato", "Transação"]
},
{
"id": "civil_esp_estimatorio",
"nivel_3": "Contrato Estimatório, Corretagem e Comissão",
"aliases": []
},
{
"id": "civil_esp_transporte",
"nivel_3": "Transporte, Seguro e Jogo e Aposta",
"aliases": []
},
{
"id": "civil_esp_inquilinato",
"nivel_3": "Locação de Imóveis Urbanos (Lei 8.245/91)",
"aliases": ["Lei do Inquilinato", "Ação de Despejo", "Renovatória"]
}
]
},
{
"id": "civil_resp",
"nivel_2": "Responsabilidade Civil",
"topicos": [
{
"id": "civil_resp_teoria",
"nivel_3": "Teorias, Elementos (Conduta, Dano, Nexo Causal)",
"aliases": ["Responsabilidade Objetiva", "Responsabilidade Subjetiva", "Dano Moral", "Perda de uma Chance"]
},
{
"id": "civil_resp_indeniz",
"nivel_3": "Indenização, Excludentes e Responsabilidade por Fato de Terceiro/Coisa",
"aliases": ["Fato Exclusivo da Vítima", "Caso Fortuito", "Ruína de Edifício"]
}
]
},
{
"id": "civil_reais",
"nivel_2": "Direito das Coisas (Reais)",
"topicos": [
{
"id": "civil_reais_posse",
"nivel_3": "Posse (Teorias, Classificação, Efeitos e Proteção)",
"aliases": ["Jus Possessionis", "Frutos", "Benfeitorias"]
},
{
"id": "civil_reais_propriedade",
"nivel_3": "Propriedade, Aquisição (Usucapião, Registro) e Perda",
"aliases": ["Acessão", "Descoberta", "Função Social da Propriedade"]
},
{
"id": "civil_reais_vizinhanca",
"nivel_3": "Direitos de Vizinhança e Condomínio (Geral e Edilício)",
"aliases": ["Passagem Forçada", "Árvores Limítrofes", "Multipropriedade", "Condomínio em Multipropriedade", "Fundo de Investimento", "Incorporações Imobiliárias (Lei 4.591/64)"]
},
{
"id": "civil_reais_alheias",
"nivel_3": "Direitos Reais sobre Coisas Alheias (Superfície, Servidão, Usufruto)",
"aliases": ["Uso", "Habitação", "Direito de Laje"]
},
{
"id": "civil_reais_garantia",
"nivel_3": "Direitos Reais de Garantia (Penhor, Hipoteca, Alienação Fiduciária)",
"aliases": ["Anticrese", "Propriedade Fiduciária", "Sistema de Financiamento Imobiliário e Alienação Fiduciária (Lei 9.514/97)"]
},
{
"id": "civil_reais_promitente",
"nivel_3": "Direito do Promitente Comprador (Adjudicação Compulsória)",
"aliases": []
}
]
},
{
"id": "civil_familia",
"nivel_2": "Direito de Família",
"topicos": [
{
"id": "civil_fam_casamento",
"nivel_3": "Casamento, União Estável e Relações de Parentesco",
"aliases": ["Regime de Bens", "Divórcio", "Separação", "Concubinato"]
},
{
"id": "civil_fam_filiacao",
"nivel_3": "Filiação, Reconhecimento e Adoção",
"aliases": ["Multiparentalidade", "Socioafetividade", "Investigação de Paternidade", "Lei de Investigação de Paternidade (Lei 8.560/92)"]
},
{
"id": "civil_fam_alimentos",
"nivel_3": "Poder Familiar, Guarda, Alimentos e Bem de Família",
"aliases": ["Guarda Compartilhada", "Alienação Parental", "Impenhorabilidade", "Alimentos Gravídicos (Lei 11.804/08)"]
},
{
"id": "civil_fam_tutela",
"nivel_3": "Tutela, Curatela e Tomada de Decisão Apoiada",
"aliases": ["Incapacidade", "Estatuto da Pessoa com Deficiência (Reflexos Civis)"]
}
]
},
{
"id": "civil_sucessoes",
"nivel_2": "Direito das Sucessões",
"topicos": [
{
"id": "civil_suc_teoria",
"nivel_3": "Sucessão em Geral, Herança, Vocação Hereditária e Indignidade",
"aliases": ["Deserdação", "Aceitação", "Renúncia", "Petição de Herança"]
},
{
"id": "civil_suc_jacente",
"nivel_3": "Herança Jacente e Vacante",
"aliases": []
},
{
"id": "civil_suc_legitima",
"nivel_3": "Sucessão Legítima e Sucessão Testamentária",
"aliases": ["Herdeiros Necessários", "Ordem de Vocação", "Testamento", "Legados", "Testamenteiro", "Codicilo", "Substituições Testamentárias", "Rompimento do Testamento"]
},
{
"id": "civil_suc_partilha",
"nivel_3": "Inventário, Partilha, Colação e Sonegados",
"aliases": ["Pagamento de Dívidas", "Garantia dos Quinhões"]
}
]
},
{
"id": "civil_registros",
"nivel_2": "Registros Públicos",
"topicos": [
{
"id": "civil_reg_publicos",
"nivel_3": "Lei 6.015/73 (Registro de Imóveis, Pessoas Naturais e Jurídicas)",
"aliases": ["Averbação", "Retificação de Registro", "Dúvida Registral"]
}
]
}
]
},
{
"id": "proc_civil",
"nivel_1": "Direito Processual Civil",
"divisoes": [
{
"id": "pc_fundamentos",
"nivel_2": "Parte Geral: Fundamentos e Competência",
"topicos": [
{
"id": "pc_fund_normas",
"nivel_3": "Normas Fundamentais, Jurisdição e Ação",
"aliases": ["Princípios Processuais", "Boa-fé Processual", "Condições da Ação", "Direito Intertemporal", "Processo Estrutural"]
},
{
"id": "pc_fund_comp",
"nivel_3": "Competência (Fixação, Modificação e Conflitos)",
"aliases": ["Competência Relativa", "Competência Absoluta", "Foro de Eleição"]
},
{
"id": "pc_fund_cooperacao",
"nivel_3": "Limites da Jurisdição e Cooperação Internacional",
"aliases": ["Homologação de Decisão Estrangeira", "Carta Rogatória", "Auxílio Direto"]
},
{
"id": "pc_fund_masc",
"nivel_3": "Meios Adequados de Solução de Conflitos (MASC)",
"aliases": ["Arbitragem (Lei 9.307/96)", "Mediação (Lei 13.140/15)", "Cláusula Compromissória", "Confidencialidade"]
}
]
},
{
"id": "pc_sujeitos",
"nivel_2": "Parte Geral: Sujeitos do Processo",
"topicos": [
{
"id": "pc_suj_partes",
"nivel_3": "Partes, Procuradores e Gratuidade da Justiça",
"aliases": ["Capacidade Processual", "Deveres das Partes", "Honorários de Sucumbência", "Sucessão Processual"]
},
{
"id": "pc_suj_intervencao",
"nivel_3": "Litisconsórcio e Intervenção de Terceiros",
"aliases": ["Assistência", "Denunciação da Lide", "Chamamento", "IDPJ", "Amicus Curiae"]
},
{
"id": "pc_suj_atores",
"nivel_3": "Juiz, MP, Advocacia Pública e Defensoria Pública",
"aliases": ["Impedimento", "Suspeição", "Poderes do Juiz", "Prerrogativas da Fazenda Pública", "Prazo em Dobro"]
},
{
"id": "pc_suj_auxiliares",
"nivel_3": "Dos Auxiliares da Justiça",
"aliases": ["Perito", "Oficial de Justiça", "Conciliadores e Mediadores"]
}
]
},
{
"id": "pc_atos",
"nivel_2": "Parte Geral: Atos Processuais",
"topicos": [
{
"id": "pc_atos_teoria",
"nivel_3": "Forma, Tempo, Prazos e Nulidades",
"aliases": ["Preclusão", "Negócios Jurídicos Processuais", "Valor da Causa"]
},
{
"id": "pc_atos_comunic",
"nivel_3": "Comunicação dos Atos (Citação e Intimação)",
"aliases": ["Citação Eletrônica", "Citação por Edital", "Cartas"]
},
{
"id": "pc_atos_extincao",
"nivel_3": "Formação, Suspensão e Extinção do Processo",
"aliases": ["Litispendência", "Abandono de Causa", "Desistência da Ação"]
}
]
},
{
"id": "pc_tutela",
"nivel_2": "Tutela Provisória",
"topicos": [
{
"id": "pc_tutela_especies",
"nivel_3": "Tutela de Urgência (Antecipada/Cautelar) e Evidência",
"aliases": ["Estabilização da Tutela", "Requisitos da Tutela"]
}
]
},
{
"id": "pc_conhecimento",
"nivel_2": "Processo de Conhecimento",
"topicos": [
{
"id": "pc_conh_postulatoria",
"nivel_3": "Petição Inicial, Resposta do Réu e Revelia",
"aliases": ["Inépcia", "Contestação", "Reconvenção", "Impugnação ao Valor da Causa", "Teoria da Asserção", "Emenda à Inicial"]
},
{
"id": "pc_conh_saneamento",
"nivel_3": "Providências Preliminares e Julgamento Conforme o Estado do Processo",
"aliases": ["Julgamento Antecipado Parcial do Mérito", "Audiência de Conciliação"]
},
{
"id": "pc_conh_audiencias",
"nivel_3": "Audiências (Conciliação/Mediação e Instrução e Julgamento - AIJ)",
"aliases": []
}
]
},
{
"id": "pc_provas",
"nivel_2": "Processo de Conhecimento: Provas",
"topicos": [
{
"id": "pc_prov_teoria",
"nivel_3": "Teoria Geral da Prova, Ônus e Produção Antecipada",
"aliases": ["Distribuição Dinâmica do Ônus da Prova", "Prova Ilícita"]
},
{
"id": "pc_prov_meios",
"nivel_3": "Meios de Prova em Espécie",
"aliases": ["Prova Testemunhal", "Prova Pericial", "Depoimento Pessoal", "Prova Documental", "Ata Notarial", "Prova Emprestada"]
}
]
},
{
"id": "pc_sentenca",
"nivel_2": "Sentença, Coisa Julgada e Cumprimento",
"topicos": [
{
"id": "pc_sent_teoria",
"nivel_3": "Sentença, Remessa Necessária e Coisa Julgada",
"aliases": ["Efeitos da Sentença", "Coisa Julgada Material", "Limites Objetivos e Subjetivos"]
},
{
"id": "pc_sent_cumprimento",
"nivel_3": "Liquidação e Cumprimento de Sentença",
"aliases": ["Impugnação ao Cumprimento", "Obrigação de Pagar", "Obrigação de Fazer/Alimentos", "Precatório e RPV (Fazenda Pública)", "Astreintes", "Protesto de Título Judicial", "Cumprimento Provisório"]
}
]
},
{
"id": "pc_execucao",
"nivel_2": "Processo de Execução",
"topicos": [
{
"id": "pc_exec_teoria",
"nivel_3": "Teoria Geral, Títulos Extrajudiciais e Responsabilidade Patrimonial",
"aliases": ["Fraude à Execução", "Fraude contra Credores", "Requisitos do Título", "Execução Fiscal (Lei 6.830/80)"]
},
{
"id": "pc_exec_atos",
"nivel_3": "Penhora, Expropriação de Bens e Satisfação do Crédito",
"aliases": ["Adjudicação", "Alienação", "Ordem de Preferência"]
},
{
"id": "pc_exec_defesas",
"nivel_3": "Defesas do Executado (Embargos e Exceção de Pré-Executividade)",
"aliases": ["Embargos à Execução", "Efeito Suspensivo nos Embargos"]
},
{
"id": "pc_exec_extincao",
"nivel_3": "Suspensão e Extinção do Processo de Execução",
"aliases": []
}
]
},
{
"id": "pc_coletivo",
"nivel_2": "Microssistema de Tutela Coletiva e Ações Constitucionais",
"topicos": [
{
"id": "pc_col_teoria",
"nivel_3": "Teoria Geral do Processo Coletivo",
"aliases": ["Direitos Difusos, Coletivos e Individuais Homogêneos", "Coisa Julgada Secundum Eventum Litis", "Fluid Recovery (Recuperação Fluida)", "Legitimidade Ativa e Adequação"]
},
{
"id": "pc_col_acp_ap",
"nivel_3": "Ação Civil Pública e Ação Popular",
"aliases": ["Lei 7.347/85", "Lei 4.717/65", "Litisconsórcio no Processo Coletivo", "Fundo de Defesa dos Direitos Difusos"]
},
{
"id": "pc_col_remedios",
"nivel_3": "Remédios Constitucionais Processuais",
"aliases": ["Mandado de Segurança (Lei 12.016/09)", "Mandado de Injunção (Lei 13.300/16)", "Habeas Data (Lei 9.507/97)", "Reclamação"]
}
]
},
{
"id": "pc_especiais",
"nivel_2": "Procedimentos Especiais",
"topicos": [
{
"id": "pc_esp_contenciosos",
"nivel_3": "Procedimentos Especiais de Jurisdição Contenciosa (Possessórias, Monitória, etc.)",
"aliases": ["Consignação em Pagamento", "Exigir Contas", "Inventário e Partilha", "Embargos de Terceiro", "Ação Monitória", "Ações de Família", "Dissolução Parcial de Sociedade", "Ações Possessórias", "Ação de Divisão e Demarcação"]
},
{
"id": "pc_esp_voluntaria",
"nivel_3": "Procedimentos de Jurisdição Voluntária",
"aliases": ["Interdição", "Divórcio Consensual", "Alvará Judicial"]
},
{
"id": "pc_esp_juizados",
"nivel_3": "Juizados Especiais (Cível, Federal e Fazenda Pública)",
"aliases": ["Lei 9.099/95", "Lei 10.259/01", "Lei 12.153/09"]
},
{
"id": "pc_esp_fazenda",
"nivel_3": "Fazenda Pública em Juízo",
"aliases": ["Suspensão de Segurança e Liminar (Lei 8.437/92)", "Intervenção da União (Lei 9.469/97)", "Reexame Necessário", "Prerrogativas e Prazos"]
}
]
},
{
"id": "pc_tribunais",
"nivel_2": "Processos nos Tribunais",
"topicos": [
{
"id": "pc_trib_precedentes",
"nivel_3": "Ações Autônomas de Impugnação, Incidentes (IRDR/IAC) e Precedentes",
"aliases": ["Incidente de Resolução de Demandas Repetitivas", "Incidente de Assunção de Competência", "Ação Rescisória", "Reclamação Constitucional", "Conflito de Competência", "Súmula Vinculante"]
}
]
},
{
"id": "pc_recursos",
"nivel_2": "Recursos",
"topicos": [
{
"id": "pc_rec_teoria",
"nivel_3": "Teoria Geral dos Recursos",
"aliases": ["Juízo de Admissibilidade", "Efeito Suspensivo", "Efeito Devolutivo", "Preparo"]
},
{
"id": "pc_rec_especie",
"nivel_3": "Recursos em Espécie (Apelação, Agravos, REsp, RE, Embargos)",
"aliases": ["Agravo de Instrumento", "Agravo Interno", "Embargos de Declaração", "Recurso Especial", "Recurso Extraordinário"]
}
]
}
]
},
{
"id": "eca",
"nivel_1": "Direito da Criança e do Adolescente",
"divisoes": [
{
"id": "eca_teoria",
"nivel_2": "Teoria Geral e Direitos Fundamentais",
"topicos": [
{
"id": "eca_teo_princ",
"nivel_3": "Doutrina da Proteção Integral, Princípios e Direitos Básicos",
"aliases": ["Prioridade Absoluta", "Condição Peculiar de Pessoa em Desenvolvimento"]
},
{
"id": "eca_teo_direitos_vida",
"nivel_3": "Direito à Vida, à Saúde, à Liberdade, ao Respeito e à Dignidade",
"aliases": ["Primeira Infância (Lei nº 13.257/16)", "Gestante e Parturiente", "Vacinação", "Internação Psiquiátrica", "Lei Menino Bernardo (Castigo Físico)"]
},
{
"id": "eca_teo_direitos_edu",
"nivel_3": "Direito à Educação, Cultura, Esporte, Lazer e Profissionalização",
"aliases": ["Vagas em Creche e Pré-escola", "Educação Inclusiva", "Trabalho Infantil", "Menor Aprendiz"]
}
]
},
{
"id": "eca_convivencia",
"nivel_2": "Convivência Familiar e Comunitária",
"topicos": [
{
"id": "eca_conv_guarda",
"nivel_3": "Guarda, Tutela e Adoção",
"aliases": ["Adoção Internacional", "Cadastro Nacional de Adoção", "Família Substituta", "Família Extensa", "Adoção Póstuma", "Adoção Intuitu Personae", "Adoção por Divorciados", "Adoção de Criança Indígena", "Estágio de Convivência"]
},
{
"id": "eca_conv_poder",
"nivel_3": "Perda/Suspensão do Poder Familiar e Acolhimento (Institucional/Familiar)",
"aliases": ["Destituição do Poder Familiar", "Entrega Voluntária", "Apadrinhamento", "Audiências Concentradas"]
}
]
},
{
"id": "eca_prevencao",
"nivel_2": "Prevenção e Rede de Proteção",
"topicos": [
{
"id": "eca_prev_entidades",
"nivel_3": "Entidades de Atendimento e Conselho Tutelar",
"aliases": ["Atribuições do Conselho Tutelar", "Escolha dos Conselheiros", "Fiscalização das Entidades", "Resoluções do CONANDA", "CRAS / CREAS / LOAS"]
},
{
"id": "eca_prev_viagens",
"nivel_3": "Autorização para Viagens e Sistema de Garantia de Direitos",
"aliases": ["Acesso a Diversões e Espetáculos", "Hospedagem"]
}
]
},
{
"id": "eca_protecao",
"nivel_2": "Medidas de Proteção",
"topicos": [
{
"id": "eca_prot_medidas",
"nivel_3": "Hipóteses de Aplicação e Medidas Específicas",
"aliases": ["Requisição de Tratamento Médico", "Inclusão em Programa Oficial"]
}
]
},
{
"id": "eca_infracional",
"nivel_2": "Ato Infracional e Socioeducação",
"topicos": [
{
"id": "eca_inf_direitos",
"nivel_3": "Direitos Individuais e Apuração do Ato Infracional",
"aliases": ["Apreensão em Flagrante", "Garantias Processuais", "Internação Provisória", "Oitiva Informal", "Súmulas do STJ sobre Atos Infracionais"]
},
{
"id": "eca_inf_medidas",
"nivel_3": "Medidas Socioeducativas e Remissão",
"aliases": ["Advertência", "Liberdade Assistida", "Prestação de Serviços à Comunidade", "Internação", "Remissão Cumulada", "Internação-Sanção", "Prescrição"]
},
{
"id": "eca_inf_sinase",
"nivel_3": "Execução das Medidas Socioeducativas (SINASE - Lei 12.594/12)",
"aliases": ["Plano Individual de Atendimento (PIA)", "Unificação de Medidas", "Reavaliação", "Maioridade Superveniente", "Progressão e Regressão de Medida", "PNAISARI"]
}
]
},
{
"id": "eca_justica",
"nivel_2": "Justiça da Infância e Infrações",
"topicos": [
{
"id": "eca_jus_proc",
"nivel_3": "Competência, Procedimentos e Recursos no ECA",
"aliases": ["Procedimento de Apuração de Irregularidade em Entidade", "Apelação no ECA", "Prazos Recursais (10 dias)", "Efeitos dos Recursos"]
},
{
"id": "eca_jus_escuta",
"nivel_3": "Sistema de Garantia de Direitos de Menores Vítimas (Lei nº 13.431/17)",
"aliases": ["Escuta Especializada", "Depoimento Especial", "Revitimização"]
},
{
"id": "eca_jus_tutela",
"nivel_3": "Tutela Coletiva e Atuação do Ministério Público",
"aliases": ["Ação Civil Pública no ECA", "Multas Administrativas"]
},
{
"id": "eca_jus_crimes",
"nivel_3": "Crimes e Infrações Administrativas previstos no ECA",
"aliases": ["Corrupção de Menores", "Venda de Bebida Alcoólica", "Multa Administrativa"]
}
]
}
]
},
{
"id": "cdc",
"nivel_1": "Direito do Consumidor",
"divisoes": [
{
"id": "cdc_teoria",
"nivel_2": "Teoria Geral e Relação de Consumo",
"topicos": [
{
"id": "cdc_teo_princ",
"nivel_3": "Princípios, Direitos Básicos e Conceitos (Consumidor/Fornecedor)",
"aliases": ["Teoria Finalista, Maximalista e Finalista Mitigada", "Consumidor Equiparado (Bystander)", "Vulnerabilidade", "Inversão do Ônus da Prova"]
},
{
"id": "cdc_teo_idpj",
"nivel_3": "Desconsideração da Personalidade Jurídica no CDC",
"aliases": ["Teoria Menor", "Teoria Maior", "Grupos Econômicos, Sociedades Coligadas e Consorciadas"]
}
]
},
{
"id": "cdc_qualidade",
"nivel_2": "Qualidade de Produtos e Serviços",
"topicos": [
{
"id": "cdc_qual_saude",
"nivel_3": "Da Proteção à Saúde e Segurança (Arts. 8º a 10)",
"aliases": ["Recall", "Risco Inerente vs. Risco Adquirido"]
},
{
"id": "cdc_qual_fato",
"nivel_3": "Responsabilidade pelo Fato (Defeito) do Produto/Serviço",
"aliases": ["Acidente de Consumo", "Responsabilidade Objetiva", "Excludentes", "Fortuito Interno e Externo", "Risco do Desenvolvimento"]
},
{
"id": "cdc_qual_vicio",
"nivel_3": "Responsabilidade pelo Vício do Produto/Serviço e Prazos",
"aliases": ["Vício Oculto", "Vício Aparente", "Decadência", "Prescrição", "Garantia Legal vs. Garantia Contratual"]
}
]
},
{
"id": "cdc_praticas",
"nivel_2": "Práticas e Contratos de Consumo",
"topicos": [
{
"id": "cdc_prat_oferta",
"nivel_3": "Oferta, Publicidade e Práticas Abusivas",
"aliases": ["Publicidade Enganosa", "Publicidade Abusiva", "Venda Casada", "Orçamento Prévio", "Puffing (Exagero Publicitário)"]
},
{
"id": "cdc_prat_contratos",
"nivel_3": "Proteção Contratual e Cláusulas Abusivas",
"aliases": ["Contrato de Adesão", "Nulidade de Pleno Direito"]
},
{
"id": "cdc_prat_eletronico",
"nivel_3": "Comércio Eletrônico e Contratação à Distância (Decreto nº 7.962/2013)",
"aliases": ["Direito de Arrependimento", "Compras Coletivas"]
},
{
"id": "cdc_prat_cobranca",
"nivel_3": "Cobrança de Dívidas e Cadastro Positivo (Lei nº 12.414/2011)",
"aliases": ["Repetição de Indébito em Dobro", "Cadastro Positivo", "SPC/Serasa"]
},
{
"id": "cdc_prat_super",
"nivel_3": "Prevenção e Tratamento do Superendividamento (Lei 14.181/21)",
"aliases": ["Mínimo Existencial", "Audiência de Conciliação Global", "Plano de Pagamento"]
}
]
},
{
"id": "cdc_sistema",
"nivel_2": "Sistema de Defesa e Tutela",
"topicos": [
{
"id": "cdc_sist_sndc",
"nivel_3": "Convenção Coletiva de Consumo e SNDC (Decreto nº 2.181/1997)",
"aliases": ["PROCON", "SENACON", "Termo de Ajustamento de Conduta (TAC)"]
},
{
"id": "cdc_sist_sancoes",
"nivel_3": "Sanções Administrativas e Infrações Penais de Consumo",
"aliases": ["Multa", "Interdição", "Crimes contra as Relações de Consumo"]
},
{
"id": "cdc_sist_tutela",
"nivel_3": "Defesa em Juízo e Ações Coletivas Consumeristas",
"aliases": ["Interesses Difusos, Coletivos e Individuais Homogêneos", "Coisa Julgada Secundum Eventum Litis", "Legitimidade Ativa (MP e Associações)", "Reparação Fluida (Fluid Recovery)", "Danos Sociais", "Desvio Produtivo do Consumidor (Perda do Tempo Útil)"]
}
]
}
]
},
{
"id": "emp",
"nivel_1": "Direito Empresarial",
"divisoes": [
{
"id": "emp_teoria",
"nivel_2": "Teoria Geral da Empresa",
"topicos": [
{
"id": "emp_teoria_conceito",
"nivel_3": "Conceito de Empresário, Requisitos e Capacidade",
"aliases": ["Teoria da Empresa", "Impedimentos", "Fontes do Direito Empresarial", "Capacidade e Outorga Conjugal"]
},
{
"id": "emp_teoria_individual",
"nivel_3": "Empresário Individual e Sociedade Limitada Unipessoal (SLU)",
"aliases": ["EIRELI (Extinta)", "MEI"]
},
{
"id": "emp_teoria_registro",
"nivel_3": "Registro de Empresas (DREI e Juntas Comerciais)",
"aliases": ["NIRE"]
},
{
"id": "emp_teoria_escrituracao",
"nivel_3": "Da Escrituração e Livros Empresariais",
"aliases": ["Sigilo e Exibição Judicial", "Livros Comerciais"]
},
{
"id": "emp_teoria_estab",
"nivel_3": "Estabelecimento Empresarial e Trespasse",
"aliases": ["Ponto Comercial", "Aviamento", "Cláusula de Não Concorrência"]
},
{
"id": "emp_teoria_nome",
"nivel_3": "Nome Empresarial",
"aliases": ["Firma", "Denominação"]
},
{
"id": "emp_teoria_prepostos",
"nivel_3": "Dos Prepostos do Empresário",
"aliases": ["Gerente", "Contabilista"]
}
]
},
{
"id": "emp_societario_teoria",
"nivel_2": "Direito Societário: Teoria Geral e Tipos Menores",
"topicos": [
{
"id": "emp_soc_teoria",
"nivel_3": "Teoria Geral das Sociedades e Desconsideração da Personalidade",
"aliases": ["Affectio Societatis", "Sociedade Entre Cônjuges"]
},
{
"id": "emp_soc_nao_personificadas",
"nivel_3": "Sociedades Não Personificadas (Comum e Conta de Participação)",
"aliases": ["Sociedade de Fato", "Sócio Oculto"]
},
{
"id": "emp_soc_personificadas",
"nivel_3": "Sociedades Personificadas (Simples, Nome Coletivo, Comandita)",
"aliases": ["Responsabilidade dos Sócios"]
},
{
"id": "emp_soc_dissolucao",
"nivel_3": "Dissolução, Liquidação e Extinção das Sociedades",
"aliases": ["Apuração de Haveres", "Direito de Retirada", "Exclusão de Sócio"]
}
]
},
{
"id": "emp_societario_ltda",
"nivel_2": "Direito Societário: Sociedade Limitada (LTDA)",
"topicos": [
{
"id": "emp_ltda_regras",
"nivel_3": "Sociedade Limitada: Quotas, Administração e Deliberações",
"aliases": ["Conselho Fiscal", "Exclusão de Sócio", "Cessão de Quotas"]
}
]
},
{
"id": "emp_societario_sa",
"nivel_2": "Direito Societário: Sociedades Anônimas (S.A.)",
"topicos": [
{
"id": "emp_sa_capital",
"nivel_3": "S.A.: Características, Capital Social e Valores Mobiliários (Ações/Debêntures)",
"aliases": ["Partes Beneficiárias", "Bônus de Subscrição", "Companhia Aberta e Fechada", "Comissão de Valores Mobiliários (CVM)", "Voto Plural", "Sociedade Anônima do Futebol (SAF - Lei nº 14.193/2021)"]
},
{
"id": "emp_sa_orgaos",
"nivel_3": "S.A.: Órgãos Sociais (Assembleia, Diretoria, Conselhos)",
"aliases": ["Assembleia Geral Ordinária", "Assembleia Geral Extraordinária"]
},
{
"id": "emp_sa_acionistas",
"nivel_3": "S.A.: Acionistas (Direitos, Deveres e Acordo de Acionistas)",
"aliases": ["Acionista Controlador", "Abuso de Poder de Controle"]
},
{
"id": "emp_sa_coligadas",
"nivel_3": "Sociedades Coligadas, Controladas, Filiadas e Oferta Pública de Ações (OPA)",
"aliases": ["Grupos Societários"]
}
]
},
{
"id": "emp_societario_op",
"nivel_2": "Direito Societário: Operações",
"topicos": [
{
"id": "emp_op_reestruturacao",
"nivel_3": "Transformação, Incorporação, Fusão e Cisão",
"aliases": ["Consórcios"]
}
]
},
{
"id": "emp_cooperativas",
"nivel_2": "Sociedades Cooperativas",
"topicos": [
{
"id": "emp_coop_regras",
"nivel_3": "Sociedades Cooperativas (Lei nº 5.764/1971)",
"aliases": ["Fundo de Reserva", "FATES", "Quotas-partes"]
}
]
},
{
"id": "emp_titulos",
"nivel_2": "Títulos de Crédito",
"topicos": [
{
"id": "emp_tit_teoria",
"nivel_3": "Teoria Geral, Princípios e Atributos",
"aliases": ["Cartularidade", "Literalidade", "Autonomia", "Títulos em Suporte Escritural/Eletrônico"]
},
{
"id": "emp_tit_atos",
"nivel_3": "Endosso, Aval, Aceite e Protesto",
"aliases": ["Cessão Civil vs. Endosso", "Ação Cambial"]
},
{
"id": "emp_tit_protesto",
"nivel_3": "Protesto de Títulos (Lei nº 9.492/1997)",
"aliases": []
},
{
"id": "emp_tit_lc_np",
"nivel_3": "Títulos em Espécie: Letra de Câmbio e Nota Promissória",
"aliases": ["LUG", "Saque"]
},
{
"id": "emp_tit_cheque_dup",
"nivel_3": "Títulos em Espécie: Cheque e Duplicata",
"aliases": ["Cheque Pré-datado", "Aceite por Presunção"]
},
{
"id": "emp_tit_especiais",
"nivel_3": "Títulos Especiais (Agronegócio, Bancário, Imobiliário)",
"aliases": ["CDB", "Cédula de Produto Rural (CPR)", "Commercial Papers (Nota Comercial)", "Cédulas de Crédito Bancário/Industrial", "Títulos do Agronegócio (CDCA, CRA, CPR)"]
}
]
},
{
"id": "emp_falencia",
"nivel_2": "Recuperação de Empresas e Falência",
"topicos": [
{
"id": "emp_fal_comuns",
"nivel_3": "Disposições Comuns, Verificação de Créditos e Administrador Judicial",
"aliases": ["Juízo Universal", "Comitê de Credores", "Assembleia Geral de Credores", "Consolidação Substancial e Processual", "Submissão de Empresas Estatais"]
},
{
"id": "emp_fal_rj",
"nivel_3": "Recuperação Judicial: Requisitos, Procedimento e Plano",
"aliases": ["Stay Period", "Cram Down", "Plano Especial para ME/EPP"]
},
{
"id": "emp_fal_re",
"nivel_3": "Recuperação Extrajudicial",
"aliases": ["Homologação Judicial", "Créditos Sujeitos"]
},
{
"id": "emp_fal_decretacao",
"nivel_3": "Falência: Decretação, Pedido e Efeitos quanto às Pessoas e Bens",
"aliases": ["Autofalência", "Arrecadação de Bens", "Inabilitação do Falido"]
},
{
"id": "emp_fal_efeitos",
"nivel_3": "Falência: Efeitos nos Contratos e Ação Revocatória",
"aliases": ["Termo Legal da Falência", "Ineficácia de Atos", "Ação Revocatória"]
},
{
"id": "emp_fal_pagamento",
"nivel_3": "Falência: Realização do Ativo, Quadro de Credores e Pagamento",
"aliases": ["Ordem de Preferência", "Créditos Extraconcursais", "Restituição"]
},
{
"id": "emp_fal_crimes",
"nivel_3": "Crimes Falimentares",
"aliases": ["Fraude a Credores", "Competência Penal"]
},
{
"id": "emp_fal_transnacional",
"nivel_3": "Insolvência Transnacional",
"aliases": []
},
{
"id": "emp_fal_liquidacao",
"nivel_3": "Intervenção e Liquidação Extrajudicial de Instituições Financeiras (Lei nº 6.024/74)",
"aliases": []
}
]
},
{
"id": "emp_pi",
"nivel_2": "Propriedade Industrial (Lei 9.279/96)",
"topicos": [
{
"id": "emp_pi_patentes",
"nivel_3": "Patentes de Invenção e Modelo de Utilidade",
"aliases": ["Requisitos de Patenteabilidade", "Prazo de Vigência", "Licença Compulsória"]
},
{
"id": "emp_pi_marcas",
"nivel_3": "Marcas, Desenho Industrial e Indicações Geográficas",
"aliases": ["Marca de Alto Renome", "Concorrência Desleal"]
}
]
},
{
"id": "emp_contratos",
"nivel_2": "Contratos Empresariais",
"topicos": [
{
"id": "emp_cont_franq",
"nivel_3": "Franquia (Franchising) e Faturização (Factoring)",
"aliases": ["Circular de Oferta de Franquia", "Fomento Mercantil"]
},
{
"id": "emp_cont_rep",
"nivel_3": "Representação Comercial, Concessão, Agência e Distribuição",
"aliases": ["Cláusula de Del Credere", "Exclusividade"]
},
{
"id": "emp_cont_alienacao",
"nivel_3": "Alienação Fiduciária em Garantia (Decreto-Lei nº 911/1969)",
"aliases": []
},
{
"id": "emp_cont_arrendamento",
"nivel_3": "Arrendamento Mercantil (Leasing - Lei nº 6.099/74) e Contratos Bancários",
"aliases": ["Patrimônio Rural em Afetação (Lei do Agro)"]
}
]
}
]
},
{
"id": "trib",
"nivel_1": "Direito Tributário",
"divisoes": [
{
"id": "trib_const",
"nivel_2": "Sistema Constitucional Tributário",
"topicos": [
{
"id": "trib_const_conceito",
"nivel_3": "Conceito de Tributo, Natureza Jurídica e Preços Públicos",
"aliases": ["Pedágio", "Tarifa", "Pecúnia Compulsória"]
},
{
"id": "trib_const_princ",
"nivel_3": "Princípios e Limitações ao Poder de Tributar",
"aliases": ["Legalidade", "Anterioridade", "Irretroatividade", "Confisco"]
},
{
"id": "trib_const_comp",
"nivel_3": "Competência Tributária (Privativa, Comum, Cumulativa e Residual)",
"aliases": ["Competência Residual", "Competência Extraordinária"]
},
{
"id": "trib_const_repart",
"nivel_3": "Repartição Constitucional de Receitas Tributárias",
"aliases": ["Fundos de Participação", "Fundo de Participação dos Municípios (FPM)", "Fundo de Participação dos Estados (FPE)", "Retenção na Fonte (IRRF)", "Desvinculação de Receitas (DRU/DREM)"]
},
{
"id": "trib_const_imun",
"nivel_3": "Imunidades Tributárias",
"aliases": ["Imunidade Recíproca", "Templos de Qualquer Culto", "Livros e Jornais"]
},
{
"id": "trib_const_reforma",
"nivel_3": "Reforma Tributária (EC nº 132/2023)",
"aliases": ["IBS", "CBS", "Imposto Seletivo (IS)", "Não cumulatividade plena", "Período de Transição"]
}
]
},
{
"id": "trib_especies",
"nivel_2": "Espécies Tributárias",
"topicos": [
{
"id": "trib_esp_fed",
"nivel_3": "Impostos Federais (IR, IPI, IOF, ITR, II, IE, IGF)",
"aliases": ["Imposto de Renda", "Produtos Industrializados", "Ganho de Capital", "Imposto de Renda Retido na Fonte (IRRF)", "Desembaraço Aduaneiro"]
},
{
"id": "trib_esp_est",
"nivel_3": "Impostos Estaduais (ICMS, IPVA, ITCMD)",
"aliases": ["Guerra Fiscal", "Não-Cumulatividade", "Base de Cálculo", "ICMS-DIFAL", "Inventário Extrajudicial (ITCMD)", "Progressividade do ITCMD"]
},
{
"id": "trib_esp_mun",
"nivel_3": "Impostos Municipais (ISS, IPTU, ITBI)",
"aliases": ["Lista de Serviços", "Progressividade do IPTU", "Integralização de Capital Social (ITBI)", "Função Social da Propriedade Urbana (IPTU)", "Local da Prestação e Exportação de Serviços (ISS)"]
},
{
"id": "trib_esp_taxas",
"nivel_3": "Taxas, Contribuições de Melhoria e Empréstimos Compulsórios",
"aliases": ["Poder de Polícia", "Serviço Público Específico e Divisível"]
},
{
"id": "trib_esp_contrib",
"nivel_3": "Contribuições Especiais (Sociais, CIDE, Iluminação)",
"aliases": ["Cosip", "PIS/COFINS", "Contribuições ao Sistema S", "Contribuição Sindical"]
}
]
},
{
"id": "trib_obrig",
"nivel_2": "Obrigação Tributária",
"topicos": [
{
"id": "trib_obrig_teoria",
"nivel_3": "Legislação, Vigência, Interpretação e Fato Gerador",
"aliases": ["Obrigação Principal e Acessória", "Evasão e Elisão"]
},
{
"id": "trib_obrig_suj",
"nivel_3": "Sujeitos da Obrigação e Solidariedade",
"aliases": ["Sujeito Ativo", "Sujeito Passivo", "Capacidade Tributária"]
},
{
"id": "trib_obrig_resp",
"nivel_3": "Responsabilidade Tributária (Sucessores, Terceiros e Infrações)",
"aliases": ["Substituição Tributária", "Art. 135 do CTN", "Denúncia Espontânea", "Sucessão Empresarial e Incorporação", "Responsabilidade de Sócios e Gerentes", "Responsabilidade de Notários e Registradores", "Redirecionamento da Execução", "Grupo Econômico"]
}
]
},
{
"id": "trib_credito",
"nivel_2": "Crédito Tributário",
"topicos": [
{
"id": "trib_cred_const",
"nivel_3": "Constituição do Crédito e Lançamento",
"aliases": ["Lançamento de Ofício", "Lançamento por Declaração", "Lançamento por Homologação"]
},
{
"id": "trib_cred_susp",
"nivel_3": "Suspensão da Exigibilidade (Moratória, Liminares, Parcelamento)",
"aliases": ["Depósito do Montante Integral", "Recurso Administrativo"]
},
{
"id": "trib_cred_ext",
"nivel_3": "Extinção (Pagamento, Compensação, Decadência, Prescrição)",
"aliases": ["Transação", "Dação em Pagamento", "Consignação"]
},
{
"id": "trib_cred_excl",
"nivel_3": "Exclusão (Isenção e Anistia)",
"aliases": ["Isenção Onerosa", "Revogação de Isenção"]
},
{
"id": "trib_cred_gar",
"nivel_3": "Garantias e Privilégios do Crédito Tributário",
"aliases": ["Preferência", "Fraude à Execução Fiscal", "Bens Impenhoráveis"]
}
]
},
{
"id": "trib_proc",
"nivel_2": "Administração e Processo Tributário",
"topicos": [
{
"id": "trib_proc_fisc",
"nivel_3": "Fiscalização Tributária",
"aliases": ["Quebra de Sigilo Bancário e Fiscal", "Dever de Prestar Informações"]
},
{
"id": "trib_proc_adm",
"nivel_3": "Dívida Ativa, Certidões e Processo Administrativo Fiscal (PAF)",
"aliases": ["Certidão Positiva com Efeito de Negativa", "Sigilo Fiscal", "Consulta Fiscal"]
},
{
"id": "trib_proc_jud",
"nivel_3": "Processo Judicial Tributário (Execução Fiscal, Repetição, Anulatória)",
"aliases": ["Lei 6.830/80", "Mandado de Segurança Tributário", "Exceção de Pré-Executividade", "Medida Cautelar Fiscal (Lei nº 8.397/92)", "Embargos à Execução Fiscal", "Ação de Repetição de Indébito", "Garantia do Juízo"]
}
]
}
]
},
{
  "id": "econ",
  "nivel_1": "Direito Econômico e Financeiro",
  "divisoes": [
    {
      "id": "econ_ordem",
      "nivel_2": "Ordem Econômica Constitucional",
      "topicos": [
        {
          "id": "econ_ord_princ",
          "nivel_3": "Princípios Gerais e Formas de Atuação do Estado",
          "aliases": ["Livre Iniciativa", "Livre Concorrência", "Função Social da Empresa", "Estado Regulador", "Intervenção Direta e Indireta"]
        },
        {
          "id": "econ_ord_monopolios",
          "nivel_3": "Monopólios, Serviços Públicos e Atividade Econômica",
          "aliases": ["Monopólio da União", "Petróleo", "Exploração Direta de Atividade Econômica"]
        }
      ]
    },
    {
      "id": "econ_concorrencia",
      "nivel_2": "Defesa da Concorrência",
      "topicos": [
        {
          "id": "econ_conc_sbdc",
          "nivel_3": "Sistema Brasileiro de Defesa da Concorrência (SBDC e CADE)",
          "aliases": ["Tribunal do CADE", "Superintendência-Geral", "Departamento de Estudos Econômicos"]
        },
        {
          "id": "econ_conc_infracoes",
          "nivel_3": "Infrações da Ordem Econômica e Acordo de Leniência (Lei 12.529/11)",
          "aliases": ["Cartel", "Dumping", "Abuso de Posição Dominante", "Termo de Compromisso de Cessação (TCC)"]
        },
        {
          "id": "econ_conc_estruturas",
          "nivel_3": "Controle de Estruturas (Atos de Concentração)",
          "aliases": ["Fusão", "Aquisição", "Joint Venture", "Notificação Prévia"]
        }
      ]
    },
    {
      "id": "econ_sfn",
      "nivel_2": "Sistema Financeiro Nacional",
      "topicos": [
        {
          "id": "econ_sfn_cmn",
          "nivel_3": "Conselho Monetário Nacional (CMN) e Banco Central (Bacen)",
          "aliases": ["Política Monetária", "Política Cambial", "Independência do Banco Central"]
        },
        {
          "id": "econ_sfn_cvm",
          "nivel_3": "Comissão de Valores Mobiliários (CVM) e Instituições Financeiras",
          "aliases": ["Mercado de Capitais", "Crimes contra o Sistema Financeiro Nacional (Reflexos)", "Bancos"]
        }
      ]
    },
    {
      "id": "econ_fin_normas",
      "nivel_2": "Normas Gerais de Direito Financeiro",
      "topicos": [
        {
          "id": "econ_fin_atividade",
          "nivel_3": "Atividade Financeira do Estado e Constituição Financeira",
          "aliases": ["Competência Legislativa", "Princípios Orçamentários", "Leis Orçamentárias (PPA, LDO e LOA)"]
        },
        {
          "id": "econ_fin_receitas_despesas",
          "nivel_3": "Receitas Públicas, Despesas Públicas e Precatórios",
          "aliases": ["Receitas Originárias e Derivadas", "Preço Público vs. Taxa", "Regime Constitucional de Precatórios e RPV", "Dívida Ativa"]
        },
        {
          "id": "econ_fin_credito_divida",
          "nivel_3": "Crédito Público, Dívida Pública e Responsabilidade Fiscal",
          "aliases": ["Operações de Crédito", "Limites de Endividamento", "Garantias e Contragarantias", "Aspectos Jurídicos da LRF"]
        }
      ]
    }
  ]
},
{
"id": "ambiental",
"nivel_1": "Direito Ambiental e Urbanístico",
"divisoes": [
{
"id": "amb_teoria",
"nivel_2": "Teoria Geral e Constituição",
"topicos": [
{
"id": "amb_teo_princ",
"nivel_3": "Conceito de Meio Ambiente e Princípios (Precaução, Poluidor-Pagador)",
"aliases": ["Prevenção", "Desenvolvimento Sustentável", "Usuário-Pagador"]
},
{
"id": "amb_teo_const",
"nivel_3": "Competências Constitucionais e Cooperação Federativa (LC 140/11)",
"aliases": ["Art. 225 da CF", "Competência Concorrente", "Competência Comum", "Lei Complementar 140/11", "Atuação Supletiva e Subsidiária", "Transparência Ambiental (Ativa e Passiva)", "Princípio da Proibição do Retrocesso"]
}
]
},
{
"id": "amb_pnma",
"nivel_2": "Política Nacional do Meio Ambiente",
"topicos": [
{
"id": "amb_pnma_diretrizes",
"nivel_3": "Diretrizes, SISNAMA e Instrumentos (Zoneamento, Padrões)",
"aliases": ["CONAMA", "IBAMA", "Órgãos Seccionais e Locais", "Servidão Ambiental", "Zoneamento Ecológico-Econômico (ZEE)"]
},
{
"id": "amb_pnma_licenciamento",
"nivel_3": "Licenciamento Ambiental e Estudos de Impacto (EIA/RIMA)",
"aliases": ["Licença Prévia", "Licença de Instalação", "Licença de Operação", "Audiência Pública", "Resolução CONAMA nº 237/1997", "Renovação de Licença"]
}
]
},
{
"id": "amb_espacos",
"nivel_2": "Espaços Territorialmente Protegidos",
"topicos": [
{
"id": "amb_esp_snuc",
"nivel_3": "Sistema Nacional de Unidades de Conservação (SNUC - Lei 9.985/00)",
"aliases": ["Unidades de Proteção Integral", "Unidades de Uso Sustentável", "Compensação Ambiental", "Criação, Alteração e Desafetação de UCs", "Plano de Manejo"]
},
{
"id": "amb_esp_florestal",
"nivel_3": "Código Florestal (APP, Reserva Legal e CAR - Lei 12.651/12)",
"aliases": ["Área de Preservação Permanente", "Área Rural Consolidada", "Programa de Regularização Ambiental (PRA)", "Proibição do Uso de Fogo", "Cota de Reserva Ambiental (CRA)", "Documento de Origem Florestal (DOF)"]
},
{
"id": "amb_esp_biomas",
"nivel_3": "Lei da Mata Atlântica (Lei nº 11.428/06) e Proteção de Outros Biomas",
"aliases": []
}
]
},
{
"id": "amb_resp",
"nivel_2": "Responsabilidade Ambiental",
"topicos": [
{
"id": "amb_resp_civil",
"nivel_3": "Responsabilidade Civil Ambiental (Teoria do Risco Integral)",
"aliases": ["Obrigação Propter Rem", "Imprescritibilidade do Dano", "Reparação Integral", "Danos Ambientais Interinos e Residuais", "Dano Moral Coletivo Ambiental", "Teoria do Fato Consumado"]
},
{
"id": "amb_resp_adm",
"nivel_3": "Responsabilidade Administrativa e Infrações",
"aliases": ["Auto de Infração", "Multa Ambiental", "Poder de Polícia Ambiental", "Decreto nº 6.514/2008", "Prescrição Intercorrente"]
},
{
"id": "amb_resp_penal",
"nivel_3": "Responsabilidade Penal (Lei 9.605/98)",
"aliases": ["Crimes contra a Flora e Fauna", "Responsabilidade Penal da Pessoa Jurídica"]
}
]
},
{
"id": "amb_micro",
"nivel_2": "Microssistemas Ambientais",
"topicos": [
{
"id": "amb_mic_hidricos",
"nivel_3": "Recursos Hídricos (Lei nº 9.433/97) e Segurança de Barragens (Lei nº 12.334/10)",
"aliases": ["Outorga", "Cobrança pelo Uso da Água", "Comitê de Bacia Hidrográfica"]
},
{
"id": "amb_mic_saneamento",
"nivel_3": "Resíduos Sólidos (Lei nº 12.305/10), Saneamento e Agrotóxicos",
"aliases": ["Responsabilidade Compartilhada", "Acordo Setorial", "Logística Reversa", "Lei nº 14.785/2023"]
},
{
"id": "amb_mic_clima",
"nivel_3": "Mudanças Climáticas, Biodiversidade e Pagamento por Serviços Ambientais",
"aliases": ["Mercado de Carbono", "Conhecimento Tradicional Associado", "Política Nacional de Pagamento por Serviços Ambientais (PNPSA - Lei 14.119/21)", "Fundo do Clima", "Acesso ao Patrimônio Genético"]
}
]
},
{
"id": "urb_estatuto",
"nivel_2": "Política Urbana e Estatuto da Cidade (Lei 10.257/01)",
"topicos": [
{
"id": "urb_est_diretrizes",
"nivel_3": "Diretrizes Gerais e Plano Diretor",
"aliases": ["Função Social da Propriedade Urbana", "Gestão Democrática", "Obrigatoriedade do Plano Diretor"]
},
{
"id": "urb_est_indutores",
"nivel_3": "Instrumentos Indutores e Tributários",
"aliases": ["Parcelamento e Edificação Compulsórios", "IPTU Progressivo no Tempo", "Desapropriação com Pagamento em Títulos", "Outorga Onerosa do Direito de Construir", "Afetação das mais-valias"]
},
{
"id": "urb_est_controle",
"nivel_3": "Instrumentos de Intervenção e Controle",
"aliases": ["Estudo de Impacto de Vizinhança (EIV)", "Operações Urbanas Consorciadas", "Direito de Preempção", "Direito de Superfície", "Transferência do Direito de Construir"]
}
]
},
{
"id": "urb_parcelamento",
"nivel_2": "Parcelamento do Solo Urbano (Lei 6.766/79)",
"topicos": [
{
"id": "urb_parc_especies",
"nivel_3": "Espécies, Requisitos e Áreas Públicas",
"aliases": ["Loteamento", "Desmembramento", "Desdobro", "Áreas Verdes e Institucionais", "Faixa non aedificandi"]
},
{
"id": "urb_parc_registro",
"nivel_3": "Aprovação, Registro, Contratos e Sanções",
"aliases": ["Loteamento Clandestino ou Irregular", "Rescisão por Inadimplemento", "Responsabilidade do Loteador", "Crimes contra a Administração Pública"]
}
]
},
{
"id": "urb_reurb_moradia",
"nivel_2": "Regularização Fundiária e Direito à Moradia",
"topicos": [
{
"id": "urb_rm_reurb",
"nivel_3": "Regularização Fundiária Urbana - REURB (Lei 13.465/17)",
"aliases": ["Reurb-S (Interesse Social)", "Reurb-E (Interesse Específico)", "Legitimação Fundiária", "Legitimação de Posse", "Direito Real de Laje"]
},
{
"id": "urb_rm_instrumentos",
"nivel_3": "Instrumentos de Titulação e Moradia (Constituição e MP 2.220/01)",
"aliases": ["Usucapião Especial Urbana Individual", "Usucapião Especial Urbana Coletiva", "Concessão de Uso Especial para fins de moradia", "Concessão de Direito Real de Uso (CDRU)"]
}
]
},
{
"id": "urb_local_mobilidade",
"nivel_2": "Mobilidade Urbana e Microssistemas Locais",
"topicos": [
{
"id": "urb_loc_mobilidade",
"nivel_3": "Política Nacional de Mobilidade Urbana (Lei 12.587/12)",
"aliases": ["Transporte Público Coletivo", "Política Tarifária", "Acessibilidade"]
},
{
"id": "urb_loc_municipais",
"nivel_3": "Códigos Municipais, Posturas e Limitações Administrativas",
"aliases": ["Código de Obras", "Código de Posturas", "Zoneamento Urbano", "Zonas Especiais de Interesse Social (ZEIS)", "Recuos e Alinhamentos"]
}
]
}
]
},
{
"id": "agrario",
"nivel_1": "Direito Agrário",
"divisoes": [
{
"id": "agr_teoria",
"nivel_2": "Teoria Geral, Histórico e Conceitos Fundamentais",
"topicos": [
{
"id": "agr_teo_historico",
"nivel_3": "Histórico do Direito Agrário e Lei de Terras (Lei 601/1850)",
"aliases": ["Registro Paroquial", "Sesmarias", "Criminalização do Apossamento"]
},
{
"id": "agr_teo_conceitos",
"nivel_3": "Conceitos Básicos (Estatuto da Terra - Lei 4.504/64)",
"aliases": ["Imóvel Rural (Prédio Rústico)", "Módulo Rural", "Módulo Fiscal", "Fração Mínima de Parcelamento", "Georreferenciamento"]
}
]
},
{
"id": "agr_const",
"nivel_2": "Política Agrária e Aspectos Constitucionais",
"topicos": [
{
"id": "agr_const_funcao",
"nivel_3": "Função Social da Propriedade Rural",
"aliases": ["Aproveitamento Racional e Adequado", "Preservação do Meio Ambiente", "Observância das Normas Trabalhistas", "Bem-estar dos Proprietários e Trabalhadores"]
},
{
"id": "agr_const_desaprop",
"nivel_3": "Desapropriação para Fins de Reforma Agrária e Vistoria (LC 76/93 e Lei 8.629/93)",
"aliases": ["Pequena e Média Propriedade (Imunidade)", "Propriedade Produtiva", "Títulos da Dívida Agrária (TDA)", "Indenização de Benfeitorias", "Esbulho Possessório (Vedação de Vistoria)", "Rito Sumário"]
},
{
"id": "agr_const_politica",
"nivel_3": "Política Agrícola e Fundiária",
"aliases": ["Plano Nacional de Reforma Agrária", "Participação do Setor de Produção"]
}
]
},
{
"id": "agr_terras",
"nivel_2": "Terras Públicas e Povos Tradicionais",
"topicos": [
{
"id": "agr_terras_devolutas",
"nivel_3": "Terras Devolutas e Ação Discriminatória",
"aliases": ["Conceito de Terras Devolutas", "Procedimento Discriminatório Judicial (Natureza Declaratória)", "Legitimação de Posse", "Bens de Domínio da União e Estados"]
},
{
"id": "agr_terras_tradicionais",
"nivel_3": "Terras Indígenas e Comunidades Quilombolas",
"aliases": ["Ocupação Tradicional", "Usufruto Exclusivo", "Inalienabilidade e Indisponibilidade", "Remanescentes de Quilombos (Propriedade Definitiva)"]
}
]
},
{
"id": "agr_aquisicao",
"nivel_2": "Aquisição da Propriedade e Posse Agrária",
"topicos": [
{
"id": "agr_aq_usucapiao",
"nivel_3": "Usucapião Constitucional Rural (Especial/Pro Labore)",
"aliases": ["Limite de 50 Hectares", "Posse Agrária Originária", "Prazo de 5 Anos Ininterruptos", "Moradia e Trabalho Produtivo", "Lei 6.969/81"]
},
{
"id": "agr_aq_estrangeiro",
"nivel_3": "Aquisição e Arrendamento por Estrangeiros (Lei 5.709/71)",
"aliases": ["Limitação de Módulos", "Pessoa Jurídica Brasileira com Capital Estrangeiro", "Autorização do Congresso Nacional"]
}
]
},
{
"id": "agr_contratos",
"nivel_2": "Contratos Agrários (Decreto 59.566/66)",
"topicos": [
{
"id": "agr_cont_teoria",
"nivel_3": "Teoria Geral dos Contratos Agrários",
"aliases": ["Prazos Mínimos", "Proteção Social e Econômica", "Compáscuo", "Contrato de Integração Agrária"]
},
{
"id": "agr_cont_especies",
"nivel_3": "Arrendamento e Parceria Rural",
"aliases": ["Cota-Parte do Proprietário", "Subarrendamento", "Indenização por Benfeitorias (Úteis e Necessárias)", "Formas de Retribuição"]
}
]
}
]
},
{
"id": "inst",
"nivel_1": "Direito Institucional",
"divisoes": [
{
"id": "inst_dpe",
"nivel_2": "Defensoria Pública (LC 80/94)",
"topicos": [
{
"id": "inst_dpe_princ",
"nivel_3": "Histórico, Princípios Institucionais, Autonomia e Objetivos",
"aliases": ["Indivisibilidade", "Independência Funcional", "Assistência Jurídica Integral e Gratuita", "Custos Vulnerabilis", "EC 45/04 e EC 80/14", "Capacidade Postulatória e Poder de Requisição"]
},
{
"id": "inst_dpe_modelos",
"nivel_3": "Modelos de Assistência Jurídica e Evolução do Acesso à Justiça",
"aliases": ["Ondas Renovatórias (Cappelletti e Garth)", "Modelo Judicare", "Salaried Staff", "Advocacia Pro Bono"]
},
{
"id": "inst_dpe_org",
"nivel_3": "Organização: Órgãos de Administração Superior e Execução",
"aliases": ["Conselho Superior", "Defensor Público-Geral", "Corregedoria-Geral", "Ouvidoria"]
},
{
"id": "inst_dpe_carreira",
"nivel_3": "Ingresso, Carreira, Promoção e Remoção",
"aliases": ["Estágio Probatório", "Critérios de Promoção"]
},
{
"id": "inst_dpe_garantias",
"nivel_3": "Garantias, Prerrogativas, Direitos e Vedações do Defensor",
"aliases": ["Intimação Pessoal", "Prazo em Dobro", "Inamovibilidade", "Poder de Requisição"]
},
{
"id": "inst_dpe_estadual",
"nivel_3": "Legislação Estadual, Normas Internas e Resoluções do CSDPE",
"aliases": ["Critérios de Hipossuficiência", "Denegação de Atendimento", "Leis Orgânicas Estaduais", "Participação Popular (Ouvidoria Externa)", "Fundo de Aparelhamento (FAJ)"]
},
{
"id": "inst_dpe_funcoes",
"nivel_3": "Funções Institucionais e Legitimidade de Atuação (Jurisprudência)",
"aliases": ["Ação Civil Pública pela DPE", "Curadoria Especial", "Atuação a favor de Pessoa Jurídica", "Tutela Coletiva", "Conflito de Atribuições"]
},
{
"id": "inst_dpe_auxiliares",
"nivel_3": "Órgãos Auxiliares, Fundos e Escolas da Defensoria",
"aliases": ["Fundo de Assistência/Aparelhamento (FAJ/FUNDEP)", "Escola Superior da Defensoria Pública", "Centros de Atendimento Multidisciplinar", "Participação Popular"]
}
]
},
{
"id": "inst_mp",
"nivel_2": "Ministério Público (Lei 8.625/93 e LC 75/93)",
"topicos": [
{
"id": "inst_mp_princ",
"nivel_3": "Princípios Institucionais, Autonomia e CNMP",
"aliases": ["Unidade", "Conselho Nacional do Ministério Público"]
},
{
"id": "inst_mp_org",
"nivel_3": "Organização (MPE) e Órgãos de Administração Superior e Colégios",
"aliases": ["Procurador-Geral de Justiça", "Colégio de Procuradores", "Conselho Superior do MP", "Corregedoria-Geral", "Eleição e Destituição do PGJ"]
},
{
"id": "inst_mp_garantias",
"nivel_3": "Garantias, Prerrogativas, Vedações e Processo Disciplinar",
"aliases": ["Vitaliciedade", "Irredutibilidade de Subsídio", "Atividade Político-Partidária"]
},
{
"id": "inst_mp_cnmp",
"nivel_3": "Resoluções do CNMP e Procedimentos Extrajudiciais",
"aliases": ["Procedimento Investigatório Criminal (PIC)", "Inquérito Civil", "Notícia de Fato", "Procedimento Administrativo"]
},
{
"id": "inst_mp_estadual",
"nivel_3": "Legislação Estadual do Ministério Público",
"aliases": ["Leis Orgânicas Estaduais (LOMPE)", "Regimentos Internos", "Eleição do Procurador-Geral de Justiça nos Estados"]
},
{
"id": "inst_mp_mpu_eleitoral",
"nivel_3": "Ministério Público da União (LC 75/93) e MP Eleitoral",
"aliases": ["Estrutura do MPU", "Procurador-Geral da República (PGR)", "Promotor e Procurador Eleitoral"]
}
]
},
{
"id": "inst_magis",
"nivel_2": "Magistratura e Organização Judiciária",
"topicos": [
{
"id": "inst_mag_princ",
"nivel_3": "Princípios, Autonomia e Conselho Nacional de Justiça (CNJ)",
"aliases": ["Garantias da Magistratura", "Independência Judicial", "Atribuições do CNJ"]
},
{
"id": "inst_mag_carreira",
"nivel_3": "Ingresso, Promoção, Remoção e Vitaliciedade",
"aliases": ["Quinto Constitucional", "Escalonamento na Carreira"]
},
{
"id": "inst_mag_garantias",
"nivel_3": "Direitos, Deveres, Prerrogativas e Processo Disciplinar",
"aliases": ["Aposentadoria Compulsória", "Sanções Disciplinares", "Vedações aos Magistrados"]
},
{
"id": "inst_mag_coje",
"nivel_3": "Códigos de Organização e Divisão Judiciárias Estaduais (COJE)",
"aliases": ["Comarcas e Entrâncias (Criação e Classificação)", "Varas Especializadas", "Órgão Especial", "Tribunal Pleno"]
},
{
"id": "inst_mag_serventuarios",
"nivel_3": "Serventuários, Auxiliares da Justiça e Justiça de Paz",
"aliases": ["Juiz de Paz", "Escrivães", "Oficiais de Justiça", "Regimes de Lotação e Permuta de Serventuários"]
},
{
"id": "inst_mag_jec",
"nivel_3": "Sistema dos Juizados Especiais e Turmas Recursais",
"aliases": ["Turma de Uniformização", "Conflitos de Competência nos Juizados"]
},
{
"id": "inst_mag_orgaos_cupula",
"nivel_3": "Órgãos Diretivos e de Cúpula dos Tribunais",
"aliases": ["Presidente e Vice-Presidente do TJ", "Corregedoria-Geral da Justiça", "Conselho da Magistratura"]
},
{
"id": "inst_mag_fundos_regimento",
"nivel_3": "Regimento Interno, Fundos Especiais e Custas",
"aliases": ["FUNJURIS / Fundos de Reaparelhamento", "Regimento Interno", "Sessões do Tribunal Pleno e Turmas", "Súmulas Locais do TJ"]
}
]
}
]
},
{
"id": "dh",
"nivel_1": "Direitos Humanos",
"divisoes": [
{
"id": "dh_teoria",
"nivel_2": "Teoria Geral e Fundamentos",
"topicos": [
{
"id": "dh_teo_fund",
"nivel_3": "Histórico, Fundamentos e Características (Universalidade, Indivisibilidade)",
"aliases": ["Gerações/Dimensões de Direitos", "Relativismo Cultural", "Efetividade", "Interseccionalidade", "Teoria Crítica e Decolonialidade"]
},
{
"id": "dh_teo_incorp",
"nivel_3": "Incorporação de Tratados, Status Normativo e IDC",
"aliases": ["Supralegalidade", "Bloco de Constitucionalidade", "Incidente de Deslocamento de Competência"]
},
{
"id": "dh_teo_convenc",
"nivel_3": "Controle de Convencionalidade e Diálogo das Cortes",
"aliases": ["Pro Persona", "Margem de Apreciação Nacional"]
}
]
},
{
"id": "dh_onu",
"nivel_2": "Sistema Global (ONU)",
"topicos": [
{
"id": "dh_onu_dudh",
"nivel_3": "Declaração Universal dos Direitos Humanos (DUDH)",
"aliases": ["Carta Internacional dos Direitos Humanos"]
},
{
"id": "dh_onu_pactos",
"nivel_3": "Pactos Internacionais (PIDCP e PIDESC) e Comitês",
"aliases": ["Protocolos Facultativos", "Comitê de Direitos Humanos"]
},
{
"id": "dh_onu_extrac",
"nivel_3": "Mecanismos Extraconvencionais (Conselho de DH e RPU)",
"aliases": ["Revisão Periódica Universal", "Relatores Especiais"]
},
{
"id": "dh_onu_tpi",
"nivel_3": "Direito Internacional Penal e Tribunal Penal Internacional (TPI)",
"aliases": ["Estatuto de Roma", "Tribunal de Nuremberg", "Crimes contra a Humanidade"]
},
{
"id": "dh_onu_agenda2030",
"nivel_3": "Agenda 2030 para o Desenvolvimento Sustentável (ONU)",
"aliases": ["Objetivos de Desenvolvimento Sustentável (ODS)", "ESG"]
}
]
},
{
"id": "dh_regionais",
"nivel_2": "Sistemas Regionais de Proteção",
"topicos": [
{
"id": "dh_oea_carta",
"nivel_3": "OEA, Carta de Bogotá e Declaração Americana",
"aliases": ["DADDH"]
},
{
"id": "dh_oea_pacto",
"nivel_3": "Pacto de San José da Costa Rica (CADH) e Protocolos",
"aliases": ["Protocolo de San Salvador", "Abolição da Pena de Morte"]
},
{
"id": "dh_oea_cidh",
"nivel_3": "Comissão Interamericana (CIDH): Organização e Competência",
"aliases": ["Petições Individuais", "Esgotamento dos Recursos Internos"]
},
{
"id": "dh_oea_corte",
"nivel_3": "Corte IDH: Competência Contenciosa, Consultiva e Medidas Provisórias",
"aliases": ["Sentenças da Corte", "Reparações"]
},
{
"id": "dh_oea_juris",
"nivel_3": "Jurisprudência da Corte IDH (Casos contra o Brasil e Standards)",
"aliases": ["Caso Gomes Lund", "Caso Fazenda Brasil Verde", "Caso Ximenes Lopes", "Caso Herzog"]
},
{
"id": "dh_reg_outros",
"nivel_3": "Sistemas Europeu e Africano de Direitos Humanos",
"aliases": ["Carta Africana (Pacto de Banjul)", "Tribunal Europeu"]
}
]
},
{
"id": "dh_tratados",
"nivel_2": "Tratados e Proteção de Grupos",
"topicos": [
{
"id": "dh_trat_tortura",
"nivel_3": "Combate à Tortura, Penas Cruéis e Desaparecimento Forçado",
"aliases": ["Protocolo de Istambul", "Prevenção à Tortura"]
},
{
"id": "dh_trat_mulher",
"nivel_3": "Proteção da Mulher (CEDAW e Convenção de Belém do Pará)",
"aliases": ["Violência de Gênero", "Discriminação Contra a Mulher"]
},
{
"id": "dh_trat_racismo",
"nivel_3": "Combate à Discriminação Racial e Direitos dos Povos Indígenas (OIT 169)",
"aliases": ["Convenção Internacional sobre a Eliminação de Todas as Formas de Discriminação Racial", "Consulta Prévia"]
},
{
"id": "dh_trat_grupos",
"nivel_3": "Direitos das Pessoas com Deficiência (CDPD), Idosos e Crianças",
"aliases": ["Convenção de Nova York", "Convenção sobre os Direitos da Criança", "Convenção Interamericana sobre os Direitos das Pessoas Idosas", "População LGBTQIA+", "Jurisprudência Estrutural (ADPF das Favelas e do Sistema Prisional)"]
}
]
},
{
"id": "dh_dih",
"nivel_2": "Direito Humanitário e Refugiados",
"topicos": [
{
"id": "dh_dih_genebra",
"nivel_3": "Direito Internacional Humanitário (DIH - Convenções de Genebra)",
"aliases": ["Conflitos Armados", "Cruz Vermelha", "Direito de Haia", "Regras de Mandela"]
},
{
"id": "dh_dih_refugiados",
"nivel_3": "Direito Internacional dos Refugiados e Migrantes",
"aliases": ["Estatuto dos Refugiados", "Princípio do Non-Refoulement", "Lei de Migração"]
}
]
},
{
"id": "dh_microssistemas",
"nivel_2": "Microssistemas Internos de Proteção a Grupos Vulneráveis",
"topicos": [
{
"id": "dh_mic_idoso",
"nivel_3": "Estatuto da Pessoa Idosa e Política Nacional (Lei nº 10.741/03 e Lei nº 8.842/94)",
"aliases": ["Prioridade Especial", "Medidas de Proteção"]
},
{
"id": "dh_mic_pcd",
"nivel_3": "Estatuto da Pessoa com Deficiência - LBI (Lei nº 13.146/15)",
"aliases": ["Tomada de Decisão Apoiada", "Desenho Universal"]
},
{
"id": "dh_mic_saude",
"nivel_3": "Saúde Mental e Transtorno Mental (Lei nº 10.216/01)",
"aliases": ["Internação Involuntária", "Luta Antimanicomial"]
},
{
"id": "dh_mic_raca",
"nivel_3": "Igualdade Racial, Indígenas e Quilombolas (Leis nº 12.288/10 e 6.001/73)",
"aliases": ["Racismo Estrutural", "Ações Afirmativas", "Demarcação de Terras"]
}
]
},
{
"id": "dh_politicas",
"nivel_2": "Sistema Nacional e Políticas de Direitos Humanos",
"topicos": [
{
"id": "dh_pol_transicao",
"nivel_3": "Justiça de Transição, Direito à Memória e à Verdade",
"aliases": ["Comissão Nacional da Verdade (Lei nº 12.528/11)", "Lei de Anistia"]
},
{
"id": "dh_pol_nacional",
"nivel_3": "Sistema Nacional de Direitos Humanos",
"aliases": ["PNDH-3", "Conselho Nacional dos Direitos Humanos (CNDH)"]
}
]
}
]
},
{
  "id": "dip_dipr",
  "nivel_1": "Direito Internacional Público e Privado",
  "divisoes": [
    {
      "id": "dip_teoria_fontes",
      "nivel_2": "Teoria Geral, Fontes e Relação com Direito Interno",
      "topicos": [
        {
          "id": "dip_teo_relacao",
          "nivel_3": "Relação entre Direito Internacional e Interno (Monismo e Dualismo)",
          "aliases": ["Incorporação dos Tratados", "Bloco de Constitucionalidade", "Status dos Tratados de Direitos Humanos", "Conflito Hierárquico"]
        },
        {
          "id": "dip_teo_tratados",
          "nivel_3": "Direito dos Tratados (Convenção de Viena de 1969)",
          "aliases": ["Formação e Assinatura", "Reservas", "Denúncia", "Aprovação pelo Congresso Nacional"]
        }
      ]
    },
    {
      "id": "dip_sujeitos_relacoes",
      "nivel_2": "Sujeitos de DIP, Relações Diplomáticas e Imunidades",
      "topicos": [
        {
          "id": "dip_suj_teoria",
          "nivel_3": "Personalidade Jurídica: Estado, Santa Sé, Organizações e Indivíduos",
          "aliases": ["Reconhecimento de Estado e de Governo"]
        },
        {
          "id": "dip_suj_diplomacia",
          "nivel_3": "Relações Diplomáticas e Consulares",
          "aliases": ["Convenções de Viena sobre Relações Diplomáticas e Consulares", "Mala Diplomática", "Privilégios e Inviolabilidade"]
        },
        {
          "id": "dip_suj_imunidade",
          "nivel_3": "Imunidade de Jurisdição e Execução",
          "aliases": ["Atos de Império e de Gestão", "Imunidade do Estado Estrangeiro", "Imunidade de Organizações Internacionais", "Jurisprudência do STF e TST"]
        }
      ]
    },
    {
      "id": "dip_espacos",
      "nivel_2": "Domínio Público Internacional",
      "topicos": [
        {
          "id": "dip_esp_mar",
          "nivel_3": "Direito do Mar (CNUDM) e Espaço Aéreo/Sideral",
          "aliases": ["Mar Territorial", "Zona Econômica Exclusiva", "Plataforma Continental", "Passagem Inocente"]
        }
      ]
    },
    {
      "id": "dip_organizacoes",
      "nivel_2": "Organizações Internacionais",
      "topicos": [
        {
          "id": "dip_org_onu",
          "nivel_3": "Sistema ONU (Organização das Nações Unidas)",
          "aliases": ["Conselho de Segurança", "Assembleia Geral", "Conselho de Direitos Humanos", "Carta da ONU"]
        },
        {
          "id": "dip_org_oit",
          "nivel_3": "Organização Internacional do Trabalho (OIT)",
          "aliases": ["Convenções e Recomendações da OIT", "Tripartismo", "Comitê de Liberdade Sindical", "Trabalho no Exterior"]
        }
      ]
    },
    {
      "id": "dip_dh_dih_penal",
      "nivel_2": "Direitos Humanos, Direito Humanitário e Penal Internacional",
      "topicos": [
        {
          "id": "dip_penal_tpi",
          "nivel_3": "Tribunal Penal Internacional (Estatuto de Roma)",
          "aliases": ["Crimes contra a Humanidade", "Genocídio", "Crime de Agressão", "Crimes de Guerra", "Princípio da Complementaridade"]
        },
        {
          "id": "dip_dih",
          "nivel_3": "Direito Internacional Humanitário e dos Conflitos Armados",
          "aliases": ["Convenções de Genebra", "Cláusula de Martens", "Perfídia e Limites na Guerra", "Cruz Vermelha"]
        }
      ]
    },
    {
      "id": "dip_privado",
      "nivel_2": "Direito Internacional Privado (DIPr) e Cooperação",
      "topicos": [
        {
          "id": "dip_dipr_conflitos",
          "nivel_3": "Conflito de Leis no Espaço e LINDB",
          "aliases": ["Elementos de Conexão", "Domicílio", "Contratos Internacionais", "Lex Loci Executionis", "Casamento e Família no Exterior"]
        },
        {
          "id": "dip_dipr_coop",
          "nivel_3": "Cooperação Jurídica Internacional",
          "aliases": ["Homologação de Sentença Estrangeira", "Carta Rogatória", "Auxílio Direto"]
        }
      ]
    },
    {
      "id": "dip_condicao_estrangeiro",
      "nivel_2": "Nacionalidade e Condição Jurídica do Estrangeiro",
      "topicos": [
        {
          "id": "dip_est_nacionalidade",
          "nivel_3": "Nacionalidade Brasileira e Dupla Cidadania",
          "aliases": ["Brasileiro Nato", "Naturalização", "Perda e Reaquisição de Nacionalidade"]
        },
        {
          "id": "dip_est_migracao",
          "nivel_3": "Migração, Refúgio e Retirada Compulsória",
          "aliases": ["Lei de Migração (Lei nº 13.445/2017)", "Estatuto dos Refugiados", "Vistos", "Asilo Político", "Extradição, Expulsão, Deportação e Repatriação"]
        }
      ]
    },
    {
      "id": "dip_comercio_integracao",
      "nivel_2": "Direito da Integração e do Comércio Internacional",
      "topicos": [
        {
          "id": "dip_com_integracao",
          "nivel_3": "Direito Comunitário e da Integração",
          "aliases": ["Mercosul", "União Europeia", "Tribunal Permanente de Revisão", "Livre Circulação de Pessoas", "Supranacionalidade"]
        },
        {
          "id": "dip_com_omc",
          "nivel_3": "Direito do Comércio Internacional (OMC)",
          "aliases": ["Organização Mundial do Comércio", "Cláusula Social", "Dumping Social", "Solução de Controvérsias"]
        }
      ]
    }
  ]
},
{
"id": "prev",
"nivel_1": "Direito Previdenciário",
"divisoes": [
{
"id": "prev_teoria",
"nivel_2": "Teoria Geral da Seguridade Social",
"topicos": [
{
"id": "prev_teo_princ",
"nivel_3": "Evolução, Princípios e Organização (Saúde, Assistência e Previdência)",
"aliases": ["Universalidade", "Solidariedade", "Preexistência do Custeio", "LOAS"]
}
]
},
{
"id": "prev_custeio",
"nivel_2": "Custeio da Seguridade (Lei 8.212/91)",
"topicos": [
{
"id": "prev_cust_contrib",
"nivel_3": "Contribuições Sociais, Salário de Contribuição e Arrecadação",
"aliases": ["Contribuição do Empregador", "Contribuição do Segurado", "Cota Patronal"]
},
{
"id": "prev_cust_crimes",
"nivel_3": "Decadência, Prescrição e Crimes Previdenciários (Reflexos)",
"aliases": ["Apropriação Indébita Previdenciária", "Sonegação de Contribuição Previdenciária"]
}
]
},
{
"id": "prev_beneficiarios",
"nivel_2": "RGPS: Beneficiários (Lei 8.213/91)",
"topicos": [
{
"id": "prev_ben_segurados",
"nivel_3": "Segurados Obrigatórios e Facultativos",
"aliases": ["Empregado", "Contribuinte Individual", "Segurado Especial", "Trabalhador Avulso"]
},
{
"id": "prev_ben_dependentes",
"nivel_3": "Dependentes",
"aliases": ["Classes de Dependentes", "Comprovação de Dependência Econômica"]
}
]
},
{
"id": "prev_beneficios",
"nivel_2": "RGPS: Benefícios (Lei 8.213/91)",
"topicos": [
{
"id": "prev_bene_carencia",
"nivel_3": "Carência, Manutenção e Perda da Qualidade de Segurado",
"aliases": ["Período de Graça", "Isenção de Carência"]
},
{
"id": "prev_bene_apos",
"nivel_3": "Aposentadorias (Idade, Tempo de Contribuição e Especial)",
"aliases": ["Fator Previdenciário", "Regras de Transição (EC 103/19)", "Perfil Profissiográfico Previdenciário (PPP)"]
},
{
"id": "prev_bene_incap",
"nivel_3": "Benefícios por Incapacidade (Auxílio-Doença e Apos. por Invalidez)",
"aliases": ["Auxílio por Incapacidade Temporária", "Aposentadoria por Incapacidade Permanente", "Reabilitação Profissional"]
},
{
"id": "prev_bene_morte",
"nivel_3": "Pensão por Morte, Auxílio-Reclusão e Salário-Maternidade",
"aliases": ["Cotas da Pensão por Morte", "Baixa Renda (Auxílio-Reclusão)"]
}
]
},
{
"id": "prev_regras",
"nivel_2": "RGPS: Regras Especiais",
"topicos": [
{
"id": "prev_reg_acidente",
"nivel_3": "Acidente de Trabalho (Nexo Técnico e Benefícios Específicos)",
"aliases": ["Auxílio-Acidente", "Doença Ocupacional", "Nexo Técnico Epidemiológico Previdenciário (NTEP)"]
}
]
},
{
"id": "prev_regimes",
"nivel_2": "Regimes Próprios e Complementares",
"topicos": [
{
"id": "prev_reg_rpps",
"nivel_3": "Regime Próprio de Previdência Social (RPPS - Servidores)",
"aliases": ["Aposentadoria Compulsória", "Paridade e Integralidade", "Contagem Recíproca"]
},
{
"id": "prev_reg_comp",
"nivel_3": "Previdência Complementar (Pública e Privada)",
"aliases": ["Previdência Fechada (Fundos de Pensão)", "Previdência Aberta", "Funpresp"]
}
]
}
]
},
{
"id": "trab",
"nivel_1": "Direito do Trabalho",
"divisoes": [
{
"id": "trab_teoria",
"nivel_2": "Teoria Geral e Fontes",
"topicos": [
{
"id": "trab_teo_princ",
"nivel_3": "Princípios e Fontes do Direito do Trabalho",
"aliases": ["Proteção", "In dubio pro misero", "Primazia da Realidade", "Hierarquia das Fontes Trabalhistas"]
}
]
},
{
"id": "trab_relacoes",
"nivel_2": "Relações de Trabalho e Emprego",
"topicos": [
{
"id": "trab_rel_vinculo",
"nivel_3": "Vínculo Empregatício (Requisitos) e Sujeitos",
"aliases": ["Subordinação", "Pessoalidade", "Não Eventualidade", "Onerosidade", "Empregador", "Grupo Econômico"]
},
{
"id": "trab_rel_terc",
"nivel_3": "Terceirização, Teletrabalho e Trabalho Intermitente",
"aliases": ["Súmula 331 do TST", "Atividade-Fim", "Home Office"]
},
{
"id": "trab_rel_avulso",
"nivel_3": "Trabalho Temporário, Avulso e Doméstico",
"aliases": ["Lei Complementar 150/15", "OGMO"]
}
]
},
{
"id": "trab_contrato",
"nivel_2": "Contrato Individual de Trabalho",
"topicos": [
{
"id": "trab_cont_form",
"nivel_3": "Formação, Elementos e Alteração Contratual",
"aliases": ["Jus Variandi", "Contrato por Prazo Determinado", "Contrato de Experiência"]
},
{
"id": "trab_cont_susp",
"nivel_3": "Suspensão e Interrupção do Contrato",
"aliases": ["Afastamento", "Licença-Maternidade", "Serviço Militar"]
}
]
},
{
"id": "trab_jornada",
"nivel_2": "Jornada e Descansos",
"topicos": [
{
"id": "trab_jor_duracao",
"nivel_3": "Duração do Trabalho, Horas Extras e Trabalho Noturno",
"aliases": ["Adicional Noturno", "Turnos Ininterruptos de Revezamento", "Sobreaviso", "Prontidão", "Banco de Horas"]
},
{
"id": "trab_jor_rsr",
"nivel_3": "Repouso Semanal Remunerado (RSR) e Férias",
"aliases": ["Férias Proporcionais", "Abono Pecuniário", "Férias Coletivas", "Feriados"]
}
]
},
{
"id": "trab_remun",
"nivel_2": "Remuneração e Salário",
"topicos": [
{
"id": "trab_rem_parcelas",
"nivel_3": "Parcelas Salariais, Indenizatórias e Equiparação Salarial",
"aliases": ["Comissões", "Gorjetas", "Diárias para Viagem", "Ajuda de Custo", "Salário In Natura"]
}
]
},
{
"id": "trab_seguranca",
"nivel_2": "Segurança e Medicina do Trabalho",
"topicos": [
{
"id": "trab_seg_adic",
"nivel_3": "Adicionais de Insalubridade e Periculosidade",
"aliases": ["Equipamento de Proteção Individual (EPI)", "CIPA"]
}
]
},
{
"id": "trab_extincao",
"nivel_2": "Extinção do Contrato",
"topicos": [
{
"id": "trab_ext_modalidades",
"nivel_3": "Modalidades de Rescisão (Justa Causa, Indireta, Acordo)",
"aliases": ["Falta Grave", "Rescisão por Culpa Recíproca", "Factum Principis"]
},
{
"id": "trab_ext_verbas",
"nivel_3": "Verbas Rescisórias e Aviso Prévio",
"aliases": ["Multa do Art. 477 da CLT", "Saque do FGTS", "Aviso Prévio Proporcional"]
},
{
"id": "trab_ext_estab",
"nivel_3": "Estabilidade e Garantia Provisória de Emprego",
"aliases": ["Gestante", "Dirigente Sindical", "Acidentado", "Membro da CIPA"]
}
]
},
{
"id": "trab_coletivo",
"nivel_2": "Direito Coletivo do Trabalho",
"topicos": [
{
"id": "trab_col_sind",
"nivel_3": "Organização e Liberdade Sindical",
"aliases": ["Unicidade Sindical", "Contribuição Sindical", "Sindicato"]
},
{
"id": "trab_col_neg",
"nivel_3": "Negociação Coletiva (Acordo e Convenção Coletiva)",
"aliases": ["Prevalência do Negociado sobre o Legislado", "Ultratividade"]
},
{
"id": "trab_col_greve",
"nivel_3": "Direito de Greve (Lei 7.783/89)",
"aliases": ["Atividades Essenciais", "Abuso do Direito de Greve", "Lockout"]
}
]
}
]
},
{
"id": "proc_trab",
"nivel_1": "Direito Processual do Trabalho",
"divisoes": [
{
"id": "pt_justica",
"nivel_2": "Justiça do Trabalho",
"topicos": [
{
"id": "pt_jus_comp",
"nivel_3": "Organização e Competência (Art. 114 da CF/88)",
"aliases": ["Competência Material", "Competência Territorial", "Varas do Trabalho", "TRT", "TST"]
}
]
},
{
"id": "pt_atos",
"nivel_2": "Atos, Prazos e Nulidades",
"topicos": [
{
"id": "pt_atos_prazos",
"nivel_3": "Atos, Prazos, Custas e Gratuidade da Justiça",
"aliases": ["Preclusão Trabalhista", "Despesas Processuais", "Honorários Periciais"]
}
]
},
{
"id": "pt_partes",
"nivel_2": "Partes e Procuradores",
"topicos": [
{
"id": "pt_partes_jus",
"nivel_3": "Jus Postulandi, Representação e Litisconsórcio",
"aliases": ["Preposto", "Súmula 425 do TST", "Honorários Advocatícios de Sucumbência"]
}
]
},
{
"id": "pt_procedimentos",
"nivel_2": "Procedimentos em Espécie",
"topicos": [
{
"id": "pt_proc_ritos",
"nivel_3": "Rito Ordinário, Sumário e Sumaríssimo",
"aliases": ["Alçada", "Requisitos da Petição Inicial", "Arquivamento"]
}
]
},
{
"id": "pt_audiencia",
"nivel_2": "Audiência e Resposta do Réu",
"topicos": [
{
"id": "pt_aud_revelia",
"nivel_3": "Audiência Trabalhista, Revelia e Contestação/Exceções",
"aliases": ["Exceção de Incompetência", "Reconvenção Trabalhista", "Confissão Ficta", "Conciliação Trabalhista"]
}
]
},
{
"id": "pt_provas",
"nivel_2": "Provas",
"topicos": [
{
"id": "pt_prov_onus",
"nivel_3": "Ônus da Prova, Testemunhas e Perícia",
"aliases": ["Inversão do Ônus da Prova", "Depoimento Pessoal", "Falsidade Documental"]
}
]
},
{
"id": "pt_recursos",
"nivel_2": "Recursos Trabalhistas",
"topicos": [
{
"id": "pt_rec_teoria",
"nivel_3": "Teoria Geral, Pressupostos e Preparo (Depósito Recursal)",
"aliases": ["Juízo de Admissibilidade", "Efeito Suspensivo", "Súmula 126 do TST", "Transcendência"]
},
{
"id": "pt_rec_especie1",
"nivel_3": "Recurso Ordinário, Recurso de Revista e Embargos no TST",
"aliases": ["Divergência Jurisprudencial", "SDI-1"]
},
{
"id": "pt_rec_especie2",
"nivel_3": "Agravos (Petição, Instrumento) e Recurso Adesivo",
"aliases": ["Agravo de Instrumento Trabalhista", "Agravo Interno Trabalhista", "Embargos de Declaração Trabalhistas"]
}
]
},
{
"id": "pt_execucao",
"nivel_2": "Execução Trabalhista",
"topicos": [
{
"id": "pt_exec_liq",
"nivel_3": "Liquidação de Sentença e Mandado de Citação",
"aliases": ["Artigo, Arbitramento, Cálculos", "Bens Penhoráveis e Impenhoráveis"]
},
{
"id": "pt_exec_penhora",
"nivel_3": "Penhora, Expropriação e Embargos à Execução",
"aliases": ["Embargos de Terceiro Trabalhista", "Impugnação à Sentença de Liquidação"]
}
]
},
{
"id": "pt_acoes",
"nivel_2": "Ações Especiais",
"topicos": [
{
"id": "pt_acoes_inq",
"nivel_3": "Inquérito para Apuração de Falta Grave e Ação Rescisória",
"aliases": ["Dissídio Coletivo", "Mandado de Segurança na Justiça do Trabalho"]
}
]
}
]
},
{
"id": "med_legal",
"nivel_1": "Medicina Legal",
"divisoes": [
{
"id": "med_leg_intro",
"nivel_2": "Introdução, Perícias e Documentos Médico-Legais",
"topicos": [
{
"id": "med_leg_intro_pericia",
"nivel_3": "Perícias, Peritos e Corpo de Delito",
"aliases": ["Cadeia de Custódia", "Exame de Corpo de Delito Direto e Indireto", "Preservação de Local de Crime"]
},
{
"id": "med_leg_intro_docs",
"nivel_3": "Documentos Médico-Legais",
"aliases": ["Laudo Pericial", "Auto", "Parecer", "Atestado Médico", "Prontuário", "Relatório Médico-Legal"]
}
]
},
{
"id": "med_leg_antropologia",
"nivel_2": "Antropologia Forense (Identidade e Identificação)",
"topicos": [
{
"id": "med_leg_antrop_identidade",
"nivel_3": "Identificação Médico-Legal e Policial (Judiciária)",
"aliases": ["Datiloscopia / Papiloscopia", "Sistema de Vucetich (Arco, Presilha, Verticilo)", "Bertillonage (Antropometria)", "Identidade Física, Funcional e Psíquica"]
},
{
"id": "med_leg_antrop_dna",
"nivel_3": "Odontologia Legal, DNA Forense e Estimativas",
"aliases": ["Identificação por DNA", "Arco Dentário", "Estimativa de Idade, Sexo e Estatura", "Estudo de Ossadas"]
}
]
},
{
"id": "med_leg_traumatologia",
"nivel_2": "Traumatologia Forense (Lesões e Energias)",
"topicos": [
{
"id": "med_leg_trauma_mecanica",
"nivel_3": "Energias de Ordem Mecânica (Armas Brancas)",
"aliases": ["Instrumentos Perfurocortantes e Cortocontundentes", "Escoriações e Equimoses", "Espectro Equimótico de Legrand du Saulle", "Lesões de Defesa"]
},
{
"id": "med_leg_trauma_balistica",
"nivel_3": "Energias de Ordem Mecânica (Balística Forense)",
"aliases": ["Armas de Fogo", "Orla de Enxugo e Orla de Contusão", "Zona de Tatuagem e Esfumaçamento", "Sinal de Benassi e Câmara de Mina de Hoffmann", "Tiro a Queima-Roupa e Encostado"]
},
{
"id": "med_leg_trauma_fisica",
"nivel_3": "Energias Físicas, Químicas e Biodinâmicas",
"aliases": ["Queimaduras (Classificação de Hoffmann/Lussana)", "Eletricidade Artificial (Eletroplessão e Marca de Jellinek)", "Eletricidade Natural (Fulminação e Sinal de Lichtenberg)", "Vitriolagem (Cáusticos)", "Geladura"]
},
{
"id": "med_leg_trauma_asfixias",
"nivel_3": "Energias Físico-Químicas (Asfixiologia Forense)",
"aliases": ["Enforcamento e Estrangulamento", "Esganadura", "Afogamento (Cogumelo de Espuma)", "Sufocação Direta e Indireta", "Manchas de Tardieu", "Máscara Equimótica de Morestin"]
}
]
},
{
"id": "med_leg_tanatologia",
"nivel_2": "Tanatologia Forense",
"topicos": [
{
"id": "med_leg_tanat_fenomenos",
"nivel_3": "Diagnóstico da Morte e Fenômenos Cadavéricos",
"aliases": ["Morte Encefálica", "Sinais Abióticos (Algor, Livor, Rigor Mortis)", "Maceração e Saponificação (Adipocera)", "Mumificação e Corificação", "Putrefação (Fases)"]
},
{
"id": "med_leg_tanat_crono",
"nivel_3": "Cronotanatognose, Necropsia e Exumação",
"aliases": ["Estimativa do Tempo de Morte", "Fauna Cadavérica", "Técnicas de Autópsia"]
}
]
},
{
"id": "med_leg_sexologia",
"nivel_2": "Sexologia e Obstetrícia Forense",
"topicos": [
{
"id": "med_leg_sexo_crimes",
"nivel_3": "Crimes Sexuais, Conjunção Carnal e Transtornos",
"aliases": ["Estupro e Estupro de Vulnerável", "Himenologia (Ruptura Himenal)", "Aberrações Sexuais (Parafilias)"]
},
{
"id": "med_leg_sexo_obstetricia",
"nivel_3": "Gravidez, Parto, Aborto e Infanticídio",
"aliases": ["Estado Puerperal", "Docimásia Hidrostática de Galeno", "Sinais de Gravidez e Parto Recente", "Diagnóstico de Aborto Provocado"]
}
]
},
{
"id": "med_leg_toxicologia",
"nivel_2": "Toxicologia Forense",
"topicos": [
{
"id": "med_leg_toxico_drogas",
"nivel_3": "Drogas de Abuso, Embriaguez e Venenos",
"aliases": ["Alcoolemia e Fases da Embriaguez", "Intoxicação por Monóxido de Carbono (Carboxiemoglobina)", "Venenos e Antídotos", "Cocaína, Maconha e Psicotrópicos", "Exame Toxicológico"]
}
]
},
{
"id": "med_leg_psiquiatria",
"nivel_2": "Psiquiatria e Psicologia Forense",
"topicos": [
{
"id": "med_leg_psiq_imputabilidade",
"nivel_3": "Imputabilidade Penal, Capacidade Civil e Transtornos Mentais",
"aliases": ["Doença Mental", "Desenvolvimento Mental Incompleto ou Retardado", "Semi-imputabilidade", "Simulação e Dissimulação", "Psicopatias e Esquizofrenia"]
}
]
}
]
},
{
"id": "criminalistica",
"nivel_1": "Criminalística",
"divisoes": [
{
"id": "crim_teoria",
"nivel_2": "Fundamentos e Locais de Crime",
"topicos": [
{
"id": "crim_teo_conceitos",
"nivel_3": "Princípios, Postulados e Conceitos Básicos",
"aliases": ["Princípio de Locard (Intercâmbio)", "Princípio da Observação", "Vestígio, Evidência e Indício", "Corpo de Delito", "Visum et Repertum"]
},
{
"id": "crim_teo_local",
"nivel_3": "Local de Crime: Classificação, Isolamento e Preservação",
"aliases": ["Local Idôneo e Inidôneo", "Local Imediato, Mediato e Relacionado", "Levantamento Pericial", "Isolamento do Local"]
},
{
"id": "crim_teo_cadeia",
"nivel_3": "Cadeia de Custódia da Prova (Pacote Anticrime)",
"aliases": ["Fases da Cadeia de Custódia", "Coleta, Acondicionamento e Transporte", "Rastreabilidade e Central de Custódia", "Descarte"]
}
]
},
{
"id": "crim_pericias",
"nivel_2": "Perícias em Espécie",
"topicos": [
{
"id": "crim_per_documentos",
"nivel_3": "Documentoscopia e Grafoscopia",
"aliases": ["Falsificações e Alterações Documentais", "Elementos de Segurança em Cédulas (Papel-Moeda)", "Gênese Gráfica", "Autenticidade e Falsidade"]
},
{
"id": "crim_per_balistica",
"nivel_3": "Balística Forense",
"aliases": ["Armas de Fogo e Munições", "Balística Interna, Externa e de Efeitos", "Raiamento e Confronto Microbalístico", "Residuografia"]
},
{
"id": "crim_per_papiloscopia",
"nivel_3": "Papiloscopia Forense",
"aliases": ["Datiloscopia (Sistema de Vucetich)", "Revelação de Impressões Latentes", "Minúcias e Pontos Característicos", "AFIS (Sistema Automatizado)"]
},
{
"id": "crim_per_transito",
"nivel_3": "Acidentes de Trânsito",
"aliases": ["Dinâmica do Acidente", "Marcas de Frenagem", "Cálculo de Velocidade", "Sítio de Colisão e Ponto de Impacto"]
},
{
"id": "crim_per_incendio",
"nivel_3": "Incêndios e Explosões",
"aliases": ["Focos de Incêndio", "Curto-circuito e Ação Térmica", "Dinâmica do Fogo", "Acelerantes"]
},
{
"id": "crim_per_informatica",
"nivel_3": "Computação Forense e Perícia Multimídia",
"aliases": ["Crimes Cibernéticos", "Recuperação de Dados e Metadados", "Identificação de Voz e Imagem", "Extração de Dados em Dispositivos Móveis"]
}
]
}
]
},
{
"id": "port",
"nivel_1": "Língua Portuguesa",
"divisoes": [
{
"id": "port_texto",
"nivel_2": "Compreensão e Interpretação de Textos",
"topicos": [
{
"id": "port_text_interp",
"nivel_3": "Interpretação, Compreensão e Tipologia Textual",
"aliases": ["Tipologia e Gênero Textual", "Linguagem Formal e Informal", "Elementos da Comunicação e Funções da Linguagem"]
}
]
},
{
"id": "port_semantica",
"nivel_2": "Semântica, Ortografia e Formação de Palavras",
"topicos": [
{
"id": "port_sem_significacao",
"nivel_3": "Significação das Palavras e Figuras de Linguagem",
"aliases": ["Sinônimos e Antônimos", "Homônimos e Parônimos", "Polissemia", "Denotação e Conotação"]
},
{
"id": "port_sem_ortografia",
"nivel_3": "Ortografia Oficial e Acentuação",
"aliases": ["Casos Gerais e Emprego das Letras", "Fatos da Língua (Porque, Onde/Aonde, Mal/Mau)", "Acentuação Gráfica"]
},
{
"id": "port_sem_formacao",
"nivel_3": "Estrutura e Formação de Palavras",
"aliases": ["Derivação Imprópria", "Prefixos e Sufixos"]
}
]
},
{
"id": "port_morfologia",
"nivel_2": "Morfologia (Classes de Palavras)",
"topicos": [
{
"id": "port_morfo_verbos",
"nivel_3": "Verbos (Flexão, Tempos, Modos e Vozes)",
"aliases": ["Correlação Verbal", "Locução Verbal", "Voz Passiva e Voz Ativa"]
},
{
"id": "port_morfo_pronomes",
"nivel_3": "Pronomes (Emprego, Colocação e Função)",
"aliases": ["Pronomes Pessoais", "Pronomes Relativos", "Colocação Pronominal", "Funções Sintáticas dos Pronomes Pessoais Átonos"]
},
{
"id": "port_morfo_conectivos",
"nivel_3": "Conectivos e Palavras Invariáveis",
"aliases": ["Advérbio", "Preposição", "Conjunção"]
},
{
"id": "port_morfo_nominais",
"nivel_3": "Classes Nominais",
"aliases": ["Substantivo", "Adjetivo", "Numeral", "Artigo"]
}
]
},
{
"id": "port_sintaxe",
"nivel_2": "Sintaxe",
"topicos": [
{
"id": "port_sint_simples",
"nivel_3": "Sintaxe do Período Simples (Termos da Oração)",
"aliases": ["Sujeito e Predicado", "Objeto Direto e Indireto", "Complemento Nominal e Agente da Passiva", "Adjunto Adnominal e Adverbial", "Aposto e Vocativo"]
},
{
"id": "port_sint_composto",
"nivel_3": "Sintaxe do Período Composto (Orações)",
"aliases": ["Orações Coordenadas", "Orações Subordinadas Substantivas", "Orações Subordinadas Adverbiais", "Orações Subordinadas Adjetivas", "Orações Reduzidas"]
},
{
"id": "port_sint_concordancia",
"nivel_3": "Concordância Verbal e Nominal",
"aliases": []
},
{
"id": "port_sint_regencia",
"nivel_3": "Regência (Verbal e Nominal) e Crase",
"aliases": []
},
{
"id": "port_sint_pontuacao",
"nivel_3": "Pontuação",
"aliases": ["Uso da Vírgula", "Travessão", "Aspas e Parênteses"]
}
]
},
{
"id": "port_reescrita",
"nivel_2": "Coesão, Coerência e Reescritura",
"topicos": [
{
"id": "port_rees_coesao",
"nivel_3": "Coerência e Coesão",
"aliases": ["Anáfora e Catáfora", "Uso dos Conectores"]
},
{
"id": "port_rees_frases",
"nivel_3": "Reescrita de Frases, Clareza e Correção",
"aliases": ["Substituição de Palavras ou Trechos", "Paralelismo Sintático e Semântico", "Tipos de Discurso (Direto, Indireto e Indireto Livre)"]
}
]
}
]
},
{
"id": "rlm",
"nivel_1": "Raciocínio Lógico Matemático",
"divisoes": [
{
"id": "rlm_proposicional",
"nivel_2": "Lógica Proposicional e Argumentação",
"topicos": [
{
"id": "rlm_prop_conectivos",
"nivel_3": "Tabela Verdade e Conectivos Lógicos",
"aliases": ["Proposições Simples e Compostas", "Conjunção", "Disjunção (Inclusiva e Exclusiva)", "Condicional", "Bicondicional", "Tautologia, Contradição e Contingência"]
},
{
"id": "rlm_prop_equivalencias",
"nivel_3": "Equivalências Lógicas e Negações",
"aliases": ["Negação de Proposições Compostas", "Leis de De Morgan", "Contrapositiva"]
},
{
"id": "rlm_prop_argumentos",
"nivel_3": "Argumentação Lógica",
"aliases": ["Métodos Decorrentes da Tabela Verdade", "Validade de Argumentos", "Silogismos", "Modus Ponens e Modus Tollens"]
}
]
},
{
"id": "rlm_quantificadores",
"nivel_2": "Lógica de Primeira Ordem",
"topicos": [
{
"id": "rlm_quant_diagramas",
"nivel_3": "Diagramas Lógicos e Proposições Categóricas",
"aliases": ["Todo, Algum, Nenhum", "Negação de Quantificadores", "Interseção e Relação de Conjuntos Lógicos"]
}
]
},
{
"id": "rlm_analitico",
"nivel_2": "Raciocínio Analítico e Problemas Lógicos",
"topicos": [
{
"id": "rlm_ana_associacao",
"nivel_3": "Associação de Informações",
"aliases": ["Relacionamento de Matrizes", "Associação entre Pessoas, Profissões e Objetos"]
},
{
"id": "rlm_ana_verdade",
"nivel_3": "Exercícios de Verdade e Mentira",
"aliases": ["Culpado e Inocente", "Paradoxos"]
},
{
"id": "rlm_ana_jogos",
"nivel_3": "Jogos de Lógica, Parentesco e Diversos",
"aliases": ["Sudoku e Jogos Similares", "Problemas Envolvendo Palitos", "Árvores Genealógicas", "Questões Envolvendo Parentesco"]
}
]
},
{
"id": "rlm_sequencias",
"nivel_2": "Sequências e Padrões",
"topicos": [
{
"id": "rlm_seq_padroes",
"nivel_3": "Sequências de Números, Figuras, Letras e Palavras",
"aliases": ["Padrões Cíclicos", "Lei de Formação", "Progressões Lógicas Ocultas"]
}
]
},
{
"id": "rlm_espaco_tempo",
"nivel_2": "Orientação Espacial e Temporal",
"topicos": [
{
"id": "rlm_esp_plano",
"nivel_3": "Orientação no Plano, no Espaço e no Tempo",
"aliases": ["Deslocamentos", "Rotações", "Montagem e Planificação de Cubos"]
},
{
"id": "rlm_esp_datas",
"nivel_3": "Exercícios Envolvendo Datas e Calendários",
"aliases": ["Anos Bissextos", "Dias da Semana"]
}
]
},
{
"id": "rlm_principios",
"nivel_2": "Princípios Lógico-Quantitativos",
"topicos": [
{
"id": "rlm_prin_pombos",
"nivel_3": "Princípio da Casa dos Pombos",
"aliases": ["Princípio das Gavetas de Dirichlet", "Garantia na Pior Hipótese", "Certeza de Ocorrência"]
}
]
}
]
},
{
"id": "afo",
"nivel_1": "Administração Financeira e Orçamentária (AFO) e Contabilidade Pública",
"divisoes": [
{
"id": "afo_orcamento",
"nivel_2": "Orçamento Público e Princípios Orçamentários",
"topicos": [
{
"id": "afo_orc_tecnicas",
"nivel_3": "Técnicas e Tipos de Orçamento",
"aliases": ["Orçamento Tradicional", "Orçamento de Desempenho", "Orçamento-Programa", "Orçamento Base Zero", "Orçamento Participativo"]
},
{
"id": "afo_orc_principios",
"nivel_3": "Princípios Orçamentários",
"aliases": ["Universalidade", "Exclusividade", "Anualidade ou Periodicidade", "Unidade ou Totalidade", "Não Afetação ou Não Vinculação", "Orçamento Bruto", "Especificação ou Discriminação"]
}
]
},
{
"id": "afo_instrumentos",
"nivel_2": "Instrumentos de Planejamento (PPA, LDO e LOA)",
"topicos": [
{
"id": "afo_inst_ppa_ldo",
"nivel_3": "Plano Plurianual (PPA) e Lei de Diretrizes Orçamentárias (LDO)",
"aliases": ["Anexo de Metas Fiscais", "Anexo de Riscos Fiscais", "Diretrizes, Objetivos e Metas"]
},
{
"id": "afo_inst_loa",
"nivel_3": "Lei Orçamentária Anual (LOA) e Créditos Adicionais",
"aliases": ["Créditos Suplementares", "Créditos Especiais", "Créditos Extraordinários", "Vedações Constitucionais (Art. 167 da CF)"]
}
]
},
{
"id": "afo_receita_despesa",
"nivel_2": "Receitas e Despesas Públicas (Lei 4.320/64)",
"topicos": [
{
"id": "afo_rd_receita",
"nivel_3": "Receita Pública: Classificação e Estágios",
"aliases": ["Receitas Orçamentárias e Extraorçamentárias", "Receitas Correntes e de Capital", "Previsão, Lançamento, Arrecadação e Recolhimento", "Dívida Ativa"]
},
{
"id": "afo_rd_despesa",
"nivel_3": "Despesa Pública: Classificação e Estágios",
"aliases": ["Despesas Correntes e de Capital", "Empenho, Liquidação e Pagamento", "Suprimento de Fundos (Regime de Adiantamento)"]
},
{
"id": "afo_rd_restos",
"nivel_3": "Restos a Pagar (RAP) e Despesas de Exercícios Anteriores (DEA)",
"aliases": ["RAP Processados e Não Processados", "Prescrição de RAP", "Cancelamento de Empenho"]
}
]
},
{
"id": "afo_lrf",
"nivel_2": "Lei de Responsabilidade Fiscal (LC 101/2000)",
"topicos": [
{
"id": "afo_lrf_regras",
"nivel_3": "Receita, Despesa e Transferências na LRF",
"aliases": ["Renúncia de Receita", "Despesas com Pessoal e Limite Prudencial", "Despesa Obrigatória de Caráter Continuado", "Transferências Voluntárias", "Reserva de Contingência"]
},
{
"id": "afo_lrf_divida",
"nivel_3": "Endividamento, Operações de Crédito e Gestão Patrimonial",
"aliases": ["Regra de Ouro", "Antecipação de Receita Orçamentária (ARO)", "Dívida Consolidada e Flutuante", "Garantias e Contragarantias", "Alienação de Bens"]
},
{
"id": "afo_lrf_transparencia",
"nivel_3": "Transparência e Controle da Gestão Fiscal",
"aliases": ["Relatório Resumido da Execução Orçamentária (RREO)", "Relatório de Gestão Fiscal (RGF)", "Infrações Fiscais (Lei 10.028/2000)"]
}
]
},
{
"id": "afo_contabilidade",
"nivel_2": "Contabilidade Aplicada ao Setor Público (CASP)",
"topicos": [
{
"id": "afo_casp_teoria",
"nivel_3": "Estrutura Conceitual, Regimes e PCASP",
"aliases": ["Regime Orçamentário e Patrimonial", "Fato Modificativo e Permutativo", "Plano de Contas Aplicado ao Setor Público (PCASP)"]
},
{
"id": "afo_casp_mensuracao",
"nivel_3": "Mensuração de Ativos e Passivos (NBC TSP e MCASP)",
"aliases": ["Ativo Imobilizado e Intangível", "Redução ao Valor Recuperável (Impairment)", "Depreciação, Amortização e Exaustão", "Provisões e Passivos Contingentes", "Propriedade para Investimento", "Receita de Transação com e sem Contraprestação"]
},
{
"id": "afo_casp_demonstracoes",
"nivel_3": "Demonstrações Contábeis do Setor Público (DCASP)",
"aliases": ["Balanço Orçamentário", "Balanço Financeiro", "Balanço Patrimonial", "Demonstração das Variações Patrimoniais (DVP)", "Notas Explicativas"]
}
]
},
{
"id": "afo_sistemas",
"nivel_2": "Sistemas de Administração Financeira e Orçamentária",
"topicos": [
{
"id": "afo_sist_federais",
"nivel_3": "SIAFI, SIAFEM e Outros Sistemas Governamentais",
"aliases": ["Conta Única do Tesouro", "Nota de Empenho (NE) e Nota de Lançamento (NL)", "SIAFÍSICO", "SIDOR e SIOP", "Sistema de Informação de Custos do Setor Público"]
}
]
}
]
},
{
"id": "geografia",
"nivel_1": "Geografia",
"divisoes": [
{
"id": "geo_fisica",
"nivel_2": "Geografia Física (Quadro Natural)",
"topicos": [
{
"id": "geo_fis_geologia",
"nivel_3": "Geologia e Geomorfologia",
"aliases": ["Estrutura Geológica", "Domínios Morfoclimáticos", "Formas de Relevo (Planaltos, Planícies e Depressões)", "Processos Erosivos e Intemperismo", "Ciclo Geológico (Litogênese, Orogênese)"]
},
{
"id": "geo_fis_clima",
"nivel_3": "Climatologia e Meteorologia",
"aliases": ["Tipos Climáticos e Climogramas", "Massas de Ar e Frentes", "Zonas de Alteração e Precipitações"]
},
{
"id": "geo_fis_hidro",
"nivel_3": "Hidrografia",
"aliases": ["Bacias Hidrográficas Brasileiras", "Ciclo Hidrológico", "Polígonos de Thiessen e Isoietas", "Usinas Hidrelétricas e Barragens"]
},
{
"id": "geo_fis_bio",
"nivel_3": "Biogeografia e Domínios Naturais",
"aliases": ["Amazônia, Cerrado, Caatinga e Mata Atlântica", "Zonas de Tensão Ecológica", "Manejo Florestal e Formações Vegetais"]
}
]
},
{
"id": "geo_ambiental",
"nivel_2": "Meio Ambiente e Gestão Ambiental",
"topicos": [
{
"id": "geo_amb_politicas",
"nivel_3": "Políticas, Legislação e Gestão Ambiental",
"aliases": ["Sistema Nacional de Unidades de Conservação (SNUC)", "Estudo de Impacto Ambiental (EIA)", "Atuação de ONGs", "Sustentabilidade e Recursos Hídricos"]
},
{
"id": "geo_amb_impactos",
"nivel_3": "Impactos Ambientais e Mudanças Climáticas",
"aliases": ["Aquecimento Global e Protocolo de Kyoto", "Ilhas de Calor e Inversão Térmica", "Desmatamento e Desertificação", "Chuva Ácida e Derramamento de Petróleo"]
}
]
},
{
"id": "geo_humana",
"nivel_2": "Geografia Humana: População e Urbanização",
"topicos": [
{
"id": "geo_hum_pop",
"nivel_3": "Demografia, Dinâmica Populacional e Migrações",
"aliases": ["Crescimento Vegetativo e Estrutura Etária", "Migrações Internas e Fronteira Agrícola", "Êxodo Rural", "Povos Indígenas e Comunidades Tradicionais"]
},
{
"id": "geo_hum_urb",
"nivel_3": "Urbanização e Metropolização",
"aliases": ["Estatuto da Cidade e Cidades Sustentáveis", "Rede e Hierarquia Urbana", "Saneamento Básico", "Regiões Metropolitanas"]
}
]
},
{
"id": "geo_economica",
"nivel_2": "Geografia Econômica e Agrária",
"topicos": [
{
"id": "geo_eco_global",
"nivel_3": "Geopolítica, Globalização e Indústria",
"aliases": ["Divisão Internacional do Trabalho (DIT)", "Empresas Transnacionais e Cadeias Produtivas", "Meio Técnico-Científico-Informacional", "Matriz Energética e Setores da Economia"]
},
{
"id": "geo_eco_agraria",
"nivel_3": "Espaço Agrário e Agronegócio",
"aliases": ["Estrutura Fundiária e Concentração de Terras", "Conflitos no Campo e Movimentos Sociais (MST)", "Agricultura Familiar vs. Agronegócio", "Complexo da Soja e Exportações"]
}
]
},
{
"id": "geo_cartografia",
"nivel_2": "Cartografia e Geotecnologias",
"topicos": [
{
"id": "geo_cart_basica",
"nivel_3": "Cartografia Básica e Temática",
"aliases": ["Coordenadas e Escalas", "Curvas de Nível e Perfil Topográfico", "Método Corocromático Qualitativo", "Mapas Geomorfológicos"]
},
{
"id": "geo_cart_geotec",
"nivel_3": "Sensoriamento Remoto, SIG e Aerofotogrametria",
"aliases": ["Sistemas de Informação Geográfica (SIG / Geoprocessamento)", "Resolução Espacial, Espectral e Radiométrica (Pixels)", "Recobrimento Longitudinal e Estereoscopia", "Convergência de Evidências"]
}
]
},
{
"id": "geo_regional",
"nivel_2": "Geografia Regional do Brasil",
"topicos": [
{
"id": "geo_reg_nacional",
"nivel_3": "Regionalização do Território Brasileiro",
"aliases": ["Macro e Mesorregiões do IBGE", "Complexos Regionais (Geoeconômicos)", "Disparidades Regionais"]
},
{
"id": "geo_reg_estadual",
"nivel_3": "Geografia Física, Econômica e Social dos Estados",
"aliases": ["Economia e Produto Interno Bruto Estadual", "Aspectos Geomorfológicos e Biomas Locais", "Dinâmica Demográfica do Estado", "Regiões de Integração e Polos Econômicos"]
}
]
}
]
},
{
"id": "historia",
"nivel_1": "História",
"divisoes": [
{
"id": "hist_teoria",
"nivel_2": "Teoria da História, Historiografia e Patrimônio",
"topicos": [
{
"id": "hist_teo_metodo",
"nivel_3": "Metodologia, Fontes e Escolas Históricas",
"aliases": ["Escola dos Annales (Marc Bloch, Le Goff)", "Marxismo e Materialismo Histórico", "Nova História e História Oral", "Crítica Interna e Externa de Documentos", "Fontes Seriais e Paradigmáticas (Ginzburg)"]
},
{
"id": "hist_teo_patrimonio",
"nivel_3": "Memória, Patrimônio e Arquivologia",
"aliases": ["Patrimônio Material e Imaterial", "Tombamento (IPHAN)", "Gestão de Documentos Oficiais (Autos Findos)", "Documento/Monumento"]
}
]
},
{
"id": "hist_geral",
"nivel_2": "História Geral",
"topicos": [
{
"id": "hist_geral_trabalho",
"nivel_3": "Revoluções Industriais e o Mundo do Trabalho",
"aliases": ["Ludismo e Cartismo", "Organização Fabril (Fordismo)", "Terceira Revolução Industrial (Toyotismo, Automação)"]
},
{
"id": "hist_geral_seculo20",
"nivel_3": "Século XX: Conflitos e Economia Global",
"aliases": ["Primeira e Segunda Guerra Mundial", "Crise de 1929 e Keynesianismo", "Imperialismo"]
}
]
},
{
"id": "hist_br_colonia_imperio",
"nivel_2": "História do Brasil: Colônia e Império",
"topicos": [
{
"id": "hist_br_colonia",
"nivel_3": "Brasil Colônia: Economia, Sociedade e Escravidão",
"aliases": ["Tratado de Tordesilhas e Limites", "Missões Jesuíticas e Drogas do Sertão", "Escravidão Negra e Resistência Indígena", "Capitanias Hereditárias e Reformas Pombalinas"]
},
{
"id": "hist_br_imperio_pol",
"nivel_3": "Brasil Império: Independência, Constituições e Revoltas",
"aliases": ["Constituição de 1824 e Poder Moderador", "Revoltas Provinciais (Cabanagem, Balaiada)", "Guerra do Paraguai", "Parlamentarismo às Avessas"]
},
{
"id": "hist_br_imperio_trab",
"nivel_3": "Abolicionismo e Transição para o Trabalho Livre",
"aliases": ["Leis Abolicionistas (Eusébio de Queiroz, Ventre Livre)", "Imigração Subvencionada", "Lei de Terras"]
}
]
},
{
"id": "hist_br_rep_olig",
"nivel_2": "História do Brasil: Primeira República (1889-1930)",
"topicos": [
{
"id": "hist_br_olig_pol",
"nivel_3": "Política Oligárquica e Constituição de 1891",
"aliases": ["Política do Café com Leite", "Coronelismo e Voto de Cabresto", "Federalismo e Autonomia Estadual"]
},
{
"id": "hist_br_olig_soc",
"nivel_3": "Movimentos Sociais e Operariado na Primeira República",
"aliases": ["Anarcossindicalismo", "Greve Geral de 1917", "Revoltas Urbanas (Vacina, Chibata)", "Lei Adolfo Gordo"]
}
]
},
{
"id": "hist_br_vargas_populismo",
"nivel_2": "História do Brasil: Era Vargas e República Democrática (1930-1964)",
"topicos": [
{
"id": "hist_br_vargas",
"nivel_3": "Era Vargas, Estado Novo e Leis Trabalhistas",
"aliases": ["Revolução de 1930", "Constituição de 1934 e 1937 (Polaca)", "Carta del Lavoro e CLT (1943)", "Criação da Justiça do Trabalho"]
},
{
"id": "hist_br_desenv",
"nivel_3": "Nacional-Desenvolvimentismo e Crise Institucional",
"aliases": ["Governo JK e Construção de Brasília", "Governo João Goulart e Reformas de Base", "Estatuto do Trabalhador Rural (1964)", "Ligas Camponesas"]
}
]
},
{
"id": "hist_br_ditadura_nova_rep",
"nivel_2": "História do Brasil: Regime Militar e Nova República",
"topicos": [
{
"id": "hist_br_ditadura",
"nivel_3": "Regime Militar (1964-1985): Repressão e Economia",
"aliases": ["Atos Institucionais (AI-5) e Doutrina de Segurança Nacional", "Milagre Econômico", "Guerrilha do Araguaia", "Novo Sindicalismo (Greves do ABC)"]
},
{
"id": "hist_br_redemocratizacao",
"nivel_3": "Abertura Política e Constituição de 1988",
"aliases": ["Lei da Anistia e Diretas Já", "Constituição Cidadã", "Direitos Indígenas e Multiculturalismo", "Neoliberalismo (Governo FHC)"]
}
]
},
{
"id": "hist_regional",
"nivel_2": "História Regional e Formação Territorial Brasileira",
"topicos": [
{
"id": "hist_reg_amazonia",
"nivel_3": "Ocupação da Amazônia e Fronteiras ao Norte",
"aliases": ["Tratado de Petrópolis e Questão do Acre", "Contestado Franco-Brasileiro (Amapá) e Questão do Pirara (Roraima)", "Ciclo da Borracha e Batalha da Borracha (II Guerra)", "Fordlândia e Projeto Jari"]
},
{
"id": "hist_reg_centro_oeste",
"nivel_3": "Expansão para o Oeste e Desenvolvimento Regional",
"aliases": ["Marcha para o Oeste", "Divisão do Mato Grosso", "Transamazônica e Projetos de Integração (PIN)", "Zona Franca de Manaus e SPVEA/SUDAM"]
},
{
"id": "hist_reg_cultura",
"nivel_3": "Cultura, Movimentos Sociais Locais e Patrimônio",
"aliases": ["Chico Mendes e Dorothy Stang", "Festas Populares (Bumba meu Boi, Marabaixo, Festas Juninas)", "Monumentos Históricos (Teatro Amazonas, Forte São Joaquim, Casa das 11 Janelas)"]
}
]
}
]
}
]
};