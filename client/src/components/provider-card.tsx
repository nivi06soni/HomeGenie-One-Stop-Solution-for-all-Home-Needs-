import { ServiceProvider } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ProviderCardProps {
  provider: ServiceProvider;
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  const ratingDisplay = provider.rating ? (provider.rating / 10).toFixed(1) : "New";

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="relative">
        {provider.imageUrl && (
          <img 
            src={provider.imageUrl} 
            alt={`${provider.name} services`} 
            className="w-full h-40 object-cover"
          />
        )}
        <span className="absolute top-2 right-2 bg-success text-white text-xs font-medium px-2 py-1 rounded-full">
          {ratingDisplay} ★
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{provider.name}</h3>
        <p className="text-text-secondary text-sm mb-2">{provider.description}</p>
        <div className="flex items-center text-xs text-text-secondary mb-3">
          {provider.badgeOne && (
            <span className="flex items-center mr-2">
              <i className="ri-time-line mr-1"></i> {provider.badgeOne}
            </span>
          )}
          {provider.badgeTwo && (
            <span className="flex items-center">
              <i className="ri-verified-badge-line mr-1"></i> {provider.badgeTwo}
            </span>
          )}
        </div>
        <Link href={`/book?provider=${provider.id}`}>
          <Button variant="outline" className="w-full text-primary">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
