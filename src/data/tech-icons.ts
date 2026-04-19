const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
const SI = 'https://cdn.simpleicons.org';

export const techIcons: Record<string, string | null> = {
  // Frontend
  'HTML':           `${DI}/html5/html5-original.svg`,
  'CSS':            `${DI}/css3/css3-original.svg`,
  'JavaScript':     `${DI}/javascript/javascript-original.svg`,
  'TypeScript':     `${DI}/typescript/typescript-original.svg`,
  'React':          `${DI}/react/react-original.svg`,
  'Next.js':        `${DI}/nextjs/nextjs-original.svg`,
  'Astro':          `${DI}/astro/astro-original.svg`,
  'Tailwind':       `${DI}/tailwindcss/tailwindcss-original.svg`,
  'Tailwind CSS':   `${DI}/tailwindcss/tailwindcss-original.svg`,
  // Backend
  'Node.js':        `${DI}/nodejs/nodejs-original.svg`,
  'Express':        `${DI}/express/express-original.svg`,
  'Bun':            `${DI}/bun/bun-original.svg`,
  'Elysia':         `${SI}/elysia/ededf0`,
  // Bases de datos
  'PostgreSQL':     `${DI}/postgresql/postgresql-original.svg`,
  'MySQL':          `${DI}/mysql/mysql-original.svg`,
  'Prisma':         `${SI}/prisma/ededf0`,
  'Prisma ORM':     `${SI}/prisma/ededf0`,
  // DevOps & Infra
  'Docker':              `${DI}/docker/docker-original.svg`,
  'Docker Compose':      `${DI}/docker/docker-original.svg`,
  'Linux':               `${DI}/linux/linux-original.svg`,
  'Git':                 `${DI}/git/git-original.svg`,
  'GitHub':              `${DI}/github/github-original.svg`,
  'GitHub Actions':      `${DI}/githubactions/githubactions-original.svg`,
  'Cloudflare':          `${DI}/cloudflare/cloudflare-original.svg`,
  'Cloudflare Tunnel':   `${DI}/cloudflare/cloudflare-original.svg`,
  'Raspberry Pi':        `${DI}/raspberrypi/raspberrypi-original.svg`,
  'Raspberry Pi 5':      `${DI}/raspberrypi/raspberrypi-original.svg`,
  // Diseño
  'Figma':          `${DI}/figma/figma-original.svg`,
  // Sin icono oficial
  'JWT':            `${SI}/jsonwebtokens/ededf0`,
  'Zod':            `${SI}/zod/ededf0`,
  'REST':           null,
  'React Hook Form': `${SI}/reacthookform/ededf0`,
  'VS Code':        `${DI}/vscode/vscode-original.svg`,
  'Telegram Bot API': `${SI}/telegram/ededf0`,
};

export function getIcon(name: string): string | null {
  return techIcons[name] ?? null;
}
