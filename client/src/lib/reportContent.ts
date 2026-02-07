export const AREA_EXPLANATIONS = {
  infrastructure: {
    name: 'Infraestructura',
    definition: 'Capacidad de tu equipo para documentar, almacenar y reutilizar componentes de prompts de manera sistemática.',
    importance: 'Una infraestructura sólida es el fundamento de la escalabilidad. Sin ella, cada prompt es un proyecto único que consume tiempo y recursos.',
    weaknessImplications: [
      'Los prompts se pierden o duplican en diferentes lugares',
      'Cada miembro reinventa la rueda en lugar de reutilizar componentes probados',
      'No hay forma de aprender de los éxitos y fracasos anteriores',
      'El onboarding de nuevos miembros es lento y caótico'
    ],
    strengthImplications: [
      'Tu equipo tiene un repositorio centralizado de prompts',
      'Existe reutilización sistemática de componentes',
      'Los nuevos miembros pueden aprender rápidamente de la base de conocimiento',
      'Hay visibilidad sobre qué funciona y qué no'
    ]
  },
  quality: {
    name: 'Calidad y Control',
    definition: 'Capacidad de tu equipo para validar, medir y asegurar que los outputs de IA cumplen con estándares predefinidos.',
    importance: 'Sin control de calidad, los outputs de IA son impredecibles. Esto genera riesgos operacionales, retrasos y pérdida de confianza en la IA.',
    weaknessImplications: [
      'Los outputs se validan "a ojo" sin criterios objetivos',
      'Hay inconsistencia en los estándares entre miembros del equipo',
      'Los errores o alucinaciones de la IA pasan desapercibidos',
      'No hay trazabilidad de qué salió bien o mal'
    ],
    strengthImplications: [
      'Tu equipo tiene criterios claros para validar outputs',
      'Existe un protocolo documentado de control de calidad',
      'Los riesgos se identifican y mitigan antes de usar los outputs',
      'Hay trazabilidad y auditoría de decisiones'
    ]
  },
  scalability: {
    name: 'Escalabilidad',
    definition: 'Capacidad de tu equipo para crecer, incorporar nuevos miembros y mantener la calidad sin aumentar exponencialmente el esfuerzo.',
    importance: 'La escalabilidad determina si tu sistema de IA es un hobby o un activo empresarial. Sin ella, el crecimiento se detiene.',
    weaknessImplications: [
      'El conocimiento está concentrado en 1-2 personas',
      'Agregar nuevos miembros requiere capacitación intensiva',
      'La calidad disminuye a medida que crece el equipo',
      'No hay forma de automatizar o delegar tareas'
    ],
    strengthImplications: [
      'El conocimiento está distribuido y documentado',
      'Los nuevos miembros pueden ser productivos rápidamente',
      'La calidad se mantiene incluso con crecimiento',
      'Existen procesos que pueden ser automatizados o delegados'
    ]
  }
};

