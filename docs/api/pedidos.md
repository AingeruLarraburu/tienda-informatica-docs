---
sidebar_position: 3
---

# Pedidos

## Crear pedido

`POST /pedidos`

```json
{
  "clienteId": 55,
  "lineas": [
    {"productoId": 101, "cantidad": 1},
    {"productoId": 87, "cantidad": 2}
  ],
  "formaPago": "tarjeta"
}
```

## Consultar pedido

`GET /pedidos/{id}`

```json
{
  "id": 2034,
  "estado": "PAGADO",
  "total": 639.7,
  "lineas": 2
}
```

## Cambiar estado

`PATCH /pedidos/{id}/estado`

```json
{ "estado": "ENVIADO" }
```
