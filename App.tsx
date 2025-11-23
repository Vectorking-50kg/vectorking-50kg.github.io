import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import GitHubHeatmap from './components/GitHubHeatmap';
import ProjectCard from './components/ProjectCard';
import { Project, SocialLink } from './types';
import { Github, MapPin, Mail, ChevronDown, Layers, Cpu } from 'lucide-react';

// --- Icons (SVG Components for local usage) ---
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const GiteeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z" />
  </svg>
);

const WechatIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
  </svg>
);

const WeiboIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.737 5.439l-.002.004zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.991-.406-1.593.379-.595 1.176-.861 1.793-.601.622.263.82.972.442 1.592zm1.27-1.627c-.141.237-.449.353-.689.253-.236-.09-.313-.361-.177-.586.138-.227.436-.346.672-.24.239.09.315.36.18.601l.014-.028zm.176-2.719c-1.893-.493-4.033.45-4.857 2.118-.836 1.704-.026 3.591 1.886 4.21 1.983.64 4.318-.341 5.132-2.179.8-1.793-.201-3.642-2.161-4.149zm7.563-1.224c-.346-.105-.57-.18-.405-.615.375-.977.42-1.804 0-2.404-.781-1.112-2.915-1.053-5.364-.03 0 0-.766.331-.571-.271.376-1.217.315-2.224-.27-2.809-1.338-1.337-4.869.045-7.888 3.08C1.309 10.87 0 13.273 0 15.348c0 3.981 5.099 6.395 10.086 6.395 6.536 0 10.888-3.801 10.888-6.82 0-1.822-1.547-2.854-2.915-3.284v.01zm1.908-5.092c-.766-.856-1.908-1.187-2.96-.962-.436.09-.706.511-.616.932.09.42.511.691.932.602.511-.105 1.067.044 1.442.465.376.421.466.977.316 1.473-.136.406.089.856.51.992.405.119.857-.105.992-.512.33-1.021.12-2.178-.646-3.035l.03.045zm2.418-2.195c-1.576-1.757-3.905-2.419-6.054-1.968-.496.104-.812.587-.706 1.081.104.496.586.813 1.082.707 1.532-.331 3.185.15 4.296 1.383 1.112 1.246 1.429 2.943.947 4.416-.165.48.106 1.007.586 1.157.479.165.991-.104 1.157-.586.675-2.088.241-4.478-1.338-6.235l.03.045z" />
  </svg>
);

const XiaoHongShuIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22.405 9.879c.002.016.01.02.07.019h.725a.797.797 0 0 0 .78-.972.794.794 0 0 0-.884-.618.795.795 0 0 0-.692.794c0 .101-.002.666.001.777zm-11.509 4.808c-.203.001-1.353.004-1.685.003a2.528 2.528 0 0 1-.766-.126.025.025 0 0 0-.03.014L7.7 16.127a.025.025 0 0 0 .01.032c.111.06.336.124.495.124.66.01 1.32.002 1.981 0 .01 0 .02-.006.023-.015l.712-1.545a.025.025 0 0 0-.024-.036zM.477 9.91c-.071 0-.076.002-.076.01a.834.834 0 0 0-.01.08c-.027.397-.038.495-.234 3.06-.012.24-.034.389-.135.607-.026.057-.033.042.003.112.046.092.681 1.523.787 1.74.008.015.011.02.017.02.008 0 .033-.026.047-.044.147-.187.268-.391.371-.606.306-.635.44-1.325.486-1.706.014-.11.021-.22.03-.33l.204-2.616.022-.293c.003-.029 0-.033-.03-.034zm7.203 3.757a1.427 1.427 0 0 1-.135-.607c-.004-.084-.031-.39-.235-3.06a.443.443 0 0 0-.01-.082c-.004-.011-.052-.008-.076-.008h-1.48c-.03.001-.034.005-.03.034l.021.293c.076.982.153 1.964.233 2.946.05.4.186 1.085.487 1.706.103.215.223.419.37.606.015.018.037.051.048.049.02-.003.742-1.642.804-1.765.036-.07.03-.055.003-.112zm3.861-.913h-.872a.126.126 0 0 1-.116-.178l1.178-2.625a.025.025 0 0 0-.023-.035l-1.318-.003a.148.148 0 0 1-.135-.21l.876-1.954a.025.025 0 0 0-.023-.035h-1.56c-.01 0-.02.006-.024.015l-.926 2.068c-.085.169-.314.634-.399.938a.534.534 0 0 0-.02.191.46.46 0 0 0 .23.378.981.981 0 0 0 .46.119h.59c.041 0-.688 1.482-.834 1.972a.53.53 0 0 0-.023.172.465.465 0 0 0 .23.398c.15.092.342.12.475.12l1.66-.001c.01 0 .02-.006.023-.015l.575-1.28a.025.025 0 0 0-.024-.035zm-6.93-4.937H3.1a.032.032 0 0 0-.034.033c0 1.048-.01 2.795-.01 6.829 0 .288-.269.262-.28.262h-.74c-.04.001-.044.004-.04.047.001.037.465 1.064.555 1.263.01.02.03.033.051.033.157.003.767.009.938-.014.153-.02.3-.06.438-.132.3-.156.49-.419.595-.765.052-.172.075-.353.075-.533.002-2.33 0-4.66-.007-6.991a.032.032 0 0 0-.032-.032zm11.784 6.896c0-.014-.01-.021-.024-.022h-1.465c-.048-.001-.049-.002-.05-.049v-4.66c0-.072-.005-.07.07-.07h.863c.08 0 .075.004.075-.074V8.393c0-.082.006-.076-.08-.076h-3.5c-.064 0-.075-.006-.075.073v1.445c0 .083-.006.077.08.077h.854c.075 0 .07-.004.07.07v4.624c0 .095.008.084-.085.084-.37 0-1.11-.002-1.304 0-.048.001-.06.03-.06.03l-.697 1.519s-.014.025-.008.036c.006.01.013.008.058.008 1.748.003 3.495.002 5.243.002.03-.001.034-.006.035-.033v-1.539zm4.177-3.43c0 .013-.007.023-.02.024-.346.006-.692.004-1.037.004-.014-.002-.022-.01-.022-.024-.005-.434-.007-.869-.01-1.303 0-.072-.006-.071.07-.07l.733-.003c.041 0 .081.002.12.015.093.025.16.107.165.204.006.431.002 1.153.001 1.153zm2.67.244a1.953 1.953 0 0 0-.883-.222h-.18c-.04-.001-.04-.003-.042-.04V10.21c0-.132-.007-.263-.025-.394a1.823 1.823 0 0 0-.153-.53 1.533 1.533 0 0 0-.677-.71 2.167 2.167 0 0 0-1-.258c-.153-.003-.567 0-.72 0-.07 0-.068.004-.068-.065V7.76c0-.031-.01-.041-.046-.039H17.93s-.016 0-.023.007c-.006.006-.008.012-.008.023v.546c-.008.036-.057.015-.082.022h-.95c-.022.002-.028.008-.03.032v1.481c0 .09-.004.082.082.082h.913c.082 0 .072.128.072.128V11.19s.003.117-.06.117h-1.482c-.068 0-.06.082-.06.082v1.445s-.01.068.064.068h1.457c.082 0 .076-.006.076.079v3.225c0 .088-.007.081.082.081h1.43c.09 0 .082.007.082-.08v-3.27c0-.029.006-.035.033-.035l2.323-.003c.098 0 .191.02.28.061a.46.46 0 0 1 .274.407c.008.395.003.79.003 1.185 0 .259-.107.367-.33.367h-1.218c-.023.002-.029.008-.028.033.184.437.374.871.57 1.303a.045.045 0 0 0 .04.026c.17.005.34.002.51.003.15-.002.517.004.666-.01a2.03 2.03 0 0 0 .408-.075c.59-.18.975-.698.976-1.313v-1.981c0-.128-.01-.254-.034-.38 0 .078-.029-.641-.724-.998z" />
  </svg>
);

const SteamIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
  </svg>
);

const EpicGamesIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3.537 0C2.165 0 1.66.506 1.66 1.879V18.44a4.262 4.262 0 00.02.433c.031.3.037.59.316.92.027.033.311.245.311.245.153.075.258.13.43.2l8.335 3.491c.433.199.614.276.928.27h.002c.314.006.495-.071.928-.27l8.335-3.492c.172-.07.277-.124.43-.2 0 0 .284-.211.311-.243.28-.33.285-.621.316-.92a4.261 4.261 0 00.02-.434V1.879c0-1.373-.506-1.88-1.878-1.88zm13.366 3.11h.68c1.138 0 1.688.553 1.688 1.696v1.88h-1.374v-1.8c0-.369-.17-.54-.523-.54h-.235c-.367 0-.537.17-.537.539v5.81c0 .369.17.54.537.54h.262c.353 0 .523-.171.523-.54V8.619h1.373v2.143c0 1.144-.562 1.71-1.7 1.71h-.694c-1.138 0-1.7-.566-1.7-1.71V4.82c0-1.144.562-1.709 1.7-1.709zm-12.186.08h3.114v1.274H6.117v2.603h1.648v1.275H6.117v2.774h1.74v1.275h-3.14zm3.816 0h2.198c1.138 0 1.7.564 1.7 1.708v2.445c0 1.144-.562 1.71-1.7 1.71h-.799v3.338h-1.4zm4.53 0h1.4v9.201h-1.4zm-3.13 1.235v3.392h.575c.354 0 .523-.171.523-.54V4.965c0-.368-.17-.54-.523-.54zm-3.74 10.147a1.708 1.708 0 01.591.108 1.745 1.745 0 01.49.299l-.452.546a1.247 1.247 0 00-.308-.195.91.91 0 00-.363-.068.658.658 0 00-.28.06.703.703 0 00-.224.163.783.783 0 00-.151.243.799.799 0 00-.056.299v.008a.852.852 0 00.056.31.7.7 0 00.157.245.736.736 0 00.238.16.774.774 0 00.303.058.79.79 0 00.445-.116v-.339h-.548v-.565H7.37v1.255a2.019 2.019 0 01-.524.307 1.789 1.789 0 01-.683.123 1.642 1.642 0 01-.602-.107 1.46 1.46 0 01-.478-.3 1.371 1.371 0 01-.318-.455 1.438 1.438 0 01-.115-.58v-.008a1.426 1.426 0 01.113-.57 1.449 1.449 0 01.312-.46 1.418 1.418 0 01.474-.309 1.58 1.58 0 01.598-.111 1.708 1.708 0 01.045 0zm11.963.008a2.006 2.006 0 01.612.094 1.61 1.61 0 01.507.277l-.386.546a1.562 1.562 0 00-.39-.205 1.178 1.178 0 00-.388-.07.347.347 0 00-.208.052.154.154 0 00-.07.127v.008a.158.158 0 00.022.084.198.198 0 00.076.066.831.831 0 00.147.06c.062.02.14.04.236.061a3.389 3.389 0 01.43.122 1.292 1.292 0 01.328.17.678.678 0 01.207.24.739.739 0 01.071.337v.008a.865.865 0 01-.081.382.82.82 0 01-.229.285 1.032 1.032 0 01-.353.18 1.606 1.606 0 01-.46.061 2.16 2.16 0 01-.71-.116 1.718 1.718 0 01-.593-.346l.43-.514c.277.223.578.335.9.335a.457.457 0 00.236-.05.157.157 0 00.082-.142v-.008a.15.15 0 00-.02-.077.204.204 0 00-.073-.066.753.753 0 00-.143-.062 2.45 2.45 0 00-.233-.062 5.036 5.036 0 01-.413-.113 1.26 1.26 0 01-.331-.16.72.72 0 01-.222-.243.73.73 0 01-.082-.36v-.008a.863.863 0 01.074-.359.794.794 0 01.214-.283 1.007 1.007 0 01.34-.185 1.423 1.423 0 01.448-.066 2.006 2.006 0 01.025 0zm-9.358.025h.742l1.183 2.81h-.825l-.203-.499H8.623l-.198.498h-.81zm2.197.02h.814l.663 1.08.663-1.08h.814v2.79h-.766v-1.602l-.711 1.091h-.016l-.707-1.083v1.593h-.754zm3.469 0h2.235v.658h-1.473v.422h1.334v.61h-1.334v.442h1.493v.658h-2.255zm-5.3.897l-.315.793h.624zm-1.145 5.19h8.014l-4.09 1.348z"/>
  </svg>
);


