# Carnicería Pro — sitio de reventa multiidioma

Sitio estático multiidioma (ES/EN/ZH) para revender equipo de carnicería/cocina vía programas de afiliados, pensado para publicarse con GitHub Pages.

## Estructura
```
/es, /en, /zh   -> páginas por idioma
/assets         -> CSS y JS compartidos
/data/productos.json -> catálogo (agregar "affiliate_url" cuando la cuenta de afiliado esté aprobada)
/agents         -> scripts de investigación (para correr en una máquina con acceso completo a internet)
```

## Estado actual
- [x] Estructura multiidioma funcional
- [x] Catálogo de ejemplo con 3 productos (sin links de afiliado todavía)
- [ ] Cuenta de afiliado de AliExpress (u otro programa) — pendiente, requiere registro humano
- [ ] Links reales de afiliado en `data/productos.json`
- [ ] Publicar con GitHub Pages (Settings del repo → Pages → rama main)
- [ ] Tráfico: sin esto, no hay ventas posibles — ver plan de promoción

## Cómo publicarlo (una vez que tengas acceso)
1. En GitHub, entra al repositorio → Settings → Pages
2. En "Source", elige la rama `main` y la carpeta `/ (root)`
3. Guarda — GitHub te da una URL tipo `https://mahtrigpa.github.io/impresoradecarnesamerican/`

## Próximo paso
Registrarte en el programa de afiliados de AliExpress (portals.aliexpress.com) para obtener un ID real y reemplazar los `affiliate_url` vacíos en `data/productos.json`.
