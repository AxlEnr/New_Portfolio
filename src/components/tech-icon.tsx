import Image from "next/image";

type Props = {
  tech: string;
  small?: boolean;
};

const techMap: Record<string, string> = {
  laravel: "devicon-laravel-plain colored",
  react: "devicon-react-original colored",
  angular: "devicon-angularjs-plain colored",
  flutter: "devicon-flutter-plain colored",
  django: "devicon-django-plain",
  flask: "devicon-flask-original",
  express: "devicon-express-original",
  nestjs: "devicon-nestjs-plain colored",
  mysql: "devicon-mysql-plain colored",
  mongodb: "devicon-mongodb-plain colored",
  postgresql: "devicon-postgresql-plain colored",
  sqlite: "devicon-sqlite-plain colored",
  redis: "devicon-redis-plain colored",
  javascript: "devicon-javascript-plain colored",
  typescript: "devicon-typescript-plain colored",
  html: "devicon-html5-plain colored",
  css: "devicon-css3-plain colored",
  tailwind: "devicon-tailwindcss-plain colored",
  bootstrap: "devicon-bootstrap-plain colored",
  sass: "devicon-sass-original",
  docker: "devicon-docker-plain colored",
  linux: "devicon-linux-plain",
  git: "devicon-git-plain colored",
  postman: "devicon-postman-plain",
  prismaorm: "devicon-prisma-original",
  android: "devicon-android-plain colored",
  java: "devicon-java-plain colored",
  php: "devicon-php-plain colored",
  python: "devicon-python-plain colored",
};

const customIcons = [
  "webmin",
  "termius",
];

export default function TechIcon({ tech, small }: Props) {
  const key = tech
    .toLowerCase()
    .replace(/\s|\(|\)|&|\/|-/g, "");

  const iconClass = techMap[key];
  const size = small ? 28 : 40;

  return (
    <div className="flex flex-col items-center gap-1">

      {iconClass && (
        <i className={iconClass} style={{ fontSize: size }} />
      )}

      {!iconClass && customIcons.includes(key) && (
        <Image
          src={`/tech/${key}.svg`}
          alt={tech}
          width={size}
          height={size}
        />
      )}

      {!iconClass && !customIcons.includes(key) && (
        <div
          className="flex items-center justify-center rounded-md border text-[10px] font-semibold"
          style={{
            width: size,
            height: size,
          }}
        >
          {tech.slice(0, 2).toUpperCase()}
        </div>
      )}

      {/* label */}
      <span className="text-[10px] text-muted-foreground text-center">
        {tech}
      </span>
    </div>
  );
}