// --- Data ---

const projects: Project[] = [
  {
    id: '1',
    title: '所订 (SuoDing)',
    description: '一款用于管理个人订阅服务的微信小程序。帮助用户追踪扣费周期，可视化支出统计，并接收续费提醒。',
    tags: ['微信小程序', 'JavaScript', '云开发', 'UI/UX'],
    icon: '📅',
    platform: 'mobile',
    year: '2023'
  },
  {
    id: '2',
    title: '拾碎 (LifeBits)',
    description: '一款 Android 应用，用于离线内容收集。允许用户保存其他应用中的片段，并在本地创建包含文本、图片和录音的个人备忘录。',
    tags: ['Android', 'Kotlin', 'Jetpack Compose', '本地数据库'],
    icon: '🧩',
    platform: 'mobile',
    year: '2023'
  },
  {
    id: '3',
    title: 'CtrlCV',
    description: '基于 Qt 构建的 Windows 轻量级剪贴板管理工具。支持历史搜索、置顶项目和快速粘贴快捷键。',
    tags: ['Windows', 'C++', 'Qt Framework', '桌面应用'],
    icon: '⌨️',
    platform: 'desktop',
    year: '2024'
  }
];

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: <GithubIcon className="w-5 h-5" />,
    username: 'Vectorking-50kg',
    hoverColor: 'hover:text-[#333] dark:hover:text-white' // GitHub black/white
  },
  {
    name: 'Gitee',
    url: 'https://gitee.com',
    icon: <GiteeIcon className="w-5 h-5" />,
    username: 'Vectorking-50kg',
    hoverColor: 'hover:text-[#C71D23]'
  },
  {
    name: 'Wechat',
    url: '#',
    icon: <WechatIcon className="w-6 h-6" />, // Adjusted size
    username: 'vectorking50kg',
    hoverColor: 'hover:text-[#07C160]'
  },
  {
    name: 'Weibo',
    url: '#',
    icon: <WeiboIcon className="w-6 h-6" />, // Adjusted size
    username: 'vectorking50kg',
    hoverColor: 'hover:text-[#E6162D]'
  },
  {
    name: '小红书',
    url: '#',
    icon: <XiaoHongShuIcon className="w-10 h-10" />, // Adjusted size
    username: 'vectorking50kg',
    hoverColor: 'hover:text-[#FF2442]'
  },
  {
    name: 'Steam',
    url: 'https://store.steampowered.com/',
    icon: <SteamIcon className="w-5 h-5" />, // Adjusted size
    username: 'vectorking50kg',
    hoverColor: 'hover:text-[#000000] dark:hover:text-white'
  },
  {
    name: 'Epic Games',
    url: 'https://www.epicgames.com/',
    icon: <EpicGamesIcon className="w-5 h-5" />, // Adjusted size
    username: 'vectorking50kg',
    hoverColor: 'hover:text-[#313131] dark:hover:text-white'
  }
];

