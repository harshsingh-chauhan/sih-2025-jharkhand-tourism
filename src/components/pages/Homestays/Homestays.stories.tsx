import type { Meta, StoryObj } from '@storybook/react';
import { Homestays } from './Homestays';
import { MainLayout } from '../../layouts/MainLayout';

const meta = {
	title: 'Pages/Homestays',
	component: Homestays,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Homestays>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default homestays page
export const Default: Story = {
	args: {
		onSave: (id) => console.log('Save:', id),
		onPageChange: (page) => console.log('Page:', page),
	},
};

// With MainLayout
export const WithLayout: Story = {
	args: {
		onSave: (id) => console.log('Save:', id),
	},
	decorators: [
		(Story) => (
			<MainLayout>
				<Story />
			</MainLayout>
		),
	],
};

// Loading state
export const Loading: Story = {
	args: {
		loading: true,
		homestays: [],
	},
};

// Empty state
export const Empty: Story = {
	args: {
		homestays: [],
		totalCount: 0,
	},
};

// With saved items
export const WithSavedItems: Story = {
	args: {
		savedIds: ['1', '3', '5'],
		onSave: (id) => console.log('Toggle save:', id),
	},
};

// Many pages
export const ManyPages: Story = {
	args: {
		totalCount: 150,
		totalPages: 25,
		page: 5,
		onPageChange: (page) => console.log('Page:', page),
	},
};

// With layout and logged in user
export const WithLoggedInUser: Story = {
	args: {
		savedIds: ['1', '4'],
		onSave: (id) => console.log('Save:', id),
	},
	decorators: [
		(Story) => (
			<MainLayout
				user={{
					id: '1',
					name: 'Priya Sharma',
					avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
					role: 'tourist',
				}}
				cartItemCount={2}
			>
				<Story />
			</MainLayout>
		),
	],
};

// Custom homestays data
export const CustomData: Story = {
	args: {
		homestays: [
			{
				id: '1',
				type: 'homestay',
				title: 'Luxury Treehouse',
				image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
				location: 'Dalma Hills',
				rating: 5.0,
				reviewCount: 89,
				price: 8500,
				period: 'per night',
				badges: [{ label: 'Premium', variant: 'accent' }],
			},
			{
				id: '2',
				type: 'homestay',
				title: 'Riverside Eco Lodge',
				image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
				location: 'Subarnarekha River',
				rating: 4.7,
				reviewCount: 45,
				price: 3800,
				period: 'per night',
			},
		],
		totalCount: 2,
		totalPages: 1,
	},
};
