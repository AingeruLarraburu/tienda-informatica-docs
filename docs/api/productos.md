---
sidebar_position: 2
---

# Productos

## Listar productos

`GET /productos?categoria=portatiles&page=1`

```json
{
  "data": [
    {
      "id": 101,
      "sku": "LAP-ASUS-X515",
      "nombre": "Portátil ASUS X515 15.6\"",
      "precio": 549.9,
      "stock": 7
    }
  ],
  "page": 1,
  "total": 1
}
```

## Crear producto

`POST /productos`

```json
{
  "sku": "RAM-KNG-16",
  "nombre": "Memoria RAM Kingston 16GB DDR4",
  "categoriaId": 12,
  "precioCoste": 28.5,
  "precio": 44.9,
  "stockMinimo": 5
}
```

## Actualizar y eliminar

- `PUT /productos/{id}`
- `DELETE /productos/{id}` (baja lógica)
