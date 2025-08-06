# microfrontend-react-ts-webpack

### ⚙️ Technologies Used

- React 18
- Webpack 5
- Module Federation Plugin
- React Router v6
- JavaScript / JSX
-typeScript

## 🧩 Micro Frontends Integration with Module Federation

This project demonstrates a basic Micro Frontends architecture using **Webpack Module Federation** and **React Router**.

### 🧱 Structure

- **Container App (Shell)**: The main host application that loads and displays both micro frontends.
- **App1**: A remote micro frontend integrated into the container.
- **App2**: Another remote micro frontend also integrated into the container.

### 🔗 Integration Details

- **App1** and **App2** are exposed as remote modules via Webpack's Module Federation plugin.
- The **Container App** dynamically loads these two apps at runtime without bundling them together.
- Both apps are fully independent React applications.

### 🧭 Navigation

- The container uses **React Router v6** to manage routing between apps.
- When users navigate to `/app1`, the container loads and displays App1.
- When users navigate to `/app2`, the container loads and displays App2.
- The routing logic is handled inside the container, allowing seamless navigation between micro frontends.

### 📁 Folder Structure

