# CtrlCV.FUN - 独立开发者作品集

一个采用 Notion 极简风格设计的个人开发者作品集网站，用于展示个人项目、技术栈及开发动态。

🔗 **在线预览**: [https://vectorking-50kg.github.io](https://vectorking-50kg.github.io)

## ✨ 特性

*   **Notion 风格 UI**: 干净、极简的设计语言，注重内容阅读体验。
*   **深色/浅色模式**: 内置主题切换功能，自动适配系统偏好或手动切换。
*   **响应式设计**: 完美适配移动端和桌面端设备。
*   **项目展示**: 优雅的卡片布局展示个人作品（所订、拾碎、CtrlCV 等）。
*   **GitHub 热力图**: 集成 GitHub 贡献图表，展示编码活跃度。
*   **技术栈展示**: 清晰分类的前端、移动端及桌面端技能树。

## 🛠 技术栈

本项目基于现代前端技术栈构建：

*   **核心框架**: [React 19](https://react.dev/)
*   **开发语言**: [TypeScript](https://www.typescriptlang.org/)
*   **构建工具**: [Vite](https://vitejs.dev/)
*   **样式方案**: [Tailwind CSS](https://tailwindcss.com/) (配合自定义 Notion 主题配置)
*   **图标库**: [Lucide React](https://lucide.dev/)

## 🚀 本地开发

如果你想在本地运行此项目，请按照以下步骤操作：

### 1. 克隆项目

```bash
git clone https://github.com/vectorking-50kg/vectorking-50kg.github.io.git
cd vectorking-50kg.github.io
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```
访问 `http://localhost:5173` 查看效果。

### 4. 构建生产版本

```bash
npm run build
```

### 5. 部署到 GitHub Pages

```bash
npm run deploy
```

## 📂 项目结构

```text
/
├── components/         # UI 组件 (GitHubHeatmap, ProjectCard, ThemeToggle)
├── assets/             # 静态资源
├── App.tsx             # 主应用组件
├── types.ts            # TypeScript 类型定义
├── index.html          # 入口 HTML (包含 Tailwind 配置)
├── package.json        # 项目依赖与脚本
└── vite.config.ts      # Vite 配置文件
```

## 👤 作者

**Vectorking-50kg**

*   专注于构建提升效率和生活质量的数字工具。
*   Email: [ctrlcv.fun@gmail.com](mailto:ctrlcv.fun@gmail.com)
*   GitHub: [@Vectorking-50kg](https://github.com/Vectorking-50kg)

---

© 2025 CtrlCV.FUN. All Rights Reserved.

