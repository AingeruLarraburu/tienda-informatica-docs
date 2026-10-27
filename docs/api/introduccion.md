---
sidebar_position: 1
---

# Introducción a la API

La API REST permite integrar TiendaTech con tiendas online, ERPs o aplicaciones propias.

- **Base URL**: `https://tienda.ejemplo.com/api/v1`
- **Formato**: JSON
- **Autenticación**: token `Bearer`

## Autenticación

```bash
curl -X POST https://tienda.ejemplo.com/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@tiendatech.local", "password": "secreto"}'
```

Respuesta:

```json
{
  "token": "eyJhbGciOi...",
  "expiresIn": 3600
}
```

Usa el token en las siguientes peticiones:

```bash
curl -H "Authorization: Bearer <token>" https://tienda.ejemplo.com/api/v1/productos
```

## Códigos de error

| Código | Significado |
|--------|-------------|
| 400 | Petición inválida |
| 401 | No autenticado |
| 403 | Sin permisos |
| 404 | Recurso no encontrado |
| 422 | Error de validación |
