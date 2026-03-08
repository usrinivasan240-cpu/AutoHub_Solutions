import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchX, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto">
          <SearchX className="h-10 w-10 text-muted-foreground" />
        </div>
        
        <h1 className="text-3xl font-bold font-heading">
          Page Not Found
        </h1>
        
        <p className="text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Go Home
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="gap-2">
            <Link href="/contact">
              <ArrowLeft className="h-4 w-4" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
