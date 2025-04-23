import Link from "next/link"
import { BookOpen, GraduationCap, Facebook, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-3">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} School Career Development Certificate. myBlueprint Special Projects.
        </p>
      </div>
    </footer>
  )
}
