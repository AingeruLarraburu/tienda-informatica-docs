---
sidebar_position: 1
---

# Inventario

Gestiona el catálogo de productos (portátiles, componentes, periféricos, consumibles) y su stock.

## Alta de producto

Campos principales:

- **SKU**: código único interno.
- **EAN/Código de barras**.
- **Nombre, marca y categoría**.
- **Precio de coste y precio de venta** (sin IVA).
- **Stock mínimo**: genera una alerta al alcanzarlo.
- **Control de número de serie**: obligatorio en equipos con garantía.

## Categorías

Árbol jerárquico, por ejemplo:

```text
Ordenadores
├── Portátiles
├── Sobremesa
Componentes
├── Procesadores
├── Tarjetas gráficas
├── Memoria RAM
Periféricos
```

## Movimientos de stock

| Tipo | Origen |
|------|--------|
| Entrada | Recepción de compra |
| Salida | Venta o consumo en reparación |
| Ajuste | Regularización de inventario |
| Traspaso | Entre almacén y tienda |

:::tip
Realiza un inventario cíclico mensual de los productos de mayor rotación.
:::
