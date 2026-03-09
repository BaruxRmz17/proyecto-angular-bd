# ProyectoEdge

**Plataforma web desarrollada con Angular 17, optimizada mediante pnpm para un rendimiento superior y una arquitectura de imports limpios con `@`.**

Este proyecto utiliza componentes Standalone y una configuración avanzada de TypeScript para mejorar la mantenibilidad del código.

---

## 🛠️ Tecnologías y Configuración

* **Framework:** [Angular 17](https://angular.dev/) (Standalone Components)
* **Gestor de Paquetes:** [pnpm](https://pnpm.io/)
* **TypeScript Path Mapping:** Configurado para evitar rutas relativas complejas (`../../`).

### 📍 Path Aliases (Imports con @)
Se configuró el `tsconfig.json` para usar alias, permitiendo imports más limpios:

* `@app/*` ➜ `src/app/*`
* `@services/*` ➜ `src/app/services/*`
* `@components/*` ➜ `src/app/components/*`
* `@interfaces/*` ➜ `src/app/interfaces/*`

> **Ejemplo:** `import { PrincipalComponent } from '@components/principal/principal.component';`

---

## 🚀 Instalación y Uso

### 1. Clonar e Instalar
```bash
# Clonar el repositorio
git clone <tu-url-de-repo>

# Acceder a la carpeta
cd proyecto_edge

# Instalar dependencias con pnpm
pnpm install

# Iniciar el servidor (ng serve)
pnpm start

# Crear un componente dentro de la carpeta components
pnpm ng generate component components/nombre-del-componente

# Crear un servicio dentro de la carpeta services
pnpm ng generate service services/nombre-del-servicio
```
