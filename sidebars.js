/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Primeros pasos',
      items: ['primeros-pasos/instalacion', 'primeros-pasos/roles-y-permisos'],
    },
    {
      type: 'category',
      label: 'Módulos',
      items: [
        'modulos/inventario',
        'modulos/ventas-tpv',
        'modulos/clientes',
        'modulos/reparaciones',
        'modulos/proveedores-compras',
        'modulos/informes',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: ['api/introduccion', 'api/productos', 'api/pedidos'],
    },
    'arquitectura',
    'faq',
  ],
};

export default sidebars;
