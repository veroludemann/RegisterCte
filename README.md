# RegisterCte
Actividad 2 Automatización de Registro de Cliente

<span style="color: blue;">URL a automatizar: https://ticketazo.com.ar/auth/registerClient </span>

### Objetivos
- Trabajar con 2 fixtures: register.ok.json y register.bad.json.
- Crear custom commands reutilizables para el formulario (combobox, fecha segmentada, etc.).
- Diseñar casos positivos y negativos sin depender de la capa de red.

Plan de pruebas Register: https://docs.google.com/spreadsheets/d/1mwOwGaDc1yfycRrCPHmuwSQ0UEHopjAR/edit?usp=sharing&ouid=112844744323252161665&rtpof=true&sd=true



Estructura sugerida: 
```
cypress/
  e2e/register/
    register.cy.(ts|js)
  fixtures/
    register.ok.json
    register.bad.json
  support/
    commands.(ts|js)
    e2e.(ts|js)
  utils/
    generators.(ts|js)   // opcional pero recomendado
```
<i>Configurar baseUrl a https://ticketazo.com.ar





