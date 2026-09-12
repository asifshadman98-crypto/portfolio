import { Mail } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import { EMAIL, GITHUB_URL } from "@/lib/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-semibold text-white">Asif Shadman Khan</p>
          <p className="mt-1 text-sm text-muted">Software Engineering Student</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-muted transition-colors hover:text-accent"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Send an email"
            className="text-muted transition-colors hover:text-accent"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Asif Shadman Khan
        </p>
      </div>
    </footer>
  );
}
