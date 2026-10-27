---
sidebar_position: 3
---

# Arquitectura

```text
Navegador → Frontend SPA → API REST → PostgreSQL
                                    → Redis
                                    → Servicio de correo
```

## Componentes

- **Frontend**: SPA en React.
- **Backend**: API REST en Node.js.
- **Base de datos**: PostgreSQL.
- **Caché y colas**: Redis.

## Modelo de datos simplificado

```sql
CREATE TABLE producto (
  id SERIAL PRIMARY KEY,
  sku VARCHAR(40) UNIQUE NOT NULL,
  nombre TEXT NOT NULL,
  precio NUMERIC(10,2) NOT NULL,
  stock INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE pedido (
  id SERIAL PRIMARY KEY,
  cliente_id INTEGER NOT NULL,
  estado VARCHAR(20) NOT NULL,
  total NUMERIC(10,2) NOT NULL
);
```