// --- Main Component ---

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full flex flex-col transition-colors duration-300 selection:bg-notion-gray/30 bg-notion-light dark:bg-notion-dark text-notion-text dark:text-notion-darkText relative">
      
      {/* Global Background Decorations (Fixed) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-200/40 dark:bg-purple-900/20 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-screen" />
      </div>

      {/* --- SCREEN 1: HERO --- */}
      <section className="snap-start min-h-screen w-full flex flex-col relative z-10">
        
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col h-full min-h-screen">
          {/* Nav */}
          <nav className="w-full py-8 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2 text-notion-text dark:text-notion-darkText font-mono text-sm font-bold select-none">
              <div className="w-20 h-6 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center rounded-sm shadow-md">CtrlCV</div>
              <span>.FUN</span>
            </div>
            <ThemeToggle />
          </nav>

          {/* Hero Content */}
          <div className="flex-1 flex flex-col justify-center gap-8 md:gap-16 pb-12">
            
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
              {/* Left: Text Info */}
              <div className="flex-1 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-notion-gray/5 border border-notion-gray/20 text-notion-gray text-xs md:text-sm font-mono mb-2 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Available for interesting projects
                  </div>
                  
                  <h1 className="font-bold text-notion-text dark:text-notion-darkText tracking-tight leading-tight">
                    <span className="block text-lg md:text-2xl font-medium text-notion-gray mb-1">Hi, I'm</span>
                    <span className="font-chinese-serif block text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 pb-2 -ml-1 md:-ml-2">
                      甲骨水滴 👋
                    </span>
                  </h1>
                </div>

                <p className="text-lg md:text-xl text-notion-text/80 dark:text-notion-darkText/80 leading-relaxed max-w-xl font-bold">
                  🌖 熬夜写代码市级选手 | 🧑🏻‍💻 AI 善后高级工程师
                  <br className="hidden md:block" />
                  <span className="text-base md:text-lg text-notion-gray mt-2 block font-light">
                    倾心于构建优雅的数字产品，努力成为优秀的独立开发者。
                    <br />
                    热爱游戏，但经常买来不玩；喜欢听歌，但听歌的时候写不出代码。
                  </span>
                </p>

                {/* Social Links */}
                <div className="flex flex-wrap gap-6 justify-center md:justify-start mt-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-notion-gray transition-colors ${link.hoverColor || 'hover:text-notion-text dark:hover:text-notion-darkText'}`}
                      title={link.name}
                    >
                      <span className="currentColor">{link.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right: Avatar */}
              <div className="shrink-0 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-2xl transform group-hover:scale-110 transition-transform duration-700"></div>
                <div className="relative w-40 h-40 md:w-64 md:h-64 overflow-hidden rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-2 border-white/50 dark:border-white/10 shadow-xl bg-white dark:bg-[#252525] transition-all duration-500 group-hover:rotate-3">
                  <img
                    src="/avatar.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white/80 dark:bg-[#202020]/80 backdrop-blur-md border border-white/20 dark:border-white/10 px-3 py-1 rounded-full text-xs font-mono text-notion-gray shadow-lg">
                  Coding. {new Date().getFullYear()}
                </div>
              </div>
            </div>

            {/* Heatmap - Bottom of Hero */}
            <div className="w-full pt-4 opacity-80 hover:opacity-100 transition-opacity duration-500">
              <GitHubHeatmap />
            </div>
          </div>

          {/* Scroll Hint */}
          <div className="absolute bottom-8 left-0 w-full flex justify-center animate-bounce cursor-pointer z-20" onClick={() => scrollToSection('projects-section')}>
            <ChevronDown className="text-notion-gray/50 hover:text-notion-gray transition-colors" size={24} />
          </div>
        </div>
      </section>


      {/* --- SCREEN 2: PROJECTS --- */}
      <section id="projects-section" className="snap-start min-h-screen w-full flex flex-col items-center justify-center py-20 relative z-10">
        <div className="w-full max-w-5xl px-6 md:px-12">
          <div className="mb-12 flex items-center gap-3">
            <div className="p-2 bg-white dark:bg-[#202020] rounded-lg border border-notion-border/50 dark:border-notion-darkBorder/50 shadow-sm">
              <Layers size={24} className="text-notion-text dark:text-notion-darkText" />
            </div>
            <h2 className="text-3xl font-bold text-notion-text dark:text-notion-darkText">精选作品</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-8 left-0 w-full flex justify-center animate-bounce cursor-pointer" onClick={() => scrollToSection('tech-section')}>
          <ChevronDown className="text-notion-gray opacity-50 hover:opacity-100 transition-opacity" size={24} />
        </div>
      </section>


      {/* --- SCREEN 3: TECH STACK & FOOTER --- */}
      <section id="tech-section" className="snap-start min-h-screen w-full flex flex-col items-center justify-between relative z-10 bg-transparent">
        {/* Empty div for spacing/flex balance if needed, or just utilize justify-between to push footer down */}
        <div className="w-full h-8 shrink-0"></div>

        <div className="w-full max-w-4xl px-6 md:px-12 flex-1 flex flex-col justify-center py-12">
          <div className="w-full">
            <div className="mb-12 flex items-center gap-3">
              <div className="p-2 bg-gray-100 dark:bg-[#252525] rounded-lg">
                <Cpu size={24} className="text-notion-text dark:text-notion-darkText" />
              </div>
              <h2 className="text-3xl font-bold text-notion-text dark:text-notion-darkText">技术栈</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-mono text-notion-gray uppercase tracking-widest mb-3 border-b border-notion-border dark:border-notion-darkBorder pb-2">前端 & Web</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Next.js'].map(t => (
                      <span key={t} className="px-3 py-1 bg-gray-50 dark:bg-[#202020] rounded border border-notion-border dark:border-notion-darkBorder text-sm text-notion-text dark:text-notion-darkText/90">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-mono text-notion-gray uppercase tracking-widest mb-3 border-b border-notion-border dark:border-notion-darkBorder pb-2">移动端</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Kotlin', 'Jetpack Compose', 'WeChat Mini Prog', 'Android SDK'].map(t => (
                      <span key={t} className="px-3 py-1 bg-gray-50 dark:bg-[#202020] rounded border border-notion-border dark:border-notion-darkBorder text-sm text-notion-text dark:text-notion-darkText/90">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-mono text-notion-gray uppercase tracking-widest mb-3 border-b border-notion-border dark:border-notion-darkBorder pb-2">桌面端</h3>
                  <div className="flex flex-wrap gap-2">
                    {['C++', 'Qt Framework', 'Electron', 'Rust (Basic)'].map(t => (
                      <span key={t} className="px-3 py-1 bg-gray-50 dark:bg-[#202020] rounded border border-notion-border dark:border-notion-darkBorder text-sm text-notion-text dark:text-notion-darkText/90">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-mono text-notion-gray uppercase tracking-widest mb-3 border-b border-notion-border dark:border-notion-darkBorder pb-2">工具</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Figma', 'Notion', 'VS Code'].map(t => (
                      <span key={t} className="px-3 py-1 bg-gray-50 dark:bg-[#202020] rounded border border-notion-border dark:border-notion-darkBorder text-sm text-notion-text dark:text-notion-darkText/90">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="w-full max-w-4xl px-6 md:px-12 py-8 border-t border-notion-border dark:border-notion-darkBorder flex flex-col md:flex-row justify-between items-center text-xs text-notion-gray gap-4 shrink-0 mb-4">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <span>© {new Date().getFullYear()} CtrlCV.fun</span>
            <span className="hidden md:inline text-gray-300 dark:text-gray-700">|</span>
            <span>保留所有权利.</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1"><MapPin size={12} /> 中国，北京</span>
            <a href="mailto:ctrlcv.fun@gmail.com" className="flex items-center gap-1 hover:text-notion-text dark:hover:text-notion-darkText transition-colors"><Mail size={12} /> 联系我</a>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;