export const PROTOCOLS_BY_LEVEL = {
  1: {
    title: 'Protocolo de 7 Días - Nivel 1: Emergencia Operacional',
    description: 'Tu equipo está en modo "ad-hoc". Este protocolo te ayuda a salir del caos y establecer los fundamentos.',
    days: [
      {
        day: 1,
        title: 'Identificar y Registrar',
        tasks: [
          'Identifica los 3 prompts más críticos que usa tu equipo',
          'Crea una lista simple en Notion o Google Docs',
          'Documenta: qué hace cada prompt, quién lo usa, dónde está guardado'
        ],
        deliverable: 'Lista de 3 prompts críticos con ubicación y propósito',
        timeEstimate: '1-2 horas'
      },
      {
        day: 2,
        title: 'Aplicar Identidad y Contexto (Fase 1 del FMP)',
        tasks: [
          'Para cada uno de los 3 prompts, documenta: Identidad (quién eres) y Contexto (qué necesitas saber)',
          'Usa la plantilla: "Eres [rol]. Tu objetivo es [objetivo]. El contexto es [contexto]"',
          'Prueba cómo mejora la calidad del output'
        ],
        deliverable: '3 prompts con Identidad y Contexto documentados',
        timeEstimate: '2-3 horas'
      },
      {
        day: 3,
        title: 'Crear Biblioteca de Snippets',
        tasks: [
          'Extrae los componentes reutilizables de tus 3 prompts',
          'Crea una tabla en Notion con: Nombre del snippet, Descripción, Código, Cuándo usarlo',
          'Ejemplos: formatos de salida, tonos de voz, restricciones comunes'
        ],
        deliverable: 'Tabla de Snippets con al menos 5-10 componentes reutilizables',
        timeEstimate: '2 horas'
      },
      {
        day: 4,
        title: 'Establecer Criterios de Calidad Básicos',
        tasks: [
          'Define 3-5 criterios simples para validar outputs: ¿Es correcto? ¿Es completo? ¿Es claro?',
          'Crea un checklist simple que el equipo pueda usar',
          'Documenta qué hacer si un output falla un criterio'
        ],
        deliverable: 'Checklist de validación de calidad',
        timeEstimate: '1-2 horas'
      },
      {
        day: 5,
        title: 'Crear Repositorio Centralizado',
        tasks: [
          'Crea una carpeta compartida (Notion, Google Drive o GitHub) para todos los prompts',
          'Establece una estructura simple: Nombre del Prompt | Propósito | Última actualización | Autor',
          'Mueve tus 3 prompts críticos al repositorio'
        ],
        deliverable: 'Repositorio centralizado con estructura clara',
        timeEstimate: '1 hora'
      },
      {
        day: 6,
        title: 'Capacitar al Equipo',
        tasks: [
          'Reúne al equipo (30 minutos)',
          'Explica: dónde están los prompts, cómo usarlos, cuál es el checklist de calidad',
          'Responde preguntas y aclara dudas'
        ],
        deliverable: 'Equipo capacitado y alineado',
        timeEstimate: '1 hora'
      },
      {
        day: 7,
        title: 'Revisar y Ajustar',
        tasks: [
          'Revisa cómo el equipo está usando el repositorio y el checklist',
          'Identifica qué está funcionando y qué necesita ajustes',
          'Planifica los siguientes pasos (Nivel 2)'
        ],
        deliverable: 'Documento de lecciones aprendidas y plan para Nivel 2',
        timeEstimate: '1-2 horas'
      }
    ]
  },
  2: {
    title: 'Protocolo de 7 Días - Nivel 2: Estructura Básica',
    description: 'Tu equipo tiene algunos fundamentos. Este protocolo te ayuda a consolidarlos y escalar.',
    days: [
      {
        day: 1,
        title: 'Auditoría de Prompts Existentes',
        tasks: [
          'Revisa todos los prompts en tu repositorio',
          'Clasifícalos por: Propósito, Calidad estimada, Frecuencia de uso',
          'Identifica duplicados o prompts obsoletos'
        ],
        deliverable: 'Matriz de auditoría de prompts',
        timeEstimate: '2-3 horas'
      },
      {
        day: 2,
        title: 'Expandir Biblioteca de Snippets',
        tasks: [
          'Extrae componentes reutilizables de todos los prompts auditados',
          'Agrupa por categoría: Formatos, Tonos, Restricciones, Contextos comunes',
          'Documenta patrones que funcionan bien'
        ],
        deliverable: 'Biblioteca expandida con 20+ snippets categorizados',
        timeEstimate: '3-4 horas'
      },
      {
        day: 3,
        title: 'Implementar Scorecard de Calidad',
        tasks: [
          'Crea una Scorecard con 5-7 criterios medibles',
          'Ejemplo: Precisión (0-5), Completitud (0-5), Claridad (0-5), Seguridad (0-5)',
          'Prueba con 5 prompts existentes'
        ],
        deliverable: 'Scorecard de Calidad v1.0 con ejemplos',
        timeEstimate: '2-3 horas'
      },
      {
        day: 4,
        title: 'Crear Protocolo de Mejora Continua',
        tasks: [
          'Define un proceso semanal: Revisar prompts, identificar mejoras, actualizar',
          'Asigna responsables',
          'Documenta cómo se registran las mejoras'
        ],
        deliverable: 'Protocolo de mejora continua documentado',
        timeEstimate: '1-2 horas'
      },
      {
        day: 5,
        title: 'Implementar Versionado',
        tasks: [
          'Agrega versionado a tus prompts (v1.0, v1.1, v2.0)',
          'Documenta qué cambió en cada versión',
          'Mantén historial de cambios'
        ],
        deliverable: 'Sistema de versionado implementado',
        timeEstimate: '1-2 horas'
      },
      {
        day: 6,
        title: 'Capacitar en Nuevos Estándares',
        tasks: [
          'Reúne al equipo (1 hora)',
          'Presenta: Scorecard de Calidad, Protocolo de mejora, Versionado',
          'Realiza ejercicio práctico con un prompt'
        ],
        deliverable: 'Equipo capacitado en nuevos estándares',
        timeEstimate: '1.5 horas'
      },
      {
        day: 7,
        title: 'Planificar Nivel 3',
        tasks: [
          'Revisa progreso de Nivel 2',
          'Identifica qué está funcionando',
          'Planifica transición a Nivel 3 (Automatización y Gobernanza)'
        ],
        deliverable: 'Plan de transición a Nivel 3',
        timeEstimate: '1-2 horas'
      }
    ]
  },
  3: {
    title: 'Protocolo de 7 Días - Nivel 3: Operación Sistemática',
    description: 'Tu equipo tiene estructura. Este protocolo te ayuda a automatizar y gobernar.',
    days: [
      {
        day: 1,
        title: 'Mapeo de Flujos de Trabajo',
        tasks: [
          'Documenta cómo fluyen los prompts en tu organización',
          'Identifica puntos de fricción y oportunidades de automatización',
          'Crea diagrama simple: Entrada → Procesamiento → Validación → Salida'
        ],
        deliverable: 'Mapa de flujos de trabajo',
        timeEstimate: '2-3 horas'
      },
      {
        day: 2,
        title: 'Crear Plantillas Estándar',
        tasks: [
          'Basado en tus snippets, crea 3-5 plantillas estándar',
          'Ejemplo: Plantilla para análisis, para síntesis, para generación',
          'Documenta cuándo usar cada plantilla'
        ],
        deliverable: '3-5 plantillas estándar documentadas',
        timeEstimate: '2-3 horas'
      },
      {
        day: 3,
        title: 'Implementar Sistema de Gobernanza',
        tasks: [
          'Define roles: Creador, Revisor, Aprobador',
          'Documenta proceso de aprobación de nuevos prompts',
          'Crea matriz de responsabilidades'
        ],
        deliverable: 'Sistema de gobernanza documentado',
        timeEstimate: '1-2 horas'
      },
      {
        day: 4,
        title: 'Automatizar Validación',
        tasks: [
          'Identifica validaciones que pueden automatizarse',
          'Ejemplo: Checklists, reglas de negocio, restricciones',
          'Implementa usando herramientas simples (Zapier, Make, etc.)'
        ],
        deliverable: 'Validaciones automatizadas implementadas',
        timeEstimate: '2-3 horas'
      },
      {
        day: 5,
        title: 'Crear Dashboard de Métricas',
        tasks: [
          'Define métricas clave: Prompts creados, Calidad promedio, Tiempo de ejecución',
          'Crea dashboard simple en Notion o Google Sheets',
          'Automatiza recolección de datos'
        ],
        deliverable: 'Dashboard de métricas v1.0',
        timeEstimate: '2-3 horas'
      },
      {
        day: 6,
        title: 'Capacitar en Gobernanza y Automatización',
        tasks: [
          'Reúne al equipo (1.5 horas)',
          'Presenta: Roles, Proceso de aprobación, Automatizaciones, Dashboard',
          'Realiza ejercicio práctico'
        ],
        deliverable: 'Equipo capacitado en gobernanza',
        timeEstimate: '2 horas'
      },
      {
        day: 7,
        title: 'Revisar y Planificar Nivel 4',
        tasks: [
          'Revisa métricas y feedback del equipo',
          'Identifica qué está funcionando y qué necesita ajustes',
          'Planifica transición a Nivel 4 (Optimización Continua)'
        ],
        deliverable: 'Plan de transición a Nivel 4',
        timeEstimate: '1-2 horas'
      }
    ]
  },
  4: {
    title: 'Protocolo de 7 Días - Nivel 4: Optimización Continua',
    description: 'Tu equipo tiene operaciones sistemáticas. Este protocolo te ayuda a optimizar y escalar.',
    days: [
      {
        day: 1,
        title: 'Análisis Profundo de Métricas',
        tasks: [
          'Analiza datos de los últimos 30 días',
          'Identifica tendencias, patrones, anomalías',
          'Calcula ROI de diferentes prompts'
        ],
        deliverable: 'Análisis detallado de métricas',
        timeEstimate: '2-3 horas'
      },
      {
        day: 2,
        title: 'Identificar Oportunidades de Mejora',
        tasks: [
          'Basado en análisis, identifica top 5 oportunidades',
          'Prioriza por impacto y esfuerzo',
          'Crea plan de acción'
        ],
        deliverable: 'Plan de mejora priorizado',
        timeEstimate: '1-2 horas'
      },
      {
        day: 3,
        title: 'Implementar Experimentos A/B',
        tasks: [
          'Diseña 2-3 experimentos para validar mejoras',
          'Ejemplo: Versión A vs Versión B del prompt',
          'Define métricas de éxito'
        ],
        deliverable: 'Experimentos A/B diseñados',
        timeEstimate: '2-3 horas'
      },
      {
        day: 4,
        title: 'Ejecutar Experimentos',
        tasks: [
          'Corre experimentos con datos reales',
          'Recolecta resultados',
          'Analiza ganador'
        ],
        deliverable: 'Resultados de experimentos',
        timeEstimate: '3-4 horas'
      },
      {
        day: 5,
        title: 'Implementar Ganadores',
        tasks: [
          'Actualiza prompts ganadores',
          'Documenta cambios',
          'Comunica resultados al equipo'
        ],
        deliverable: 'Prompts optimizados implementados',
        timeEstimate: '1-2 horas'
      },
      {
        day: 6,
        title: 'Crear Cultura de Optimización',
        tasks: [
          'Reúne al equipo (1 hora)',
          'Presenta resultados de experimentos',
          'Establece ciclo mensual de optimización',
          'Incentiva propuestas de mejora del equipo'
        ],
        deliverable: 'Cultura de optimización establecida',
        timeEstimate: '1.5 horas'
      },
      {
        day: 7,
        title: 'Planificar Nivel 5',
        tasks: [
          'Revisa progreso y métricas',
          'Identifica qué falta para Nivel 5 (Excelencia Operacional)',
          'Planifica roadmap para los próximos 90 días'
        ],
        deliverable: 'Roadmap para Nivel 5',
        timeEstimate: '1-2 horas'
      }
    ]
  },
  5: {
    title: 'Protocolo de 7 Días - Nivel 5: Excelencia Operacional',
    description: 'Tu equipo es experto. Este protocolo te ayuda a mantener excelencia y liderar la industria.',
    days: [
      {
        day: 1,
        title: 'Auditoría de Excelencia',
        tasks: [
          'Revisa todas las áreas: Infraestructura, Calidad, Escalabilidad',
          'Compara contra estándares de industria',
          'Identifica gaps',
          'Crea matriz de madurez'
        ],
        deliverable: 'Matriz de madurez de excelencia',
        timeEstimate: '2-3 horas'
      },
      {
        day: 2,
        title: 'Innovación en Prompts',
        tasks: [
          'Experimenta con nuevas técnicas de prompt engineering',
          'Prueba nuevos modelos de IA',
          'Documenta hallazgos',
          'Comparte con la comunidad'
        ],
        deliverable: 'Documento de innovaciones',
        timeEstimate: '3-4 horas'
      },
      {
        day: 3,
        title: 'Crear Estándares de Industria',
        tasks: [
          'Basado en tu experiencia, crea estándares propios',
          'Documenta best practices',
          'Crea guía de referencia',
          'Considera publicar o compartir'
        ],
        deliverable: 'Estándares y guías documentados',
        timeEstimate: '2-3 horas'
      },
      {
        day: 4,
        title: 'Mentoría y Liderazgo',
        tasks: [
          'Identifica miembros del equipo con potencial de liderazgo',
          'Crea programa de mentoría',
          'Delega responsabilidades de gobernanza',
          'Desarrolla futuros líderes'
        ],
        deliverable: 'Programa de mentoría establecido',
        timeEstimate: '1-2 horas'
      },
      {
        day: 5,
        title: 'Integración con Negocio',
        tasks: [
          'Mapea cómo PEMM impacta en KPIs de negocio',
          'Calcula ROI de tu sistema de IA',
          'Presenta resultados a stakeholders',
          'Asegura presupuesto para continuar'
        ],
        deliverable: 'Presentación de ROI y impacto',
        timeEstimate: '2-3 horas'
      },
      {
        day: 6,
        title: 'Celebración y Reconocimiento',
        tasks: [
          'Reúne al equipo para celebrar logros',
          'Reconoce contribuciones individuales',
          'Comparte historias de éxito',
          'Refuerza cultura de excelencia'
        ],
        deliverable: 'Equipo motivado y alineado',
        timeEstimate: '1.5 horas'
      },
      {
        day: 7,
        title: 'Visión Futura',
        tasks: [
          'Reflexiona sobre dónde está tu equipo',
          'Define visión para los próximos 12 meses',
          'Identifica nuevas fronteras (ej: IA multimodal, agentes)',
          'Crea roadmap ambicioso pero alcanzable'
        ],
        deliverable: 'Visión y roadmap para 12 meses',
        timeEstimate: '1-2 horas'
      }
    ]
  }
};
