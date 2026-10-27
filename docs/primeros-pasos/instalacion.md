---
sidebar_position: 1
---

# Instalación

## Requisitos

- Node.js 20 o superior
- PostgreSQL 15 o superior
- Redis (opcional, para caché y colas)

## Pasos

```bash
git clone https://github.com/tu-organizacion/tiendatech.git
cd tiendatech
npm install
cp .env.example .env
npm run db:migrate
npm run db:seed
npm run dev
```

La aplicación queda disponible en `http://localhost:3000`.

## Variables de entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `DATABASE_URL` | Cadena de conexión a PostgreSQL | `postgres://user:pass@localhost:5432/tiendatech` |
| `JWT_SECRET` | Clave para firmar tokens | cadena aleatoria larga |
| `SMTP_HOST` | Servidor de correo para notificaciones | `smtp.ejemplo.com` |
| `IVA_DEFAULT` | IVA aplicado por defecto (%) | `21` |

:::warning
Nunca subas el archivo `.env` al repositorio.
:::

## Usuario inicial

El comando `db:seed` crea el usuario `admin@tiendatech.local`. Cambia su contraseña en el primer acceso.
