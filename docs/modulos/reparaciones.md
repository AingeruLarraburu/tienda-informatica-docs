---
sidebar_position: 4
---

# Reparaciones

Módulo de servicio técnico basado en **órdenes de reparación (OR)**.

## Flujo

```text
Recepción → Diagnóstico → Presupuesto → Aprobación → Reparación → Listo → Entregado
```

## Recepción

Se registra:

- Cliente y equipo (marca, modelo, nº de serie).
- Avería descrita por el cliente.
- Accesorios entregados y estado físico.
- Contraseñas o copia de datos autorizadas.

## Presupuesto

Incluye mano de obra y piezas del inventario. El cliente puede aprobarlo por correo o en tienda; sin aprobación no se inicia la reparación.

## Notificaciones

Se envía un aviso automático al cliente al cambiar de estado.

## Garantía de reparación

Cada OR cerrada genera una garantía de reparación configurable (por defecto 3 meses).

:::caution
Antes de manipular el equipo, informa al cliente sobre el riesgo de pérdida de datos y registra su conformidad.
:::
