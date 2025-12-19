/**
 * Home page component for the main landing page
 *
 * Features:
 * - Hero section with search
 * - Featured categories
 * - Featured destinations
 * - How it works section
 * - Featured homestays
 * - Testimonials
 * - CTA sections
 *
 * @component
 * @example
 * // Basic usage
 * <Home />
 *
 * @example
 * // With featured data
 * <Home
 *   featuredHomestays={homestays}
 *   onSearch={(query) => navigate(`/search?q=${query}`)}
 * />
 */

import type { ListingCardProps } from '../../molecules/ListingCard';

export interface Destination {
	/** Unique identifier */
	id: string;
	/** Destination name */
	name: string;
	/** Image URL */
	image: string;
	/** Number of listings */
	listingCount: number;
}

export interface Testimonial {
	/** Unique identifier */
	id: string;
	/** Reviewer name */
	name: string;
	/** Reviewer avatar */
	avatar?: string;
	/** Review text */
	text: string;
	/** Rating value (1-5) */
	rating: number;
	/** Reviewer location */
	location?: string;
}

export interface HomeProps {
	/** Featured homestay listings */
	featuredHomestays?: Omit<ListingCardProps, 'isSaved' | 'onSave'>[];
	/** Featured destinations */
	featuredDestinations?: Destination[];
	/** Testimonials/reviews */
	testimonials?: Testimonial[];
	/** Callback when search is submitted */
	onSearch?: (query: string) => void;
	/** Callback when a category is clicked */
	onCategoryClick?: (category: string) => void;
	/** Callback when a destination is clicked */
	onDestinationClick?: (destinationId: string) => void;
	/** Additional CSS classes */
	className?: string;
}
