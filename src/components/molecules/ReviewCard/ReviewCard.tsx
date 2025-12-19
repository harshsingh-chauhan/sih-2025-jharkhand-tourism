import { Avatar } from '../../atoms/Avatar';
import { Rating } from '../../atoms/Rating';
import type { ReviewCardProps } from './ReviewCardProps';

/**
 * ReviewCard component for displaying user reviews with avatar, rating, and content
 *
 * @param props - Component props
 * @returns ReviewCard component
 */
export const ReviewCard = ({
	author,
	rating,
	content,
	date,
	avatarSrc,
	avatarPlaceholder,
	className = ''
}: ReviewCardProps) => {
	// Format date
	const formatDate = (dateInput: string | Date): string => {
		const dateObj = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
		return dateObj.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};

	// Get initials from author name if no placeholder provided
	const getInitials = (name: string): string => {
		return name
			.split(' ')
			.map(word => word[0])
			.join('')
			.toUpperCase()
			.slice(0, 2);
	};

	const placeholder = avatarPlaceholder || getInitials(author);

	return (
		<div className={`card bg-base-100 shadow-md p-6 ${className}`}>
			<div className="flex items-start gap-4">
				{/* Avatar */}
				<Avatar
					src={avatarSrc}
					placeholder={avatarSrc ? undefined : placeholder}
					alt={author}
					size="md"
					shape="circle"
				/>

				{/* Review Content */}
				<div className="flex-1">
					{/* Author and Rating */}
					<div className="flex items-center justify-between mb-2">
						<div>
							<h3 className="font-semibold text-lg">{author}</h3>
							<p className="text-sm text-base-content/60">{formatDate(date)}</p>
						</div>
						<Rating
							name={`review-${author}-${date}`}
							value={rating}
							readOnly
							size="sm"
							color="bg-warning"
						/>
					</div>

					{/* Review Text */}
					<p className="text-base-content/80 leading-relaxed">{content}</p>
				</div>
			</div>
		</div>
	);
};
