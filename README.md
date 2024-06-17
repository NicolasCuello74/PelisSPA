# Aplicación de Favoritos de Películas

## Descripción

Esta aplicación permite a los usuarios agregar y eliminar películas de su lista de favoritos. Los usuarios pueden autenticarse usando Auth0, ver tráilers de películas y gestionar sus favoritos que se almacenan en el local storage del navegador.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **React Router**: Para gestionar la navegación y las rutas de la aplicación.
- **Auth0**: Para la autenticación de usuarios.
- **Bootstrap y React-Bootstrap**: Para el diseño y los componentes estilizados.
- **React Player**: Para reproducir vídeos de YouTube.
- **Local Storage**: Para persistir la lista de favoritos en el navegador.

## Instalación

### Prerrequisitos

- Node.js y npm instalados en tu máquina.

### Pasos de Instalación

1. **Clonar el Repositorio**:
   ```sh
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```
2. **Instalar dependencias**:
   ```sh
   npm install
   ```
3. **Configurar Auth0**:
   ```sh
   - Crea una cuenta en Auth0 y configura una nueva aplicación.
   - Actualiza los archivos de configuración con tus credenciales de Auth0.
   ```
4. **Iniciar de la aplicación**:
   ```sh
   npm start
   ```

## Funcionalidades Principales

```sh
- Autenticación de Usuario: Utiliza Auth0 para autenticar a los usuarios.
- Gestión de Favoritos: Permite a los usuarios agregar y eliminar películas de su lista de favoritos.
- Vista de Tráilers: Utiliza react-player para reproducir tráileres de YouTube dentro de un modal.
- Persistencia de Datos: Los favoritos se almacenan en el local storage del navegador.
- Rutas Protegidas: Usa react-router-dom para gestionar las rutas de la aplicación, protegiendo rutas específicas que requieren autenticación.
```
