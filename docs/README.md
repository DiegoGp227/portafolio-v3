# Diego Gongora — Portfolio v2

Portafolio personal construido con Astro, React y Tailwind CSS. Desplegado en Vercel con soporte Docker para desarrollo local.

---

## Sobre mí

**Diego Gongora**
Desarrollador web con enfoque en frontend, pero también disfruto el backend. Me gusta crear experiencias digitales claras y funcionales, aprender constantemente y mejorar en cada proyecto.

Soy un desarrollador full stack apasionado por crear aplicaciones que realmente aporten valor, combinando una buena experiencia de usuario con soluciones técnicas sólidas. Me motiva transformar ideas en productos funcionales, eficientes y fáciles de usar, siempre buscando que lo que construyo tenga un propósito real y ayude a las personas.

Me gusta aprender nuevas tecnologías, mejorar mis prácticas y enfrentar desafíos que me hagan crecer. Busco escribir código limpio, mantenible y entregar soluciones eficientes y de calidad.

---

## Contacto

| Canal | Enlace |
|-------|--------|
| Email | diego.gp227@gmail.com |
| LinkedIn | [diego-gongora-p](https://www.linkedin.com/in/diego-gongora-p) |
| GitHub | [DiegoGp227](https://github.com/DiegoGp227) |

---

## Tecnologías

### Frontend
HTML · CSS · JavaScript · TypeScript · React.js · Next.js · Astro

### Backend
Node.js · Express.js · Bun · Elysia

### Bases de datos
PostgreSQL · MySQL · Prisma (ORM)

### DevOps & Infraestructura
Docker · Docker Compose · Linux · Raspberry Pi · Cloudflare · GitHub

### Diseño
Figma

---

## Proyectos

### SKEMAP — Gestión de proyectos
**Estado:** Beta / MVP

Herramienta full-stack de gestión de proyectos con jerarquía Project → Epic → Task. Incluye seguimiento de progreso en tiempo real, actualizaciones optimistas con rollback automático, autenticación JWT con ownership check y validación en todas las capas de la aplicación.

**Características:**
- Jerarquía de gestión: Project → Epic → Task
- Seguimiento de progreso en tiempo real por proyecto y epic
- Optimistic UI con rollback automático ante errores de API
- Autenticación JWT con verificación de ownership en cada mutación
- Validación full-stack: Zod en backend, React Hook Form en frontend
- Stats de tareas sin queries N+1 (COUNT + FILTER en una sola query)
- Cascade automático al eliminar proyectos (Epics → Tasks → Criterios)
- Manejo estructurado de errores con clases tipadas y JSON consistente
- Arquitectura limpia: Route → Controller → Service → Prisma

**Stack:** Next.js · React · Express · PostgreSQL · Prisma · Docker · Docker Compose

**Links:** [Live](https://skemap.devdiego.work/) · [GitHub](https://github.com/DiegoGp227/skemap)

---

### KILA — Validador de facturas DIAN
**Estado:** En Desarrollo

Herramienta web para revisar y validar facturas electrónicas según los requisitos exigidos por la DIAN. Detecta errores y advertencias en el JSON, guarda historial de validaciones y ofrece un dashboard interactivo con estadísticas.

**Características:**
- Registro de usuarios en local
- Validación de facturas según los requisitos de la DIAN
- Detección de errores y advertencias en archivos JSON
- Dashboard interactivo con resumen de validaciones
- Historial de facturas validadas por usuario
- Idiomas de la interfaz adaptables

**Stack:** HTML · CSS · JavaScript · React · Next.js · Node · Express · Prisma · PostgreSQL

**Links:** [Live](https://kila.coinmaster.devdiego.work/) · [GitHub](https://github.com/DiegoGp227/KILA)

---

### COINMASTER — Gestión de finanzas personales
**Estado:** En Desarrollo

Aplicación web para gestionar finanzas personales de manera sencilla. Permite registrar ingresos, gastos, deudas y sueños, todo en un mismo lugar, con una visión clara de la situación económica.

**Características:**
- Registro de usuarios con correo y contraseña encriptada
- Gestión de ingresos y gastos con fecha y descripción
- Clasificación por categorías
- Registro de deudas con monto total
- Gestión de sueños como lista personalizable
- Datos privados por usuario

**Stack:** HTML · CSS · JavaScript · React · Next.js · Node · Express · Prisma · MySQL

**Links:** [Live](https://coinmaster.devdiego.work/) · [GitHub](https://github.com/DiegoGp227/CoinMaster-v2)

---

### TASKLY — Organización de tareas por temas
**Estado:** Terminado

Aplicación web para organizar tareas agrupándolas por temas. Cada tema tiene su propia vista, permitiendo separar distintas áreas y concentrarse solo en lo relevante en cada momento.

**Características:**
- Registro y autenticación de usuarios
- Creación de múltiples temas para organizar tareas
- Gestión de tareas dentro de cada tema (por hacer, en progreso, finalizadas)
- Edición y eliminación de tareas
- Dashboard personalizado por usuario
- Visualización clara de progreso por tema
- Notas y descripciones opcionales para tareas

**Stack:** HTML · CSS · JavaScript · React · Node · Express · MySQL

**Links:** [Live](https://taskly.devdiego.work/login) · [GitHub](https://github.com/DiegoGp227/taskly-v2)

---

### NOTTE — Aplicación de notas
**Estado:** Terminado

Aplicación web sencilla e intuitiva para tomar, organizar y acceder a notas desde cualquier lugar. Pensada para capturar ideas rápidamente, mantener apuntes ordenados o registrar información importante.

**Características:**
- Registro y autenticación de usuarios
- Creación, edición y eliminación de notas
- Organización por categorías o etiquetas
- Búsqueda rápida de notas
- Acceso desde cualquier dispositivo
- Notas privadas por usuario

**Stack:** HTML · CSS · JavaScript · React · Astro · Bun · Elysia

**Links:** [GitHub](https://github.com/devkaleth/notte)

---

### SERVER AUTOHOSTEADO — Infraestructura en Raspberry Pi 5
**Estado:** Terminado

Infraestructura autohospedada montada sobre una Raspberry Pi 5, optimizada para alojar aplicaciones reales en producción mediante una arquitectura modular basada en Docker. Cada aplicación cuenta con su propio frontend, backend y base de datos en contenedores independientes, con CI/CD completo y notificaciones por Telegram.

**Características:**
- Servidor autohospedado con Raspberry Pi 5
- Aislamiento y orquestación mediante contenedores Docker (un stack por proyecto)
- Despliegue modular con Docker Compose
- Túnel manejado por Cloudflare
- IP fija para acceso remoto
- Arquitectura ligera y de bajo consumo energético
- Pipeline de CI al realizar push a main
- Despliegue continuo (CD) automático hacia la Raspberry Pi
- Notificaciones en tiempo real del estado del despliegue vía Telegram

**Stack:** Raspberry Pi · Linux · Cloudflare · Docker · Docker Compose · GitHub

---

## Certificados

- Certificado de Desarrollador Web Junior — Talento Tech
- Ganador Hackathon — Talento Tech
- Certificado de Participación Segunda Hackathon Virtual — Talento Tech
- Certificado de Participación Hackathon Presencial — Talento Tech

---

## Stack del portafolio

| Herramienta | Uso |
|-------------|-----|
| [Astro](https://astro.build/) v5.9.2 | Framework principal |
| React | Componentes interactivos |
| Tailwind CSS v4 | Estilos |
| astro-icon | Iconografía |
| Vercel | Despliegue |
| Docker | Desarrollo local |

---

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build
```

Con Docker:

```bash
docker compose up
```
